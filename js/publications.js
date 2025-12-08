// --- Configuration ---
// Data is now loaded from js/publications_data.js via the global variable PUBLICATIONS_DATA_LOCAL

// Note: IMG_BASE and getImg() are provided globally by js/common.js

let PUBLICATIONS_DATA = []; 
let currentYear = null;
let years = [];

// -------------------------
// Core Rendering Functions
// -------------------------

function renderAuthors(authors) {
    if (!authors || authors.length === 0) return '';
    const author_count = authors.length;
    let author_string = '';

    if (author_count === 1) {
        author_string = authors[0];
    } else if (author_count === 2) {
        author_string = `${authors[0]} and ${authors[1]}`;
    } else {
        for (let i = 0; i < author_count; i++) {
            if (i === author_count - 1) {
                author_string += ` and ${authors[i]}`;
            } else if (i === 0) {
                author_string += authors[i];
            } else {
                author_string += `, ${authors[i]}`;
            }
        }
    }
    return `<p class="mb-2 text-gray-700"><small>${author_string}</small></p>`;
}

function renderPublication(p) {
    const trackHtml = p.track && p.track !== "Etc." ? 
        `<tr><td><p class="m-0"><small><b class="text-blue-800">${p.track} Track</b></small></p></td></tr>` : '';

    const factorValue = p.Factor && p.Factor[1] !== null && p.Factor[1] !== undefined ? p.Factor[1] : 0;
    const factorText = p.Factor && p.Factor[0] ? p.Factor[0] : '';
    
    const factorHtml = p.Factor && factorText !== "" && factorValue !== 0 ?
        `<tr><td><p class="m-0"><small><b class="text-blue-500">${factorText}${factorValue}</b></small></p></td></tr>` : '';

    const abstractHtml = p.abstract ? `
        <tr>
            <td>
                <span class="abstract-toggle" onclick="toggleAbstract(this)">
                    <i class="fas fa-chevron-down"></i> <small>Show abstract</small>
                </span>
                <div class="abstract-content">
                    <p class="text-gray-600 text-sm text-justify leading-relaxed">
                        ${p.abstract}
                    </p>
                </div>
            </td>
        </tr>` : '';

    // Using global getImg() from common.js
    const imgUrl = p.img ? getImg(p.img) : '';
    
    const imgHtml = p.img ? `
        <div class="publication-img-container">
            <div class="publication-img-wrapper" onclick="openModal('${imgUrl}', '${p.title.replace(/'/g, "\\'")}')">
                <img loading="lazy" src="${imgUrl}" alt="${p.title}" class="publication-img" onerror="this.style.display='none';this.parentElement.style.display='none'">
            </div>
        </div>` : '';

    const venueLinkStart = p.links && p.links.conf ? `<a href="${p.links.conf}" target="_blank" class="hover:underline text-blue-700">` : '';
    const venueLinkEnd = p.links && p.links.conf ? `</a>` : '';
    const venueText = `${p.venue_full || ''} ${p.venue ? `(${p.venue})` : ''}${p.location ? `, ${p.location}` : ''}, ${p.year}`;

    return `
        <div class="publication-item">
            <div class="publication-details">
                <table>
                    <thead>
                        <tr><th class="text-lg text-gray-900 pb-2"><b>${p.title}</b></th></tr>
                    </thead>
                    <tbody>
                        <tr><td>${renderAuthors(p.authors)}</td></tr>
                        <tr><td><p class="m-0 text-justify mb-1"><small><b>${venueLinkStart}${venueText}${venueLinkEnd}</b></small></p></td></tr>
                        ${trackHtml}
                        ${factorHtml}
                        ${abstractHtml}
                    </tbody>
                </table>
            </div>
            ${imgHtml}
        </div>`;
}

function renderYearSection(year, list) {
    const container = document.getElementById('publications-content');
    let yearSection = document.getElementById(`year-${year}`);
    
    if (!yearSection) {
        yearSection = document.createElement('div');
        yearSection.id = `year-${year}`;
        yearSection.classList.add('year-section');
        container.appendChild(yearSection);
    } else {
        yearSection.innerHTML = '';
    }

    const headingHtml = `
        <div class="flex items-center gap-4 mb-6">
            <h4 class="text-2xl font-bold text-gray-800 whitespace-nowrap">
                ${year === 'older' ? '2017 & Earlier' : year}
            </h4>
            <div class="h-px bg-gray-300 w-full"></div>
        </div>`;

    const publicationsHtml = list.map(p => renderPublication(p)).join('');
    yearSection.innerHTML = headingHtml + publicationsHtml;
}


// -------------------------
// Navigation & Logic
// -------------------------

