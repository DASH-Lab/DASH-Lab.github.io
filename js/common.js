// --- Configuration ---
// Set to empty string for local development so paths are relative (e.g. "img/...")
const IMG_BASE = "";

// --- LOGO CONFIGURATION ---
// Change these filenames to match your actual files in the img/dash_logo/ folder
const LOGO_NORMAL = "img/dash_logo/lab_logo_text.png"; // Default logo
const LOGO_CHRISTMAS = "img/dash_logo/dash_xmas23.gif"; // Christmas/Winter logo

/**
 * Global helper to get image paths
 * Handles both local relative paths and absolute paths if needed in future
 */
function getImg(path) {
    if (!path) return '';
    
    // Remove leading slash if present to ensure relative path works correctly
    // e.g. "/img/logo.png" becomes "img/logo.png"
    const cleanPath = path.startsWith('/') ? path.substring(1) : path;
    
    // Combine base (empty) with clean path
    return `${IMG_BASE}${cleanPath}`;
}

/**
 * Determines which logo to display based on the current date.
 * Returns the path to the appropriate logo image.
 */
function getDynamicLogo() {
    const today = new Date();
    const month = today.getMonth(); // 0-11 (0 is January, 11 is December)

    // Logic: Show Christmas logo during December (Month 11)
    // You can adjust the range here (e.g., Month 11 is Dec, Month 0 is Jan)
    if (month === 11) { 
        return getImg(LOGO_CHRISTMAS);
    } else {
        return getImg(LOGO_NORMAL);
    }
}

/**
 * Northern Hemisphere season from the current date (SKKU / Korea).
 * Spring Mar–May, Summer Jun–Aug, Autumn Sep–Nov, Winter Dec–Feb.
 */
function getCurrentSeason() {
    const month = new Date().getMonth(); // 0-11
    if (month >= 2 && month <= 4) return 'spring';
    if (month >= 5 && month <= 7) return 'summer';
    if (month >= 8 && month <= 10) return 'autumn';
    return 'winter';
}

const NAV_SEASON_STORAGE_KEY = 'dash-nav-season';
const NAV_SEASONS = ['spring', 'summer', 'autumn', 'winter'];

/**
 * Normalize season query values (fall → autumn, etc.).
 * Returns null for unknown / empty; 'auto' clears override.
 */
function normalizeSeasonValue(raw) {
    if (raw == null) return null;
    const v = String(raw).trim().toLowerCase();
    if (!v) return null;
    if (v === 'auto' || v === 'date' || v === 'default') return 'auto';
    if (v === 'fall' || v === 'autumn') return 'autumn';
    if (NAV_SEASONS.includes(v)) return v;
    return null;
}

/**
 * Resolve active navbar season:
 * 1) ?season= query (also updates localStorage)
 * 2) localStorage dash-nav-season
 * 3) calendar season
 */
function resolveNavSeason() {
    let querySeason = null;
    try {
        querySeason = normalizeSeasonValue(new URLSearchParams(window.location.search).get('season'));
    } catch (e) { /* ignore */ }

    if (querySeason === 'auto') {
        try { localStorage.removeItem(NAV_SEASON_STORAGE_KEY); } catch (e) { /* ignore */ }
        return getCurrentSeason();
    }
    if (querySeason) {
        try { localStorage.setItem(NAV_SEASON_STORAGE_KEY, querySeason); } catch (e) { /* ignore */ }
        return querySeason;
    }

    try {
        const stored = normalizeSeasonValue(localStorage.getItem(NAV_SEASON_STORAGE_KEY));
        if (stored && stored !== 'auto') return stored;
    } catch (e) { /* ignore */ }

    return getCurrentSeason();
}

function shouldShowSeasonDemo() {
    try {
        const params = new URLSearchParams(window.location.search);
        if (params.get('seasonDemo') === '1' || params.get('seasonDemo') === 'true') return true;
        if (params.has('season')) return true;
    } catch (e) { /* ignore */ }
    return false;
}

/**
 * Adaptive particle budget — full effect on capable devices, lighter on
 * low-end / reduced-motion / narrow viewports so first paint stays responsive.
 */
