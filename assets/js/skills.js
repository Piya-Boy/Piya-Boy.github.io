async function loadSkills() {
    try {
        const response = await fetch('assets/js/skills_data.json');
        const data = await response.json();
        
        const initialItems = 12; // แสดง 12 สกิลตอนแรก
        const itemsPerPage = 6; // เพิ่มทีละ 6 สกิลเมื่อกด Show More
        let visibleItems = {
            all: initialItems,
            frontend: initialItems,
            backend: initialItems,
            others: initialItems
        };
        let currentFilter = 'all';
        
        // Function to create skill cards
        const createSkillCards = (skills, category) => {
            return skills.map(skill => {
                const iconContent = skill.icon === 'img' 
                    ? `<img src="assets/img/icons/${skill.name.toLowerCase().replace(/\s+/g, '-')}.png" alt="${skill.name}" class="skill-icon">`
                    : `<i class="${skill.icon} fa-2x mb-2"></i>`;
                
                return `
                    <div class="col-md-2 col-sm-4 col-6 skill-item" data-category="${category}">
                        <div class="skill-box">
                            ${iconContent}
                            <h4>${skill.name}</h4>
                        </div>
                    </div>
                `;
            }).join('');
        };

        // Function to show skills
        const showSkills = (filterValue = 'all') => {
            if (filterValue === 'all') {
                // Combine all skills and slice to show limited number
                const allSkills = [
                    ...data.frontend.map(skill => ({ ...skill, category: 'frontend' })),
                    ...data.backend.map(skill => ({ ...skill, category: 'backend' })),
                    ...data.others.map(skill => ({ ...skill, category: 'others' }))
                ].slice(0, visibleItems.all);

                const html = allSkills.map(skill => {
                    const iconContent = skill.icon === 'img' 
                        ? `<img src="assets/img/icons/${skill.name.toLowerCase().replace(/\s+/g, '-')}.png" alt="${skill.name}" class="skill-icon">`
                        : `<i class="${skill.icon} fa-2x mb-2"></i>`;
                    
                    return `
                        <div class="col-md-2 col-sm-4 col-6 skill-item" data-category="${skill.category}">
                            <div class="skill-box">
                                ${iconContent}
                                <h4>${skill.name}</h4>
                            </div>
                        </div>
                    `;
                }).join('');
                
                $('#skills-grid').html(html);
            } else {
                const html = createSkillCards(data[filterValue].slice(0, visibleItems[filterValue]), filterValue);
                $('#skills-grid').html(html);
            }

            // Remove old Show More button
            $('#show-more-btn').parent().remove();

            // Determine if there are more items to show
            let hasMore = false;
            if (filterValue === 'all') {
                const totalSkills = data.frontend.length + data.backend.length + data.others.length;
                hasMore = totalSkills > visibleItems.all;
            } else {
                hasMore = data[filterValue]?.length > visibleItems[filterValue];
            }

            // Add Show More button if needed
            if (hasMore) {
                const btnHTML = `
                    <div class="text-center mt-4">
                        <button class="filter-btn" id="show-more-btn">Show More</button>
                    </div>
                `;
                $('#skills-grid').after(btnHTML);
                
                $('#show-more-btn').on('click', function() {
                    if (filterValue === 'all') {
                        visibleItems.all += itemsPerPage;
                    } else {
                        visibleItems[filterValue] += itemsPerPage;
                    }
                    showSkills(filterValue);
                });
            }
        };

        // Create HTML structure
        // If mobile, show Others button full width use bootstrap class
        const skillsHTML = `
            <div class="text-center mb-4">
                <div class="skill-filters d-flex flex-wrap justify-content-center">
                    <button class="filter-btn mt-2 active" data-filter="all">All</button>
                    <button class="filter-btn mt-2" data-filter="frontend">Frontend</button>
                    <button class="filter-btn mt-2" data-filter="backend">Backend</button>
                    <button class="filter-btn mt-2" data-filter="others">Others</button>
                </div>
            </div>
            <div class="row g-4" id="skills-grid"></div>
        `;
        
        $('#skills-container').html(skillsHTML);

        // Add filter functionality
        $('.filter-btn[data-filter]').on('click', function() {
            // Remove active class from all buttons
            $('.filter-btn').removeClass('active');
            // Add active class to clicked button
            $(this).addClass('active');

            const filterValue = $(this).data('filter');
            currentFilter = filterValue;
            
            // Reset visible items when changing filter
            if (filterValue === 'all') {
                visibleItems.all = initialItems;
            } else {
                visibleItems[filterValue] = initialItems;
            }
            showSkills(filterValue);
        });

        // Show initial skills
        showSkills('all');
        
    } catch (error) {
        console.error('Error loading skills:', error);
    }
}

// Load skills when the document is ready
$(document).ready(loadSkills); 