// Search Functionality
function filterPublications(query) {
    const container = document.getElementById('publications-content');
    const pagination = document.getElementById('pagination-buttons');
    
    if (!query) {
        // Restore view
        if (pagination) pagination.style.display = 'flex';
        
        // Clear search results view
        const searchResults = document.getElementById('search-results-section');
        if (searchResults) searchResults.remove();

        // Show current year
        if (currentYear) showYear(currentYear);
        else if (years.length > 0) showYear(years[0]);
        return;
    }

    // Hide pagination and all year sections during search
    if (pagination) pagination.style.display = 'none';
    document.querySelectorAll('.year-section').forEach(el => el.style.display = 'none');

    // Clear previous search results if any
    const existingResults = document.getElementById('search-results-section');
    if (existingResults) existingResults.remove();

    const lowerQuery = query.toLowerCase();
    const results = PUBLICATIONS_DATA.filter(p => 
        (p.title && p.title.toLowerCase().includes(lowerQuery)) || 
        (p.authors && p.authors.some(a => a.toLowerCase().includes(lowerQuery))) ||
        (p.venue && p.venue.toLowerCase().includes(lowerQuery)) ||
        (p.venue_full && p.venue_full.toLowerCase().includes(lowerQuery))
    );

    const searchSection = document.createElement('div');
    searchSection.id = 'search-results-section';
    searchSection.className = 'year-section active'; // Re-use styles

    if (results.length === 0) {
        searchSection.innerHTML = `<div class="text-center text-gray-500 py-10 text-lg">No publications found matching "${query}".</div>`;
    } else {
        searchSection.innerHTML = `
        <div class="flex items-center gap-4 mb-6">
            <h4 class="text-2xl font-bold text-gray-800 whitespace-nowrap">Search Results (${results.length})</h4>
            <div class="h-px bg-gray-300 w-full"></div>
        </div>`;
        
        // Sort by year descending for search results
        results.sort((a, b) => b.year - a.year);
        searchSection.innerHTML += results.map(p => renderPublication(p)).join('');
    }
    
    container.appendChild(searchSection);
}

// Abstract toggle
window.toggleAbstract = function(button) {
    const content = button.nextElementSibling;
    const icon = button.querySelector('i');
    const textSpan = button.querySelector('small');

    if (content) {
        content.classList.toggle('open');
        if (content.classList.contains('open')) {
            textSpan.innerText = 'Hide abstract';
            icon.classList.remove('fa-chevron-down');
            icon.classList.add('fa-chevron-up');
        } else {
            textSpan.innerText = 'Show abstract';
            icon.classList.remove('fa-chevron-up');
            icon.classList.add('fa-chevron-down');
        }
    }
};

function collectYears() {
    if (PUBLICATIONS_DATA.length === 0) return;

    const rawYears = PUBLICATIONS_DATA.map(p => p.year).filter(y => y !== undefined && y !== null);
    const uniqueYears = Array.from(new Set(rawYears));
    
    const activeYears = uniqueYears.filter(y => y > 2017);
    const olderExists = uniqueYears.some(y => y <= 2017);

    activeYears.sort((a, b) => b - a);

    years = activeYears;
    if (olderExists) {
        years.push('older');
    }
}

function generateYearButtons() {
    const paginationDiv = document.querySelector('.pagination');
    if (!paginationDiv) return;
    
    let buttonHtml = `<button onclick="previousYear()" id="prevBtn" title="Previous Year"><i class="fas fa-arrow-left"></i></button>`;
    
    years.forEach((y, index) => {
        const label = y === 'older' ? '≤ 2017' : y;
        buttonHtml += `<button onclick="showYear('${y}')" class="year-btn" data-year="${y}">${label}</button>`;
    });

    buttonHtml += `<button onclick="nextYear()" id="nextBtn" title="Next Year"><i class="fas fa-arrow-right"></i></button>`;
    paginationDiv.innerHTML = buttonHtml;
}