function getSeasonParticleCount(season) {
    const base = { spring: 16, summer: 14, autumn: 18, winter: 20 };
    let count = base[season] || 16;
    try {
        if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
            return Math.min(4, count);
        }
        const cores = navigator.hardwareConcurrency || 4;
        const mem = navigator.deviceMemory; // Chromium only; undefined elsewhere
        const saveData = !!(navigator.connection && navigator.connection.saveData);
        if (saveData || (typeof mem === 'number' && mem <= 2) || cores <= 2) {
            count = Math.max(6, Math.round(count * 0.45));
        } else if (cores <= 4 || (typeof mem === 'number' && mem <= 4)) {
            count = Math.max(8, Math.round(count * 0.65));
        }
        if (window.matchMedia('(max-width: 768px)').matches) {
            count = Math.max(6, Math.round(count * 0.7));
        }
    } catch (e) { /* ignore */ }
    return count;
}

/**
 * Builds lightweight seasonal particles for the full navbar overlay.
 * Left/delay/duration vary so particles spread across the bar width.
 * Delays include a small base offset so the first paint isn't a burst.
 */
function buildSeasonParticles(season) {
    const count = getSeasonParticleCount(season);
    let html = '';
    for (let i = 1; i <= count; i++) {
        // Spread across full navbar width with slight jitter
        const left = ((i - 1) / count) * 96 + (i % 3) * 1.2 + 1;
        // Stagger over ~5s, with 0.3s base so overlay can fade in first
        const delay = (0.3 + ((i * 0.43) % 5.1)).toFixed(2);
        const durationBase = { spring: 6.2, summer: 3.8, autumn: 5.8, winter: 5.2 }[season] || 5.5;
        const duration = (durationBase + (i % 5) * 0.4).toFixed(2);
        html += `<span class="nav-season-particle nav-season-particle--${((i - 1) % 6) + 1}" style="left:${left.toFixed(1)}%;animation-delay:${delay}s;animation-duration:${duration}s" aria-hidden="true"></span>`;
    }
    return html;
}

/** Run after paint / when the browser is idle (falls back to setTimeout). */
function runWhenIdle(fn, timeoutMs) {
    const timeout = typeof timeoutMs === 'number' ? timeoutMs : 1800;
    if (typeof requestIdleCallback === 'function') {
        requestIdleCallback(() => { try { fn(); } catch (e) { /* ignore */ } }, { timeout });
    } else {
        setTimeout(() => { try { fn(); } catch (e) { /* ignore */ } }, Math.min(timeout, 200));
    }
}

/** Defer work until window load, then idle — keeps third-party off the critical path. */
function scheduleAfterLoad(fn, timeoutMs) {
    const run = () => runWhenIdle(fn, timeoutMs);
    if (document.readyState === 'complete') run();
    else window.addEventListener('load', run, { once: true });
}

/**
 * Fill navbar seasonal particles after first paint (nav shell paints first).
 * applyNavSeason() still regenerates immediately on demo / season changes.
 */
function scheduleSeasonParticles() {
    const fill = () => {
        const nav = document.getElementById('main-nav');
        if (!nav) return;
        const fx = nav.querySelector('.nav-season-fx');
        if (!fx || fx.childElementCount > 0) return;
        const season = nav.getAttribute('data-season') || resolveNavSeason();
        fx.innerHTML = buildSeasonParticles(season);
    };
    // Double rAF ≈ after next paint, then idle so CSS animations don't contend with LCP
    requestAnimationFrame(() => {
        requestAnimationFrame(() => runWhenIdle(fill, 1200));
    });
}

/**
 * Apply a season to #main-nav: update data-season and regenerate particles.
 * @param {string} season - spring|summer|autumn|winter|auto
 * @param {{persist?: boolean, updateUrl?: boolean, demoChoice?: string}} options
 */
