// Service Explorer Data and Logic
var servicesData = {
    'corporate': {
        title: 'Corporate Events',
        icon: 'fa-building',
        description: 'Professional setups and elegant seating for impactful business gatherings.',
        items: [
            { id: 'corp-1', name: 'Annual Day Celebrations', price: '₹45,000', description: 'Comprehensive management for company milestones and grand celebrations.', image: 'https://images.unsplash.com/photo-1540575467063-178a50c2df87?q=80&w=600&auto=format&fit=crop', url: 'view.html?id=corp-1&cat=corporate' },
            { id: 'corp-2', name: 'Team Building & Offsites', price: '₹25,000', description: 'Engaging offsite activities designed to foster collaboration and team spirit.', image: 'https://images.unsplash.com/photo-1522071820081-009f0129c71c?q=80&w=600&auto=format&fit=crop', url: 'view.html?id=corp-2&cat=corporate' },
            { id: 'corp-3', name: 'Product Launches', price: '₹55,000', description: 'High-tech AV setups and creative stage designs for impactful product reveals.', image: 'https://images.unsplash.com/photo-1505373877841-8d25f7d46678?q=80&w=600&auto=format&fit=crop', url: 'view.html?id=corp-3&cat=corporate' },
            { id: 'corp-4', name: 'Conferences & Seminars', price: '₹35,000', description: 'Professional seating, PA systems, and registration desk setups for business meets.', image: 'https://images.unsplash.com/photo-1540317580384-e5d43616b9aa?q=80&w=600&auto=format&fit=crop', url: 'view.html?id=corp-4&cat=corporate' },
            { id: 'corp-5', name: 'Town Hall Meetings', price: '₹20,000', description: 'Elegant and professional internal meeting setups for leadership communication.', image: 'https://images.unsplash.com/photo-1475721027785-f74eccf877e2?q=80&w=600&auto=format&fit=crop', url: 'view.html?id=corp-5&cat=corporate' },
            { id: 'corp-6', name: 'Trade Shows & Exhibitions', price: '₹60,000', description: 'Modular stalls, branding, and lighting for high-visibility trade show presence.', image: 'https://images.unsplash.com/photo-1492684223066-81342ee5ff30?q=80&w=600&auto=format&fit=crop', url: 'view.html?id=corp-6&cat=corporate' },
            { id: 'corp-7', name: 'Festive Corporate Parties', price: '₹40,000', description: 'Themed decor and catering for Diwali, Christmas, and New Year corporate events.', image: 'https://images.unsplash.com/photo-1511795409834-ef04bbd61622?q=80&w=600&auto=format&fit=crop', url: 'view.html?id=corp-7&cat=corporate' },
            { id: 'corp-8', name: 'Executive & VIP Dinners', price: '₹30,000', description: 'Exquisite table decor and premium arrangements for high-profile business dinners.', image: 'https://images.unsplash.com/photo-1414235077428-338989a2e8c0?q=80&w=600&auto=format&fit=crop', url: 'view.html?id=corp-8&cat=corporate' },
            { id: 'corp-9', name: 'Workshops & Training', price: '₹15,000', description: 'Functional and focused setups for skill-building and educational sessions.', image: 'https://images.unsplash.com/photo-1552664730-d307ca884978?q=80&w=600&auto=format&fit=crop', url: 'view.html?id=corp-9&cat=corporate' },
            { id: 'corp-10', name: 'Gala Award Ceremonies', price: '₹75,000', description: 'Luxury stage, red carpet entry, and premium lighting for prestigious awards.', image: 'https://images.unsplash.com/photo-1514525253161-7a46d19cd819?q=80&w=600&auto=format&fit=crop', url: 'view.html?id=corp-10&cat=corporate' }
        ]
    },
    'weddings': {
        title: 'Weddings',
        icon: 'fa-heart',
        description: 'Exquisite decor and arrangements for your special day.',
        items: [
            { id: 'wed-1', name: 'Luxury Stage Decor', price: '₹50,000', description: 'Grand floral and light arrangements.', image: 'https://images.unsplash.com/photo-1519741497674-611481863552?q=80&w=600&auto=format&fit=crop', url: 'view.html?id=wed-1&cat=weddings' }
        ]
    }
};

// Make it global for engine.js
window.servicesData = servicesData;

let selectedServices = new Set();

