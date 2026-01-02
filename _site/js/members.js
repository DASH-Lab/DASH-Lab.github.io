document.addEventListener('DOMContentLoaded', () => {
    // Render standard member grids
    renderMembers(researchProfessors, 'research-professors-container', 'Research Professor');
    renderMembers(phdStudents, 'phd-students-container', 'Ph.D. Student');
    renderMembers(msStudents, 'ms-students-container', 'Masters Student');
    
    // Render tables
    renderSupervisionTable(masterSupervision, 'master-supervision-table-body');
    renderAlumniTable(alumni, 'alumni-table-body');
});

/**
 * Renders a grid of member cards
 */
function renderMembers(data, containerId, defaultRole) {
    const container = document.getElementById(containerId);
    if (!container) return;

    container.innerHTML = data.map(member => `
        <div class="member-card">
            ${member.link 
                ? `<a href="${member.link}" target="_blank" class="block group">
                     <img loading="lazy" src="${getImg(member.img)}" onerror="this.src='${getImg('img/member_images/Dashlab_logo.jpg')}'" alt="${member.name}" class="member-photo mx-auto transition-transform group-hover:scale-105">
                     <strong class="text-lg text-blue-700 group-hover:text-blue-900">${member.name}</strong>
                   </a>`
                : `<img loading="lazy" src="${getImg(member.img)}" onerror="this.src='${getImg('img/member_images/Dashlab_logo.jpg')}'" alt="${member.name}" class="member-photo mx-auto">
                   <strong class="text-lg">${member.name}</strong>`
            }
            ${member.role || defaultRole ? `<p class="text-sm text-gray-500 mb-2">${member.role || defaultRole}</p>` : ''}
            <p class="text-xs text-gray-600 mb-1">${member.dept}</p>
            <p class="text-sm font-semibold mb-2">${member.interests}</p>
            <p class="text-xs text-gray-700">${member.email}</p>
        </div>
    `).join('');
}

/**
 * Renders the Master Supervision Table
 */
function renderSupervisionTable(data, tbodyId) {
    const tbody = document.getElementById(tbodyId);
    if (!tbody) return;

    tbody.innerHTML = data.map(item => `
        <tr>
            <td data-label="Name">${item.name}</td>
            <td data-label="Major">${item.major}</td>
            <td data-label="Employment">${item.employment}</td>
            <td data-label="Topic">${item.topic}</td>
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
                    ? `<a href="${item.link}" target="_blank" class="text-blue-600 hover:text-blue-800 font-semibold">${item.name}</a>` 
                    : item.name
                }
            </td>
            <td data-label="Major">${item.major}</td>
            <td data-label="Employment">
                ${item.employmentLink 
                    ? `<a href="${item.employmentLink}" target="_blank" class="text-blue-600 hover:text-blue-800">${item.employment}</a>` 
                    : item.employment
                }
            </td>
        </tr>
    `).join('');
}