function applyNavSeason(season, options) {
    const opts = options || {};
    const next = normalizeSeasonValue(season);
    const resolved = (!next || next === 'auto') ? getCurrentSeason() : next;
    const nav = document.getElementById('main-nav');
    if (!nav) return resolved;

    nav.setAttribute('data-season', resolved);

    let fx = nav.querySelector('.nav-season-fx');
    if (!fx) {
        fx = document.createElement('span');
        fx.className = 'nav-season-fx';
        fx.setAttribute('aria-hidden', 'true');
        nav.prepend(fx);
    }
    fx.innerHTML = buildSeasonParticles(resolved);
    fx.style.animation = 'none';
    void fx.offsetWidth;
    fx.style.animation = '';

    if (opts.persist) {
        try {
            if (!next || next === 'auto') localStorage.removeItem(NAV_SEASON_STORAGE_KEY);
            else localStorage.setItem(NAV_SEASON_STORAGE_KEY, resolved);
        } catch (e) { /* ignore */ }
    }

    if (opts.updateUrl) {
        try {
            const url = new URL(window.location.href);
            if (!next || next === 'auto') url.searchParams.delete('season');
            else url.searchParams.set('season', resolved);
            if (document.getElementById('dash-season-demo')) {
                url.searchParams.set('seasonDemo', '1');
            }
            window.history.replaceState({}, document.title, url.pathname + url.search + url.hash);
        } catch (e) { /* ignore */ }
    }

    const demoChoice = opts.demoChoice || ((next && next !== 'auto') ? resolved : 'auto');
    const demo = document.getElementById('dash-season-demo');
    if (demo) {
        demo.querySelectorAll('[data-season-choice]').forEach((btn) => {
            const on = btn.getAttribute('data-season-choice') === demoChoice;
            btn.classList.toggle('is-active', on);
            btn.setAttribute('aria-pressed', on ? 'true' : 'false');
        });
    }

    return resolved;
}

function initSeasonDemo() {
    if (!shouldShowSeasonDemo()) return;
    if (document.getElementById('dash-season-demo')) return;

    const panel = document.createElement('div');
    panel.id = 'dash-season-demo';
    panel.className = 'dash-season-demo';
    panel.setAttribute('role', 'group');
    panel.setAttribute('aria-label', 'Navbar season preview');
    panel.innerHTML = `
        <span class="dash-season-demo-label">Season FX</span>
        <div class="dash-season-demo-btns">
            <button type="button" data-season-choice="spring">Spring</button>
            <button type="button" data-season-choice="summer">Summer</button>
            <button type="button" data-season-choice="autumn">Autumn</button>
            <button type="button" data-season-choice="winter">Winter</button>
            <button type="button" data-season-choice="auto">Auto</button>
        </div>
    `;
    document.body.appendChild(panel);

    panel.addEventListener('click', (e) => {
        const btn = e.target.closest('[data-season-choice]');
        if (!btn) return;
        const choice = btn.getAttribute('data-season-choice');
        applyNavSeason(choice, { persist: true, updateUrl: true, demoChoice: choice });
    });

    let currentChoice = 'auto';
    try {
        const q = normalizeSeasonValue(new URLSearchParams(window.location.search).get('season'));
        if (q && q !== 'auto') currentChoice = q;
        else {
            const stored = normalizeSeasonValue(localStorage.getItem(NAV_SEASON_STORAGE_KEY));
            if (stored && stored !== 'auto') currentChoice = stored;
        }
    } catch (e) { /* ignore */ }

    panel.querySelectorAll('[data-season-choice]').forEach((b) => {
        const on = b.getAttribute('data-season-choice') === currentChoice;
        b.classList.toggle('is-active', on);
        b.setAttribute('aria-pressed', on ? 'true' : 'false');
    });
}

// --- HTML Templates ---

/* * NAVIGATION BAR HTML 
 * - Sticky top
 * - Responsive (Hamburger menu on mobile)
 * - Updated: "Home" link now points to "./" for a cleaner root URL.
 * - Updated: Dynamic Logo
 * - Updated: Removed bg-white and gray text classes to allow CSS to control colors
 */