// Define globally
window.renderServices = function(category) {
    const explorerContent = document.getElementById('explorer-content');
    const categoryTitle = document.getElementById('category-title');
    const categoryDesc = document.getElementById('category-desc');
    const sidebarLinks = document.querySelectorAll('.sidebar-link');

    if (!explorerContent) return;

    const categoryData = window.servicesData[category] || { title: 'No Category', description: '', items: [] };
    
    // Update Header
    categoryTitle.textContent = categoryData.title;
    categoryDesc.textContent = categoryData.description;

    // Clear and Render
    explorerContent.innerHTML = '';
    
    if (categoryData.items.length === 0) {
        explorerContent.innerHTML = '<div class="col-span-full py-20 text-center text-slate-400">No services found in this category yet. Add some from the Admin Dashboard!</div>';
        return;
    }

    const currentLocation = localStorage.getItem('userLocation') || 'Delhi NCR';

    categoryData.items.forEach(item => {
        const isSelected = selectedServices.has(item.id);
        const card = document.createElement('div');
        card.className = 'bg-white border border-gray-100 shadow-sm rounded-3xl p-6 hover:shadow-md hover:border-brand-red/20 transition-all group flex flex-col h-full animate-fade-in';
        card.innerHTML = `
            <div class="relative h-48 mb-6 overflow-hidden rounded-2xl">
                <img src="${item.image}" class="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500">
            </div>
            <div class="flex-1">
                <div class="flex items-center text-[10px] text-brand-red font-bold mb-2 uppercase tracking-wider">
                    <i class="fas fa-location-dot mr-1"></i> Available in ${currentLocation}
                </div>
                <h4 class="font-bold text-slate-800 mb-1 text-lg">${item.name}</h4>
                <p class="text-xs text-slate-500 leading-relaxed mb-4">${item.description}</p>
            </div>
            <button onclick="toggleService('${item.id}', this)" class="w-full py-3 mb-4 rounded-xl text-xs font-bold transition-all ${isSelected ? 'bg-brand-red text-white shadow-lg' : 'bg-brand-blue/5 text-brand-blue hover:bg-brand-blue hover:text-white border border-brand-blue/10'} flex items-center justify-center">
                <i class="fas ${isSelected ? 'fa-check' : 'fa-cart-plus'} mr-2"></i> ${isSelected ? 'Added to Bucket' : 'Add to Bucket'}
            </button>
            <div class="space-y-4 mt-auto">
                <div class="flex justify-between items-center px-1">
                    <span class="text-[10px] text-slate-400 uppercase tracking-widest font-bold">Starts from</span>
                    <span class="text-lg font-black text-brand-red">${item.price}</span>
                </div>
                <a href="${item.url}" class="block w-full py-3 text-center text-xs font-bold text-brand-blue hover:text-brand-red transition-all border border-gray-200 rounded-xl hover:border-brand-red hover:bg-brand-red/5">
                    View Details <i class="fas fa-arrow-right ml-2"></i>
                </a>
            </div>
        `;
        explorerContent.appendChild(card);
    });
};

window.toggleService = function(serviceId, btn) {
    if (selectedServices.has(serviceId)) {
        selectedServices.delete(serviceId);
    } else {
        selectedServices.add(serviceId);
    }
    
    // Refresh the current view
    const activeLink = document.querySelector('.sidebar-link.active');
    if (activeLink) renderServices(activeLink.dataset.category);
    
    updateCartUI();
};

function updateCartUI() {
    const cartList = document.getElementById('cart-items-list');
    const bookBtn = document.getElementById('explorer-book-btn');
    if (!cartList) return;

    cartList.innerHTML = '';
    let totalItems = 0;

    Object.values(window.servicesData).forEach(cat => {
        cat.items.forEach(item => {
            if (selectedServices.has(item.id)) {
                totalItems++;
                const div = document.createElement('div');
                div.className = 'flex items-center justify-between p-3 bg-slate-50 rounded-xl mb-2 border border-gray-100';
                div.innerHTML = `
                    <div class="text-xs font-bold text-slate-800">${item.name}</div>
                    <button onclick="toggleService('${item.id}')" class="text-rose-400 hover:text-rose-600"><i class="fas fa-times"></i></button>
                `;
                cartList.appendChild(div);
            }
        });
    });

    const cartSidebar = document.getElementById('cart-sidebar');
    
    if (totalItems > 0) {
        if (cartSidebar) cartSidebar.classList.remove('hidden');
        bookBtn.classList.remove('opacity-50', 'pointer-events-none');
        bookBtn.innerHTML = `<i class="fab fa-whatsapp mr-2 text-xl"></i> Book ${totalItems} Service${totalItems > 1 ? 's' : ''}`;
    } else {
        if (cartSidebar) cartSidebar.classList.add('hidden');
        bookBtn.classList.add('opacity-50', 'pointer-events-none');
        bookBtn.innerHTML = `<i class="fab fa-whatsapp mr-2 text-xl"></i> Finalize & Book`;
        cartList.innerHTML = '<div class="text-center py-6 text-slate-400 text-[11px] italic">Explore and add services to your bucket.</div>';
    }
}

// Initial Run
document.addEventListener('DOMContentLoaded', () => {
    if (document.getElementById('explorer-content')) {
        window.renderServices('corporate');
    }

    // Handle Book Button Click on Explorer Page
    const bookBtn = document.getElementById('explorer-book-btn');
    if (bookBtn) {
        bookBtn.addEventListener('click', () => {
            if (selectedServices.size === 0) return;

            const selectedNames = [];
            Object.values(window.servicesData).forEach(cat => {
                cat.items.forEach(item => {
                    if (selectedServices.has(item.id)) {
                        selectedNames.push(item.name);
                    }
                });
            });

            const servicesString = selectedNames.join(', ');
            const message = `Hello EventSetup Team! I have selected the following services from your website:\n\n*Services Required:* ${servicesString}\n\nPlease get in touch with me to finalize the setup.`;
            const encodedMessage = encodeURIComponent(message);
            
            // Business WhatsApp Number
            const businessPhone = "919650624535";
            window.open(`https://wa.me/${businessPhone}?text=${encodedMessage}`, '_blank');
        });
    }
});
