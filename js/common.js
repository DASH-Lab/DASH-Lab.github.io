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
    const day = today.getDate();

    // Logic: Show Christmas logo during December (Month 11)
    // You can adjust the range here (e.g., Month 11 is Dec, Month 0 is Jan)
    if (month === 11) { 
        return getImg(LOGO_CHRISTMAS);
    } else {
        return getImg(LOGO_NORMAL);
    }
}

// --- HTML Templates ---

/* * NAVIGATION BAR HTML 
 * - Sticky top
 * - Responsive (Hamburger menu on mobile)
 * - Updated: "Home" link now points to "./" for a cleaner root URL.
 * - Updated: Dynamic Logo
 * - Updated: Removed bg-white and gray text classes to allow CSS to control colors
 */
const navbarHTML = `
<nav class="shadow-md fixed w-full z-50 top-0 transition-all duration-300" id="main-nav">
    <div class="w-full px-8">
        <div class="flex justify-between items-center h-20">
            <!-- Logo / Brand -->
            <a href="./" class="flex items-center gap-2 group">
                <!-- Dynamic Image Logo -->
                <!-- Removed 'h-10' class to allow CSS to control height -->
                <img id="nav-logo" src="${getDynamicLogo()}" alt="DASH LAB Logo" class="w-auto object-contain transition-transform duration-300 group-hover:scale-110">

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
    <div id="mobile-menu" class="hidden md:hidden bg-white border-t border-gray-100 shadow-xl">
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

            <!-- Column 2: Visitors Map (MapMyVisitors) -->
            <div class="flex flex-col items-center">
                <h5 class="text-xl font-bold mb-4 border-b border-blue-600 inline-block pb-1">Visitors Map</h5>
                <div id="mmv-globe-container" class="visitor-globe" aria-label="Visitor globe map"></div>
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
    // Only replace if it ends in .html AND is not index.html (since index should show as root)
    if (path.endsWith('index.html')) {
        // If it's index.html, we might want to strip it entirely to just /
        const newPath = path.substring(0, path.length - 10); // Remove 'index.html'
        window.history.replaceState({}, document.title, newPath || '/');
    } else if (path.endsWith('.html')) {
        const newPath = path.substring(0, path.length - 5);
        // Use replaceState to change URL without reloading
        window.history.replaceState({}, document.title, newPath);
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

function initMapMyVisitorsGlobe() {
    const container = document.getElementById('mmv-globe-container');
    if (!container || document.getElementById('mmvst_globe')) return;

    const script = document.createElement('script');
    script.type = 'text/javascript';
    script.id = 'mmvst_globe';
    script.src = 'https://mapmyvisitors.com/globe.js?d=WSRWDykPFtA_nKHNlwSCbJFMET0v-5iX02V_2yegCd0';
    container.appendChild(script);
}

function injectLayout() {
    // 1. Inject Navbar at the very top of body
    const navbarContainer = document.createElement('div');
    navbarContainer.innerHTML = navbarHTML;
    document.body.prepend(navbarContainer);

    // 2. Inject Footer at the very bottom of body
    const footerContainer = document.createElement('div');
    footerContainer.innerHTML = footerHTML;
    document.body.append(footerContainer);

    // 3. Set Year
    const yearSpan = document.getElementById('current-year-display');
    if(yearSpan) yearSpan.textContent = new Date().getFullYear();

    // 4. Initialize interactions & cosmetic URL fix
    cleanUrl();
    highlightActiveLink();
    initMobileMenu();
    initMapMyVisitorsGlobe();
}

// Run immediately when DOM is ready
document.addEventListener('DOMContentLoaded', injectLayout);