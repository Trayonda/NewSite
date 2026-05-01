// Service Explorer Data and Logic
var servicesData = {
    'corporate': {
        title: 'Corporate Events',
        icon: 'fa-building',
        description: 'Professional setups and elegant seating for impactful business gatherings.',
        items: [
            { id: 'corp-1', name: 'Annual Day Celebrations',    price: '₹75,000',   description: 'Comprehensive management for company milestones and grand celebrations.', image: 'https://images.unsplash.com/photo-1540575467063-178a50c2df87?q=80&w=600&auto=format&fit=crop', url: 'view.html?id=corp-1&cat=corporate' },
            { id: 'corp-2', name: 'Team Building & Offsites',   price: '₹25,000',   description: 'Engaging offsite activities designed to foster collaboration and team spirit.', image: 'https://images.unsplash.com/photo-1522071820081-009f0129c71c?q=80&w=600&auto=format&fit=crop', url: 'view.html?id=corp-2&cat=corporate' },
            { id: 'corp-3', name: 'Product Launches',           price: '₹1,00,000', description: 'High-tech AV setups and creative stage designs for impactful product reveals.', image: 'https://images.unsplash.com/photo-1505373877841-8d25f7d46678?q=80&w=600&auto=format&fit=crop', url: 'view.html?id=corp-3&cat=corporate' },
            { id: 'corp-4', name: 'Conferences & Seminars',     price: '₹35,000',   description: 'Professional seating, PA systems, and registration desk setups for business meets.', image: 'https://images.unsplash.com/photo-1540317580384-e5d43616b9aa?q=80&w=600&auto=format&fit=crop', url: 'view.html?id=corp-4&cat=corporate' },
            { id: 'corp-5', name: 'Town Hall Meetings',         price: '₹20,000',   description: 'Elegant and professional internal meeting setups for leadership communication.', image: 'https://images.unsplash.com/photo-1475721027785-f74eccf877e2?q=80&w=600&auto=format&fit=crop', url: 'view.html?id=corp-5&cat=corporate' },
            { id: 'corp-6', name: 'Trade Shows & Exhibitions',  price: '₹50,000',   description: 'Modular stalls, branding, and lighting for high-visibility trade show presence.', image: 'https://images.unsplash.com/photo-1492684223066-81342ee5ff30?q=80&w=600&auto=format&fit=crop', url: 'view.html?id=corp-6&cat=corporate' },
            { id: 'corp-7', name: 'Festive Corporate Parties',  price: '₹45,000',   description: 'Themed decor and catering for Diwali, Christmas, and New Year corporate events.', image: 'https://images.unsplash.com/photo-1511795409834-ef04bbd61622?q=80&w=600&auto=format&fit=crop', url: 'view.html?id=corp-7&cat=corporate' },
            { id: 'corp-8', name: 'Executive & VIP Dinners',    price: '₹30,000',   description: 'Exquisite table decor and premium arrangements for high-profile business dinners.', image: 'https://images.unsplash.com/photo-1414235077428-338989a2e8c0?q=80&w=600&auto=format&fit=crop', url: 'view.html?id=corp-8&cat=corporate' },
            { id: 'corp-9', name: 'Workshops & Training',       price: '₹15,000',   description: 'Functional and focused setups for skill-building and educational sessions.', image: 'https://images.unsplash.com/photo-1552664730-d307ca884978?q=80&w=600&auto=format&fit=crop', url: 'view.html?id=corp-9&cat=corporate' },
            { id: 'corp-10', name: 'Gala Award Ceremonies',     price: '₹1,50,000', description: 'Red carpet entry, luxury stage, and premium lighting for prestigious awards nights.', image: 'https://images.unsplash.com/photo-1514525253161-7a46d19cd819?q=80&w=600&auto=format&fit=crop', url: 'view.html?id=corp-10&cat=corporate' }
        ]
    },
    'weddings': {
        title: 'Weddings & Celebrations',
        icon: 'fa-heart',
        description: 'Luxury décor and flawless arrangements for your most special day.',
        items: [
            { id: 'wed-1', name: 'Luxury Stage & Mandap Decor', price: '₹80,000',   description: 'Grand floral mandap, stage backdrop, and ambient lighting for the perfect wedding.', image: 'https://images.unsplash.com/photo-1519741497674-611481863552?q=80&w=600&auto=format&fit=crop', url: 'view.html?id=wed-1&cat=weddings' },
            { id: 'wed-2', name: 'Haldi & Mehendi Setup',       price: '₹18,000',   description: 'Vibrant floral floor seating, props, and thematic decor for pre-wedding functions.', image: 'https://images.unsplash.com/photo-1571167366136-b57e07161741?q=80&w=600&auto=format&fit=crop', url: 'view.html?id=wed-2&cat=weddings' },
            { id: 'wed-3', name: 'Sangeet Night',               price: '₹35,000',   description: 'Stage, DJ, dance floor, and festive lights for an unforgettable Sangeet celebration.', image: 'https://images.unsplash.com/photo-1464366400600-7168b8af9bc3?q=80&w=600&auto=format&fit=crop', url: 'view.html?id=wed-3&cat=weddings' },
            { id: 'wed-4', name: 'Full Wedding Reception',      price: '₹1,20,000', description: 'Complete décor package — stage, seating, floral, lighting, and entry setup for 200 guests.', image: 'https://images.unsplash.com/photo-1519225421980-715cb0215aed?q=80&w=600&auto=format&fit=crop', url: 'view.html?id=wed-4&cat=weddings' },
            { id: 'wed-5', name: 'Engagement Ceremony',         price: '₹25,000',   description: 'Elegant ring ceremony setup with floral backdrop, stage, and intimate décor.', image: 'https://images.unsplash.com/photo-1511285560929-80b456fea0bc?q=80&w=600&auto=format&fit=crop', url: 'view.html?id=wed-5&cat=weddings' },
            { id: 'wed-6', name: 'Bridal Entry & Aisle Setup',  price: '₹10,000',   description: 'Flower petal aisle, lighting, and grand entry arrangement for the bride.', image: 'https://images.unsplash.com/photo-1606216794079-73a0b9f8c4ac?q=80&w=600&auto=format&fit=crop', url: 'view.html?id=wed-6&cat=weddings' }
        ]
    },
    'tents': {
        title: 'Tent & Decor',
        icon: 'fa-campground',
        description: 'Premium weather-proof tents and elegant decor for any outdoor event.',
        items: [
            { id: 'tent-1', name: 'Standard Shamiana Tent',     price: '₹8,000',    description: 'Classic 20×20 ft shamiana tent, per day — ideal for small gatherings and pujas.', image: 'https://images.unsplash.com/photo-1478146896981-b80fe463b330?q=80&w=600&auto=format&fit=crop', url: 'view.html?id=tent-1&cat=tents' },
            { id: 'tent-2', name: 'Premium Banquet Tent',       price: '₹25,000',   description: 'Spacious 50×80 ft weather-proof tent with flooring — perfect for 200+ guests.', image: 'https://images.unsplash.com/photo-1510076857177-7470076d4098?q=80&w=600&auto=format&fit=crop', url: 'view.html?id=tent-2&cat=tents' },
            { id: 'tent-3', name: 'Luxury German Tent',         price: '₹80,000',   description: 'High-end climate-controlled tent with glass walls, chandeliers, and premium flooring.', image: 'https://images.unsplash.com/photo-1519167758481-83f550bb49b3?q=80&w=600&auto=format&fit=crop', url: 'view.html?id=tent-3&cat=tents' },
            { id: 'tent-4', name: 'Fairy Light Decoration',     price: '₹5,000',    description: 'Magical fairy light setups for indoor and outdoor events — per event basis.', image: 'https://images.unsplash.com/photo-1467810563316-b5476525c0f9?q=80&w=600&auto=format&fit=crop', url: 'view.html?id=tent-4&cat=tents' },
            { id: 'tent-5', name: 'Stage Construction',         price: '₹15,000',   description: 'Sturdy 12×8 ft carpeted stage with skirting — for all event types.', image: 'https://images.unsplash.com/photo-1540575467063-178a50c2df87?q=80&w=600&auto=format&fit=crop', url: 'view.html?id=tent-5&cat=tents' },
            { id: 'tent-6', name: 'Balloon Decoration',         price: '₹3,500',    description: 'Balloon arches, columns, and ceiling setups for birthdays and corporate events.', image: 'https://images.unsplash.com/photo-1530103862676-de8c9debad1d?q=80&w=600&auto=format&fit=crop', url: 'view.html?id=tent-6&cat=tents' }
        ]
    },
    'games': {
        title: 'Party Games',
        icon: 'fa-gamepad',
        description: 'Fun and engaging game installations for kids and adults at every event.',
        items: [
            { id: 'game-1', name: 'Jumping Castle (Kids)',      price: '₹4,000',    description: 'Colourful bouncy castle for kids — per day with safety attendant included.', image: 'https://images.unsplash.com/photo-1605371924599-2d0365da1ae0?q=80&w=600&auto=format&fit=crop', url: 'view.html?id=game-1&cat=games' },
            { id: 'game-2', name: 'Laser Tag Arena',            price: '₹15,000',   description: '10-player laser tag setup with arena, vests, and 2-hour gameplay package.', image: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?q=80&w=600&auto=format&fit=crop', url: 'view.html?id=game-2&cat=games' },
            { id: 'game-3', name: 'Carnival Games (5 Stalls)',  price: '₹12,000',   description: 'Ring toss, darts, balloon pop and more — full carnival with attendants.', image: 'https://images.unsplash.com/photo-1571902943202-507ec2618e8f?q=80&w=600&auto=format&fit=crop', url: 'view.html?id=game-3&cat=games' },
            { id: 'game-4', name: 'Giant Outdoor Games',        price: '₹5,000',    description: 'Giant Jenga, Chess, Ludo and Snakes & Ladders — perfect for family events.', image: 'https://images.unsplash.com/photo-1611996575749-79a3a250f948?q=80&w=600&auto=format&fit=crop', url: 'view.html?id=game-4&cat=games' },
            { id: 'game-5', name: 'Mechanical Bull Riding',     price: '₹8,000',    description: 'Thrilling mechanical bull ride with trained operator — per half day.', image: 'https://images.unsplash.com/photo-1496337589254-7e19d01cec44?q=80&w=600&auto=format&fit=crop', url: 'view.html?id=game-5&cat=games' },
            { id: 'game-6', name: 'VR Gaming Station',          price: '₹10,000',   description: '2 VR headsets with immersive games — 2-hour package with dedicated operator.', image: 'https://images.unsplash.com/photo-1593508512255-86ab42a8e620?q=80&w=600&auto=format&fit=crop', url: 'view.html?id=game-6&cat=games' },
            { id: 'game-7', name: 'DJ + Dance Floor Setup',     price: '₹12,000',   description: 'Professional DJ with LED dance floor and 4-hour music package.', image: 'https://images.unsplash.com/photo-1516450360452-9312f5e86fc7?q=80&w=600&auto=format&fit=crop', url: 'view.html?id=game-7&cat=games' }
        ]
    }
};

// --- Gallery Data ---
// This serves as the single source of truth for the Experience Excellence section
// type: 'image' or 'video'
var galleryData = [
    { type: 'image', src: 'https://images.unsplash.com/photo-1540575467063-178a50c2df87?q=80&w=800', title: 'Corporate Gala 2025' },
    { type: 'image', src: 'https://images.unsplash.com/photo-1519741497674-611481863552?q=80&w=800', title: 'Royal Wedding Mandap' },
    { type: 'video', src: 'https://assets.mixkit.co/videos/preview/mixkit-celebration-at-a-wedding-party-39832-large.mp4', title: 'Wedding Highlights', poster: 'https://images.unsplash.com/photo-1519225421980-715cb0215aed?q=80&w=800' },
    { type: 'image', src: 'https://images.unsplash.com/photo-1505373877841-8d25f7d46678?q=80&w=800', title: 'Product Launch Setup' },
    { type: 'image', src: 'https://images.unsplash.com/photo-1522071820081-009f0129c71c?q=80&w=800', title: 'Team Building Offsite' },
    { type: 'video', src: 'https://assets.mixkit.co/videos/preview/mixkit-excited-people-at-a-concert-4552-large.mp4', title: 'Corporate Party Energy', poster: 'https://images.unsplash.com/photo-1514525253161-7a46d19cd819?q=80&w=800' },
    { type: 'image', src: 'https://images.unsplash.com/photo-1519167758481-83f550bb49b3?q=80&w=800', title: 'German Hanger Setup' },
    { type: 'image', src: 'https://images.unsplash.com/photo-1478146896981-b80fe463b330?q=80&w=800', title: 'Luxury Tent Decor' },
    { type: 'image', src: 'https://images.unsplash.com/photo-1605371924599-2d0365da1ae0?q=80&w=800', title: 'Kids Party Games' },
    { type: 'video', src: 'https://assets.mixkit.co/videos/preview/mixkit-hand-filming-a-wedding-couple-with-a-smartphone-39836-large.mp4', title: 'Behind the Scenes', poster: 'https://images.unsplash.com/photo-1511795409834-ef04bbd61622?q=80&w=800' },
    { type: 'image', src: 'https://images.unsplash.com/photo-1540317580384-e5d43616b9aa?q=80&w=800', title: 'Conference Seating' },
    { type: 'image', src: 'https://images.unsplash.com/photo-1414235077428-338989a2e8c0?q=80&w=800', title: 'VIP Dinner Table' }
];

window.galleryData = galleryData;



// Make it global for engine.js
window.servicesData = servicesData;

// Load cart state from localStorage
const savedCart = JSON.parse(localStorage.getItem('cart') || '[]');
window.selectedServices = new Set(savedCart);

// Function to save cart state globally
window.saveCartState = function() {
    localStorage.setItem('cart', JSON.stringify(Array.from(window.selectedServices)));
    window.dispatchEvent(new CustomEvent('cartUpdated', { detail: window.selectedServices.size }));
};


const sidebarMeta = {
    corporate: {
        subtitle: 'Business events',
        tone: 'from-[#314d87] to-[#243b6b]'
    },
    weddings: {
        subtitle: 'Luxury celebrations',
        tone: 'from-[#9f3b6f] to-[#7f2855]'
    },
    tents: {
        subtitle: 'Outdoor setups',
        tone: 'from-[#8b5e2d] to-[#6f451c]'
    },
    games: {
        subtitle: 'Fun experiences',
        tone: 'from-[#22606f] to-[#184956]'
    }
};

window.renderSidebar = function(activeCategory = 'corporate') {
    const sidebarNav = document.getElementById('sidebar-nav');
    if (!sidebarNav || !window.servicesData) return;

    sidebarNav.innerHTML = Object.entries(window.servicesData).map(([key, category]) => {
        const meta = sidebarMeta[key] || {};
        const subtitle = meta.subtitle || 'Custom collection';
        const tone = meta.tone || 'from-slate-700 to-slate-800';
        const isActive = key === activeCategory;

        return `
            <a href="#"
               data-category="${key}"
               class="sidebar-link group flex items-center justify-between rounded-2xl px-4 py-3.5 border transition-all duration-200 ${
                   isActive
                       ? 'bg-brand-blue border-brand-blue text-white shadow-[0_10px_30px_rgba(30,58,138,0.22)]'
                       : `bg-gradient-to-br ${tone} border-white/10 text-white hover:-translate-y-0.5 hover:shadow-lg`
               }">
                <span class="flex items-center gap-3 min-w-0">
                    <span class="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl ${
                        isActive ? 'bg-white/16' : 'bg-white/12'
                    } text-sm text-white">
                        <i class="fas ${category.icon}"></i>
                    </span>

                    <span class="min-w-0">
                        <span class="block text-sm font-semibold truncate">${category.title}</span>
                        <span class="block text-[11px] text-white/80 truncate">${subtitle}</span>
                    </span>
                </span>

                <i class="fas fa-arrow-right text-xs ${isActive ? 'text-white/90' : 'text-white/70 group-hover:text-white'}"></i>
            </a>
        `;
    }).join('');
};

// Define globally
window.renderServices = function(category) {
    const explorerContent = document.getElementById('explorer-content');
    const categoryTitle = document.getElementById('category-title');
    const categoryDesc = document.getElementById('category-desc');
    const sidebarLinks = document.querySelectorAll('.sidebar-link');

    if (!explorerContent) return;

    const categoryData = window.servicesData[category] || { title: 'No Category', description: '', items: [] };
window.renderSidebar(category);
    
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
        const isSelected = window.selectedServices.has(item.id);
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
    if (window.selectedServices.has(serviceId)) {
        window.selectedServices.delete(serviceId);
    } else {
        window.selectedServices.add(serviceId);
    }
    
    // Save to localStorage and fire events
    window.saveCartState();
    
    // Refresh the current view if we are on explorer page
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
            if (window.selectedServices.has(item.id)) {
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
document.addEventListener('DOMContentLoaded', () => {
    const sidebarNav = document.getElementById('sidebar-nav');

    if (sidebarNav) {
        sidebarNav.addEventListener('click', (e) => {
            const link = e.target.closest('.sidebar-link');
            if (!link) return;

            e.preventDefault();
            const category = link.dataset.category;
            if (category) window.renderServices(category);
        });
    }
});
