// --- NEWS LOGIC ---
// Note: This file relies on 'newsData' (from newsdata.js) and 'galleryData' (from imagedata.js)

// --- HOME PAGE LOGIC (Dynamic News Banner) ---

let currentNewsPage = 1; // 1-based index
let newsInterval; // Variable to store the auto-play timer

function renderHomeNews() {
    // Check if newsData is loaded
    if (typeof newsData === 'undefined') {
        console.error("newsData is missing. Ensure newsdata.js is loaded in your HTML before news.js");
        return;
    }

    // Get the first 5 items from newsData
    const recentNews = newsData.slice(0, 5);
    const item = recentNews[currentNewsPage - 1]; 
    
    const newsTextElement = document.getElementById('news-text');
    
    // Hide original external buttons to fix spacing issue
    const oldPrev = document.getElementById('news-prev');
    const oldNext = document.getElementById('news-next');
    if (oldPrev) oldPrev.style.display = 'none';
    if (oldNext) oldNext.style.display = 'none';
    
    if (newsTextElement && item) {
        newsTextElement.innerHTML = `
            <div class="flex items-center justify-center gap-3 md:gap-4 max-w-full px-2">
                <!-- Content Wrapper with Highlight & Click -->
                <div onclick="openNewsModal(${currentNewsPage - 1})" 
                     class="flex items-center text-sm md:text-base space-x-2 truncate min-w-0 
                            bg-white/10 border border-white/20 rounded-full py-1 px-4 
                            cursor-pointer hover:bg-white/20 transition-colors duration-200">
                    <span class="text-xl md:text-2xl flex-shrink-0">${item.icon}</span> 
                    <span class="font-bold text-blue-300 whitespace-nowrap flex-shrink-0">${item.date}:</span>
                    <span class="truncate block min-w-0 text-left">${item.text}</span>
                </div>
            </div>
        `;
    }
}

// Start automatic cycling
function startAutoPlay() {
    if (newsInterval) clearInterval(newsInterval); // Prevent duplicates
    newsInterval = setInterval(() => {
        changeNewsPage(1, true); // true indicates auto-change
    }, 1000); // 1 seconds per slide
}

// Stop automatic cycling
function stopAutoPlay() {
    if (newsInterval) clearInterval(newsInterval);
}

function changeNewsPage(dir, isAuto = false) { 
    if (typeof newsData === 'undefined') return;

    // Limit to first 5 items
    const maxPages = Math.min(newsData.length, 5);
    
    currentNewsPage += dir; 
    
    // Loop Logic
    if (currentNewsPage < 1) {
        currentNewsPage = maxPages; // Loop to end
    } else if (currentNewsPage > maxPages) {
        currentNewsPage = 1; // Loop to start
    }
    
    renderHomeNews(); 
    
    // If the user manually clicked a button (logic kept for robustness, though buttons removed), restart timer
    if (!isAuto) {
        startAutoPlay();
    }
}

// --- CAROUSEL LOGIC (Shared for Home & News) ---

function renderCarousel(limit, selector) {
    const carouselContainer = document.querySelector(selector); // Targets specific ID
    
    // Safety check: if container missing or data missing, stop.
    if (!carouselContainer || typeof galleryData === 'undefined') return;

    // Clear existing static content if any
    carouselContainer.innerHTML = '';

    // Determine items to show
    // If limit is -1, show all. Otherwise slice.
    const imagesToShow = limit === -1 ? galleryData : galleryData.slice(0, limit);

    // Generate HTML
    const slidesHTML = imagesToShow.map(item => `
        <div class="gallery-cell" style="margin: auto;">
            <div class="cursor-pointer" onclick="openImageModal('${getImg(item.src)}')" title="Click to enlarge">
                <img loading="lazy" src="${getImg(item.src)}" onerror="this.src='${getImg(item.src)}'" alt="Event Image" />
            </div>
            <p>${item.desc}</p>
        </div>
    `).join('');

    // Inject HTML
    carouselContainer.innerHTML = slidesHTML;

    // Initialize Flickity Manually
    if (typeof Flickity !== 'undefined') {
        new Flickity(carouselContainer, {
            autoPlay: 3000,
            wrapAround: true,
            imagesLoaded: true,
            pageDots: false,
            prevNextButtons: true
        });
    }
}

// --- NEWS PAGE LOGIC (Scrollable Archive) ---

let filteredNews = [];
let currentFilter = 'All';

function filterNews(filter) {
    if (typeof newsData === 'undefined') return;

    currentFilter = filter;
    if (filter === 'All') {
        filteredNews = [...newsData];
    } else if (filter === 'Archive') {
        filteredNews = newsData.filter(item => item.year < 2024);
    } else {
        const year = parseInt(filter);
        filteredNews = newsData.filter(item => item.year === year);
    }
    
    // Render full list (scrolling handles the view)
    renderNewsArchive();
    updateFilterTabs();
}

function updateFilterTabs() {
    const tabs = document.querySelectorAll('.archive-tabs button');
    tabs.forEach(button => {
        if (button.innerText === currentFilter || button.innerText.includes(currentFilter)) {
            button.classList.add('active');
        } else {
            button.classList.remove('active');
        }
    });
}