// Initialize - Uses Local Data
function initializePublications() {
    const loadingDiv = document.getElementById('publications-content');
    
    try {
        // LOAD DATA LOCALLY
        if (typeof PUBLICATIONS_DATA_LOCAL !== 'undefined') {
            PUBLICATIONS_DATA = PUBLICATIONS_DATA_LOCAL;
        } else {
            throw new Error("Local publication data not found.");
        }
        
        if (!PUBLICATIONS_DATA || PUBLICATIONS_DATA.length === 0) {
             loadingDiv.innerHTML = '<p class="text-center text-gray-500 py-10">No publications data found.</p>';
             return;
        }

        collectYears();
        generateYearButtons();

        const sections = {};
        PUBLICATIONS_DATA.forEach(p => {
            const yearKey = p.year > 2017 ? p.year : 'older';
            if (!sections[yearKey]) {
                sections[yearKey] = [];
            }
            sections[yearKey].push(p);
        });

        // Clear loading message
        loadingDiv.innerHTML = ''; 

        Object.entries(sections).forEach(([year, list]) => {
            list.sort((a, b) => b.year - a.year); 
            renderYearSection(year, list);
        });

        const hashYear = (location.hash || '').replace('#', '');
        const initial = hashYear && years.includes(hashYear) ? hashYear : (years.length ? years[0] : null);

        if (initial) {
            showYear(initial);
        } else {
            if(years.length === 0) {
                    loadingDiv.innerHTML = '<p class="text-center text-gray-500 py-10">No publications found.</p>';
            } else {
                    showYear(years[0]);
            }
            updateNavigationButtons(); 
        }
        
        // Enable Search Input
        const searchInput = document.getElementById('searchInput');
        if(searchInput) {
            searchInput.disabled = false;
            searchInput.placeholder = "Search by title, author, or venue...";
        }

    } catch (error) {
        console.error("Failed to load publications data:", error);
        loadingDiv.innerHTML = 
            `<div class="text-center py-10 text-red-600 bg-red-50 rounded-lg border border-red-100 mx-4">
                <i class="fas fa-exclamation-circle text-3xl mb-3"></i>
                <p class="font-bold">Error loading publications</p>
                <p class="text-sm text-gray-600 mt-2">Ensure js/publications_data.js is loaded correctly.</p>
            </div>`;
    }
}

function showYear(year) {
    // Remove search results if they exist
    const searchResults = document.getElementById('search-results-section');
    if (searchResults) {
        searchResults.remove();
        // Restore pagination visibility
        const pagination = document.getElementById('pagination-buttons');
        if(pagination) pagination.style.display = 'flex';
        // Clear search input
        const searchInput = document.getElementById('searchInput');
        if(searchInput && searchInput.value !== '') searchInput.value = '';
    }

    document.querySelectorAll('.year-section').forEach(section => {
        section.classList.remove('active');
        // Ensure display is managed correctly with search logic
        section.style.display = 'none'; 
    });
    
    const selected = document.getElementById('year-' + year);
    if (selected) {
        selected.classList.add('active');
        selected.style.display = 'block';
    }

    document.querySelectorAll('.year-btn').forEach(btn => btn.classList.remove('active'));
    const activeBtn = document.querySelector(`.year-btn[data-year="${year}"]`);
    if (activeBtn) activeBtn.classList.add('active');

    currentYear = year;
    updateNavigationButtons();
    
    const contentArea = document.getElementById('publications-content');
    if(contentArea.offsetTop > 0) {
            const contentTop = contentArea.offsetTop - 180; // Adjusted for sticky header
            window.scrollTo({ top: contentTop, behavior: 'smooth' });
    }

    if (location.hash !== '#' + year) {
        history.replaceState(null, '', '#' + year);
    }
}

window.previousYear = function() {
    const i = years.indexOf(currentYear);
    if (i > 0) showYear(years[i - 1]);
}

window.nextYear = function() {
    const i = years.indexOf(currentYear);
    if (i >= 0 && i < years.length - 1) showYear(years[i + 1]);
}

function updateNavigationButtons() {
    const i = years.indexOf(currentYear);
    const prevBtn = document.getElementById('prevBtn');
    const nextBtn = document.getElementById('nextBtn');
    if (prevBtn) prevBtn.disabled = i <= 0;
    if (nextBtn) nextBtn.disabled = i === -1 || i >= years.length - 1;
}

// Modal Logic
window.openModal = function(src, title) {
    const modal = document.getElementById('lightbox-modal');
    const modalImg = document.getElementById('lightbox-img');
    const modalCaption = document.getElementById('lightbox-caption');
    
    modalImg.src = src;
    modalCaption.textContent = title || '';
    modal.classList.remove('hidden');
    document.body.style.overflow = 'hidden'; 
}

window.closeModal = function() {
    const modal = document.getElementById('lightbox-modal');
    modal.classList.add('hidden');
    document.body.style.overflow = '';
    setTimeout(() => {
        document.getElementById('lightbox-img').src = '';
    }, 300);
}

// Event listeners
window.addEventListener('hashchange', () => {
    const y = (location.hash || '').replace('#', '');
    if (years.length > 0 && y && years.includes(y)) showYear(y);
});

document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') closeModal();
    if (e.key === 'ArrowLeft') window.previousYear();
    if (e.key === 'ArrowRight') window.nextYear();
});

document.addEventListener('DOMContentLoaded', () => {
    initializePublications();
    
    const searchInput = document.getElementById('searchInput');
    if(searchInput) {
        searchInput.addEventListener('input', (e) => filterPublications(e.target.value));
    }
});