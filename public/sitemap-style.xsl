<?xml version="1.0" encoding="UTF-8"?>
<xsl:stylesheet version="1.0"
  xmlns:xsl="http://www.w3.org/1999/XSL/Transform"
  xmlns:sitemap="http://www.sitemaps.org/schemas/sitemap/0.9"
  xmlns:xhtml="http://www.w3.org/1999/xhtml"
  xmlns:image="http://www.google.com/schemas/sitemap-image/1.1"
  xmlns:video="http://www.google.com/schemas/sitemap-video/1.1">

  <xsl:output method="html" version="1.0" encoding="UTF-8" indent="yes"/>

  <xsl:template match="/">
    <html lang="en">
      <head>
        <meta charset="UTF-8"/>
        <meta name="viewport" content="width=device-width, initial-scale=1.0"/>
        <title>
          <xsl:choose>
            <xsl:when test="sitemap:sitemapindex">XML Sitemap Index | LadeStack</xsl:when>
            <xsl:otherwise>XML Sitemap | LadeStack</xsl:otherwise>
          </xsl:choose>
        </title>
        <style type="text/css"><![CDATA[
          :root {
            --bg-primary: #0b0b0b;
            --bg-secondary: #141416;
            --bg-tertiary: #1c1c20;
            --bg-hover: #26262b;
            --border: #2e2e34;
            --border-subtle: #222227;
            --text-primary: #f4f4f6;
            --text-secondary: #a1a1aa;
            --text-muted: #71717a;
            --accent-primary: #3b82f6;
            --accent-glow: rgba(59, 130, 246, 0.15);
            --badge-en: #38bdf8;
            --badge-ru: #f87171;
            --badge-zh: #fb923c;
            --badge-ko: #a78bfa;
            --badge-ja: #ec4899;
            --badge-tr: #34d399;
            --badge-pt: #fbbf24;
            --radius-sm: 6px;
            --radius-md: 10px;
            --radius-lg: 14px;
            --font-sans: 'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif;
            --font-mono: 'IBM Plex Mono', ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, monospace;
          }

          * {
            box-sizing: border-box;
            margin: 0;
            padding: 0;
          }

          body {
            background-color: var(--bg-primary);
            color: var(--text-primary);
            font-family: var(--font-sans);
            font-size: 14px;
            line-height: 1.5;
            padding: 32px 24px 64px;
            min-height: 100vh;
            -webkit-font-smoothing: antialiased;
          }

          .container {
            max-width: 1280px;
            margin: 0 auto;
          }

          /* Header & Branding */
          .header-card {
            background: linear-gradient(180deg, var(--bg-secondary) 0%, rgba(20, 20, 22, 0.6) 100%);
            border: 1px solid var(--border);
            border-radius: var(--radius-lg);
            padding: 28px 32px;
            margin-bottom: 24px;
            position: relative;
            box-shadow: 0 8px 32px -4px rgba(0, 0, 0, 0.5);
          }

          .header-top {
            display: flex;
            align-items: center;
            justify-content: space-between;
            flex-wrap: wrap;
            gap: 16px;
            margin-bottom: 12px;
          }

          .brand-badge {
            display: inline-flex;
            align-items: center;
            gap: 10px;
            font-size: 13px;
            font-weight: 600;
            text-transform: uppercase;
            letter-spacing: 0.08em;
            color: var(--text-secondary);
          }

          .brand-logo-dot {
            width: 10px;
            height: 10px;
            background: #3b82f6;
            border-radius: 50%;
            box-shadow: 0 0 12px #3b82f6;
          }

          .site-link {
            display: inline-flex;
            align-items: center;
            gap: 6px;
            color: var(--text-secondary);
            text-decoration: none;
            font-size: 13px;
            padding: 6px 14px;
            border-radius: var(--radius-sm);
            border: 1px solid var(--border);
            background: var(--bg-tertiary);
            transition: all 0.2s ease;
          }

          .site-link:hover {
            color: var(--text-primary);
            border-color: var(--accent-primary);
            background: var(--bg-hover);
          }

          h1 {
            font-size: 26px;
            font-weight: 700;
            color: var(--text-primary);
            letter-spacing: -0.02em;
            margin-bottom: 8px;
          }

          .subtitle {
            color: var(--text-secondary);
            font-size: 14px;
            max-width: 820px;
          }

          /* Stats Grid */
          .stats-grid {
            display: grid;
            grid-template-columns: repeat(auto-fit, minmax(180px, 1fr));
            gap: 14px;
            margin-bottom: 24px;
          }

          .stat-card {
            background: var(--bg-secondary);
            border: 1px solid var(--border-subtle);
            border-radius: var(--radius-md);
            padding: 16px 20px;
            transition: border-color 0.2s;
          }

          .stat-card:hover {
            border-color: var(--border);
          }

          .stat-label {
            font-size: 12px;
            font-weight: 500;
            text-transform: uppercase;
            letter-spacing: 0.05em;
            color: var(--text-muted);
            margin-bottom: 4px;
          }

          .stat-val {
            font-size: 22px;
            font-weight: 700;
            color: var(--text-primary);
            font-family: var(--font-mono);
          }

          /* Controls Bar */
          .controls-bar {
            background: var(--bg-secondary);
            border: 1px solid var(--border);
            border-radius: var(--radius-md);
            padding: 16px 20px;
            margin-bottom: 20px;
            display: flex;
            flex-direction: column;
            gap: 14px;
          }

          .controls-top {
            display: flex;
            align-items: center;
            justify-content: space-between;
            flex-wrap: wrap;
            gap: 12px;
          }

          .search-wrapper {
            position: relative;
            flex: 1;
            min-width: 260px;
            max-width: 480px;
          }

          .search-input {
            width: 100%;
            background: var(--bg-tertiary);
            border: 1px solid var(--border);
            border-radius: var(--radius-sm);
            padding: 10px 14px 10px 38px;
            color: var(--text-primary);
            font-size: 13px;
            font-family: var(--font-sans);
            outline: none;
            transition: border-color 0.2s, box-shadow 0.2s;
          }

          .search-input:focus {
            border-color: var(--accent-primary);
            box-shadow: 0 0 0 3px var(--accent-glow);
          }

          .search-icon {
            position: absolute;
            left: 12px;
            top: 50%;
            transform: translateY(-50%);
            color: var(--text-muted);
            pointer-events: none;
            width: 16px;
            height: 16px;
          }

          .count-badge {
            font-size: 13px;
            color: var(--text-secondary);
            font-family: var(--font-mono);
          }

          /* Locale Filter Pills */
          .locale-filters {
            display: flex;
            align-items: center;
            flex-wrap: wrap;
            gap: 8px;
          }

          .filter-label {
            font-size: 12px;
            font-weight: 600;
            color: var(--text-muted);
            margin-right: 4px;
            text-transform: uppercase;
            letter-spacing: 0.05em;
          }

          .filter-btn {
            background: var(--bg-tertiary);
            border: 1px solid var(--border);
            color: var(--text-secondary);
            padding: 5px 12px;
            border-radius: 20px;
            font-size: 12px;
            font-weight: 500;
            cursor: pointer;
            transition: all 0.15s ease;
            display: inline-flex;
            align-items: center;
            gap: 6px;
          }

          .filter-btn:hover {
            color: var(--text-primary);
            border-color: var(--text-muted);
          }

          .filter-btn.active {
            background: var(--accent-primary);
            border-color: var(--accent-primary);
            color: #ffffff;
            font-weight: 600;
          }

          .filter-count {
            background: rgba(0, 0, 0, 0.25);
            padding: 1px 6px;
            border-radius: 10px;
            font-size: 11px;
            font-family: var(--font-mono);
          }

          /* Table Styling */
          .table-card {
            background: var(--bg-secondary);
            border: 1px solid var(--border);
            border-radius: var(--radius-lg);
            overflow: hidden;
            box-shadow: 0 4px 24px rgba(0, 0, 0, 0.4);
          }

          .table-responsive {
            overflow-x: auto;
            width: 100%;
          }

          table {
            width: 100%;
            border-collapse: collapse;
            text-align: left;
          }

          thead th {
            background: var(--bg-tertiary);
            color: var(--text-secondary);
            font-size: 12px;
            font-weight: 600;
            text-transform: uppercase;
            letter-spacing: 0.06em;
            padding: 14px 18px;
            border-bottom: 1px solid var(--border);
            white-space: nowrap;
            user-select: none;
            cursor: pointer;
            transition: color 0.15s, background-color 0.15s;
          }

          thead th:hover {
            color: var(--text-primary);
            background: var(--bg-hover);
          }

          thead th.no-sort {
            cursor: default;
          }

          thead th.no-sort:hover {
            background: var(--bg-tertiary);
            color: var(--text-secondary);
          }

          .sort-indicator {
            margin-left: 6px;
            font-size: 10px;
            color: var(--text-muted);
          }

          thead th.sorted-asc .sort-indicator::after {
            content: "▲";
            color: var(--accent-primary);
          }

          thead th.sorted-desc .sort-indicator::after {
            content: "▼";
            color: var(--accent-primary);
          }

          tbody tr {
            border-bottom: 1px solid var(--border-subtle);
            transition: background-color 0.15s;
          }

          tbody tr:hover {
            background: var(--bg-hover);
          }

          tbody tr:last-child {
            border-bottom: none;
          }

          tbody td {
            padding: 14px 18px;
            vertical-align: middle;
            color: var(--text-primary);
          }

          .cell-index {
            font-family: var(--font-mono);
            font-size: 12px;
            color: var(--text-muted);
            width: 48px;
          }

          .cell-loc {
            word-break: break-all;
            min-width: 320px;
          }

          .loc-link {
            color: var(--text-primary);
            text-decoration: none;
            font-family: var(--font-mono);
            font-size: 13px;
            transition: color 0.15s;
          }

          .loc-link:hover {
            color: var(--accent-primary);
            text-decoration: underline;
          }

          /* Badges */
          .badge {
            display: inline-flex;
            align-items: center;
            padding: 3px 8px;
            border-radius: var(--radius-sm);
            font-size: 11px;
            font-weight: 600;
            font-family: var(--font-mono);
            letter-spacing: 0.02em;
            text-transform: uppercase;
          }

          .badge-locale {
            border: 1px solid transparent;
          }

          .badge-locale-en { background: rgba(56, 189, 248, 0.15); color: #38bdf8; border-color: rgba(56, 189, 248, 0.3); }
          .badge-locale-ru { background: rgba(248, 113, 113, 0.15); color: #f87171; border-color: rgba(248, 113, 113, 0.3); }
          .badge-locale-zh { background: rgba(251, 146, 60, 0.15); color: #fb923c; border-color: rgba(251, 146, 60, 0.3); }
          .badge-locale-ko { background: rgba(167, 139, 250, 0.15); color: #a78bfa; border-color: rgba(167, 139, 250, 0.3); }
          .badge-locale-ja { background: rgba(236, 72, 153, 0.15); color: #ec4899; border-color: rgba(236, 72, 153, 0.3); }
          .badge-locale-tr { background: rgba(52, 211, 153, 0.15); color: #34d399; border-color: rgba(52, 211, 153, 0.3); }
          .badge-locale-pt-BR, .badge-locale-pt-br { background: rgba(251, 191, 36, 0.15); color: #fbbf24; border-color: rgba(251, 191, 36, 0.3); }

          .badge-priority {
            background: var(--bg-tertiary);
            border: 1px solid var(--border);
            color: var(--text-primary);
          }

          .badge-priority-high {
            background: rgba(168, 85, 247, 0.15);
            color: #c084fc;
            border-color: rgba(168, 85, 247, 0.35);
          }

          .badge-priority-mid {
            background: rgba(59, 130, 246, 0.15);
            color: #60a5fa;
            border-color: rgba(59, 130, 246, 0.3);
          }

          .badge-priority-low {
            background: rgba(113, 113, 122, 0.15);
            color: #a1a1aa;
            border-color: rgba(113, 113, 122, 0.3);
          }

          .badge-freq {
            background: var(--bg-tertiary);
            color: var(--text-secondary);
            border: 1px solid var(--border-subtle);
          }

          .badge-alternates {
            background: rgba(59, 130, 246, 0.1);
            color: #93c5fd;
            border: 1px solid rgba(59, 130, 246, 0.25);
            font-size: 11px;
            cursor: default;
          }

          .cell-date {
            font-family: var(--font-mono);
            font-size: 12px;
            color: var(--text-secondary);
            white-space: nowrap;
          }

          .no-results {
            padding: 48px 24px;
            text-align: center;
            color: var(--text-muted);
            font-size: 14px;
          }

          /* Footer */
          .footer {
            margin-top: 32px;
            text-align: center;
            font-size: 12px;
            color: var(--text-muted);
          }

          .footer a {
            color: var(--text-secondary);
            text-decoration: none;
          }

          .footer a:hover {
            color: var(--accent-primary);
          }
        ]]></style>
      </head>
      <body>
        <div class="container">
          <!-- Header Card -->
          <div class="header-card">
            <div class="header-top">
              <div class="brand-badge">
                <span class="brand-logo-dot"></span>
                <span>LadeStack SEO Infrastructure</span>
              </div>
              <div style="display: flex; gap: 8px;">
                <xsl:if test="sitemap:urlset">
                  <a href="/sitemap.xml" class="site-link">
                    <span>📑 Sitemap Index</span>
                  </a>
                </xsl:if>
                <a href="https://ladestack.in" class="site-link">
                  <span>← Back to ladestack.in</span>
                </a>
              </div>
            </div>

            <xsl:choose>
              <xsl:when test="sitemap:sitemapindex">
                <h1>XML Sitemap Index</h1>
                <p class="subtitle">
                  This sitemap index file aggregates all individual sub-sitemaps for ladestack.in.
                  Search engines (Google, Bing, Yandex) use this index to discover and parse partitioned site content.
                </p>
              </xsl:when>
              <xsl:otherwise>
                <h1>XML Sitemap</h1>
                <p class="subtitle">
                  This sitemap lists all canonical URLs, multilingual alternate hreflang tags, priorities, and update frequencies for ladestack.in.
                  Formatted with this XSL stylesheet for human inspection; search crawlers read the raw XML directly.
                </p>
              </xsl:otherwise>
            </xsl:choose>
          </div>

          <!-- Stats Grid -->
          <div class="stats-grid">
            <xsl:choose>
              <xsl:when test="sitemap:sitemapindex">
                <div class="stat-card">
                  <div class="stat-label">Sitemap Files</div>
                  <div class="stat-val"><xsl:value-of select="count(sitemap:sitemapindex/sitemap:sitemap)"/></div>
                </div>
                <div class="stat-card">
                  <div class="stat-label">Format Type</div>
                  <div class="stat-val" style="font-size: 16px; font-weight: 600;">Sitemap Index (0.9)</div>
                </div>
                <div class="stat-card">
                  <div class="stat-label">Protocol</div>
                  <div class="stat-val" style="font-size: 16px; font-weight: 600;">sitemaps.org</div>
                </div>
              </xsl:when>
              <xsl:otherwise>
                <div class="stat-card">
                  <div class="stat-label">Total URLs</div>
                  <div class="stat-val" id="stat-total"><xsl:value-of select="count(sitemap:urlset/sitemap:url)"/></div>
                </div>
                <div class="stat-card">
                  <div class="stat-label">Locales Supported</div>
                  <div class="stat-val">7</div>
                </div>
                <div class="stat-card">
                  <div class="stat-label">High Priority (≥ 0.9)</div>
                  <div class="stat-val"><xsl:value-of select="count(sitemap:urlset/sitemap:url[sitemap:priority &gt;= 0.9])"/></div>
                </div>
                <div class="stat-card">
                  <div class="stat-label">Last Updated</div>
                  <div class="stat-val" style="font-size: 14px; padding-top: 4px;">
                    <xsl:value-of select="substring(sitemap:urlset/sitemap:url[1]/sitemap:lastmod, 1, 10)"/>
                  </div>
                </div>
              </xsl:otherwise>
            </xsl:choose>
          </div>

          <!-- URL Sitemap View -->
          <xsl:if test="sitemap:urlset">
            <!-- Controls Bar -->
            <div class="controls-bar">
              <div class="controls-top">
                <div class="search-wrapper">
                  <svg class="search-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                    <circle cx="11" cy="11" r="8"></circle>
                    <line x1="21" y1="21" x2="16.65" y2="16.65"></line>
                  </svg>
                  <input type="search" id="sitemap-search" class="search-input" placeholder="Search by URL path, slug, or locale..." />
                </div>
                <div class="count-badge" id="results-count">
                  Showing <span id="visible-count"><xsl:value-of select="count(sitemap:urlset/sitemap:url)"/></span> of <xsl:value-of select="count(sitemap:urlset/sitemap:url)"/> URLs
                </div>
              </div>

              <!-- Locale Filter Tabs -->
              <div class="locale-filters" id="locale-filters">
                <span class="filter-label">Filter Locale:</span>
                <button type="button" class="filter-btn active" data-locale="all">
                  All <span class="filter-count" id="count-all"><xsl:value-of select="count(sitemap:urlset/sitemap:url)"/></span>
                </button>
                <button type="button" class="filter-btn" data-locale="en">
                  EN (English) <span class="filter-count" id="count-en">0</span>
                </button>
                <button type="button" class="filter-btn" data-locale="ru">
                  RU (Russian) <span class="filter-count" id="count-ru">0</span>
                </button>
                <button type="button" class="filter-btn" data-locale="zh">
                  ZH (Chinese) <span class="filter-count" id="count-zh">0</span>
                </button>
                <button type="button" class="filter-btn" data-locale="ko">
                  KO (Korean) <span class="filter-count" id="count-ko">0</span>
                </button>
                <button type="button" class="filter-btn" data-locale="ja">
                  JA (Japanese) <span class="filter-count" id="count-ja">0</span>
                </button>
                <button type="button" class="filter-btn" data-locale="tr">
                  TR (Turkish) <span class="filter-count" id="count-tr">0</span>
                </button>
                <button type="button" class="filter-btn" data-locale="pt-BR">
                  PT-BR (Portuguese) <span class="filter-count" id="count-pt-br">0</span>
                </button>
              </div>
            </div>

            <!-- Main URLs Table -->
            <div class="table-card">
              <div class="table-responsive">
                <table id="sitemap-table">
                  <thead>
                    <tr>
                      <th class="no-sort" style="width: 48px;">#</th>
                      <th data-sort="loc">URL / Location <span class="sort-indicator"></span></th>
                      <th data-sort="locale" style="width: 100px;">Locale <span class="sort-indicator"></span></th>
                      <th data-sort="priority" style="width: 110px;">Priority <span class="sort-indicator"></span></th>
                      <th data-sort="changefreq" style="width: 120px;">Changefreq <span class="sort-indicator"></span></th>
                      <th data-sort="alternates" style="width: 130px;">Hreflang <span class="sort-indicator"></span></th>
                      <th data-sort="lastmod" style="width: 130px;">Last Modified <span class="sort-indicator"></span></th>
                    </tr>
                  </thead>
                  <tbody id="sitemap-tbody">
                    <xsl:for-each select="sitemap:urlset/sitemap:url">
                      <xsl:variable name="loc" select="sitemap:loc"/>
                      <!-- Detect locale from path -->
                      <xsl:variable name="detectedLocale">
                        <xsl:choose>
                          <xsl:when test="contains($loc, '/ru/') or substring($loc, string-length($loc) - 2) = '/ru'">ru</xsl:when>
                          <xsl:when test="contains($loc, '/zh/') or substring($loc, string-length($loc) - 2) = '/zh'">zh</xsl:when>
                          <xsl:when test="contains($loc, '/ko/') or substring($loc, string-length($loc) - 2) = '/ko'">ko</xsl:when>
                          <xsl:when test="contains($loc, '/ja/') or substring($loc, string-length($loc) - 2) = '/ja'">ja</xsl:when>
                          <xsl:when test="contains($loc, '/tr/') or substring($loc, string-length($loc) - 2) = '/tr'">tr</xsl:when>
                          <xsl:when test="contains($loc, '/pt-BR/') or substring($loc, string-length($loc) - 5) = '/pt-BR'">pt-BR</xsl:when>
                          <xsl:otherwise>en</xsl:otherwise>
                        </xsl:choose>
                      </xsl:variable>

                      <xsl:variable name="priorityVal" select="sitemap:priority"/>
                      <xsl:variable name="priorityClass">
                        <xsl:choose>
                          <xsl:when test="$priorityVal &gt;= 0.9">badge-priority-high</xsl:when>
                          <xsl:when test="$priorityVal &gt;= 0.6">badge-priority-mid</xsl:when>
                          <xsl:otherwise>badge-priority-low</xsl:otherwise>
                        </xsl:choose>
                      </xsl:variable>

                      <xsl:variable name="alternatesCount" select="count(xhtml:link)"/>

                      <tr data-loc="{$loc}"
                          data-locale="{$detectedLocale}"
                          data-priority="{$priorityVal}"
                          data-changefreq="{sitemap:changefreq}"
                          data-alternates="{$alternatesCount}"
                          data-lastmod="{sitemap:lastmod}">
                        <td class="cell-index"><xsl:value-of select="position()"/></td>
                        <td class="cell-loc">
                          <a href="{$loc}" target="_blank" rel="noopener" class="loc-link">
                            <xsl:value-of select="$loc"/>
                          </a>
                        </td>
                        <td>
                          <span class="badge badge-locale badge-locale-{$detectedLocale}">
                            <xsl:value-of select="$detectedLocale"/>
                          </span>
                        </td>
                        <td>
                          <span class="badge badge-priority {$priorityClass}">
                            <xsl:choose>
                              <xsl:when test="$priorityVal != ''"><xsl:value-of select="$priorityVal"/></xsl:when>
                              <xsl:otherwise>0.5</xsl:otherwise>
                            </xsl:choose>
                          </span>
                        </td>
                        <td>
                          <span class="badge badge-freq">
                            <xsl:value-of select="sitemap:changefreq"/>
                          </span>
                        </td>
                        <td>
                          <xsl:choose>
                            <xsl:when test="$alternatesCount &gt; 0">
                              <span class="badge badge-alternates" title="{$alternatesCount} hreflang alternate links">
                                <xsl:value-of select="$alternatesCount"/> langs
                              </span>
                            </xsl:when>
                            <xsl:otherwise>
                              <span style="color: var(--text-muted); font-size: 12px;">—</span>
                            </xsl:otherwise>
                          </xsl:choose>
                        </td>
                        <td class="cell-date">
                          <xsl:value-of select="substring(sitemap:lastmod, 1, 10)"/>
                        </td>
                      </tr>
                    </xsl:for-each>
                  </tbody>
                </table>
              </div>
              <div id="no-results" class="no-results" style="display: none;">
                No URLs found matching your current filter and search query.
              </div>
            </div>
          </xsl:if>

          <!-- Sitemap Index View -->
          <xsl:if test="sitemap:sitemapindex">
            <div class="table-card">
              <div class="table-responsive">
                <table>
                  <thead>
                    <tr>
                      <th style="width: 48px;">#</th>
                      <th>Sitemap File Location</th>
                      <th style="width: 180px;">Last Modified</th>
                    </tr>
                  </thead>
                  <tbody>
                    <xsl:for-each select="sitemap:sitemapindex/sitemap:sitemap">
                      <tr>
                        <td class="cell-index"><xsl:value-of select="position()"/></td>
                        <td class="cell-loc">
                          <a href="{sitemap:loc}" class="loc-link">
                            <xsl:value-of select="sitemap:loc"/>
                          </a>
                        </td>
                        <td class="cell-date">
                          <xsl:value-of select="substring(sitemap:lastmod, 1, 10)"/>
                        </td>
                      </tr>
                    </xsl:for-each>
                  </tbody>
                </table>
              </div>
            </div>
          </xsl:if>

          <!-- Footer -->
          <div class="footer">
            <p>Generated for <a href="https://ladestack.in">ladestack.in</a> · Sitemaps XML Protocol 0.9 · Styled via XSLT</p>
          </div>
        </div>

        <!-- Progressive Enhancement Script -->
        <script type="text/javascript"><![CDATA[
          (function() {
            const table = document.getElementById('sitemap-table');
            if (!table) return;

            const tbody = document.getElementById('sitemap-tbody');
            const rows = Array.from(tbody.querySelectorAll('tr'));
            const searchInput = document.getElementById('sitemap-search');
            const filterBtns = document.querySelectorAll('.filter-btn');
            const visibleCountEl = document.getElementById('visible-count');
            const noResultsEl = document.getElementById('no-results');

            let currentLocale = 'all';
            let currentSearch = '';
            let currentSortCol = null;
            let currentSortDir = 'asc';

            // Calculate and display locale counts
            const counts = { all: rows.length, en: 0, ru: 0, zh: 0, ko: 0, ja: 0, tr: 0, 'pt-br': 0 };
            rows.forEach(row => {
              const loc = (row.getAttribute('data-locale') || '').toLowerCase();
              if (counts[loc] !== undefined) {
                counts[loc]++;
              }
            });

            for (const [loc, count] of Object.entries(counts)) {
              const id = 'count-' + loc;
              const el = document.getElementById(id);
              if (el) el.textContent = count;
            }

            function updateFilters() {
              let visibleCount = 0;
              const query = currentSearch.toLowerCase().trim();

              rows.forEach((row) => {
                const rowLocale = (row.getAttribute('data-locale') || '').toLowerCase();
                const rowLoc = (row.getAttribute('data-loc') || '').toLowerCase();

                const targetLocale = currentLocale.toLowerCase();
                const matchesLocale = targetLocale === 'all' || rowLocale === targetLocale;
                const matchesSearch = !query || rowLoc.includes(query) || rowLocale.includes(query);

                if (matchesLocale && matchesSearch) {
                  row.style.display = '';
                  visibleCount++;
                } else {
                  row.style.display = 'none';
                }
              });

              if (visibleCountEl) visibleCountEl.textContent = visibleCount;
              if (noResultsEl) {
                noResultsEl.style.display = visibleCount === 0 ? 'block' : 'none';
              }
            }

            // Locale button clicks
            filterBtns.forEach(btn => {
              btn.addEventListener('click', () => {
                filterBtns.forEach(b => b.classList.remove('active'));
                btn.classList.add('active');
                currentLocale = btn.getAttribute('data-locale');
                updateFilters();
              });
            });

            // Search input
            if (searchInput) {
              searchInput.addEventListener('input', (e) => {
                currentSearch = e.target.value;
                updateFilters();
              });
            }

            // Column Sorting
            const headers = table.querySelectorAll('th[data-sort]');
            headers.forEach(th => {
              th.addEventListener('click', () => {
                const colKey = th.getAttribute('data-sort');
                if (currentSortCol === colKey) {
                  currentSortDir = currentSortDir === 'asc' ? 'desc' : 'asc';
                } else {
                  currentSortCol = colKey;
                  currentSortDir = 'asc';
                }

                headers.forEach(h => {
                  h.classList.remove('sorted-asc', 'sorted-desc');
                });
                th.classList.add(currentSortDir === 'asc' ? 'sorted-asc' : 'sorted-desc');

                rows.sort((a, b) => {
                  let valA = a.getAttribute('data-' + colKey) || '';
                  let valB = b.getAttribute('data-' + colKey) || '';

                  if (colKey === 'priority' || colKey === 'alternates') {
                    const numA = parseFloat(valA) || 0;
                    const numB = parseFloat(valB) || 0;
                    return currentSortDir === 'asc' ? numA - numB : numB - numA;
                  }

                  if (colKey === 'lastmod') {
                    const dateA = new Date(valA).getTime() || 0;
                    const dateB = new Date(valB).getTime() || 0;
                    return currentSortDir === 'asc' ? dateA - dateB : dateB - dateA;
                  }

                  const cmp = valA.localeCompare(valB);
                  return currentSortDir === 'asc' ? cmp : -cmp;
                });

                // Re-append rows in sorted order and update row index numbers
                rows.forEach((row, i) => {
                  tbody.appendChild(row);
                  const idxCell = row.querySelector('.cell-index');
                  if (idxCell) idxCell.textContent = i + 1;
                });
              });
            });
          })();
        ]]></script>
      </body>
    </html>
  </xsl:template>
</xsl:stylesheet>
