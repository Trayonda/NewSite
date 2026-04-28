// Service Explorer Data and Logic
const servicesData = {
    'corporate': {
        title: 'Corporate Events',
        icon: 'fa-building',
        description: 'Professional setups and elegant seating for impactful business gatherings.',
        items: [
            { id: 'corp-1', name: 'Annual Day Celebrations', price: '₹25,000', description: 'End-to-end management for company milestones.', image: 'https://images.unsplash.com/photo-1540575467063-178a50c2df87?q=80&w=600&auto=format&fit=crop', url: 'corporate-events/annual-day-celebrations.html' },
            { id: 'corp-2', name: 'Team Building & Offsites', price: '₹15,000', description: 'Engaging offsites to foster collaboration.', image: 'https://images.unsplash.com/photo-1522071820081-009f0129c71c?q=80&w=600&auto=format&fit=crop', url: 'corporate-events/team-building-offsites.html' },
            { id: 'corp-3', name: 'Product Launches', price: '₹35,000', description: 'High-tech AV setups for stunning reveals.', image: 'https://images.unsplash.com/photo-1505373877841-8d25f7d46678?q=80&w=600&auto=format&fit=crop', url: 'corporate-events/product-launches.html' },
            { id: 'corp-4', name: 'Reward & Recognition (R&R)', price: '₹20,000', description: 'Glamorous gala nights for top performers.', image: 'https://images.unsplash.com/photo-1514525253161-7a46d19cd819?q=80&w=600&auto=format&fit=crop', url: 'corporate-events/reward-recognition.html' },
            { id: 'corp-5', name: 'Conferences & Seminars', price: '₹12,000', description: 'Professional environments for networking.', image: 'https://images.unsplash.com/photo-1540317580384-e5d43616b9aa?q=80&w=600&auto=format&fit=crop', url: 'corporate-events/conferences-seminars.html' },
            { id: 'corp-6', name: 'Town Hall Meetings', price: '₹10,000', description: 'Clear corporate messaging for all employees.', image: 'https://images.unsplash.com/photo-1475721027785-f74eccf877e2?q=80&w=600&auto=format&fit=crop', url: 'corporate-events/town-hall-meetings.html' },
            { id: 'corp-7', name: 'Trade Shows & Exhibitions', price: '₹40,000', description: 'Custom-fabricated stalls to attract crowds.', image: 'https://images.unsplash.com/photo-1540317580384-e5d43616b9aa?q=80&w=600&auto=format&fit=crop', url: 'corporate-events/trade-shows-exhibitions.html' },
            { id: 'corp-8', name: 'Festive Corporate Parties', price: '₹18,000', description: 'Thematic decor and live entertainment.', image: 'https://images.unsplash.com/photo-1511795409834-ef04bbd61622?q=80&w=600&auto=format&fit=crop', url: 'corporate-events/festive-corporate-parties.html' },
            { id: 'corp-9', name: 'Executive & VIP Dinners', price: '₹15,000', description: 'Intimate luxury dining for board members.', image: 'https://images.unsplash.com/photo-1414235077428-338989a2e8c0?q=80&w=600&auto=format&fit=crop', url: 'corporate-events/executive-vip-dinners.html' },
            { id: 'corp-10', name: 'Workshops & Training', price: '₹8,000', description: 'Optimized setups to maximize learning.', image: 'https://images.unsplash.com/photo-1552664730-d307ca884978?q=80&w=600&auto=format&fit=crop', url: 'corporate-events/workshops-training.html' }
        ]
    },
    'weddings': {
        title: 'Weddings & Celebrations',
        icon: 'fa-heart',
        description: 'Luxury tent decor and floral arrangements for your special day.',
        items: [
            { id: 'wed-1', name: 'Luxury Tent Decor', price: '₹50,000', description: 'Waterproof tents with royal draping.', image: 'https://images.unsplash.com/photo-1519225421980-715cb0215aed?q=80&w=600&auto=format&fit=crop' },
            { id: 'wed-2', name: 'Exquisite Floral Arrangements', price: '₹30,000', description: 'Fresh imported flowers and stunning Mandaps.', image: 'https://images.unsplash.com/photo-1511795409834-ef04bbd61622?q=80&w=600&auto=format&fit=crop' },
            { id: 'wed-3', name: 'Ambient & Mood Lighting', price: '₹15,000', description: 'Crystal chandeliers and LED wash lights.', image: 'https://images.unsplash.com/photo-1519225421980-715cb0215aed?q=80&w=600&auto=format&fit=crop' },
            { id: 'wed-4', name: 'Catering Setup & Dining', price: '₹40,000', description: 'Elegant buffet and luxury cutlery styling.', image: 'https://images.unsplash.com/photo-1511795409834-ef04bbd61622?q=80&w=600&auto=format&fit=crop' }
        ]
    },
    'tents': {
        title: 'Tent & Decor',
        icon: 'fa-campground',
        description: 'High-quality, weather-proof tents and thematic decor.',
        items: [
            { id: 'tent-1', name: 'Premium Weather-proof Tents', price: '₹20,000', description: 'AC German hangers and waterproof pagodas.', image: 'https://images.unsplash.com/photo-1478146896981-b80fe463b330?q=80&w=600&auto=format&fit=crop' },
            { id: 'tent-2', name: 'Thematic Draping', price: '₹10,000', description: 'Custom fabric colors and royal draping.', image: 'https://images.unsplash.com/photo-1478146896981-b80fe463b330?q=80&w=600&auto=format&fit=crop' },
            { id: 'tent-3', name: 'Luxury Furniture Rental', price: '₹15,000', description: 'Premium sofas, Tiffany chairs and LED furniture.', image: 'https://images.unsplash.com/photo-1478146896981-b80fe463b330?q=80&w=600&auto=format&fit=crop' },
            { id: 'tent-4', name: 'Carpet & Flooring', price: '₹8,000', description: 'Plush red carpets and wooden flooring.', image: 'https://images.unsplash.com/photo-1478146896981-b80fe463b330?q=80&w=600&auto=format&fit=crop' }
        ]
    },
    'games': {
        title: 'Party Games Installation',
        icon: 'fa-gamepad',
        description: 'Engaging game setups and inflatables for all ages.',
        items: [
            { id: 'game-1', name: 'Inflatable Bouncers', price: '₹5,000', description: 'Safe commercial-grade bouncy castles.', image: 'https://images.unsplash.com/photo-1605371924599-2d0365da1ae0?q=80&w=600&auto=format&fit=crop' },
            { id: 'game-2', name: 'Interactive Carnival Games', price: '₹7,000', description: 'Balloon darts, ring toss and prizes.', image: 'https://images.unsplash.com/photo-1605371924599-2d0365da1ae0?q=80&w=600&auto=format&fit=crop' },
            { id: 'game-3', name: 'Kids Engagement Zones', price: '₹10,000', description: 'Soft-play areas and face painting.', image: 'https://images.unsplash.com/photo-1605371924599-2d0365da1ae0?q=80&w=600&auto=format&fit=crop' },
            { id: 'game-4', name: 'Arcade & VR Setups', price: '₹15,000', description: 'VR booths and retro arcade machines.', image: 'https://images.unsplash.com/photo-1605371924599-2d0365da1ae0?q=80&w=600&auto=format&fit=crop' }
        ]
    }
};

