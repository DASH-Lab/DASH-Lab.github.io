/**
 * Heroface Restoration Page Logic
 * Reads variables from heroface_data.js and renders the content.
 */

// --- Global Functions for Image Modal (Fixed) ---
window.enlargeImage = function(src) {
    const modal = document.getElementById('image-modal');
    const modalImg = document.getElementById('modal-img');
    if (modal && modalImg) {
        modal.style.display = "flex"; // Uses flex to center defined in CSS
        modalImg.src = src;
    }
};

window.closeModal = function() {
    const modal = document.getElementById('image-modal');
    if (modal) {
        modal.style.display = "none";
    }
};

// --- Main Render Function ---
function renderHerofacePage() {
    // Check if the main data object exists
    if (typeof herofaceProjectInfo === 'undefined') {
        console.error("Heroface data is missing. Please ensure js/heroface_data.js is loaded.");
        return;
    }

    // 1. Render Header (Info)
    const headerContainer = document.getElementById('header-section');
    if (headerContainer) {
        headerContainer.innerHTML = `
            <h1 class="text-3xl md:text-4xl font-bold text-gray-900 mb-2 text-center break-keep">
                ${herofaceProjectInfo.title}
            </h1>
            <p class="text-center text-base md:text-lg font-semibold text-gray-700 mb-6 break-keep">
                ${herofaceProjectInfo.researchers}
            </p>
            <p class="text-gray-700 leading-relaxed mb-6 text-justify break-keep">
                ${herofaceProjectInfo.description}
            </p>
            <div class="text-center mb-10">
                <img loading="lazy" src="${getImg(herofaceProjectInfo.mainImage)}" 
                     alt="Main Project Image" 
                     class="max-w-full h-auto rounded-lg shadow-xl mx-auto clickable-image" 
                     onclick="enlargeImage(this.src)" 
                     onerror="this.style.display='none'"/>
                ${herofaceProjectInfo.mainImageCaption ? `<p class="text-sm text-gray-500 mt-2">${herofaceProjectInfo.mainImageCaption}</p>` : ''}
            </div>
        `;
    }

    // 2. Render Methods (Already a Grid)
    const methodsContainer = document.getElementById('methods-grid');
    if (methodsContainer && typeof herofaceMethods !== 'undefined') {
        methodsContainer.innerHTML = herofaceMethods.map(method => `
            <div class="method-card overflow-hidden bg-white rounded-lg shadow-sm border border-gray-100 p-4">
                <p class="text-xl font-bold pb-4 text-center text-gray-800">${method.title}</p>
                <div class="flex justify-center items-center h-64 bg-gray-50 rounded-md">
                    <!-- Images are contained to prevent cropping diagrams -->
                    <img src="${getImg(method.img)}" 
                         alt="${method.title} Diagram" 
                         class="h-full max-w-[95%] object-contain object-center clickable-image hover:scale-105 transition-transform cursor-pointer" 
                         onclick="enlargeImage(this.src)" 
                         onerror="this.src=''"/>
                </div>
            </div>
        `).join('');
    }

    // 3. Render Media (Video & News Grid)
    const mediaContainer = document.getElementById('media-section');
    if (mediaContainer && typeof herofaceMedia !== 'undefined') {
        // Generate News Items as Grid Cards instead of List Items
        const newsItems = herofaceMedia.links.map(link => `
            <div class="bg-white p-5 rounded-lg shadow-sm border border-gray-200 hover:shadow-md transition-shadow duration-200 flex flex-col h-full">
                <h4 class="font-bold text-gray-800 text-md mb-3 line-clamp-2" title="${link.title}">
                    <i class="fas fa-newspaper text-blue-600 mr-2"></i>${link.title}
                </h4>
                <a href="${link.url}" target="_blank" class="text-blue-500 hover:text-blue-700 text-sm break-all mt-auto flex items-center">
                    <span class="truncate mr-1">${link.url}</span>
                    <i class="fas fa-external-link-alt text-xs"></i>
                </a>
            </div>
        `).join('');

        mediaContainer.innerHTML = `
            <!-- Video -->
            <div class="video-responsive mx-auto mb-10 max-w-3xl shadow-lg rounded-lg overflow-hidden">
                <iframe src="${herofaceMedia.youtube}" title="YouTube video player" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
            </div>

            <!-- News Grid Container -->
            <div class="mb-10">
                <h3 class="text-2xl font-bold text-gray-800 mb-6 border-l-4 border-blue-600 pl-4">Media Coverage</h3>
                <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
                    ${newsItems}
                </div>
            </div>

            <!-- Extra Image in a Box Container -->
            <div class="mt-8 max-w-3xl mx-auto">
                <div class="bg-white p-4 rounded-lg shadow-sm border border-gray-200">
                    <img loading="lazy" src="${getImg(herofaceMedia.extraImage)}" 
                         alt="Additional Project Image" 
                         class="w-full h-64 md:h-96 object-cover object-top rounded-lg clickable-image cursor-pointer hover:opacity-95 transition-opacity" 
                         onclick="enlargeImage(this.src)" />
                    <p class="text-xs text-gray-400 mt-2 text-center"><i class="fas fa-search-plus mr-1"></i>Click to enlarge</p>
                </div>
            </div>
        `;
    }

    // 4. Render Partners
    const partnersContainer = document.getElementById('partners-grid');
    if (partnersContainer && typeof herofaceParticipants !== 'undefined') {
        partnersContainer.innerHTML = herofaceParticipants.map(participant => `
            <!-- UPDATED: w-auto allows them to sit side-by-side on mobile. Reduced padding. -->
            <div class="text-center w-auto px-2 sm:px-0">
                <img src="${getImg(participant.img)}" 
                     alt="${participant.name}" 
                     class="h-14 sm:h-24 w-auto max-w-[100px] sm:max-w-[180px] object-contain mx-auto transition-all duration-300 hover:scale-105" 
                     onerror="this.style.display='none'"/>
            </div>
        `).join('');
    }
}

// Initialize when DOM is ready
document.addEventListener('DOMContentLoaded', renderHerofacePage);