const _navSeasonAtLoad = resolveNavSeason();
const navbarHTML = `
<nav class="shadow-md fixed w-full z-50 top-0 transition-all duration-300" id="main-nav" data-season="${_navSeasonAtLoad}">
    <!-- Seasonal FX shell — particles filled after first paint (see scheduleSeasonParticles) -->
    <span class="nav-season-fx" aria-hidden="true"></span>

    <div class="w-full px-8 relative z-10">
        <div class="flex justify-between items-center h-20">
            <!-- Logo / Brand -->
            <a href="./" class="nav-logo-link flex items-center gap-2 group" aria-label="DASH Lab Home">
                <span class="nav-logo-wrap">
                    <img id="nav-logo" src="${getDynamicLogo()}" alt="DASH LAB Logo" class="w-auto object-contain transition-transform duration-300 group-hover:scale-110">
                </span>
            </a>

            <!-- Desktop Menu -->
            <!-- Removed text-gray-600 and hover:text-blue-600 to let style.css handle colors -->
            <div class="hidden md:flex space-x-8 items-center">
                <a href="./" class="nav-link font-medium transition">Home</a>
                <a href="Professor" class="nav-link font-medium transition">Professor</a>
                <a href="Datasets" class="nav-link font-medium transition">Datasets</a>
                <a href="Members" class="nav-link font-medium transition">Members</a>
                <a href="News" class="nav-link font-medium transition">News</a>
                <a href="Projects" class="nav-link font-medium transition">Projects</a>
                <a href="Publication" class="nav-link font-medium transition">Publications</a>
            </div>

            <!-- Mobile Menu Button -->
            <!-- Added text-white for visibility on dark bg -->
            <div class="md:hidden flex items-center">
                <button id="mobile-menu-btn" class="text-white hover:text-blue-200 focus:outline-none p-2 rounded-md">
                    <i class="fas fa-bars text-2xl"></i>
                </button>
            </div>
        </div>
    </div>

    <!-- Mobile Menu Dropdown -->
    <!-- Kept bg-white for mobile dropdown so it remains distinct -->
    <div id="mobile-menu" class="hidden md:hidden bg-white border-t border-gray-100 shadow-xl relative z-10">
        <div class="px-4 pt-2 pb-4 space-y-2">
             <!-- Changed href to "./" for Home -->
            <a href="./" class="block px-3 py-2 text-base font-medium text-gray-600 hover:text-blue-600 hover:bg-blue-50 rounded-md transition">Home</a>
            <a href="Professor" class="block px-3 py-2 text-base font-medium text-gray-600 hover:text-blue-600 hover:bg-blue-50 rounded-md transition">Professor</a>
            <a href="Datasets" class="block px-3 py-2 text-base font-medium text-gray-600 hover:text-blue-600 hover:bg-blue-50 rounded-md transition">Datasets</a>
            <a href="Members" class="block px-3 py-2 text-base font-medium text-gray-600 hover:text-blue-600 hover:bg-blue-50 rounded-md transition">Members</a>
            <a href="News" class="block px-3 py-2 text-base font-medium text-gray-600 hover:text-blue-600 hover:bg-blue-50 rounded-md transition">News</a>
            <a href="Projects" class="block px-3 py-2 text-base font-medium text-gray-600 hover:text-blue-600 hover:bg-blue-50 rounded-md transition">Projects</a>
            <a href="Publication" class="block px-3 py-2 text-base font-medium text-gray-600 hover:text-blue-600 hover:bg-blue-50 rounded-md transition">Publications</a>
        </div>
    </div>
</nav>
<!-- Spacer to prevent content hiding behind fixed nav -->
<div class="h-20"></div>
`;

/* * FOOTER HTML 
 * - Extracted from Home.html
 */
