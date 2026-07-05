// ============ PAGE RENDERERS (pure functions — also used by build.js for prerendering) ============

// SVG car illustrations (stylised silhouettes)
function carSVG(shape, colorA = '#d4302a', colorB = '#1a1a1a') {
  const w = 400, h = 220;
  const bg = `<defs>
      <linearGradient id="g-${colorA.slice(1)}" x1="0" y1="0" x2="1" y2="1">
        <stop offset="0%" stop-color="${colorB}"/>
        <stop offset="100%" stop-color="#2a2a2a"/>
      </linearGradient>
      <radialGradient id="glow-${colorA.slice(1)}" cx="50%" cy="50%" r="50%">
        <stop offset="0%" stop-color="${colorA}" stop-opacity="0.35"/>
        <stop offset="100%" stop-color="${colorA}" stop-opacity="0"/>
      </radialGradient>
    </defs>
    <rect width="${w}" height="${h}" fill="url(#g-${colorA.slice(1)})"/>
    <ellipse cx="200" cy="140" rx="180" ry="60" fill="url(#glow-${colorA.slice(1)})"/>`;

  let car = '';
  if (shape === 'sedan') {
    car = `<g transform="translate(60,80)">
      <path d="M10 80 Q15 60 50 55 L100 35 Q140 25 180 25 Q220 25 250 35 L270 50 L295 60 Q285 80 270 85 L25 85 Q12 85 10 80 Z" fill="${colorA}"/>
      <path d="M70 55 L100 38 Q140 30 180 30 Q210 30 235 38 L255 53 Z" fill="rgba(255,255,255,0.15)"/>
      <circle cx="70" cy="85" r="15" fill="${colorB}"/>
      <circle cx="70" cy="85" r="9" fill="#444"/>
      <circle cx="240" cy="85" r="15" fill="${colorB}"/>
      <circle cx="240" cy="85" r="9" fill="#444"/>
      <rect x="270" y="65" width="20" height="6" rx="3" fill="${colorA}" opacity="0.9"/>
    </g>`;
  } else if (shape === 'sedan-long') {
    car = `<g transform="translate(40,80)">
      <path d="M10 80 Q15 58 55 52 L110 30 Q160 22 220 22 Q270 22 305 35 L325 52 L335 65 Q325 85 305 85 L20 85 Q10 85 10 80 Z" fill="${colorA}"/>
      <path d="M80 52 L115 33 Q160 26 220 26 Q260 26 295 38 L315 53 Z" fill="rgba(255,255,255,0.15)"/>
      <circle cx="80" cy="85" r="16" fill="${colorB}"/><circle cx="80" cy="85" r="10" fill="#555"/>
      <circle cx="275" cy="85" r="16" fill="${colorB}"/><circle cx="275" cy="85" r="10" fill="#555"/>
    </g>`;
  } else if (shape === 'suv') {
    car = `<g transform="translate(60,70)">
      <path d="M10 90 Q12 50 50 45 L90 25 Q140 18 200 18 Q250 18 280 30 L295 50 Q295 70 285 90 Z" fill="${colorA}"/>
      <path d="M70 45 L95 27 Q140 22 200 22 Q240 22 270 32 L285 50 Z" fill="rgba(255,255,255,0.15)"/>
      <circle cx="75" cy="92" r="16" fill="${colorB}"/><circle cx="75" cy="92" r="10" fill="#444"/>
      <circle cx="245" cy="92" r="16" fill="${colorB}"/><circle cx="245" cy="92" r="10" fill="#444"/>
    </g>`;
  } else if (shape === 'mpv') {
    car = `<g transform="translate(45,60)">
      <path d="M10 100 Q12 35 55 30 L100 18 Q160 12 220 14 Q270 16 295 30 L308 55 Q310 80 305 100 Z" fill="${colorA}"/>
      <path d="M60 35 L100 22 Q160 18 220 20 Q260 22 285 32 L295 55 Z" fill="rgba(255,255,255,0.15)"/>
      <circle cx="80" cy="100" r="16" fill="${colorB}"/><circle cx="80" cy="100" r="10" fill="#444"/>
      <circle cx="260" cy="100" r="16" fill="${colorB}"/><circle cx="260" cy="100" r="10" fill="#444"/>
    </g>`;
  } else if (shape === 'wagon') {
    car = `<g transform="translate(40,80)">
      <path d="M10 80 Q15 55 50 50 L100 30 Q170 22 240 24 Q290 27 315 40 L325 60 Q320 82 305 85 L18 85 Q10 85 10 80 Z" fill="${colorA}"/>
      <path d="M75 50 L110 32 Q170 26 240 28 Q280 30 305 42 L317 58 Z" fill="rgba(255,255,255,0.15)"/>
      <circle cx="80" cy="85" r="15" fill="${colorB}"/><circle cx="80" cy="85" r="9" fill="#444"/>
      <circle cx="270" cy="85" r="15" fill="${colorB}"/><circle cx="270" cy="85" r="9" fill="#444"/>
    </g>`;
  } else {
    car = `<g transform="translate(60,80)"><circle cx="140" cy="60" r="40" fill="${colorA}"/></g>`;
  }

  return `<svg viewBox="0 0 ${w} ${h}" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="xMidYMid slice">${bg}${car}</svg>`;
}

function brandMarkSVG(brand) {
  const initials = brand.name.slice(0, 2).toUpperCase();
  return `<svg viewBox="0 0 400 250" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="xMidYMid slice">
    <defs>
      <linearGradient id="bg-${brand.id}" x1="0" y1="0" x2="1" y2="1">
        <stop offset="0%" stop-color="${brand.colorB}"/>
        <stop offset="100%" stop-color="#2a2a2a"/>
      </linearGradient>
    </defs>
    <rect width="400" height="250" fill="url(#bg-${brand.id})"/>
    <circle cx="320" cy="60" r="80" fill="${brand.colorA}" opacity="0.15"/>
    <circle cx="80" cy="200" r="100" fill="${brand.colorA}" opacity="0.10"/>
    <text x="40" y="170" font-family="Playfair Display,serif" font-weight="900" font-size="120" fill="${brand.colorA}" letter-spacing="-4">${initials}</text>
    <text x="44" y="200" font-family="JetBrains Mono,monospace" font-size="13" fill="rgba(255,255,255,0.5)" letter-spacing="3">${brand.name.toUpperCase()}</text>
  </svg>`;
}

