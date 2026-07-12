const assert = require('node:assert/strict');
const fs = require('node:fs');
const os = require('node:os');
const path = require('node:path');
const { spawnSync } = require('node:child_process');
const test = require('node:test');

const REPO_ROOT = path.resolve(__dirname, '..');

function collectHtmlFiles(root) {
  const files = [];
  for (const entry of fs.readdirSync(root, { withFileTypes: true })) {
    if (entry.name === '.git') continue;
    const fullPath = path.join(root, entry.name);
    if (entry.isDirectory()) files.push(...collectHtmlFiles(fullPath));
    else if (entry.name.endsWith('.html')) files.push(fullPath);
  }
  return files;
}

test('build keeps Shanghai publication dates and emits accessible, stable markup', () => {
  const tempRoot = fs.mkdtempSync(path.join(os.tmpdir(), 'topchinacar-build-'));
  const siteRoot = path.join(tempRoot, 'site');
  try {
    fs.cpSync(REPO_ROOT, siteRoot, {
      recursive: true,
      filter: source => path.basename(source) !== '.git'
    });

    const build = spawnSync(process.execPath, ['build.js'], {
      cwd: siteRoot,
      encoding: 'utf8',
      env: { ...process.env, BUILD_NOW: '2026-07-11T22:28:44.000Z' }
    });
    assert.equal(build.status, 0, build.stderr || build.stdout);

    const read = file => fs.readFileSync(path.join(siteRoot, file), 'utf8');
    const posts = read('sitemap-posts.xml');
    const news = read('sitemap-news.xml');
    const sitemapIndex = read('sitemap.xml');
    const home = read('index.html');
    const zhHome = read('zh/index.html');

    assert.match(posts, /2026-07-12-china-auto-daily<\/loc><lastmod>2026-07-12<\/lastmod>/);
    assert.match(news, /2026-07-12-china-auto-daily[\s\S]*?<news:publication_date>2026-07-12T06:28:44\+08:00<\/news:publication_date>/);
    assert.doesNotMatch(sitemapIndex, /<lastmod>2026-07-11<\/lastmod>/);

    assert.match(home, /<h3 class="news-title">/);
    assert.match(home, /<h2 class="footer-heading"/);
    assert.match(home, /<label class="sr-only" for="newsletterEmail"/);
    assert.match(home, /srcset="\/images\/hero-xiaomi-480\.jpg 480w,/);
    assert.doesNotMatch(home.match(/<link href="https:\/\/fonts\.googleapis\.com\/css2\?[^>]+>/)?.[0] || '', /Noto/);
    assert.match(zhHome.match(/<link href="https:\/\/fonts\.googleapis\.com\/css2\?[^>]+>/)?.[0] || '', /Noto\+Sans\+SC/);

    for (const htmlFile of collectHtmlFiles(siteRoot)) {
      const html = fs.readFileSync(htmlFile, 'utf8');
      assert.doesNotMatch(html, /\\u[0-9a-f]{4}/i, `${htmlFile} contains an escaped Unicode literal`);
      for (const [index, tag] of Array.from(html.matchAll(/<img\b[^>]*>/g), match => match[0]).entries()) {
        assert.match(tag, /\bwidth="\d+"/, `${htmlFile} image ${index + 1} has no width`);
        assert.match(tag, /\bheight="\d+"/, `${htmlFile} image ${index + 1} has no height`);
      }
    }
  } finally {
    fs.rmSync(tempRoot, { recursive: true, force: true });
  }
});
