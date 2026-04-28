// Service Explorer Data and Logic
var servicesData = {
    'corporate': {
        title: 'Corporate Events',
        icon: 'fa-building',
        description: 'Professional setups and elegant seating for impactful business gatherings.',
        items: [
            { id: 'corp-1', name: 'Annual Day Celebrations', price: '₹25,000', description: 'End-to-end management for company milestones.', image: 'https://images.unsplash.com/photo-1540575467063-178a50c2df87?q=80&w=600&auto=format&fit=crop', url: 'view.html?id=corp-1&cat=corporate' },
            { id: 'corp-2', name: 'Team Building & Offsites', price: '₹15,000', description: 'Engaging offsites to foster collaboration.', image: 'https://images.unsplash.com/photo-1522071820081-009f0129c71c?q=80&w=600&auto=format&fit=crop', url: 'view.html?id=corp-2&cat=corporate' },
            { id: 'corp-3', name: 'Product Launches', price: '₹35,000', description: 'High-tech AV setups for stunning reveals.', image: 'https://images.unsplash.com/photo-1505373877841-8d25f7d46678?q=80&w=600&auto=format&fit=crop', url: 'view.html?id=corp-3&cat=corporate' }
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
        explorerContent.innerHTML = '<div class="col-span-full py-20 text-center text-blue-100/20">No services found in this category yet. Add some from the Admin Dashboard!</div>';
        return;
    }

    categoryData.items.forEach(item => {
        const isSelected = selectedServices.has(item.id);
        const card = document.createElement('div');
        card.className = 'bg-white/5 border border-white/10 rounded-3xl p-6 hover:bg-white/10 transition-all group flex flex-col h-full animate-fade-in';
        card.innerHTML = `
            <div class="relative h-48 mb-6 overflow-hidden rounded-2xl">
                <img src="${item.image}" class="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500">
                <div class="absolute top-4 right-4">
                    <button onclick="toggleService('${item.id}', this)" class="w-10 h-10 rounded-full ${isSelected ? 'bg-brand-red text-white' : 'bg-black/50 text-white hover:bg-brand-red shadow-md'} flex items-center justify-center transition-all backdrop-blur-md">
                        <i class="fas ${isSelected ? 'fa-check' : 'fa-plus'}"></i>
                    </button>
                </div>
            </div>
            <div class="flex-1">
                <h4 class="font-bold text-white mb-1 text-lg">${item.name}</h4>
                <p class="text-xs text-blue-100/60 leading-relaxed mb-4">${item.description}</p>
            </div>
            <div class="space-y-4 mt-auto">
                <div class="flex justify-between items-center px-1">
                    <span class="text-[10px] text-blue-200 uppercase tracking-widest font-bold">Starts from</span>
                    <span class="text-lg font-black text-brand-red">${item.price}</span>
                </div>
                <a href="${item.url}" class="block w-full py-3 text-center text-xs font-bold text-blue-300 hover:text-white transition-all border border-white/10 rounded-xl hover:border-brand-red hover:bg-brand-red/10">
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
                div.className = 'flex items-center justify-between p-3 bg-white/5 rounded-xl mb-2 border border-white/5';
                div.innerHTML = `
                    <div class="text-xs font-bold text-white">${item.name}</div>
                    <button onclick="toggleService('${item.id}')" class="text-rose-400 hover:text-rose-600"><i class="fas fa-times"></i></button>
                `;
                cartList.appendChild(div);
            }
        });
    });

    if (totalItems > 0) {
        bookBtn.classList.remove('opacity-50', 'pointer-events-none');
        bookBtn.innerHTML = `<i class="fab fa-whatsapp mr-2 text-xl"></i> Book ${totalItems} Service${totalItems > 1 ? 's' : ''}`;
    } else {
        bookBtn.classList.add('opacity-50', 'pointer-events-none');
        bookBtn.innerHTML = `<i class="fab fa-whatsapp mr-2 text-xl"></i> Finalize & Book`;
        cartList.innerHTML = '<div class="text-center py-8 text-blue-100/20 text-sm italic">Add services to your bucket.</div>';
    }
}

// Initial Run
document.addEventListener('DOMContentLoaded', () => {
    if (document.getElementById('explorer-content')) {
        window.renderServices('corporate');
    }
});