// 从价格字符串中提取首个 RMB 数字（支持 "¥529,900" / "¥529,900 起" / "¥529,900 - ¥1,036,000"）
function extractRmb(price) {
  if (!price) return null;
  const m = price.match(/¥\s*([\d,]+)/);
  if (!m) return null;
  const n = parseInt(m[1].replace(/,/g, ''), 10);
  return isNaN(n) ? null : n;
}

// 友好取整：万级显示 K
function formatThousand(n, symbol) {
  if (n >= 1000) {
    const k = Math.round(n / 1000);
    return symbol + k + 'K';
  }
  return symbol + n;
}

function priceDualLine(price) {
  const rmb = extractRmb(price);
  if (!rmb) return '';
  // 汇率参考 ¥1 ≈ $0.138 ≈ €0.128
  const usd = Math.round(rmb * 0.138);
  const eur = Math.round(rmb * 0.128);
  return `<span class="spec-price-dual">≈ ${formatThousand(usd, '$')} / ${formatThousand(eur, '€')}</span>`;
}

// News 缩图统一渲染：有 image 用真实照片，否则 fallback 到 carSVG
function newsThumbHTML(n, variant) {
  // variant: 'main' 或 'side'
  const klass = variant === 'main' ? 'news-main-thumb' : 'news-thumb';
  const shape = variant === 'main' ? 'sedan-long' : 'sedan';
  if (n.image) {
    return `<div class="${klass} has-photo"><img src="/${n.image}" alt="${n.title_en || ''}" loading="lazy" />${n.imageCredit ? `<span class="img-credit">Photo: ${n.imageCredit}</span>` : ''}</div>`;
  }
  return `<div class="${klass}">${carSVG(shape, n.accent)}</div>`;
}

function modelCardHTML(m, lang) {
  const visual = m.image
    ? `<img src="/${m.image}" alt="${m.brand} ${m.name}" loading="lazy" />` + (m.imageCredit ? `<span class="img-credit">Photo: ${m.imageCredit}</span>` : '')
    : carSVG(m.shape, m.colorA);
  const dual = m.priceLocal
    ? `<span class="spec-price-dual">${m.priceLocal}</span>`
    : priceDualLine(m.price);
  const detailHref = m.id ? `/models/${m.id}` : null;
  return `
    <article class="model-card">
      <div class="model-thumb${m.image ? ' has-photo' : ''}">${detailHref ? `<a href="${detailHref}">${visual}</a>` : visual}</div>
      <div class="model-body">
        <div class="model-brand">${m.brand}</div>
        <h3 class="model-name">${detailHref ? `<a href="${detailHref}" style="color:inherit;text-decoration:none;">${m.name}</a>` : m.name}</h3>
        <p class="model-tagline">${m['tag_' + lang]}</p>
        <div class="model-specs">
          <div><span class="spec-label">${t('models.spec.range')}</span><span class="spec-value">${m.range}</span></div>
          <div><span class="spec-label">${t('models.spec.accel')}</span><span class="spec-value">${m.accel}</span></div>
          <div class="spec-price-row"><span class="spec-label">${t('models.spec.price')}</span><span class="spec-value">${m.price}</span>${dual}</div>
        </div>
        <a href="/quote?model=${encodeURIComponent(m.brand + ' ' + m.name)}" class="btn btn-primary" style="display:inline-block;margin-top:14px;font-size:13px;padding:9px 18px;">${t('models.cta.quote')}</a>
        ${detailHref ? `<a href="${detailHref}" style="display:inline-block;margin-top:14px;margin-left:14px;color:var(--accent, #d4302a);font-family:var(--mono, monospace);font-size:12px;letter-spacing:.1em;text-transform:uppercase;text-decoration:none;">${lang === 'zh' ? '详情 →' : 'Full profile →'}</a>` : ''}
      </div>
    </article>
  `;
}

function brandCardHTML(b, lang) {
  const parentBadge = b.category === 'subbrand'
    ? `<div class="brand-card-parent">${lang === 'zh' ? '隶属于' : 'Part of'} <strong>${b['parent_' + lang] || b.parent_en}</strong></div>`
    : '';
  const subBrands = b['subBrands_' + lang];
  const subBrandsLine = subBrands
    ? `<div class="brand-card-sublist"><span class="spec-label">${lang === 'zh' ? '旗下品牌' : 'Sub-brands'}</span><span class="brand-card-sublist-val">${subBrands}</span></div>`
    : '';
  return `
    <article class="brand-card" id="brand-${b.id}" data-brand-id="${b.id}">
      <div class="brand-card-thumb${b.image ? ' has-photo' : ''}">${b.image ? `<img src="/${b.image}" alt="${b.name}" loading="lazy" />` : brandMarkSVG(b)}</div>
      <div class="brand-card-body">
        ${parentBadge}
        <h3 class="brand-card-name"><a href="/brands/${b.id}" style="color:inherit;text-decoration:none;">${b.name}</a></h3>
        <div class="brand-card-cn">${b.cn}</div>
        <p class="brand-card-desc">${b['desc_' + lang]}</p>
        ${subBrandsLine}
        <div class="brand-facts">
          <div class="brand-fact"><span class="spec-label">${t('brands.fact.founded')}</span><span class="spec-value">${b.founded}</span></div>
          <div class="brand-fact"><span class="spec-label">${t('brands.fact.hq')}</span><span class="spec-value">${b.hq}</span></div>
          <div class="brand-fact"><span class="spec-label">${t('brands.fact.focus')}</span><span class="spec-value" style="font-size:12px;">${b.focus}</span></div>
        </div>
        <a href="/brands/${b.id}" style="display:inline-block;margin-top:12px;color:var(--accent, #d4302a);font-family:var(--mono, monospace);font-size:12px;letter-spacing:.1em;text-transform:uppercase;text-decoration:none;">${lang === 'zh' ? '品牌详情 →' : 'Full profile →'}</a>
      </div>
    </article>
  `;
}

