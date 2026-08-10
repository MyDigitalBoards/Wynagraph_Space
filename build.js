// ─────────────────────────────────────────────────────────────────────────────
// BUILD.JS — URL propres pour WynaGraph Space (GitHub Pages)
// ─────────────────────────────────────────────────────────────────────────────
// Utilisation :  node build.js
//
// À partir des gabarits article.html et graph.html, ce script écrit :
//   • article/<slug>/index.html   → https://wynagraph.com/article/<slug>
//   • graphe/<slug>/index.html    → https://wynagraph.com/graphe/<slug>
//   • sitemap.xml
//
// GitHub Pages sert automatiquement index.html quand on demande un dossier :
// c'est ce qui permet d'obtenir des URL sans extension .html sans configuration
// serveur (qui n'existe pas sur GitHub Pages).
//
// Les pages étant deux niveaux sous la racine, le script réécrit tous les
// chemins relatifs (styles.css, data.js…) en ../../ automatiquement.
//
// À relancer après chaque ajout d'article ou de graphe, puis commiter.
// ─────────────────────────────────────────────────────────────────────────────

const fs = require('fs');
const path = require('path');

const DOMAIN    = 'https://www.wynagraph.com';   // ← forme déclarée dans Search Console
const SITE_NAME = 'WynaGraph Space';
const PREFIX    = '../../';                      // profondeur des pages générées

// ── Chargement des données ───────────────────────────────────────────────────
global.window = {};
require('./data.js');
require('./posts.js');
const GRAPHS = (global.window.GRAPHS || []).filter(Boolean);
const POSTS  = (global.window.POSTS  || []).filter(Boolean);

// ── Utilitaires ──────────────────────────────────────────────────────────────
function escAttr(s) {
  return String(s == null ? '' : s)
    .replace(/&/g, '&amp;').replace(/</g, '&lt;')
    .replace(/>/g, '&gt;').replace(/"/g, '&quot;');
}

// Coupe proprement à ~155 caractères (limite d'affichage Google)
function trim155(s) {
  const t = String(s == null ? '' : s).replace(/\s+/g, ' ').trim();
  if (t.length <= 155) return t;
  const cut = t.slice(0, 155);
  return cut.slice(0, cut.lastIndexOf(' ')) + '…';
}

// Réécrit les chemins relatifs en ../../chemin.
// Ignore les URL absolues (http…), les ancres (#), javascript:, mailto: et les
// chemins déjà absolus (/…) : seuls les fichiers locaux du site sont préfixés.
function fixPaths(html) {
  return html.replace(
    /(href|src)="(?!https?:|\/\/|\/|#|javascript:|mailto:)([^"]+)"/g,
    (m, attr, val) => attr + '="' + PREFIX + val + '"'
  );
}

// Injecte les balises SEO à la place du <title> générique du gabarit
function injectHead(html, opts) {
  const desc = trim155(opts.description);
  const tags =
    '  <title>' + escAttr(opts.title) + '</title>\n' +
    '  <meta name="description" content="' + escAttr(desc) + '" />\n' +
    '  <link rel="canonical" href="' + escAttr(opts.canonical) + '" />\n' +
    '  <meta property="og:type" content="article" />\n' +
    '  <meta property="og:site_name" content="' + escAttr(SITE_NAME) + '" />\n' +
    '  <meta property="og:title" content="' + escAttr(opts.title) + '" />\n' +
    '  <meta property="og:description" content="' + escAttr(desc) + '" />\n' +
    '  <meta property="og:url" content="' + escAttr(opts.canonical) + '" />\n';
  return html.replace(/[ \t]*<title>[\s\S]*?<\/title>\r?\n/, tags);
}

function write(dir, html) {
  fs.mkdirSync(dir, { recursive: true });
  fs.writeFileSync(path.join(dir, 'index.html'), html);
  console.log('  ' + dir + '/');
}

// ── Pages d'articles ─────────────────────────────────────────────────────────
function buildArticles(template) {
  POSTS.forEach(function (post) {
    let html = injectHead(template, {
      title: post.title + ' — ' + SITE_NAME,
      description: post.excerpt || post.title,
      canonical: DOMAIN + '/article/' + post.id,
    });

    html = fixPaths(html);

    // L'id est écrit en dur dans la page, il ne vient plus de l'URL
    html = html.replace(
      /const\s+postId\s*=\s*params\.get\(['"]id['"]\);/,
      'const postId = ' + JSON.stringify(post.id) + ';'
    );

    // Lien « voir en plein écran » vers la nouvelle URL de graphe
    html = html.replace(
      /`graph\.html\?id=\$\{encodeURIComponent\(graph\.id\)\}`/g,
      '`../../graphe/${graph.id}/`'
    );

    write(path.join('article', post.id), html);
  });
}

// ── Pages de graphes ─────────────────────────────────────────────────────────
function buildGraphs(template) {
  GRAPHS.forEach(function (graph) {
    let html = injectHead(template, {
      title: graph.title + ' — ' + SITE_NAME,
      description: graph.description || graph.longDescription || graph.title,
      canonical: DOMAIN + '/graphe/' + graph.id,
    });

    html = fixPaths(html);

    html = html.replace(
      /const\s+id\s*=\s*params\.get\(["']id["']\);/,
      'const id = ' + JSON.stringify(graph.id) + ';'
    );

    write(path.join('graphe', graph.id), html);
  });
}

// ── Sitemap ──────────────────────────────────────────────────────────────────
function buildSitemap() {
  const today = new Date().toISOString().slice(0, 10);
  function entry(loc, lastmod, changefreq, priority) {
    return '  <url>\n    <loc>' + loc + '</loc>\n    <lastmod>' + lastmod + '</lastmod>\n' +
           '    <changefreq>' + changefreq + '</changefreq>\n' +
           '    <priority>' + priority + '</priority>\n  </url>\n';
  }

  let xml = '<?xml version="1.0" encoding="UTF-8"?>\n' +
            '<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n\n';

  xml += entry(DOMAIN + '/',              today, 'weekly', '1.0');
  xml += entry(DOMAIN + '/galerie.html',  today, 'weekly', '0.9');
  xml += entry(DOMAIN + '/a-propos.html', today, 'yearly', '0.5');

  xml += '\n  <!-- Graphes (' + GRAPHS.length + ') -->\n';
  GRAPHS.forEach(function (g) {
    xml += entry(DOMAIN + '/graphe/' + g.id, today, 'monthly', '0.8');
  });

  xml += '\n  <!-- Articles (' + POSTS.length + ') -->\n';
  POSTS.forEach(function (p) {
    xml += entry(DOMAIN + '/article/' + p.id, p.date || today, 'monthly', '0.7');
  });

  xml += '\n</urlset>\n';
  fs.writeFileSync('sitemap.xml', xml);
  console.log('  sitemap.xml (' + (3 + GRAPHS.length + POSTS.length) + ' URL)');
}

// ── Exécution ────────────────────────────────────────────────────────────────
const articleTpl = fs.readFileSync('article.html', 'utf8');
const graphTpl   = fs.readFileSync('graph.html', 'utf8');

console.log('Génération…');
buildArticles(articleTpl);
buildGraphs(graphTpl);
buildSitemap();
console.log('Terminé : ' + POSTS.length + ' articles, ' + GRAPHS.length + ' graphes.');