const footerHTML = `
<footer class="dash-footer">
    <div class="container mx-auto px-4 max-w-6xl">
        <div class="grid md:grid-cols-3 gap-8 text-center md:text-left">
            
            <!-- Column 1: Contact Info -->
            <div>
                <h5 class="text-xl font-bold mb-4 border-b border-blue-600 inline-block pb-1">DASH Lab</h5>
                <p class="text-gray-300 text-sm leading-relaxed mb-4">
                    N Center 86401, Sungkyunkwan University<br>
                    2066 Seobu-ro Jangan-gu Suwon, South Korea
                </p>
            </div>

            <!-- Column 2: Visitors Map (MapMyVisitors live embed; see initMapMyVisitorsMap) -->
            <div class="flex flex-col items-center">
                <h5 class="text-xl font-bold mb-4 border-b border-blue-600 inline-block pb-1">Visitors Map</h5>
                <div id="mmv-map-container" class="visitor-map" aria-label="Visitor map"></div>
            </div>

            <!-- Column 3: Links -->
            <div>
                <h5 class="text-xl font-bold mb-4 border-b border-blue-600 inline-block pb-1">Quick Links</h5>
                <ul class="space-y-2">
                    <li><a class="footer-link block" href="https://x.com/TheDASHLab" target="_top"><i class="fab fa-twitter w-5"></i> DASH LAB Twitter</a></li>
                    <li><a class="footer-link block" href="https://gradschool.skku.edu/grad/" target="_top"><i class="fas fa-university w-5"></i> SKKU Graduate School</a></li>
                    <li><a class="footer-link block" href="https://sci-cube.skku.edu/sci-cube/index.do" target="_top"><i class="fas fa-database w-5"></i> Applied Data Science Dept</a></li>
                    <li><a class="footer-link block" href="https://cs.skku.edu/" target="_top"><i class="fas fa-laptop-code w-5"></i> CS & Engineering Dept</a></li>
                    <li><a class="footer-link block" href="https://ai.skku.edu/ai/index.do" target="_top"><i class="fas fa-brain w-5"></i> Dept of AI</a></li>
                </ul>
            </div>
        </div>
    </div>

    <div class="border-t border-blue-900 mt-10 pt-6">
        <div class="container mx-auto px-4 max-w-6xl text-sm flex justify-between items-center flex-wrap gap-4">
            <div class="text-gray-400 w-full md:w-auto text-center md:text-left">
                Made by <span class="text-white font-semibold">Dash Lab</span>
            </div>
            <div class="text-gray-400 w-full md:w-auto text-center md:text-right">
                Copyright © <span id="current-year-display"></span> <a" class="text-gray-300 hover:text-white transition-colors" target="_top">DASH-Lab</a>.
            </div>
        </div>
    </div>
</footer>
`;

// --- Logic ---

/**
 * Removes .html from the URL bar for a cleaner look
 * This runs AFTER the page loads, so the initial navigation works.
 */
function cleanUrl() {
    const path = window.location.pathname;
    const search = window.location.search || '';
    const hash = window.location.hash || '';
    // Only replace if it ends in .html AND is not index.html (since index should show as root)
    if (path.endsWith('index.html')) {
        // If it's index.html, we might want to strip it entirely to just /
        const newPath = path.substring(0, path.length - 10); // Remove 'index.html'
        window.history.replaceState({}, document.title, (newPath || '/') + search + hash);
    } else if (path.endsWith('.html')) {
        const newPath = path.substring(0, path.length - 5);
        // Use replaceState to change URL without reloading — keep query/hash (season preview)
        window.history.replaceState({}, document.title, newPath + search + hash);
    }
}

function highlightActiveLink() {
    // Get current page name (e.g., "Professor" or "index")
    let currentPath = window.location.pathname.split('/').pop();

    // Clean currentPath for comparison
    if (currentPath.endsWith('.html')) {
        currentPath = currentPath.replace('.html', '');
    }
    
    // Handle root/empty path
    if (currentPath === '' || currentPath === '/') {
        currentPath = 'index';
    }

    const links = document.querySelectorAll('.nav-link, #mobile-menu a');
    
    links.forEach(link => {
        let linkHref = link.getAttribute('href');

        // Normalize the link href for comparison
        let comparisonHref = linkHref;
        
        // Special handling for Home link "./" or "index.html"
        if (linkHref === './' || linkHref === 'index.html' || linkHref === '/' || linkHref === '') {
            comparisonHref = 'index';
        } else if (linkHref.endsWith('.html')) {
            comparisonHref = linkHref.replace('.html', '');
        }

        // Simple check: compare the base names
        if (comparisonHref === currentPath) {
            // Add 'active' class so CSS can control style (important for dark bg)
            link.classList.add('active');

            // If in mobile menu (which is white), we still want the blue text
            // But for desktop (which is dark), we rely on the CSS 'active' class
            if(link.closest('#mobile-menu')) {
                link.classList.add('bg-blue-50', 'text-blue-700');
                link.classList.remove('text-gray-600');
            }
        }
    });
}

function initMobileMenu() {
    const btn = document.getElementById('mobile-menu-btn');
    const menu = document.getElementById('mobile-menu');
    const icon = btn ? btn.querySelector('i') : null;
    
    if(btn && menu) {
        btn.addEventListener('click', () => {
            menu.classList.toggle('hidden');
            
            // Toggle Icon
            if(icon) {
                if(menu.classList.contains('hidden')) {
                    icon.classList.remove('fa-times');
                    icon.classList.add('fa-bars');
                } else {
                    icon.classList.remove('fa-bars');
                    icon.classList.add('fa-times');
                }
            }
        });
    }
}

