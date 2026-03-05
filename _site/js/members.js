document.addEventListener('DOMContentLoaded', () => {
    // Render standard member grids
    renderMembers(researchProfessors, 'research-professors-container', 'Research Professor');
    renderMembers(phdStudents, 'phd-students-container', 'Ph.D. Student');
    renderMembers(msStudents, 'ms-students-container', 'Masters Student');
    
    // Render Undergraduate Students (Handles the variable typo 'unsergraduatedStudents')
    if (typeof unsergraduatedStudents !== 'undefined') {
        renderMembers(unsergraduatedStudents, 'ug-students-container', 'Undergraduate Student');
    }
    
    // Render tables
    renderSupervisionTable(masterSupervision, 'master-supervision-table-body');
    renderAlumniTable(alumni, 'alumni-table-body');

    // --- Modal Logic ---
    const modal = document.getElementById('join-modal');
    const openBtn = document.getElementById('join-lab-trigger');
    const closeBtn = document.getElementById('close-modal');
    const confirmBtn = document.getElementById('modal-confirm');

    const toggleModal = (show) => {
        if (show) {
            modal.classList.add('active');
            document.body.style.overflow = 'hidden'; // Stop body scroll
        } else {
            modal.classList.remove('active');
            document.body.style.overflow = '';
        }
    };

    if (openBtn) openBtn.addEventListener('click', () => toggleModal(true));
    if (closeBtn) closeBtn.addEventListener('click', () => toggleModal(false));
    if (confirmBtn) confirmBtn.addEventListener('click', () => toggleModal(false));

    // Close on clicking the backdrop
    modal.addEventListener('click', (e) => {
        if (e.target === modal) toggleModal(false);
    });
});

/**
 * Renders a grid of member cards
 */
function renderMembers(data, containerId, defaultRole) {
    const container = document.getElementById(containerId);
    if (!container) return;

    // Check if we are in the Undergraduate container to preserve the recruitment card
    const isUG = containerId === 'ug-students-container';
    const recruitmentCard = isUG ? document.getElementById('join-lab-trigger') : null;

    const membersHtml = data.map(member => `
        <div class="member-card">
            <div class="flex flex-col items-center">
                ${member.link 
                    ? `<a href="${member.link}" target="_blank" class="block group mb-3">
                         <div class="overflow-hidden rounded-full w-32 h-32 border-4 border-white shadow-md transition-transform group-hover:scale-105">
                            <img loading="lazy" src="${getImg(member.img)}" onerror="this.src='${getImg('img/member_images/Dashlab_logo.jpg')}'" alt="${member.name}" class="w-full h-full object-cover">
                         </div>
                       </a>`
                    : `<div class="overflow-hidden rounded-full w-32 h-32 mb-3 border-4 border-white shadow-md">
                         <img loading="lazy" src="${getImg(member.img)}" onerror="this.src='${getImg('img/member_images/Dashlab_logo.jpg')}'" alt="${member.name}" class="w-full h-full object-cover">
                       </div>`
                }
                
                <div class="mb-2">
                    ${member.link 
                        ? `<a href="${member.link}" target="_blank" class="text-lg font-bold text-blue-700 hover:text-blue-900 leading-tight">${member.name}</a>`
                        : `<span class="text-lg font-bold text-gray-800 leading-tight">${member.name}</span>`
                    }
                    <p class="text-[10px] font-bold text-gray-400 uppercase tracking-widest mt-0.5">${member.role || defaultRole}</p>
                </div>

                ${member.dept ? `<p class="text-[11px] text-gray-500 italic mb-2">${member.dept}</p>` : ''}
                <div class="px-3 py-1 bg-blue-50 rounded-full">
                    <p class="text-[10px] font-semibold text-blue-700 leading-tight">${member.interests}</p>
                </div>
            </div>

            <div class="mt-4 pt-3 border-t border-gray-50">
                <p class="text-[10px] text-gray-400 font-mono truncate">${member.email}</p>
            </div>
        </div>
    `).join('');

    // Prepend members to the container, keeping the recruitment card at the end if it's UG
    container.innerHTML = membersHtml;
    if (isUG && recruitmentCard) {
        container.appendChild(recruitmentCard);
    }
}

/**
 * Renders the Master Supervision Table
 */
function renderSupervisionTable(data, tbodyId) {
    const tbody = document.getElementById(tbodyId);
    if (!tbody) return;

    tbody.innerHTML = data.map(item => `
        <tr>
            <td data-label="Name" class="font-bold text-gray-800">${item.name}</td>
            <td data-label="Major" class="text-gray-600">${item.major}</td>
            <td data-label="Employment" class="text-blue-700 font-medium">${item.employment}</td>
            <td data-label="Topic" class="text-gray-500 italic text-sm">${item.topic}</td>
        </tr>
    `).join('');
}

/**
 * Renders the Alumni Table
 */
function renderAlumniTable(data, tbodyId) {
    const tbody = document.getElementById(tbodyId);
    if (!tbody) return;

    tbody.innerHTML = data.map(item => `
        <tr>
            <td data-label="Name">
                ${item.link 
                    ? `<a href="${item.link}" target="_blank" class="text-blue-600 hover:text-blue-800 font-bold">${item.name}</a>` 
                    : `<span class="font-bold text-gray-800">${item.name}</span>`
                }
            </td>
            <td data-label="Major" class="text-gray-600">${item.major}</td>
            <td data-label="Employment">
                ${item.employmentLink 
                    ? `<a href="${item.employmentLink}" target="_blank" class="text-blue-600 hover:underline font-medium">${item.employment}</a>` 
                    : `<span class="font-medium text-gray-700">${item.employment}</span>`
                }
            </td>
        </tr>
    `).join('');
}