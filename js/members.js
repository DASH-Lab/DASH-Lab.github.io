document.addEventListener('DOMContentLoaded', () => {
    renderAllMembers();

    // --- Modal Logic ---
    const modal = document.getElementById('join-modal');
    const closeBtn = document.getElementById('close-modal');
    const confirmBtn = document.getElementById('modal-confirm');

    const toggleModal = (show) => {
        if (!modal) return;
        if (show) {
            modal.classList.add('active');
            document.body.style.overflow = 'hidden';
        } else {
            modal.classList.remove('active');
            document.body.style.overflow = '';
        }
    };

    // Attach click events to all "Join the Lab" triggers
    document.addEventListener('click', (e) => {
        if (e.target.closest('.join-lab-trigger')) {
            window.open('https://forms.gle/RYCUasAUbsFhJtyb6', '_blank');
        }
    });

    if (closeBtn) closeBtn.addEventListener('click', () => toggleModal(false));
    if (confirmBtn) confirmBtn.addEventListener('click', () => toggleModal(false));

    if (modal) {
        modal.addEventListener('click', (e) => {
            if (e.target === modal) toggleModal(false);
        });
    }
});

function renderAllMembers() {
    if (typeof industryAlumni !== 'undefined') {
        renderIndustryMembers(industryAlumni, 'industry-alumni-container');
    }

    const roleRp = (typeof DashI18n !== 'undefined') ? DashI18n.t('members.role.rp') : 'Research Professor';
    const rolePhd = (typeof DashI18n !== 'undefined') ? DashI18n.t('members.role.phd') : 'Ph.D. Student';
    const roleMs = (typeof DashI18n !== 'undefined') ? DashI18n.t('members.role.ms') : 'Masters Student';
    const roleUg = (typeof DashI18n !== 'undefined') ? DashI18n.t('members.role.ug') : 'Undergraduate Student';

    renderMembers(researchProfessors, 'research-professors-container', roleRp, true);
    renderMembers(phdStudents, 'phd-students-container', rolePhd, true);
    renderMembers(msStudents, 'ms-students-container', roleMs, true);

    if (typeof unsergraduatedStudents !== 'undefined') {
        renderMembers(unsergraduatedStudents, 'ug-students-container', roleUg, true);
    }

    renderSupervisionTable(masterSupervision, 'master-supervision-table-body');
    renderAlumniTable(alumni, 'alumni-table-body');
}

window.addEventListener('dash:langchange', () => {
    renderAllMembers();
});

/**
 * Splits a comma-separated interests string into individual chip labels.
 */
function parseInterestChips(interests) {
    if (!interests) return [];
    return String(interests)
        .split(',')
        .map(item => item.trim())
        .filter(Boolean);
}

/**
 * Renders research-interest chips for a member card.
 */
function renderInterestChips(interests) {
    const localized = (typeof DashMemberI18n !== 'undefined')
        ? DashMemberI18n.localizeInterests(interests)
        : interests;
    const chips = parseInterestChips(localized);
    if (!chips.length) return '';
    const aria = (typeof DashI18n !== 'undefined') ? DashI18n.t('members.interestsAria') : 'Research interests';
    return `
        <div class="member-interests" role="list" aria-label="${aria}">
            ${chips.map(interest =>
                `<span class="member-interest-chip" role="listitem">${interest}</span>`
            ).join('')}
        </div>
    `;
}

/**
 * Renders a grid of member cards
 */