/* MapMyVisitors footer map
 * Display + tracking are coupled: map.js → widget_call_home is what draws the
 * visitor dots and also registers the visit. map.png similarly counts
 * (Cache-Control: no-store) and is not a free “display only” API. MMV documents
 * IP-based daily uniques server-side; there is no embed flag to show dots
 * without contacting their servers.
 *
 * A prior first-party gate skipped map.js on return visits and rendered a
 * blank outline (bg image only) — that removed the dots. We restore the
 * original live embed for visuals. Soft uniqueness is MMV’s own IP/daily
 * logic; skipping their script cannot keep live dots. Click-through is forced
 * to the DASH Lab profile URL.
 */
const MMV_MAP_ID = 'J2CHa5-1pgRGbM5mUTfjBETiohBQhDbeHmo1V2Aw16o';
const MMV_SCRIPT_SRC = `https://mapmyvisitors.com/map.js?cl=ffffff&w=300&t=m&d=${MMV_MAP_ID}`;
/** Public stats page (profile_link from widget_call_home). */
const MMV_PROFILE_URL = 'https://mapmyvisitors.com/web/1c7r4';

/** Keep the live widget pointing at the DASH Lab stats page (default is homepage). */
function ensureMmvProfileLink(container) {
    const apply = () => {
        const link = container.querySelector('#mapmyvisitors-widget') ||
            document.getElementById('mapmyvisitors-widget');
        if (!link) return false;
        link.href = MMV_PROFILE_URL;
        link.target = '_blank';
        link.rel = 'noopener noreferrer';
        return true;
    };

    if (apply()) return;

    const observer = new MutationObserver(() => {
        if (apply()) observer.disconnect();
    });
    observer.observe(container, { childList: true, subtree: true });
    setTimeout(() => {
        apply();
        observer.disconnect();
    }, 20000);
}

function loadMapMyVisitorsLive(container) {
    // Must load inside <body> (not <head>) — footer injects into body
    const script = document.createElement('script');
    script.type = 'text/javascript';
    script.id = 'mapmyvisitors';
    script.src = MMV_SCRIPT_SRC;
    container.appendChild(script);
    ensureMmvProfileLink(container);
}

function initMapMyVisitorsMap() {
    const container = document.getElementById('mmv-map-container');
    if (!container || document.getElementById('mapmyvisitors')) return;

    // Clear legacy blank-snapshot / return-visit artifacts from the unique-gate experiment
    try {
        localStorage.removeItem('dash_mmv_snapshot');
        localStorage.removeItem('dash_mmv_dotted_snapshot');
        localStorage.removeItem('dash_mmv_returns');
    } catch (e) { /* ignore */ }
    // Expire old year-long “already counted” cookie so it cannot suppress the live map
    try {
        document.cookie = 'dash_mmv_unique=; Path=/; Max-Age=0; SameSite=Lax';
        document.cookie = 'dash_visitor_id=; Path=/; Max-Age=0; SameSite=Lax';
    } catch (e) { /* ignore */ }

    loadMapMyVisitorsLive(container);
}

function injectLayout() {
    // 1. Critical: navbar first so header can paint ASAP
    const navbarContainer = document.createElement('div');
    navbarContainer.innerHTML = navbarHTML;
    document.body.prepend(navbarContainer);

    // 2. Footer structure (map widget loaded later — see step 5)
    const footerContainer = document.createElement('div');
    footerContainer.innerHTML = footerHTML;
    document.body.append(footerContainer);

    // 3. Lightweight chrome
    const yearSpan = document.getElementById('current-year-display');
    if (yearSpan) yearSpan.textContent = new Date().getFullYear();
    cleanUrl();
    highlightActiveLink();
    initMobileMenu();

    // 4. Seasonal particles + demo after first paint (non-blocking)
    scheduleSeasonParticles();
    runWhenIdle(() => initSeasonDemo(), 2000);

    // 5. MapMyVisitors after load — preserve live widget / uniqueness / profile URL;
    //    only delays start so it does not compete with hero, gallery, or posters.
    scheduleAfterLoad(() => initMapMyVisitorsMap(), 2500);
}

// Run immediately when DOM is ready
document.addEventListener('DOMContentLoaded', injectLayout);