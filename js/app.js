// ============ CLIENT RUNTIME ============
// Pages are prerendered at build time (see build.js). This script:
//  1. redirects legacy hash URLs (#/brands) to real paths (/brands)
//  2. re-renders the current page client-side when the language is toggled
//  3. wires up the models filter, brand focus scroll, sticky nav, mobile menu
//  4. submits the newsletter form to /api/subscribe (Resend Audiences)

(function () {
  'use strict';

  // ---- 1. Legacy hash-route redirect (#/brands?focus=byd → /brands?focus=byd) ----
  if (location.hash.startsWith('#/')) {
    const raw = location.hash.slice(1);            // "/brands?focus=byd"
    const path = raw.split('?')[0].replace(/\/$/, '') || '/';
    const query = raw.includes('?') ? '?' + raw.split('?')[1] : '';
    if (PAGE_ROUTES[path]) {
      location.replace(path === '/' ? '/' + query : path + query);
      return;
    }
  }

  // ---- Current route from pathname (null = static page like /news/<slug>) ----
  function currentRoute() {
    let p = location.pathname.replace(/\/+$/, '') || '/';
    p = p.replace(/\.html$/, '');
    if (p === '/index' || p === '') p = '/';
    return PAGE_ROUTES[p] ? p : null;
  }

  // ---- Bilingual blocks on static article pages ----
  function toggleLangBlocks() {
    const lang = getLang();
    document.querySelectorAll('[data-lang]').forEach(el => {
      el.hidden = el.getAttribute('data-lang') !== lang;
    });
  }

  // ---- Language ----
  const savedLang = (function () {
    try { return localStorage.getItem('tcc-lang'); } catch (e) { return null; }
  })();
  if (savedLang === 'zh' || savedLang === 'en') {
    document.documentElement.lang = savedLang;
  }

  function applyI18n() {
    document.querySelectorAll('[data-i18n]').forEach(el => {
      el.innerHTML = t(el.getAttribute('data-i18n'));
    });
    document.querySelectorAll('[data-i18n-attr]').forEach(el => {
      const [attr, key] = el.getAttribute('data-i18n-attr').split(':');
      if (attr && key) el.setAttribute(attr, t(key));
    });
  }

  // ---- Render (only needed on lang change; initial HTML is prerendered in EN) ----
  function render() {
    const route = currentRoute();
    if (route) {
      const app = document.getElementById('app');
      if (app) app.innerHTML = PAGE_ROUTES[route]();
    } else {
      toggleLangBlocks(); // static article page: swap language blocks instead
    }
    applyI18n();
    initPage(route);
  }

  // ---- Page-specific init ----
  function initModelsFilter() {
    const wrap = document.getElementById('modelsFilterChips');
    const grid = document.getElementById('modelsGrid');
    const empty = document.getElementById('modelsEmpty');
    if (!wrap || !grid) return;
    wrap.addEventListener('click', (e) => {
      const btn = e.target.closest('[data-brand]');
      if (!btn) return;
      const brand = btn.getAttribute('data-brand');
      wrap.querySelectorAll('.chip').forEach(c => c.classList.toggle('is-active', c === btn));
      let visible = 0;
      grid.querySelectorAll('.models-grid-item').forEach(item => {
        const match = brand === 'all' || item.getAttribute('data-brand') === brand;
        item.style.display = match ? '' : 'none';
        if (match) visible++;
      });
      if (empty) empty.hidden = visible !== 0;
    });
  }

  function focusBrandCard(brandId) {
    requestAnimationFrame(() => {
      const card = document.getElementById('brand-' + brandId);
      if (!card) return;
      const headerEl = document.getElementById('siteHeader');
      const stickyEl = document.querySelector('.brand-sticky-nav');
      const offset = (headerEl ? headerEl.offsetHeight : 0) + (stickyEl ? stickyEl.offsetHeight : 0) + 16;
      const top = card.getBoundingClientRect().top + window.scrollY - offset;
      window.scrollTo({ top, behavior: 'smooth' });
      card.classList.add('is-focused');
      setTimeout(() => card.classList.remove('is-focused'), 2400);
    });
  }

  function initPage(route) {
    if (route === '/models') initModelsFilter();
    if (route === '/quote') initQuoteForm();
    if (route === '/brands') {
      const focus = new URLSearchParams(location.search).get('focus');
      if (focus) focusBrandCard(focus);
    }
    // nav active state (article pages highlight News)
    const navRoute = route
      || (location.pathname.startsWith('/news/') ? '/news' : null)
      || (location.pathname.startsWith('/brands/') ? '/brands' : null);
    document.querySelectorAll('.main-nav a').forEach(a => {
      const target = (a.getAttribute('href') || '').replace(/\/$/, '') || '/';
      a.classList.toggle('active', target === navRoute);
    });
  }

  // ---- Brand sticky nav ----
  window.scrollToBrandSection = function (id) {
    const el = document.getElementById(id);
    if (!el) return;
    const headerEl = document.getElementById('siteHeader');
    const stickyEl = document.querySelector('.brand-sticky-nav');
    const offset = (headerEl ? headerEl.offsetHeight : 0) + (stickyEl ? stickyEl.offsetHeight : 0) + 12;
    window.scrollTo({ top: el.getBoundingClientRect().top + window.scrollY - offset, behavior: 'smooth' });
  };

  function setBrandStickyOffset() {
    const header = document.getElementById('siteHeader');
    const nav = document.querySelector('.brand-sticky-nav');
    if (header && nav) nav.style.top = header.offsetHeight + 'px';
  }

  function updateBrandStickyActive() {
    const nav = document.querySelector('.brand-sticky-nav');
    if (!nav) return;
    const links = nav.querySelectorAll('[data-target]');
    const ids = Array.from(links).map(l => l.getAttribute('data-target'));
    const sentinel = (document.getElementById('siteHeader')?.offsetHeight || 0) + nav.offsetHeight + 24;
    let active = ids[0];
    for (const id of ids) {
      const el = document.getElementById(id);
      if (el && el.getBoundingClientRect().top - sentinel <= 0) active = id;
    }
    links.forEach(l => l.classList.toggle('is-active', l.getAttribute('data-target') === active));
  }

  // ---- Export quote form → /api/inquiry ----
  function initQuoteForm() {
    const form = document.getElementById('quoteForm');
    if (!form) return;
    // prefill model from ?model=
    const preModel = new URLSearchParams(location.search).get('model');
    const modelInput = document.getElementById('qModel');
    if (preModel && modelInput && !modelInput.value) modelInput.value = preModel;

    form.addEventListener('submit', async (e) => {
      e.preventDefault();
      const val = id => (document.getElementById(id) || {}).value || '';
      const result = document.getElementById('quoteResult');
      const btn = document.getElementById('quoteSubmit');
      const payload = {
        name: val('qName').trim(), company: val('qCompany').trim(),
        email: val('qEmail').trim(), whatsapp: val('qWhatsapp').trim(),
        market: val('qMarket').trim(), model: val('qModel').trim(),
        quantity: val('qQty').trim(), message: val('qMessage').trim()
      };
      if (!payload.name || !payload.market || !payload.model
          || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(payload.email)) {
        if (result) {
          result.hidden = false;
          result.style.borderLeftColor = '#d4302a';
          result.textContent = getLang() === 'zh' ? '请填写姓名、邮箱、市场与车型。' : 'Please fill in name, a valid email, market and model.';
        }
        return;
      }
      if (btn) { btn.disabled = true; btn.textContent = '…'; }
      try {
        const r = await fetch('/api/inquiry', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify(payload)
        });
        if (!r.ok) throw new Error('inquiry failed: ' + r.status);
        form.querySelectorAll('input, textarea, button').forEach(el => el.disabled = true);
        if (result) {
          result.hidden = false;
          result.style.borderLeftColor = '#16a34a';
          result.textContent = t('quote.form.success');
        }
      } catch (err) {
        if (btn) { btn.disabled = false; btn.textContent = t('quote.form.submit'); }
        if (result) {
          result.hidden = false;
          result.style.borderLeftColor = '#d4302a';
          result.textContent = t('quote.form.error');
        }
      }
    });
  }

  // ---- Newsletter → /api/subscribe (Vercel serverless → Resend Audiences) ----
  function initNewsletter() {
    const form = document.getElementById('newsletterForm');
    if (!form) return;
    form.addEventListener('submit', async (e) => {
      e.preventDefault();
      const input = document.getElementById('newsletterEmail');
      const btn = form.querySelector('.newsletter-btn');
      const ok = document.getElementById('newsletterOk');
      const email = (input && input.value || '').trim();
      if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
        if (input) { input.classList.add('newsletter-input-error'); input.focus(); }
        return;
      }
      if (input) input.classList.remove('newsletter-input-error');
      if (btn) { btn.disabled = true; btn.textContent = '…'; }
      try {
        const r = await fetch('/api/subscribe', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({ email })
        });
        if (!r.ok) throw new Error('subscribe failed: ' + r.status);
        form.style.display = 'none';
        if (ok) ok.hidden = false;
      } catch (err) {
        if (btn) { btn.disabled = false; btn.textContent = t('newsletter.cta'); }
        if (ok) {
          ok.hidden = false;
          ok.textContent = getLang() === 'zh'
            ? '订阅暂时不可用，请直接发邮件到 hello@topchinacar.com'
            : 'Subscription is temporarily unavailable — email hello@topchinacar.com instead.';
        }
      }
    });
  }

  // ---- Init ----
  function init() {
    // If a saved language differs from the prerendered default (en), re-render.
    if (document.documentElement.lang === 'zh') {
      render();
    } else {
      initPage(currentRoute());
    }
    initNewsletter();

    const langToggle = document.getElementById('langToggle');
    if (langToggle) {
      langToggle.addEventListener('click', () => {
        const next = getLang() === 'en' ? 'zh' : 'en';
        document.documentElement.lang = next;
        try { localStorage.setItem('tcc-lang', next); } catch (e) {}
        render();
      });
    }

    const menuBtn = document.getElementById('menuBtn');
    if (menuBtn) {
      menuBtn.addEventListener('click', () => {
        document.querySelector('.main-nav')?.classList.toggle('open');
      });
    }

    setBrandStickyOffset();
    window.addEventListener('resize', setBrandStickyOffset);
    window.addEventListener('scroll', () => {
      if (document.querySelector('.brand-sticky-nav')) updateBrandStickyActive();
    }, { passive: true });
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
  } else {
    init();
  }
})();