function renderMembers(data, containerId, defaultRole, showJoinLab = false) {
    const container = document.getElementById(containerId);
    if (!container || !data) return;

    let membersHtml = data.map(member => {
        const primaryLink = member.link || member.homepage || null;
        const dept = (typeof DashMemberI18n !== 'undefined')
            ? DashMemberI18n.localizeMemberField(member, 'dept')
            : (member.dept || '');
        const role = (typeof DashMemberI18n !== 'undefined')
            ? DashMemberI18n.localizeRole(member.role || defaultRole)
            : (member.role || defaultRole);
        return `
        <div class="member-card">
            <div class="flex flex-col items-center">
                ${primaryLink
            ? `<a href="${primaryLink}" target="_blank" class="block group mb-3">
                         <div class="overflow-hidden rounded-full w-32 h-32 border-4 border-white shadow-md transition-transform group-hover:scale-105">
                            <img loading="lazy" src="${getImg(member.img)}" onerror="this.src='${getImg('img/member_images/Dashlab_logo.jpg')}'" alt="${member.name}" class="w-full h-full object-cover">
                         </div>
                       </a>`
            : `<div class="overflow-hidden rounded-full w-32 h-32 mb-3 border-4 border-white shadow-md">
                         <img loading="lazy" src="${getImg(member.img)}" onerror="this.src='${getImg('img/member_images/Dashlab_logo.jpg')}'" alt="${member.name}" class="w-full h-full object-cover">
                       </div>`
        }
                
                <div class="mb-2">
                    ${primaryLink
            ? `<a href="${primaryLink}" target="_blank" class="text-lg font-bold text-blue-700 hover:text-blue-900 leading-tight">${member.name}</a>`
            : `<span class="text-lg font-bold text-gray-800 leading-tight">${member.name}</span>`
        }
                    <p class="text-[10px] font-bold text-gray-400 uppercase tracking-widest mt-0.5">${role}</p>
                </div>

                ${dept ? `<p class="text-[11px] text-gray-500 italic mb-2 text-center px-4">${dept}</p>` : ''}
                ${renderInterestChips(member.interests)}
            </div>

            <div class="mt-4 pt-3 border-t border-gray-50 text-center">
                ${(member.link || member.linkedin || member.homepage) ? `
                <div class="flex justify-center items-center gap-3 mb-2">
                    ${member.link
            ? `<a href="${member.link}" target="_blank" rel="noopener noreferrer" title="Google Scholar" class="text-blue-600 hover:text-blue-800 transition-colors" aria-label="${member.name} Google Scholar">
                            <i class="fas fa-graduation-cap text-sm"></i>
                       </a>`
            : ''}
                    ${member.linkedin
            ? `<a href="${member.linkedin}" target="_blank" rel="noopener noreferrer" title="LinkedIn" class="text-blue-600 hover:text-blue-800 transition-colors" aria-label="${member.name} LinkedIn">
                            <i class="fab fa-linkedin text-sm"></i>
                       </a>`
            : ''}
                    ${member.homepage
            ? `<a href="${member.homepage}" target="_blank" rel="noopener noreferrer" title="Homepage" class="text-blue-600 hover:text-blue-800 transition-colors" aria-label="${member.name} Homepage">
                            <i class="fas fa-globe text-sm"></i>
                       </a>`
            : ''}
                </div>` : ''}
                <p class="text-[10px] text-gray-400 font-mono truncate">${member.email}</p>
            </div>
        </div>
    `;
    }).join('');

    if (showJoinLab) {
        const joinLab = (typeof DashI18n !== 'undefined') ? DashI18n.t('members.joinLab') : 'Join the Lab';
        const openPos = (typeof DashI18n !== 'undefined') ? DashI18n.t('members.openPositions') : 'Open Positions';
        membersHtml += `
            <div class="member-card join-lab-trigger cursor-pointer border-2 border-dashed border-blue-200 bg-blue-50/30 hover:bg-blue-50 hover:border-blue-400 transition-all flex flex-col items-center justify-center p-8 group">
                <div class="w-16 h-16 rounded-full bg-blue-100 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                    <i class="fas fa-user-plus text-2xl text-blue-600"></i>
                </div>
                <strong class="text-blue-700 text-lg">${joinLab}</strong>
                <p class="text-[10px] text-gray-400 font-bold uppercase tracking-widest mt-1">${openPos}</p>
            </div>
        `;
    }

    container.innerHTML = membersHtml;
}

/**
 * Renders prominent industry position cards
 */