// ============ PAGES ============

function pageHome() {
  const D = SITE_DATA;
  const lang = getLang();
  const features = SITE_DATA.features;

  return `
  <!-- HERO -->
  <section class="hero">
    <div class="container">
      <div class="hero-grid">
        <div>
          <div class="hero-eyebrow">${(() => {
            const d = new Date();
            return lang === 'zh'
              ? `每日更新 · ${d.getFullYear()}年${d.getMonth() + 1}月${d.getDate()}日`
              : `Updated daily · ${d.toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' })}`;
          })()}</div>
          <h1 class="hero-title">${t('hero.title')}</h1>
          <p class="hero-deck">${t('hero.deck')}</p>
          <div class="hero-cta">
            <a href="/stories/china-ev-battery-supply-chain" class="btn btn-primary" data-i18n="hero.cta.primary">${t('hero.cta.primary')}</a>
            <a href="/brands" class="btn btn-ghost" data-i18n="hero.cta.secondary">${t('hero.cta.secondary')}</a>
          </div>
          <div class="hero-meta">
            <span><strong>${lang === 'zh' ? '每日简报' : 'DAILY BRIEFING'}</strong></span>
            <span>${lang === 'zh' ? '追踪 31 个品牌' : '31 BRANDS TRACKED'}</span>
            <span>${lang === 'zh' ? '中英双语' : 'EN · 中文'}</span>
          </div>
        </div>
        <div class="hero-visual">
          <img src="/images/hero-xiaomi.jpg" alt="Xiaomi SU7 Ultra Prototype" loading="eager" />
          <span class="img-credit">Photo: Daniel Lu / CC BY-SA 4.0</span>
        </div>
      </div>
    </div>
  </section>

  <!-- FEATURES -->
  <section>
    <div class="container">
      <div class="section-head">
        <div>
          <div class="section-eyebrow">${t('home.features.eyebrow')}</div>
          <h2 class="section-title">${t('home.features.title')}</h2>
        </div>
        <p class="section-deck">${t('home.features.deck')}</p>
      </div>

      <div class="feature-grid">
        ${features.map((f, i) => `
          <article class="feature-card${f.large ? ' large' : ''}">
            <div class="feature-thumb${f.image ? ' has-photo' : ''}"><a href="/stories/${f.slug}">${f.image ? `<img src="/${f.image}" alt="${f['title_' + lang]}" loading="lazy" />${f.imageCredit ? `<span class="img-credit">Photo: ${f.imageCredit}</span>` : ''}` : carSVG(f.shape, f.accent)}</a></div>
            <div class="feature-body">
              <div class="feature-tag">${f['tag_' + lang]}</div>
              <h3 class="feature-title"><a href="/stories/${f.slug}" style="color:inherit;text-decoration:none;">${f['title_' + lang]}</a></h3>
              <p class="feature-desc">${f['desc_' + lang]}</p>
              <div class="feature-meta">${f['meta_' + lang]} · <a href="/stories/${f.slug}" style="color:var(--accent, #d4302a);text-decoration:none;">${lang === 'zh' ? '阅读 →' : 'READ →'}</a></div>
            </div>
          </article>
        `).join('')}
      </div>
    </div>
  </section>

  <!-- BRAND STRIP -->
  <section class="brand-strip">
    <div class="container">
      <div class="section-head">
        <div>
          <div class="section-eyebrow">${t('home.brands.eyebrow')}</div>
          <h2 class="section-title">${t('home.brands.title')}</h2>
        </div>
        <p class="section-deck">${t('home.brands.deck')}</p>
      </div>
      <div class="home-brands-cols">
        <div class="home-brands-col">
          <div class="home-brands-col-head">
            <span class="home-brands-col-label">${t('home.brands.col.groups')}</span>
            <span class="home-brands-col-count">${D.brands.filter(b=>b.category==='group').length}</span>
          </div>
          <div class="home-brands-col-list">
            ${D.brands.filter(b=>b.category==='group').map(b => `
              <a href="/brands/${b.id}" class="brand-cell">
                <div class="brand-name">${b.name}</div>
                <div class="brand-cell-sub">${b.cn}</div>
              </a>
            `).join('')}
          </div>
        </div>
        <div class="home-brands-col">
          <div class="home-brands-col-head">
            <span class="home-brands-col-label">${t('home.brands.col.startups')}</span>
            <span class="home-brands-col-count">${D.brands.filter(b=>b.category==='startup').length}</span>
          </div>
          <div class="home-brands-col-list">
            ${D.brands.filter(b=>b.category==='startup').map(b => `
              <a href="/brands/${b.id}" class="brand-cell">
                <div class="brand-name">${b.name}</div>
                <div class="brand-cell-sub">${b.cn}</div>
              </a>
            `).join('')}
          </div>
        </div>
        <div class="home-brands-col home-brands-col-subs">
          <div class="home-brands-col-head">
            <span class="home-brands-col-label">${t('home.brands.col.subs')}</span>
            <span class="home-brands-col-count">${D.brands.filter(b=>b.category==='subbrand').length}</span>
          </div>
          <div class="home-brands-col-list home-brands-col-list-compact">
            ${D.brands.filter(b=>b.category==='subbrand').map(b => `
              <a href="/brands/${b.id}" class="brand-pill">${b.name}</a>
            `).join('')}
          </div>
        </div>
      </div>
      <div class="home-brands-viewall">
        <a href="/brands" class="home-brands-viewall-link">${t('home.brands.viewall')} →</a>
      </div>
    </div>
  </section>

  <!-- MODELS -->
  <section>
    <div class="container">
      <div class="section-head">
        <div>
          <div class="section-eyebrow">${t('home.models.eyebrow')}</div>
          <h2 class="section-title">${t('home.models.title')}</h2>
        </div>
        <a href="/models" class="section-link" style="font-family:var(--mono);font-size:12px;letter-spacing:.15em;text-transform:uppercase;color:var(--accent);">${lang === 'zh' ? '查看全部 →' : 'View all →'}</a>
      </div>
      <div class="models-grid">
        ${D.models.slice(0, 4).map(m => modelCardHTML(m, lang)).join('')}
      </div>
    </div>
  </section>

  <!-- PULL QUOTE -->
  <section class="pullquote">
    <div class="container">
      <p class="pullquote-text">${t('pullquote.text')}</p>
      <div class="pullquote-attr">— ${t('pullquote.attr')}</div>
    </div>
  </section>

  <!-- NEWS -->
  <section>
    <div class="container">
      <div class="section-head">
        <div>
          <div class="section-eyebrow">${t('home.news.eyebrow')}</div>
          <h2 class="section-title">${t('home.news.title')}</h2>
        </div>
        <a href="/news" style="font-family:var(--mono);font-size:12px;letter-spacing:.15em;text-transform:uppercase;color:var(--accent);">${lang === 'zh' ? '更多新闻 →' : 'More news →'}</a>
      </div>
      ${typeof SITE_ARTICLES !== 'undefined' && SITE_ARTICLES.length ? `
      <div style="display:grid;grid-template-columns:repeat(auto-fill,minmax(320px,1fr));gap:24px;margin-bottom:36px;">
        ${SITE_ARTICLES.slice(0, 3).map(a => `
        <article style="border:1px solid #e5e7eb;border-radius:10px;padding:22px 24px;background:#ffffff;display:flex;flex-direction:column;gap:10px;">
          <div style="font-family:var(--mono, monospace);font-size:11px;letter-spacing:.14em;text-transform:uppercase;color:#dc2626;">${a['tag_' + lang] || a.tag_en} · ${a.date}</div>
          <h3 style="font-family:var(--serif, Georgia, serif);font-size:21px;font-weight:700;line-height:1.3;margin:0;">
            <a href="/news/${a.slug}" style="color:inherit;text-decoration:none;">${a['title_' + lang] || a.title_en}</a>
          </h3>
          <p style="font-size:14px;color:#6b7280;line-height:1.65;margin:0;">${a['excerpt_' + lang] || a.excerpt_en || ''}</p>
          <a href="/news/${a.slug}" style="margin-top:auto;color:#dc2626;font-family:var(--mono, monospace);font-size:12px;letter-spacing:.12em;text-transform:uppercase;text-decoration:none;">${lang === 'zh' ? '阅读全文 →' : 'Read dispatch →'}</a>
        </article>`).join('')}
      </div>` : ''}
    </div>
  </section>

  <!-- TECH -->
  <section class="tech-section">
    <div class="container">
      <div class="section-head">
        <div>
          <div class="section-eyebrow">${t('home.tech.eyebrow')}</div>
          <h2 class="section-title">${t('home.tech.title')}</h2>
        </div>
        <p class="section-deck">${t('home.tech.deck')}</p>
      </div>
      <div class="tech-grid">
        ${D.tech.map(tech => `
          <article class="tech-card">
            <div class="tech-num">${tech.num}</div>
            <h3>${tech['title_' + lang]}</h3>
            <p>${tech['desc_' + lang]}</p>
            <div class="tech-tags">
              ${tech.tags.map(tg => `<span class="tech-tag">${tg}</span>`).join('')}
            </div>
          </article>
        `).join('')}
      </div>
    </div>
  </section>
  `;
}

function pageBrands() {
  const lang = getLang();
  const all = SITE_DATA.brands;
  const groups = all.filter(b => b.category === 'group');
  const startups = all.filter(b => b.category === 'startup');
  const subs = all.filter(b => b.category === 'subbrand');

  const sections = [
    {
      id: 'legacy',
      eyebrow_en: 'Section 01 · Legacy Groups',
      eyebrow_zh: '第一章 · 传统车企集团',
      title_en: 'Legacy Groups',
      title_zh: '传统车企集团',
      deck_en: 'State giants and decades-old private conglomerates. Multi-brand portfolios, deep manufacturing, global export footprints.',
      deck_zh: '国有巨头与老牌民营车企。多品牌矩阵、深厚制造能力、全球出口版图。',
      items: groups
    },
    {
      id: 'startups',
      eyebrow_en: 'Section 02 · New-Energy Startups',
      eyebrow_zh: '第二章 · 造车新势力',
      title_en: 'New-Energy Startups',
      title_zh: '造车新势力',
      deck_en: 'Born after 2014. Pure-play EV companies redefining design, software and ownership experience.',
      deck_zh: '2014 年后诞生。专注纯电的新一代车企，重定义设计、软件与用车体验。',
      items: startups
    },
    {
      id: 'subs',
      eyebrow_en: 'Section 03 · Group Sub-Brands',
      eyebrow_zh: '第三章 · 集团子品牌',
      title_en: 'Group Sub-Brands',
      title_zh: '集团子品牌',
      deck_en: 'Independent marques operating under legacy groups. Built to chase specific segments, often with separate teams and brand identities.',
      deck_zh: '隶属传统集团、独立运营的子品牌。面向细分市场，多有独立团队与识别体系。',
      items: subs
    }
  ];

  return `
    <section class="page-header">
      <div class="container">
        <div class="section-eyebrow">${t('nav.brands')}</div>
        <h1 class="page-title">${t('brands.page.title')}</h1>
        <p class="page-deck">${t('brands.page.deck')}</p>
      </div>
    </section>
    <nav class="brand-sticky-nav" aria-label="Brand sections">
      <div class="container brand-sticky-inner">
        <span class="brand-sticky-label">${lang === 'zh' ? '快速跳转' : 'Jump to'}</span>
        <button type="button" class="brand-sticky-link" data-target="legacy" onclick="scrollToBrandSection('legacy')">${lang === 'zh' ? '传统集团' : 'Legacy'} <span class="brand-sticky-count">${groups.length}</span></button>
        <button type="button" class="brand-sticky-link" data-target="startups" onclick="scrollToBrandSection('startups')">${lang === 'zh' ? '新势力' : 'Startups'} <span class="brand-sticky-count">${startups.length}</span></button>
        <button type="button" class="brand-sticky-link" data-target="subs" onclick="scrollToBrandSection('subs')">${lang === 'zh' ? '子品牌' : 'Sub-brands'} <span class="brand-sticky-count">${subs.length}</span></button>
      </div>
    </nav>
    <section class="brand-index-stats-wrap">
      <div class="container">
        <div class="brand-index-stats">
          <div class="brand-stat">
            <div class="brand-stat-num">${groups.length}</div>
            <div class="brand-stat-label">${lang === 'zh' ? '传统车企集团' : 'Legacy Groups'}</div>
          </div>
          <div class="brand-stat">
            <div class="brand-stat-num">${startups.length}</div>
            <div class="brand-stat-label">${lang === 'zh' ? '造车新势力' : 'New-Energy Startups'}</div>
          </div>
          <div class="brand-stat">
            <div class="brand-stat-num">${subs.length}</div>
            <div class="brand-stat-label">${lang === 'zh' ? '集团子品牌' : 'Group Sub-Brands'}</div>
          </div>
          <div class="brand-stat brand-stat-total">
            <div class="brand-stat-num">${all.length}</div>
            <div class="brand-stat-label">${lang === 'zh' ? '品牌总数' : 'Brands Total'}</div>
          </div>
        </div>
      </div>
    </section>
    ${sections.map(s => {
      // 子品牌区：按母公司分组渲染
      let bodyHTML;
      if (s.items === subs) {
        // 以出现顺序收集母公司，保证顺序可预测
        const parentOrder = [];
        const grouped = {};
        subs.forEach(b => {
          const key = b.parent_en;
          if (!grouped[key]) { grouped[key] = []; parentOrder.push(key); }
          grouped[key].push(b);
        });
        bodyHTML = parentOrder.map(p => {
          const items = grouped[p];
          const parentZh = items[0].parent_zh;
          const headingEn = p + ' Family';
          const headingZh = parentZh + ' 旗下';
          return `
            <div class="brand-subgroup">
              <div class="brand-subgroup-head">
                <span class="brand-subgroup-label">${lang === 'zh' ? '母公司' : 'Parent'}</span>
                <h3 class="brand-subgroup-title">${lang === 'zh' ? headingZh : headingEn}</h3>
                <span class="brand-subgroup-count">${items.length} ${lang === 'zh' ? '个品牌' : items.length === 1 ? 'brand' : 'brands'}</span>
              </div>
              <div class="brands-grid">
                ${items.map(b => brandCardHTML(b, lang)).join('')}
              </div>
            </div>
          `;
        }).join('');
      } else {
        bodyHTML = `<div class="brands-grid">${s.items.map(b => brandCardHTML(b, lang)).join('')}</div>`;
      }
      return `
      <section class="brand-section" id="${s.id}">
        <div class="container">
          <div class="section-head">
            <div>
              <div class="section-eyebrow">${s['eyebrow_' + lang]}</div>
              <h2 class="section-title">${s['title_' + lang]}</h2>
            </div>
            <p class="section-deck">${s['deck_' + lang]}</p>
          </div>
          ${bodyHTML}
        </div>
      </section>
      `;
    }).join('')}
  `;
}

function pageModels() {
  const lang = getLang();
  // Collect unique brands in source order
  const seenBrands = [];
  SITE_DATA.models.forEach(m => { if (m.brand && !seenBrands.includes(m.brand)) seenBrands.push(m.brand); });
  const allLabel = lang === 'zh' ? '全部' : 'All';
  return `
    <section class="page-header">
      <div class="container">
        <div class="section-eyebrow">${t('nav.models')}</div>
        <h1 class="page-title">${t('models.page.title')}</h1>
        <p class="page-deck">${t('models.page.deck')}</p>
      </div>
    </section>
    <div class="models-filter-wrap">
      <div class="container models-filter-inner">
        <span class="models-filter-label">${lang === 'zh' ? '品牌筛选' : 'Filter by brand'}</span>
        <div class="models-filter-chips" id="modelsFilterChips">
          <button type="button" class="chip is-active" data-brand="all">${allLabel} <span class="chip-count">${SITE_DATA.models.length}</span></button>
          ${seenBrands.map(b => {
            const count = SITE_DATA.models.filter(m => m.brand === b).length;
            return `<button type="button" class="chip" data-brand="${b}">${b} <span class="chip-count">${count}</span></button>`;
          }).join('')}
        </div>
      </div>
    </div>
    <section style="padding-top:24px;">
      <div class="container">
        <div class="models-grid" id="modelsGrid">
          ${SITE_DATA.models.map(m => `<div class="models-grid-item" data-brand="${m.brand || ''}">${modelCardHTML(m, lang)}</div>`).join('')}
        </div>
        <div class="models-empty" id="modelsEmpty" hidden>${lang === 'zh' ? '该品牌暂无车型。' : 'No models for this brand yet.'}</div>
      </div>
    </section>
  `;
}

function dailyArticlesHTML(lang) {
  if (typeof SITE_ARTICLES === 'undefined' || !SITE_ARTICLES.length) return '';
  const items = SITE_ARTICLES.slice(0, 30).map(a => `
    <article style="border:1px solid #e5e7eb;border-radius:10px;padding:22px 24px;background:#ffffff;display:flex;flex-direction:column;gap:10px;">
      <div style="font-family:var(--mono, monospace);font-size:11px;letter-spacing:.14em;text-transform:uppercase;color:#dc2626;">${a['tag_' + lang] || a.tag_en} · ${a.date}</div>
      <h3 style="font-family:var(--serif, Georgia, serif);font-size:21px;font-weight:700;line-height:1.3;margin:0;">
        <a href="/news/${a.slug}" style="color:inherit;text-decoration:none;">${a['title_' + lang] || a.title_en}</a>
      </h3>
      <p style="font-size:14px;color:#6b7280;line-height:1.65;margin:0;">${a['excerpt_' + lang] || a.excerpt_en || ''}</p>
      <a href="/news/${a.slug}" style="margin-top:auto;color:#dc2626;font-family:var(--mono, monospace);font-size:12px;letter-spacing:.12em;text-transform:uppercase;text-decoration:none;">${lang === 'zh' ? '阅读全文 →' : 'Read dispatch →'}</a>
    </article>
  `).join('');
  return `
    <section style="padding-top:0;">
      <div class="container">
        <div class="section-head">
          <div>
            <div class="section-eyebrow">${lang === 'zh' ? '每日简报' : 'The Daily Briefing'}</div>
            <h2 class="section-title">${lang === 'zh' ? '最新出海动态' : 'Latest Dispatches'}</h2>
          </div>
        </div>
        <div style="display:grid;grid-template-columns:repeat(auto-fill,minmax(320px,1fr));gap:24px;">
          ${items}
        </div>
      </div>
    </section>`;
}

function pageNews() {
  const lang = getLang();
  // Latest daily dispatch auto-fills the column card so it never goes stale.
  const latestA = (typeof SITE_ARTICLES !== 'undefined' && SITE_ARTICLES.length) ? SITE_ARTICLES[0] : null;
  const colHref = latestA ? `/news/${latestA.slug}` : '/news';
  const colDate = latestA ? latestA.date : t('news.column.date');
  const colHeadline = latestA ? (latestA['title_' + lang] || latestA.title_en) : t('news.column.headline');
  return `
    <section class="page-header">
      <div class="container">
        <div class="section-eyebrow">${t('nav.news')}</div>
        <h1 class="page-title">${t('news.page.title')}</h1>
        <p class="page-deck">${t('news.page.deck')}</p>
      </div>
    </section>
    ${dailyArticlesHTML(lang)}
    <section class="news-column-wrap">
      <div class="container">
        <div class="news-column">
          <div class="news-column-left">
            <div class="news-column-eyebrow">${t('news.column.eyebrow')}</div>
            <h2 class="news-column-title">${t('news.column.title')}</h2>
            <p class="news-column-deck">${t('news.column.deck')}</p>
            <a href="${colHref}" class="news-column-cta">${t('news.column.cta')} →</a>
          </div>
          <div class="news-column-right">
            <div class="news-column-latest-label">${t('news.column.latest')}</div>
            <div class="news-column-date">${colDate}</div>
            <h3 class="news-column-headline"><a href="${colHref}" style="color:inherit;text-decoration:none;">${colHeadline}</a></h3>
          </div>
        </div>
      </div>
    </section>
    <section style="padding-top:0;">
      <div class="container">
        <div class="section-head">
          <div>
            <div class="section-eyebrow">${lang === 'zh' ? '深度' : 'Features'}</div>
            <h2 class="section-title">${lang === 'zh' ? '深度与分析' : 'Features & Analysis'}</h2>
          </div>
        </div>
        <div class="feature-grid">
          ${SITE_DATA.features.map(f => `
            <article class="feature-card${f.large ? ' large' : ''}">
              <div class="feature-thumb${f.image ? ' has-photo' : ''}"><a href="/stories/${f.slug}">${f.image ? `<img src="/${f.image}" alt="${f['title_' + lang]}" loading="lazy" />${f.imageCredit ? `<span class="img-credit">Photo: ${f.imageCredit}</span>` : ''}` : carSVG(f.shape, f.accent)}</a></div>
              <div class="feature-body">
                <div class="feature-tag">${f['tag_' + lang]}</div>
                <h3 class="feature-title"><a href="/stories/${f.slug}" style="color:inherit;text-decoration:none;">${f['title_' + lang]}</a></h3>
                <p class="feature-desc">${f['desc_' + lang]}</p>
                <div class="feature-meta">${f['meta_' + lang]} · <a href="/stories/${f.slug}" style="color:var(--accent, #d4302a);text-decoration:none;">${lang === 'zh' ? '阅读 →' : 'READ →'}</a></div>
              </div>
            </article>
          `).join('')}
        </div>
      </div>
    </section>
  `;
}

function pageTech() {
  const lang = getLang();
  return `
    <section class="page-header page-header--dark">
      <div class="container">
        <div class="section-eyebrow">${t('nav.tech')}</div>
        <h1 class="page-title">${t('tech.page.title')}</h1>
        <p class="page-deck">${t('tech.page.deck')}</p>
      </div>
    </section>
    <section class="tech-section tech-section--continuous">
      <div class="container">
        <div class="tech-grid">
          ${SITE_DATA.tech.map(tech => `
            <article class="tech-card">
              <div class="tech-num">${tech.num}</div>
              <h3>${tech['title_' + lang]}</h3>
              <p>${tech['desc_' + lang]}</p>
              <div class="tech-tags">
                ${tech.tags.map(tg => `<span class="tech-tag">${tg}</span>`).join('')}
              </div>
            </article>
          `).join('')}
        </div>
      </div>
    </section>
  `;
}

function pageAbout() {
  return `
    <section class="page-header">
      <div class="container">
        <div class="section-eyebrow">${t('nav.about')}</div>
        <h1 class="page-title">${t('about.page.title')}</h1>
        <p class="page-deck">${t('about.page.deck')}</p>
      </div>
    </section>
    <section style="padding-top:0;">
      <div class="container">
        <div class="about-content">
          <aside class="about-sidebar">
            <div>
              <h4>${t('about.sidebar.founded')}</h4>
              <p>${t('about.sidebar.founded.val')}</p>
            </div>
            <div>
              <h4>${t('about.sidebar.based')}</h4>
              <p>${t('about.sidebar.based.val')}</p>
            </div>
            <div>
              <h4>${t('about.sidebar.contact')}</h4>
              <p><a href="mailto:hello@topchinacar.com" style="color:var(--accent);">${t('about.sidebar.contact.val')}</a></p>
            </div>
          </aside>
          <div class="about-main">
            <p>${t('about.main.p1')}</p>
            <p>${t('about.main.p2')}</p>
            <p>${t('about.main.p3')}</p>
          </div>
        </div>
      </div>
    </section>

    <!-- Mission -->
    <section class="about-block about-block--mission">
      <div class="container about-block-inner">
        <div class="section-eyebrow">${t('about.mission.eyebrow')}</div>
        <h2 class="about-block-title">${t('about.mission.title')}</h2>
        <p class="about-block-body">${t('about.mission.body')}</p>
      </div>
    </section>

    <!-- Editorial Principles -->
    <section class="about-block about-block--principles">
      <div class="container">
        <div class="section-eyebrow">${t('about.principles.eyebrow')}</div>
        <div class="principles-grid">
          ${[1,2,3,4].map(n => `
            <article class="principle-card">
              <div class="principle-num">0${n}</div>
              <h3>${t('about.principles.'+n+'.title')}</h3>
              <p>${t('about.principles.'+n+'.body')}</p>
            </article>
          `).join('')}
        </div>
      </div>
    </section>

    <!-- Coverage -->
    <section class="about-block about-block--coverage">
      <div class="container about-block-inner">
        <div class="section-eyebrow">${t('about.coverage.eyebrow')}</div>
        <h2 class="about-block-title">${t('about.coverage.title')}</h2>
        <p class="about-block-body">${t('about.coverage.body')}</p>
      </div>
    </section>

    <!-- Contact -->
    <section class="about-block about-block--contact">
      <div class="container about-block-inner">
        <div class="section-eyebrow">${t('about.contact.eyebrow')}</div>
        <h2 class="about-block-title">${t('about.contact.title')}</h2>
        <p class="about-block-body">${t('about.contact.body')}</p>
        <a href="mailto:hello@topchinacar.com" class="btn btn-primary" style="margin-top:24px;">${t('about.contact.cta')}</a>
      </div>
    </section>
  `;
}

function pageQuote() {
  const lang = getLang();
  const field = (id, key, type, extra) => `
    <div style="margin-bottom:16px;">
      <label for="${id}" style="display:block;font-family:var(--mono);font-size:11px;letter-spacing:.12em;text-transform:uppercase;color:var(--muted);margin-bottom:6px;">${t(key)}</label>
      ${type === 'textarea'
        ? `<textarea id="${id}" rows="4" style="width:100%;padding:12px 14px;border:1px solid #d1d5db;border-radius:6px;font-family:inherit;font-size:15px;"></textarea>`
        : `<input id="${id}" type="${type}" ${extra || ''} style="width:100%;padding:12px 14px;border:1px solid #d1d5db;border-radius:6px;font-family:inherit;font-size:15px;" />`}
    </div>`;
  return `
    <section class="page-header">
      <div class="container">
        <div class="section-eyebrow">${t('nav.quote')}</div>
        <h1 class="page-title">${t('quote.page.title')}</h1>
        <p class="page-deck">${t('quote.page.deck')}</p>
      </div>
    </section>
    <section style="padding-top:0;">
      <div class="container" style="max-width:820px;">
        <form id="quoteForm" novalidate>
          <div style="display:grid;grid-template-columns:1fr 1fr;gap:0 20px;">
            ${field('qName', 'quote.form.name', 'text', 'required')}
            ${field('qCompany', 'quote.form.company', 'text')}
            ${field('qEmail', 'quote.form.email', 'email', 'required')}
            ${field('qWhatsapp', 'quote.form.whatsapp', 'text')}
            ${field('qMarket', 'quote.form.market', 'text', 'required')}
            ${field('qQty', 'quote.form.qty', 'text')}
          </div>
          ${field('qModel', 'quote.form.model', 'text', 'required')}
          ${field('qMessage', 'quote.form.message', 'textarea')}
          <p style="margin:0 0 16px;font-size:13px;line-height:1.7;color:#6b7280;">${t('quote.form.privacy')}</p>
          <button type="submit" class="btn btn-primary" id="quoteSubmit">${t('quote.form.submit')}</button>
          <div id="quoteResult" hidden style="margin-top:16px;padding:14px 16px;background:#f9fafb;border-left:3px solid #16a34a;font-size:15px;"></div>
        </form>
        <div style="margin-top:48px;padding:24px;background:#f9fafb;border-left:3px solid var(--accent, #d4302a);">
          <h3 style="margin:0 0 10px;font-size:16px;">${t('quote.note.title')}</h3>
          <p style="margin:0;font-size:14px;line-height:1.7;color:#4b5563;">${t('quote.note.body')}</p>
        </div>
      </div>
    </section>
  `;
}

function pagePrivacy() {
  const lang = getLang();
  const zh = lang === 'zh';
  const S = (en, zhTxt) => zh ? zhTxt : en;
  const sec = (h, body) => `<h2 style="font-size:20px;margin:36px 0 12px;">${h}</h2>${body}`;
  const p = t2 => `<p style="margin:0 0 14px;">${t2}</p>`;
  return `
    <section class="page-header">
      <div class="container">
        <div class="section-eyebrow">${S('Legal', '法律条款')}</div>
        <h1 class="page-title">${S('Privacy Policy', '隐私政策')}</h1>
        <p class="page-deck">${S('Effective July 5, 2026 · How we collect, use and protect your information.', '生效日期：2026 年 7 月 5 日 · 我们如何收集、使用与保护您的信息。')}</p>
      </div>
    </section>
    <section style="padding-top:0;">
      <div class="container" style="max-width:820px;font-size:15px;line-height:1.8;color:#374151;">
        ${p(S('TopChinaCar ("we") is an independent editorial publication about Chinese automobiles that also connects dealers, fleets and importers with licensed Chinese vehicle exporters. This policy explains what information we collect through this website, why, and the choices you have. Contact: <a href="mailto:hello@topchinacar.com">hello@topchinacar.com</a>.',
                'TopChinaCar（下称"我们"）是一家关于中国汽车的独立编辑出版物，同时为经销商、车队与进口商对接持牌中国汽车出口商。本政策说明我们通过本网站收集哪些信息、原因，以及您可行使的选择。联系方式：<a href="mailto:hello@topchinacar.com">hello@topchinacar.com</a>。'))}

        ${sec(S('What we collect', '我们收集的信息'),
          p(S('<strong>Quote inquiries</strong> (the "Get a Quote" form): name, company (optional), email, WhatsApp/phone (optional), destination market, quantity, models of interest and your message.',
              '<strong>询价表单</strong>（"Get a Quote"）：姓名、公司（选填）、邮箱、WhatsApp/电话（选填）、目的市场、数量、意向车型及留言。'))
        + p(S('<strong>Newsletter</strong>: your email address only.',
              '<strong>邮件订阅</strong>：仅收集您的邮箱地址。'))
        + p(S('<strong>Analytics</strong>: we use Cloudflare Web Analytics, which is cookie-less and aggregates anonymous performance data (page views, country, browser). We do not run advertising trackers and we do not build visitor profiles.',
              '<strong>网站分析</strong>：我们使用 Cloudflare Web Analytics——无 Cookie、仅汇总匿名性能数据（页面访问量、国家、浏览器）。我们不投放广告追踪器，也不建立访客画像。'))
        + p(S('<strong>Local storage</strong>: your language preference (EN/中文) is stored in your browser only.',
              '<strong>本地存储</strong>：您的语言偏好（EN/中文）仅保存在您自己的浏览器中。')))}

        ${sec(S('How we use it', '信息的用途'),
          p(S('Quote details are used solely to source availability and pricing for your request. To do that, we share them with the licensed Chinese exporter(s) needed to prepare your quote — and with no one else. We never sell your data.',
              '询价信息仅用于为您匹配货源与报价。为此，我们会将其共享给准备报价所必需的持牌中国出口商——不会提供给任何其他方。我们绝不出售您的数据。'))
        + p(S('Newsletter addresses are used only to send the briefing you subscribed to. Every email includes an unsubscribe link.',
              '订阅邮箱仅用于发送您订阅的简报。每封邮件都附退订链接。')))}

        ${sec(S('Service providers', '服务提供商'),
          p(S('The site is hosted on Cloudflare Pages; form submissions and email are processed via Resend. Both act as processors on our behalf. Your data may be transferred to and processed in countries other than your own, protected by the standard safeguards those providers offer.',
              '本站托管于 Cloudflare Pages；表单与邮件经由 Resend 处理。两者均作为受托处理方运作。您的数据可能被传输至您所在国家/地区之外处理，并受上述服务商的标准保障条款保护。')))}

        ${sec(S('Retention', '保存期限'),
          p(S('Quote inquiries are kept for up to 24 months so we can follow up on your request, then deleted. Newsletter addresses are kept until you unsubscribe.',
              '询价信息最长保存 24 个月以便跟进，到期删除。订阅邮箱保存至您退订为止。')))}

        ${sec(S('Your rights', '您的权利'),
          p(S('You may request a copy of the personal data we hold about you, ask us to correct or delete it, or withdraw consent at any time by emailing <a href="mailto:hello@topchinacar.com">hello@topchinacar.com</a>. We respond within 30 days. Depending on where you live (e.g. the EU/EEA or UK under GDPR), you may also have the right to lodge a complaint with your local data protection authority.',
              '您可随时发邮件至 <a href="mailto:hello@topchinacar.com">hello@topchinacar.com</a>，索取我们持有的您的个人数据副本、要求更正或删除，或撤回同意。我们将在 30 天内回复。依据您所在地法律（如欧盟/英国 GDPR），您还有权向当地数据保护机构投诉。')))}

        ${sec(S('Cookies', 'Cookie 说明'),
          p(S('We set no advertising or profiling cookies. Cloudflare may set strictly-necessary cookies for security (e.g. bot protection). Your language choice lives in localStorage, not a cookie.',
              '我们不设置任何广告或画像类 Cookie。Cloudflare 可能出于安全需要（如机器人防护）设置必要 Cookie。语言偏好保存在 localStorage 而非 Cookie 中。')))}

        ${sec(S('Changes', '政策更新'),
          p(S('We will post any changes to this policy on this page with a new effective date.',
              '政策如有变更，将在本页发布并更新生效日期。')))}
      </div>
    </section>
  `;
}

// Route table (shared by client router and build.js)
const PAGE_ROUTES = {
  '/':       pageHome,
  '/brands': pageBrands,
  '/models': pageModels,
  '/news':   pageNews,
  '/tech':   pageTech,
  '/about':  pageAbout,
  '/quote':  pageQuote,
  '/privacy': pagePrivacy
};

// Node (build.js) support — no effect in the browser
if (typeof module !== 'undefined' && module.exports) {
  module.exports = { PAGE_ROUTES };
}