function renderNewsArchive() {
    const container = document.getElementById('news-archive-container');
    
    // Hide pagination controls since we are using a scrollable list
    const paginationControls = document.querySelector('.pagination-controls');
    if (paginationControls) paginationControls.style.display = 'none';
    
    // Also hide page info text if it exists
    const pageInfo = document.getElementById('page-info');
    if (pageInfo && pageInfo.parentElement) pageInfo.parentElement.style.display = 'none';

    if (!container) return; // Exit if not on the News Page

    // Apply the scrollable class to the container
    container.classList.add('news-scroll-wrapper');

    // Use ALL filtered items (no pagination slicing)
    container.innerHTML = filteredNews.map(item => `
        <div class="archive-item">
            <span class="archive-icon">${item.icon}</span>
            <div class="archive-item-content text-gray-700 text-base">
                <strong class="text-base">${item.date}</strong> - 
                ${item.text}
            </div>
        </div>
    `).join('');
}

// --- MODAL LOGIC (News Details) ---

function injectNewsModal() {
    if (document.getElementById('news-detail-modal')) return;
    const modalHTML = `
        <div id="news-detail-modal" class="hidden fixed inset-0 z-[100] flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm transition-opacity duration-300">
            <div class="bg-white rounded-xl shadow-2xl max-w-lg w-full transform transition-all scale-100 p-6 relative">
                <button onclick="closeNewsModal()" class="absolute top-4 right-4 text-gray-400 hover:text-gray-600 transition-colors"><i class="fas fa-times text-2xl"></i></button>
                <div class="flex flex-col items-center text-center space-y-4 pt-2">
                    <div id="modal-news-icon" class="text-5xl mb-2"></div>
                    <div id="modal-news-date" class="text-blue-600 font-bold text-lg border-b-2 border-blue-100 pb-1"></div>
                    <div id="modal-news-text" class="text-gray-800 text-lg leading-relaxed"></div>
                </div>
                <div class="mt-6 flex justify-center">
                    <button onclick="closeNewsModal()" class="px-6 py-2 bg-gray-100 hover:bg-gray-200 text-gray-700 font-medium rounded-full transition-colors">Close</button>
                </div>
            </div>
        </div>
    `;
    document.body.insertAdjacentHTML('beforeend', modalHTML);
}

function openNewsModal(index) {
    if (typeof newsData === 'undefined') return;
    const recentNews = newsData.slice(0, 5);
    const item = recentNews[index];
    if (!item) return;
    stopAutoPlay();
    const modal = document.getElementById('news-detail-modal');
    if (modal) {
        document.getElementById('modal-news-icon').textContent = item.icon;
        document.getElementById('modal-news-date').textContent = item.date;
        document.getElementById('modal-news-text').innerHTML = item.text;
        modal.classList.remove('hidden');
    }
}

function closeNewsModal() {
    const modal = document.getElementById('news-detail-modal');
    if (modal) {
        modal.classList.add('hidden');
        startAutoPlay();
    }
}

// --- 5. IMAGE MODAL LOGIC (New) ---

function injectImageModal() {
    if (document.getElementById('image-viewer-modal')) return;
    const modalHTML = `
        <div id="image-viewer-modal" class="hidden fixed inset-0 z-[110] flex items-center justify-center p-4 bg-black/95 backdrop-blur-md transition-opacity duration-300" onclick="closeImageModal()">
            <div class="relative max-w-7xl w-full max-h-screen flex flex-col items-center justify-center">
                <!-- Close Button -->
                <button onclick="closeImageModal()" class="absolute top-4 right-4 md:-top-10 md:-right-10 text-white hover:text-gray-300 transition-colors z-50 p-2 bg-black/50 md:bg-transparent rounded-full">
                    <i class="fas fa-times text-3xl"></i>
                </button>
                <!-- Image -->
                <img id="modal-full-image" src="" alt="Full View" class="max-h-[85vh] w-auto max-w-full rounded-lg shadow-2xl object-contain animate-fade-in" onclick="event.stopPropagation()" />
            </div>
        </div>
    `;
    document.body.insertAdjacentHTML('beforeend', modalHTML);
}

function openImageModal(src) {
    const modal = document.getElementById('image-viewer-modal');
    const img = document.getElementById('modal-full-image');
    if (modal && img) {
        img.src = src;
        modal.classList.remove('hidden');
    }
}

function closeImageModal() {
    const modal = document.getElementById('image-viewer-modal');
    if (modal) {
        modal.classList.add('hidden');
        const img = document.getElementById('modal-full-image');
        if(img) setTimeout(() => img.src = '', 300); // Clear src to stop memory leak
    }
}

// --- INITIALIZATION ---

window.filterNews = filterNews;
// window.changePage = changePage; // Removed pagination logic
window.changeNewsPage = changeNewsPage; 
window.openNewsModal = openNewsModal;
window.closeNewsModal = closeNewsModal;
window.openImageModal = openImageModal;
window.closeImageModal = closeImageModal;

document.addEventListener('DOMContentLoaded', () => {
    
    // Inject Modals
    injectNewsModal();
    injectImageModal();

    // A. Init Banner (Home Page)
    const homeBanner = document.getElementById('hero-news-banner');
    if (homeBanner) {
        renderHomeNews();
        startAutoPlay();
        homeBanner.addEventListener('mouseenter', stopAutoPlay);
        homeBanner.addEventListener('mouseleave', startAutoPlay);
        homeBanner.addEventListener('touchstart', stopAutoPlay);
        homeBanner.addEventListener('touchend', startAutoPlay);
    }

    // B. Init Carousel (Home vs News)
    // Home Page: ID 'home-carousel' -> Limit 10
    const homeCarousel = document.getElementById('home-carousel');
    if (homeCarousel) {
        renderCarousel(10, '#home-carousel');
    }

    // News Page: ID 'news-carousel' -> All Images
    const newsCarousel = document.getElementById('news-carousel');
    if (newsCarousel) {
        renderCarousel(-1, '#news-carousel');
    }

    // C. Init Archive (News Page)
    if (document.getElementById('news-archive-container')) {
        filterNews('All');
    }
});