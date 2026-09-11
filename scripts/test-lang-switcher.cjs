// Executes the REAL shipped language-switcher script (extracted from dist)
// against a stub DOM, simulating the double-emission that broke switching.
const fs = require('fs');
const path = require('path');

const html = fs.readFileSync(path.join(__dirname, '..', 'dist', 'index.html'), 'utf8');
let scripts = [...html.matchAll(/<script(?![^>]*src=)[^>]*>([\s\S]*?)<\/script>/g)]
  .map((m) => m[1])
  .filter((t) => t.includes('data-lang-switcher'));
if (process.env.NEG === '1') {
  // Negative control: simulate the pre-fix script without the wire-once guard
  scripts = scripts.map((t) =>
    t.replace("if (root.getAttribute('data-wired') === '1') return;", '').replace("root.setAttribute('data-wired', '1');", '')
  );
  console.log('(negative control: guard stripped)');
}
if (scripts.length < 2) {
  console.error('FAIL: expected 2 switcher script emissions, got', scripts.length);
  process.exit(1);
}
console.log('switcher script emissions in dist/index.html:', scripts.length);

function makeEl() {
  const classes = new Set(['hidden']);
  const attrs = {};
  const listeners = {};
  return {
    classList: {
      add: (c) => classes.add(c),
      remove: (c) => classes.delete(c),
      toggle: (c, force) => {
        if (force === undefined) {
          if (classes.has(c)) { classes.delete(c); return false; }
          classes.add(c); return true;
        }
        if (force) classes.add(c); else classes.delete(c);
        return force;
      },
      contains: (c) => classes.has(c),
    },
    setAttribute: (k, v) => { attrs[k] = v; },
    getAttribute: (k) => attrs[k] || null,
    addEventListener: (ev, fn) => { (listeners[ev] = listeners[ev] || []).push(fn); },
    fire: (ev, arg) => { (listeners[ev] || []).forEach((fn) => fn(arg)); },
    querySelector: () => null,
    querySelectorAll: () => [],
    contains: () => false,
    style: {},
  };
}

// Build one stub switcher root with wired children
function makeRoot() {
  const btn = makeEl();
  const menu = makeEl();
  const links = ['en', 'zh', 'ja'].map((code) => {
    const a = makeEl();
    a.setAttribute('data-lang-link', code);
    a.setAttribute('href', code === 'en' ? '/about' : `/${code}/about`);
    return a;
  });
  const root = makeEl();
  root.querySelector = (sel) => {
    if (sel === '[data-lang-button]') return btn;
    if (sel === '[data-lang-menu]') return menu;
    return null;
  };
  root.querySelectorAll = (sel) => (sel === '[data-lang-link]' ? links : []);
  // contains(): true for own children (btn/menu/links), false otherwise
  root.contains = (t) => t === btn || t === menu || links.includes(t);
  return { root, btn, menu, links };
}

const store = {};
const clicks = [];
global.localStorage = {
  getItem: () => null,
  setItem: (k, v) => { store[k] = v; },
};
global.window = { location: { pathname: '/zh/about' } };

const instances = [makeRoot()];
global.document = {
  querySelectorAll: (sel) => (sel === '[data-lang-switcher]' ? instances.map((i) => i.root) : []),
  addEventListener: (ev, fn) => { clicks.push([ev, fn]); },
};

// Run BOTH shipped emissions, exactly like the browser does
for (const code of scripts) eval(code);

const { btn, menu, links } = instances[0];
const stopProp = () => {};
let pass = true;
function assert(name, cond) {
  console.log((cond ? 'PASS' : 'FAIL') + ' — ' + name);
  if (!cond) pass = false;
}

// 1. Click opens (would stay shut before the guard fix: toggle twice)
btn.fire('click', { stopPropagation: stopProp });
assert('menu opens on click', !menu.classList.contains('hidden'));
assert('aria-expanded true', btn.getAttribute('aria-expanded') === 'true');

// 2. Hrefs rewritten from live /zh/about URL
const byCode = {};
links.forEach((a) => { byCode[a.getAttribute('data-lang-link')] = a.getAttribute('href'); });
assert('en href -> /about', byCode.en === '/about');
assert('ja href -> /ja/about', byCode.ja === '/ja/about');
assert('zh href -> /zh/about', byCode.zh === '/zh/about');

// 2b. Test blog route href rewriting (/blog -> localized home)
btn.fire('click', { stopPropagation: stopProp }); // close
global.window.location.pathname = '/blog';
btn.fire('click', { stopPropagation: stopProp }); // open with /blog
const blogLinks = {};
links.forEach((a) => { blogLinks[a.getAttribute('data-lang-link')] = a.getAttribute('href'); });
assert('blog root: en href -> /blog', blogLinks.en === '/blog');
assert('blog root: zh href -> /zh', blogLinks.zh === '/zh');
assert('blog root: ja href -> /ja', blogLinks.ja === '/ja');

// 2c. Test blog slug href rewriting (/blog/[slug] -> localized home)
btn.fire('click', { stopPropagation: stopProp }); // close
global.window.location.pathname = '/blog/zero-trust-security-web-applications';
btn.fire('click', { stopPropagation: stopProp }); // open with /blog/...
const blogPostLinks = {};
links.forEach((a) => { blogPostLinks[a.getAttribute('data-lang-link')] = a.getAttribute('href'); });
assert('blog post: en href -> /blog/zero-trust-security-web-applications', blogPostLinks.en === '/blog/zero-trust-security-web-applications');
assert('blog post: zh href -> /zh', blogPostLinks.zh === '/zh');
assert('blog post: ja href -> /ja', blogPostLinks.ja === '/ja');

// 3. Second click closes
btn.fire('click', { stopPropagation: stopProp });
assert('menu closes on second click', menu.classList.contains('hidden'));

// 4. Outside click closes
btn.fire('click', { stopPropagation: stopProp });
clicks.filter(([ev]) => ev === 'click').forEach(([, fn]) => fn({ target: {} }));
assert('outside click closes', menu.classList.contains('hidden'));

// 5. Link click persists preference
links[1].fire('click', {});
assert('locale persisted', store['ladestack-lang'] === 'zh');

process.exit(pass ? 0 : 1);