let selectedServices = new Set();

document.addEventListener('DOMContentLoaded', () => {
    const sidebarLinks = document.querySelectorAll('.sidebar-link');
    const explorerContent = document.getElementById('explorer-content');
    const cartItemsList = document.getElementById('cart-items-list');
    const cartCount = document.getElementById('cart-count');
    const bookBtn = document.getElementById('explorer-book-btn');
    
    function updateCartUI() {
        if (!cartItemsList || !cartCount) return;
        
        cartItemsList.innerHTML = '';
        selectedServices.forEach(id => {
            let serviceName = '';
            // Find service name across all categories
            Object.values(servicesData).forEach(cat => {
                const item = cat.items.find(i => i.id === id);
                if (item) serviceName = item.name;
            });
            
            const li = document.createElement('div');
            li.className = 'flex justify-between items-center p-3 bg-white/10 rounded-lg mb-2 group animate-fade-in border border-white/5';
            li.innerHTML = `
                <span class="text-sm font-medium text-blue-50">${serviceName}</span>
                <button onclick="removeService('${id}')" class="text-gray-400 hover:text-brand-red transition-colors">
                    <i class="fas fa-times"></i>
                </button>
            `;
            cartItemsList.appendChild(li);
        });
        
        cartCount.textContent = selectedServices.size;
        
        if (selectedServices.size > 0) {
            bookBtn.classList.remove('opacity-50', 'pointer-events-none');
        } else {
            bookBtn.classList.add('opacity-50', 'pointer-events-none');
            cartItemsList.innerHTML = '<div class="text-center py-8 text-gray-400 text-sm">No services selected yet.</div>';
        }
    }

    window.removeService = function(id) {
        selectedServices.delete(id);
        updateCartUI();
        renderServices(document.querySelector('.sidebar-link.active').dataset.category);
    };

    window.toggleService = function(id) {
        if (selectedServices.has(id)) {
            selectedServices.delete(id);
        } else {
            selectedServices.add(id);
        }
        updateCartUI();
        renderServices(document.querySelector('.sidebar-link.active').dataset.category);
    };

    function renderServices(category) {
        const data = servicesData[category];
        if (!explorerContent) return;
        
        // Update header
        document.getElementById('category-title').textContent = data.title;
        document.getElementById('category-desc').textContent = data.description;
        
        explorerContent.innerHTML = '';
        data.items.forEach(item => {
            const isSelected = selectedServices.has(item.id);
            const card = document.createElement('div');
            card.className = `group bg-white/5 backdrop-blur-md rounded-2xl border ${isSelected ? 'border-brand-red ring-2 ring-brand-red/10' : 'border-white/10'} p-4 transition-all duration-300 hover:shadow-2xl flex flex-col hover:bg-white/10`;
            card.innerHTML = `
                <div class="h-40 rounded-xl overflow-hidden mb-4 relative">
                    <img src="${item.image}" alt="${item.name}" class="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500">
                    <div class="absolute top-2 right-2">
                        <button onclick="toggleService('${item.id}')" class="w-10 h-10 rounded-full ${isSelected ? 'bg-brand-red text-white' : 'bg-black/50 text-white hover:bg-brand-red shadow-md'} flex items-center justify-center transition-all backdrop-blur-md">
                            <i class="fas ${isSelected ? 'fa-check' : 'fa-plus'}"></i>
                        </button>
                    </div>
                </div>
                <div class="flex-1">
                    <h4 class="font-bold text-white mb-1">${item.name}</h4>
                    <p class="text-[10px] text-blue-100/60 leading-relaxed mb-3">${item.description}</p>
                </div>
                <div class="space-y-2 mt-4">
                    <div class="flex justify-between items-center mb-2 px-1">
                        <span class="text-[10px] text-blue-200 uppercase tracking-wider font-bold">Starting from</span>
                        <span class="text-sm font-extrabold text-brand-red">${item.price}</span>
                    </div>
                    ${item.url ? `
                        <a href="${item.url}" class="block w-full py-2 text-center text-[10px] font-bold text-blue-300 hover:text-white transition-colors border border-white/10 rounded-lg hover:border-white/30">
                            View Details <i class="fas fa-external-link-alt ml-1"></i>
                        </a>
                    ` : ''}
                    <button onclick="toggleService('${item.id}')" class="w-full py-2.5 rounded-lg text-sm font-semibold transition-all ${isSelected ? 'bg-brand-red text-white' : 'bg-white/10 text-white hover:bg-white/20'}">
                        ${isSelected ? 'Selected' : 'Add to Cart'}
                    </button>
                </div>
            `;
            explorerContent.appendChild(card);
        });
    }

    sidebarLinks.forEach(link => {
        link.addEventListener('click', (e) => {
            e.preventDefault();
            sidebarLinks.forEach(l => l.classList.remove('active', 'bg-brand-blue', 'text-white'));
            sidebarLinks.forEach(l => l.classList.add('text-gray-600', 'hover:bg-gray-100'));
            
            link.classList.add('active', 'bg-brand-blue', 'text-white');
            link.classList.remove('text-gray-600', 'hover:bg-gray-100');
            
            renderServices(link.dataset.category);
        });
    });

    // WhatsApp Booking Integration
    if (bookBtn) {
        bookBtn.addEventListener('click', () => {
            if (selectedServices.size === 0) return;
            
            let selectedNames = [];
            Object.values(servicesData).forEach(cat => {
                cat.items.forEach(item => {
                    if (selectedServices.has(item.id)) selectedNames.push(item.name);
                });
            });
            
            const message = `Hello EventSetup Team! I have explored your services and would like to book the following:\n\n*Selected Services:*\n- ${selectedNames.join('\n- ')}\n\nPlease get in touch to discuss details.`;
            const encodedMessage = encodeURIComponent(message);
            const businessPhone = "919650624535";
            window.open(`https://wa.me/${businessPhone}?text=${encodedMessage}`, '_blank');
        });
    }

    // Initial Render
    renderServices('corporate');
});