function renderIndustryMembers(data, containerId) {
    const container = document.getElementById(containerId);
    if (!container) return;
    const placement = (typeof DashI18n !== 'undefined') ? DashI18n.t('members.industryPlacement') : 'Industry Placement';

    container.innerHTML = data.map(member => {
        const role = (typeof DashMemberI18n !== 'undefined')
            ? DashMemberI18n.localizeRole(member.role)
            : member.role;
        return `
        <div class="member-card relative overflow-hidden group transition-all hover:shadow-xl hover:-translate-y-1">
            <div class="absolute -top-4 -right-4 opacity-[0.05] group-hover:opacity-10 transition-opacity transform rotate-12">
                 <i class="${member.companyLogo} text-8xl" style="color: ${member.companyColor}"></i>
            </div>

            <div class="flex flex-col items-center relative z-10">
                ${member.link
            ? `<a href="${member.link}" target="_blank" class="block group mb-4">
                         <div class="overflow-hidden rounded-full w-28 h-28 border-4 border-white shadow-lg transition-transform group-hover:scale-105">
                            <img loading="lazy" src="${getImg(member.img)}" onerror="this.src='${getImg('img/member_images/Dashlab_logo.jpg')}'" alt="${member.name}" class="w-full h-full object-cover">
                         </div>
                       </a>`
            : `<div class="overflow-hidden rounded-full w-28 h-28 mb-4 border-4 border-white shadow-lg">
                         <img loading="lazy" src="${getImg(member.img)}" onerror="this.src='${getImg('img/member_images/Dashlab_logo.jpg')}'" alt="${member.name}" class="w-full h-full object-cover">
                       </div>`
        }
                
                <div class="text-center px-4 w-full">
                    <h4 class="text-xl font-black text-gray-900 leading-tight mb-1">${member.name}</h4>
                    <p class="text-[10px] font-black text-blue-600 uppercase tracking-[0.2em] mb-4">${role}</p>
                    
                    <div class="flex flex-col gap-2 items-center">
                        <div class="inline-flex items-center gap-2 px-4 py-2 bg-gray-50 rounded-2xl border border-gray-100 shadow-inner group-hover:bg-white transition-colors w-fit">
                            <i class="${member.companyLogo} text-sm" style="color: ${member.companyColor}"></i>
                            <span class="text-xs font-black text-gray-700 tracking-tight">${member.company}</span>
                        </div>

                        ${member.location ? `
                        <div class="flex gap-1.5 flex-wrap justify-center mt-1">
                            <span class="location-badge bg-blue-50 text-blue-700 border border-blue-100">
                                <i class="fas fa-globe-americas mr-1"></i>${member.location}
                            </span>
                            <span class="location-badge bg-gray-50 text-gray-600 border border-gray-100">
                                <i class="fas fa-map-marker-alt mr-1"></i>${member.city}
                            </span>
                        </div>
                        ` : ''}
                    </div>
                </div>
            </div>

            <div class="mt-6 pt-4 border-t border-gray-50 flex justify-center">
                <span class="text-[10px] font-bold text-gray-300 uppercase tracking-widest">${placement}</span>
            </div>
        </div>
    `;
    }).join('');
}

/**
 * Renders the Master Supervision Table
 */
function renderSupervisionTable(data, tbodyId) {
    const tbody = document.getElementById(tbodyId);
    if (!tbody || !data) return;
    const lbName = (typeof DashI18n !== 'undefined') ? DashI18n.t('members.th.name') : 'Name';
    const lbMajor = (typeof DashI18n !== 'undefined') ? DashI18n.t('members.th.major') : 'Major';
    const lbEmp = (typeof DashI18n !== 'undefined') ? DashI18n.t('members.th.employment2') : 'Employment';
    const lbTopic = (typeof DashI18n !== 'undefined') ? DashI18n.t('members.th.topic') : 'Topic';

    tbody.innerHTML = data.map(item => {
        const major = (typeof DashMemberI18n !== 'undefined')
            ? DashMemberI18n.localizeDept(item.major)
            : item.major;
        const topic = (typeof DashMemberI18n !== 'undefined')
            ? DashMemberI18n.localizeInterestChip(item.topic)
            : item.topic;
        return `
        <tr>
            <td data-label="${lbName}" class="font-bold text-gray-800">${item.name}</td>
            <td data-label="${lbMajor}" class="text-gray-600">${major}</td>
            <td data-label="${lbEmp}" class="text-blue-700 font-medium">${item.employment}</td>
            <td data-label="${lbTopic}" class="text-gray-500 italic text-sm">${topic}</td>
        </tr>
    `;
    }).join('');
}

/**
 * Renders the Alumni Table
 */
function renderAlumniTable(data, tbodyId) {
    const tbody = document.getElementById(tbodyId);
    if (!tbody || !data) return;
    const lbName = (typeof DashI18n !== 'undefined') ? DashI18n.t('members.th.name') : 'Name';
    const lbMajor = (typeof DashI18n !== 'undefined') ? DashI18n.t('members.th.major') : 'Major';
    const lbEmp = (typeof DashI18n !== 'undefined') ? DashI18n.t('members.th.employment') : 'Employment';

    tbody.innerHTML = data.map(item => {
        const major = (typeof DashMemberI18n !== 'undefined')
            ? (DashMemberI18n.localizeDept(item.major) || DashMemberI18n.localizeInterestChip(item.major) || item.major)
            : item.major;
        return `
        <tr>
            <td data-label="${lbName}">
                ${item.link
            ? `<a href="${item.link}" target="_blank" class="text-blue-600 hover:text-blue-800 font-bold">${item.name}</a>`
            : `<span class="font-bold text-gray-800">${item.name}</span>`
        }
            </td>
            <td data-label="${lbMajor}" class="text-gray-600">${major}</td>
            <td data-label="${lbEmp}">
                ${item.employmentLink
            ? `<a href="${item.employmentLink}" target="_blank" class="text-blue-600 hover:underline font-medium">${item.employment}</a>`
            : `<span class="font-medium text-gray-700">${item.employment}</span>`
        }
            </td>
        </tr>
    `;
    }).join('');
}
