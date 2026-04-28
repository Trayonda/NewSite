/**
 * EventSetup Dynamic Content Engine
 * Handles real-time updates from Admin Dashboard
 */

(function() {
    // 1. Load Configurations from LocalStorage
    const config = JSON.parse(localStorage.getItem('siteConfig'));
    
    if (config) {
        const root = document.documentElement;
        if (config.appearance.primary) root.style.setProperty('--brand-red', config.appearance.primary);
        if (config.appearance.secondary) root.style.setProperty('--brand-blue', config.appearance.secondary);
        if (config.appearance.bg) root.style.setProperty('--bg-dark', config.appearance.bg);
        if (config.appearance.font) root.style.setProperty('--font-main', config.appearance.font);

        document.addEventListener('DOMContentLoaded', () => {
            if (config.business.name) {
                document.querySelectorAll('.biz-name').forEach(el => el.textContent = config.business.name);
            }
            if (config.business.whatsapp) {
                document.querySelectorAll('a[href^="https://wa.me/"]').forEach(link => {
                    const urlStr = link.href;
                    if(urlStr.includes('wa.me/')) {
                        const parts = urlStr.split('?text=');
                        const text = parts.length > 1 ? '?text=' + parts[1] : '';
                        link.href = `https://wa.me/${config.business.whatsapp}${text}`;
                    }
                });
            }
        });
    }

    // 2. Merge Custom Services FIRST
    const customServices = JSON.parse(localStorage.getItem('customServices'));
    if (customServices && typeof servicesData !== 'undefined') {
        Object.keys(customServices).forEach(cat => {
            if (!servicesData[cat]) {
                servicesData[cat] = { 
                    title: cat.charAt(0).toUpperCase() + cat.slice(1).replace(/-/g, ' '), 
                    description: `Professional services for ${cat}.`,
                    items: [] 
                };
            }
            
            const mappedServices = customServices[cat].map((s, i) => ({
                id: `custom-${cat}-${i}`,
                name: s.name,
                price: s.price,
                description: s.description,
                image: s.image,
                sideTitle: s.sideTitle,
                sideImage: s.sideImage,
                bullets: s.bullets,
                longContent: s.longContent,
                url: `view.html?id=custom-${cat}-${i}&cat=${cat}`
            }));
            
            servicesData[cat].items = [...mappedServices, ...(servicesData[cat].items || [])];
        });
    }

    // 3. Dynamic Categories Injection
    document.addEventListener('DOMContentLoaded', () => {
        const customCats = JSON.parse(localStorage.getItem('customCats')) || [];
        const sidebarNav = document.getElementById('sidebar-nav');
        
        if (sidebarNav && customCats.length > 0) {
            customCats.forEach(cat => {
                if (document.querySelector(`[data-category="${cat.id}"]`)) return;

                const link = document.createElement('a');
                link.href = "#";
                link.dataset.category = cat.id;
                link.className = "sidebar-link text-blue-100 hover:bg-white/5 flex items-center px-4 py-3 rounded-xl transition-all font-medium";
                link.innerHTML = `<i class="fas ${cat.icon || 'fa-folder'} w-6"></i> ${cat.name}`;
                sidebarNav.appendChild(link);
            });
        }

        // 4. Re-bind ALL Sidebar clicks to make sure new categories work
        const allLinks = document.querySelectorAll('.sidebar-link');
        allLinks.forEach(link => {
            link.addEventListener('click', (e) => {
                e.preventDefault();
                allLinks.forEach(l => l.classList.remove('active', 'bg-brand-red', 'text-white'));
                allLinks.forEach(l => l.classList.add('text-blue-100', 'hover:bg-white/5'));
                
                link.classList.add('active', 'bg-brand-red', 'text-white');
                link.classList.remove('text-blue-100', 'hover:bg-white/5');
                
                // Call global render function from services.js
                if (typeof renderServices === 'function') {
                    renderServices(link.dataset.category);
                }
            });
        });
    });

    // 5. Inject Custom Gallery
    document.addEventListener('DOMContentLoaded', () => {
        const customGallery = JSON.parse(localStorage.getItem('customGallery'));
        const galleryGrid = document.querySelector('.gallery-grid');
        if (customGallery && galleryGrid) {
            customGallery.forEach(imgUrl => {
                const imgDiv = document.createElement('div');
                imgDiv.className = 'gallery-item overflow-hidden rounded-2xl cursor-pointer group relative';
                imgDiv.innerHTML = `<img src="${imgUrl}" class="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110">`;
                galleryGrid.prepend(imgDiv);
            });
        }
    });
})();
