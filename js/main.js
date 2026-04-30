// EventSetup Main JavaScript
document.addEventListener('DOMContentLoaded', () => {
    // Navbar Scroll Effect
    const navbar = document.getElementById('navbar');
    
    if (navbar) {
        window.addEventListener('scroll', () => {
            if (window.scrollY > 20) {
                navbar.classList.add('glass-nav-scrolled');
                navbar.classList.remove('glass-nav');
                navbar.classList.remove('py-5');
                navbar.classList.add('py-3');
            } else {
                navbar.classList.add('glass-nav');
                navbar.classList.remove('glass-nav-scrolled');
                navbar.classList.remove('py-3');
                navbar.classList.add('py-5');
            }
        });
    }

    // Mobile Menu Toggle
    const mobileMenuBtn = document.getElementById('mobile-menu-btn');
    const mobileMenu = document.getElementById('mobile-menu');
    if (mobileMenuBtn && mobileMenu) {
        const icon = mobileMenuBtn.querySelector('i');

        mobileMenuBtn.addEventListener('click', () => {
            mobileMenu.classList.toggle('hidden');
            if (mobileMenu.classList.contains('hidden')) {
                icon.classList.remove('fa-times');
                icon.classList.add('fa-bars');
            } else {
                icon.classList.remove('fa-bars');
                icon.classList.add('fa-times');
            }
        });

        // Close mobile menu on link click
        mobileMenu.querySelectorAll('a').forEach(link => {
            link.addEventListener('click', () => {
                mobileMenu.classList.add('hidden');
                icon.classList.remove('fa-times');
                icon.classList.add('fa-bars');
            });
        });
    }

    // Corporate Modal logic removed as products are now dynamically loaded.

    // Booking Form Logic
    const bookingForm = document.getElementById('booking-form');
    const serviceError = document.getElementById('service-error');

    if (bookingForm && serviceError) {
        bookingForm.addEventListener('submit', (e) => {
            e.preventDefault(); // Prevent default submission
            
            // Reset error state
            serviceError.classList.add('hidden');
            serviceError.classList.remove('flex');

            // Get form values
            const name = document.getElementById('fullName').value.trim();
            const phone = document.getElementById('whatsappNum').value.trim();
            const date = document.getElementById('eventDate').value;
            const location = document.getElementById('eventLocation').value.trim();

            // Get checked services
            const checkboxes = document.querySelectorAll('input[name="services"]:checked');
            
            if (checkboxes.length === 0) {
                serviceError.classList.remove('hidden');
                serviceError.classList.add('flex');
                return; // Stop execution if no service is selected
            }

            // Gather services into an array
            const servicesArray = Array.from(checkboxes).map(cb => cb.value);

            // Formatted directly since products are now detailed

            const servicesString = servicesArray.join(', ');

            // Format Date for better readability
            let formattedDate = date;
            if(date) {
                const dateObj = new Date(date);
                // Check if valid date
                if(!isNaN(dateObj.getTime())) {
                    formattedDate = dateObj.toLocaleDateString('en-GB', { day: 'numeric', month: 'short', year: 'numeric' });
                }
            }

            // Construct WhatsApp Message strictly as requested
            const message = `Hello EventSetup Team! I would like to inquire about a booking.\n\n*Name:* ${name}\n*Phone:* ${phone}\n*Date:* ${formattedDate}\n*Location:* ${location}\n*Services Required:* ${servicesString}\n\nPlease get in touch with me.`;

            // Encode message
            const encodedMessage = encodeURIComponent(message);

            // Phone number of the business (can be changed to real number later)
            const businessPhone = "919650624535";

            // Open WhatsApp in new tab
            window.open(`https://wa.me/${businessPhone}?text=${encodedMessage}`, '_blank');
        });
    }

    // --- Geolocation Logic & Global Sync ---
    const locationBtns = document.querySelectorAll('.location-btn');
    const eventLocationInput = document.getElementById('eventLocation');

    // Function to update all location elements across the page
    const updateLocationUI = (locationName) => {
        if (!locationName) return;
        
        // Update all .location-text (navbar, etc)
        document.querySelectorAll('.location-text').forEach(el => {
            el.textContent = locationName;
            el.classList.add('text-brand-red'); // Highlight it
        });

        // Update all .dynamic-city-text (hero titles, etc)
        document.querySelectorAll('.dynamic-city-text').forEach(el => {
            el.textContent = ` in ${locationName}`;
        });

        // Update booking form input
        if (eventLocationInput) {
            eventLocationInput.value = locationName;
        }

        // Update View Page Breadcrumb/Location if on view.html
        const viewLocText = document.getElementById('view-location-text');
        if (viewLocText) viewLocText.textContent = locationName;

        const viewBreadcrumbLoc = document.getElementById('view-breadcrumb-location');
        if (viewBreadcrumbLoc) viewBreadcrumbLoc.textContent = ` (${locationName})`;
    };

    // Load saved location on every page load
    const savedLocation = localStorage.getItem('userLocation');
    if (savedLocation) {
        updateLocationUI(savedLocation);
    }

    locationBtns.forEach(btn => {
        btn.addEventListener('click', () => {
            const locationTexts = document.querySelectorAll('.location-text');
            locationTexts.forEach(el => el.textContent = "Locating...");
            
            if (navigator.geolocation) {
                navigator.geolocation.getCurrentPosition(
                    async (position) => {
                        const lat = position.coords.latitude;
                        const lon = position.coords.longitude;
                        
                        try {
                            const response = await fetch(`https://nominatim.openstreetmap.org/reverse?format=json&lat=${lat}&lon=${lon}&zoom=18`);
                            const data = await response.json();
                            
                            let locationName = "Unknown Location";
                            if (data.address) {
                                const area = data.address.suburb || data.address.neighbourhood || data.address.road || data.address.industrial || data.address.subdivision;
                                const city = data.address.city || data.address.town || data.address.village || data.address.state_district;
                                
                                if (area && city) {
                                    locationName = `${area}, ${city}`;
                                } else {
                                    locationName = area || city || data.address.state || "Unknown Location";
                                }
                            }
                            
                            localStorage.setItem('userLocation', locationName);
                            updateLocationUI(locationName);
                            
                            if (eventLocationInput) {
                                eventLocationInput.classList.add('ring-2', 'ring-brand-red');
                                setTimeout(() => eventLocationInput.classList.remove('ring-2', 'ring-brand-red'), 1500);
                            }
                        } catch (error) {
                            console.error("Geocoding error:", error);
                            locationTexts.forEach(el => el.textContent = "Location Error");
                        }
                    },
                    (error) => {
                        console.error("Geolocation error:", error);
                        locationTexts.forEach(el => el.textContent = "Enable Location");
                        alert("Enable location to find best service in your area.");
                    }
                );
            } else {
                alert("Geolocation is not supported by your browser.");
            }
        });
    });
    // Initialize Typed.js for Hero Section
    const titleEl = document.getElementById('typed-title');
    const subtitleEl = document.getElementById('typed-subtitle');
    
    if (titleEl && subtitleEl && typeof Typed !== 'undefined') {
        let titleTyped = null;
        let subtitleTyped = null;

        const runTypingLoop = () => {
            titleEl.innerHTML = '';
            subtitleEl.innerHTML = '';
            
            titleTyped = new Typed('#typed-title', {
                strings: ['Transforming Moments into <br class="hidden md:block" /> <span class="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-brand-red">Masterpieces.</span>'],
                typeSpeed: 50,
                showCursor: true,
                cursorChar: '|',
                onComplete: function(titleSelf) {
                    titleSelf.cursor.style.display = 'none'; // Hide title cursor
                    
                    subtitleTyped = new Typed('#typed-subtitle', {
                        strings: ['Expert Tent Decor, Corporate Events, and Game Installations for your perfect celebration.'],
                        typeSpeed: 30,
                        showCursor: true,
                        cursorChar: '|',
                        onComplete: function(subSelf) {
                            setTimeout(() => {
                                const container = titleEl.closest('.absolute');
                                if (container) {
                                    container.style.transition = 'opacity 0.8s ease-in-out';
                                    container.style.opacity = '0';
                                }
                                
                                setTimeout(() => {
                                    titleSelf.destroy();
                                    subSelf.destroy();
                                    if (container) container.style.opacity = '1';
                                    runTypingLoop();
                                }, 800);
                            }, 4000);
                        }
                    });
                }
            });
        };
        runTypingLoop();
    }

    // Populate Dynamic Booking Services Grid
    const bookingServicesGrid = document.getElementById('dynamic-booking-services');
    if (bookingServicesGrid && window.servicesData) {
        bookingServicesGrid.innerHTML = '';
        Object.values(window.servicesData).forEach(category => {
            category.items.forEach(item => {
                const label = document.createElement('label');
                label.className = 'custom-checkbox relative flex items-center cursor-pointer group bg-white/5 p-4 rounded-xl border border-white/5 hover:border-brand-red/50 transition-all';
                label.innerHTML = `
                    <input type="checkbox" name="services" value="${item.name}" class="peer sr-only">
                    <div class="w-6 h-6 border-2 border-white/30 rounded flex items-center justify-center bg-transparent peer-focus:ring-2 peer-focus:ring-brand-red transition-all group-hover:border-white/60 shrink-0">
                        <svg class="hidden w-3.5 h-3.5 text-white pointer-events-none" viewBox="0 0 17 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M1 6.5L5.5 11L16 1" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"/>
                        </svg>
                    </div>
                    <span class="ml-3 text-white font-medium select-none truncate" title="${item.name}">${item.name}</span>
                `;
                bookingServicesGrid.appendChild(label);
            });
        });
    }

    // --- Global Cart Badge Sync ---
    const updateGlobalCartBadges = (count) => {
        document.querySelectorAll('.cart-badge').forEach(badge => {
            badge.textContent = count;
            if (count > 0) {
                badge.classList.remove('hidden');
                badge.classList.add('flex');
            } else {
                badge.classList.add('hidden');
                badge.classList.remove('flex');
            }
        });

        const bookNowBtns = document.querySelectorAll('.book-now-btn, a[href$="#book"]');
        bookNowBtns.forEach(btn => {
            const isInSubDir = window.location.pathname.includes('/services/');
            const pathParts = window.location.pathname.split('/').filter(p => p);
            // Check if we are in a sub-directory of services (e.g., services/corporate-events/)
            const isInDeepDir = isInSubDir && (pathParts.includes('corporate-events') || pathParts.includes('weddings') || pathParts.includes('tents') || pathParts.includes('games'));
            
            let prefix = '';
            if (isInDeepDir) prefix = '../../';
            else if (isInSubDir) prefix = '../';

            const cartPath = prefix + 'cart.html';
            const explorerPath = prefix + (isInSubDir ? 'explorer.html' : 'services/explorer.html');

            if (count > 0) {
                btn.href = cartPath;
                if (btn.tagName === 'A' && btn.classList.contains('book-now-btn')) btn.innerText = 'Go to Bucket';
            } else {
                // For regular #book links, we want to keep the hash if on index, or point to index#book
                if (btn.getAttribute('href').includes('#book')) {
                    btn.href = (isInSubDir ? prefix + 'index.html#book' : '#book');
                } else {
                    btn.href = explorerPath;
                }
                if (btn.tagName === 'A' && btn.classList.contains('book-now-btn')) btn.innerText = 'Book Now';
            }
        });
    };

    // Global Date Validation
    const setMinDate = () => {
        const today = new Date().toISOString().split('T')[0];
        document.querySelectorAll('input[type="date"]').forEach(input => {
            input.setAttribute('min', today);
        });
    };
    setMinDate();

    // Initial load
    const savedCart = JSON.parse(localStorage.getItem('cart') || '[]');
    updateGlobalCartBadges(savedCart.length);

    window.addEventListener('cartUpdated', (e) => {
        updateGlobalCartBadges(e.detail);
    });

    window.validateForm = (formData) => {
        const nameRegex = /^[a-zA-Z\s]{3,50}$/;
        const phoneRegex = /^[0-9]{10,15}$/;
        if (formData.name && !nameRegex.test(formData.name)) {
            alert("Please enter a valid name.");
            return false;
        }
        if (formData.phone && !phoneRegex.test(formData.phone)) {
            alert("Please enter a valid WhatsApp number.");
            return false;
        }
        return true;
    };

    // --- Gallery Grid Logic (Synced & Slideable) ---
    const galleryGrid = document.getElementById('gallery-grid');
    if (galleryGrid) {
        const renderGallery = () => {
            galleryGrid.innerHTML = '';
            
            // Use window.galleryData if available, fallback to services images
            let sourceData = window.galleryData || [];
            
            if (sourceData.length === 0 && window.servicesData) {
                Object.values(window.servicesData).forEach(cat => {
                    cat.items.forEach(item => {
                        sourceData.push({ type: 'image', src: item.image, title: item.name });
                    });
                });
            }

            sourceData.forEach((item, index) => {
                const card = document.createElement('div');
                const pulseDelay = Math.random() * 5;
                card.className = `gallery-item shrink-0 w-[300px] md:w-[350px] aspect-video relative overflow-hidden rounded-2xl group bg-white/5 border border-white/10 transition-all duration-1000 animate-pulse-slow snap-start cursor-grab active:cursor-grabbing`;
                card.style.animationDelay = `${pulseDelay}s`;
                
                if (item.type === 'video') {
                    card.innerHTML = `
                        <video src="${item.src}" class="w-full h-full object-cover" muted loop playsinline poster="${item.poster || ''}"></video>
                        <div class="absolute inset-0 bg-slate-950/40 flex items-center justify-center group-hover:opacity-0 transition-opacity">
                            <i class="fas fa-play-circle text-5xl text-white opacity-80"></i>
                        </div>
                        <div class="absolute inset-0 bg-gradient-to-t from-slate-950/90 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-all duration-700 flex items-end p-4">
                            <div class="translate-y-2 group-hover:translate-y-0 transition-transform duration-500">
                                <span class="text-[10px] text-brand-red font-black uppercase tracking-widest block mb-1">Video Highlights</span>
                                <span class="text-xs text-white font-black uppercase tracking-tighter">${item.title}</span>
                            </div>
                        </div>
                    `;
                    // Play video on hover
                    card.addEventListener('mouseenter', () => card.querySelector('video').play());
                    card.addEventListener('mouseleave', () => card.querySelector('video').pause());
                } else {
                    card.innerHTML = `
                        <img src="${item.src}" class="w-full h-full object-cover transition-transform duration-[10000ms] group-hover:scale-125" alt="${item.title}" loading="lazy">
                        <div class="absolute inset-0 bg-gradient-to-t from-slate-950/90 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-all duration-700 flex items-end p-4">
                            <div class="translate-y-2 group-hover:translate-y-0 transition-transform duration-500">
                                <span class="text-[10px] text-white/70 font-bold uppercase tracking-widest block mb-1">Experience Excellence</span>
                                <span class="text-xs text-brand-red font-black uppercase tracking-tighter">${item.title}</span>
                            </div>
                        </div>
                    `;
                }
                galleryGrid.appendChild(card);
            });

            // Add Drag-to-Scroll Functionality
            let isDown = false;
            let startX;
            let scrollLeft;

            galleryGrid.addEventListener('mousedown', (e) => {
                isDown = true;
                galleryGrid.classList.add('active');
                startX = e.pageX - galleryGrid.offsetLeft;
                scrollLeft = galleryGrid.scrollLeft;
            });
            galleryGrid.addEventListener('mouseleave', () => { isDown = false; });
            galleryGrid.addEventListener('mouseup', () => { isDown = false; });
            galleryGrid.addEventListener('mousemove', (e) => {
                if (!isDown) return;
                e.preventDefault();
                const x = e.pageX - galleryGrid.offsetLeft;
                const walk = (x - startX) * 2; // scroll-fast
                galleryGrid.scrollLeft = scrollLeft - walk;
            });

            // Spotlight Effect
            setInterval(() => {
                const items = document.querySelectorAll('.gallery-item');
                if (items.length > 0) {
                    items.forEach(i => i.classList.remove('spotlight'));
                    const randomItem = items[Math.floor(Math.random() * items.length)];
                    randomItem.classList.add('spotlight');
                }
            }, 3000);
        };
        renderGallery();
    }

    // --- Featured Services Slider Logic ---
    const featuredContainer = document.getElementById('featured-services-container');
    if (featuredContainer && window.servicesData) {
        const renderFeaturedSlider = () => {
            featuredContainer.innerHTML = '';
            
            // Get all items from all categories
            let allItems = [];
            Object.keys(window.servicesData).forEach(catKey => {
                const cat = window.servicesData[catKey];
                cat.items.forEach(item => {
                    allItems.push({ ...item, categoryTitle: cat.title });
                });
            });

            // Randomize and pick 12 items
            const featured = allItems.sort(() => 0.5 - Math.random()).slice(0, 12);
            const userLoc = localStorage.getItem('userLocation') || 'Gurgaon';

            featured.forEach(item => {
                const isSelected = window.selectedServices && window.selectedServices.has(item.id);
                const card = document.createElement('div');
                card.className = 'min-w-[280px] md:min-w-[320px] max-w-[320px] snap-start bg-white border border-gray-100 shadow-sm rounded-3xl p-5 hover:shadow-lg hover:border-brand-red/20 transition-all group flex flex-col shrink-0';
                card.innerHTML = `
                    <div class="relative h-40 mb-4 overflow-hidden rounded-2xl">
                        <img src="${item.image}" class="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" loading="lazy">
                        <div class="absolute top-2 right-2 bg-white/90 backdrop-blur-sm text-[9px] font-bold text-slate-800 px-2 py-1 rounded-full uppercase tracking-wider">
                            ${item.categoryTitle}
                        </div>
                    </div>
                    <div class="flex-1">
                        <div class="flex items-center text-[9px] text-brand-red font-bold mb-2 uppercase tracking-wider">
                            <i class="fas fa-location-dot mr-1"></i> Available in ${userLoc}
                        </div>
                        <h4 class="font-bold text-slate-800 mb-1 text-base line-clamp-1">${item.name}</h4>
                    </div>
                    <button onclick="event.preventDefault(); toggleService('${item.id}', this)" 
                        data-service-id="${item.id}"
                        class="w-full py-2.5 my-3 rounded-xl text-xs font-bold transition-all featured-add-btn flex items-center justify-center ${isSelected ? 'bg-brand-red text-white shadow-lg' : 'bg-brand-blue/5 text-brand-blue hover:bg-brand-blue hover:text-white border border-brand-blue/10'}">
                        <i class="fas ${isSelected ? 'fa-check' : 'fa-cart-plus'} mr-2"></i> ${isSelected ? 'Added to Bucket' : 'Add to Bucket'}
                    </button>
                    <div class="space-y-3 mt-auto border-t border-gray-50 pt-3">
                        <div class="flex justify-between items-center px-1">
                            <span class="text-[9px] text-slate-400 uppercase tracking-widest font-bold">Starts from</span>
                            <span class="text-sm font-black text-brand-red">${item.price}</span>
                        </div>
                        <a href="services/${item.url}" class="block w-full py-2.5 text-center text-xs font-bold text-white bg-brand-red hover:bg-brand-red-hover transition-all rounded-xl shadow-md shadow-brand-red/20">
                            View Details <i class="fas fa-arrow-right ml-1"></i>
                        </a>
                    </div>
                `;
                featuredContainer.appendChild(card);
            });
        };

        renderFeaturedSlider();

        // Slider Navigation
        const prevBtn = document.getElementById('featured-prev');
        const nextBtn = document.getElementById('featured-next');

        if (prevBtn && nextBtn) {
            nextBtn.addEventListener('click', () => {
                featuredContainer.scrollBy({ left: 340, behavior: 'smooth' });
            });
            prevBtn.addEventListener('click', () => {
                featuredContainer.scrollBy({ left: -340, behavior: 'smooth' });
            });
        }

        // Auto-slide every 5 seconds
        let autoSlideInterval = setInterval(() => {
            if (featuredContainer.scrollLeft + featuredContainer.offsetWidth >= featuredContainer.scrollWidth) {
                featuredContainer.scrollTo({ left: 0, behavior: 'smooth' });
            } else {
                featuredContainer.scrollBy({ left: 340, behavior: 'smooth' });
            }
        }, 5000);

        // Pause auto-slide on hover/interaction
        featuredContainer.addEventListener('mouseenter', () => clearInterval(autoSlideInterval));
        featuredContainer.addEventListener('mouseleave', () => {
            autoSlideInterval = setInterval(() => {
                if (featuredContainer.scrollLeft + featuredContainer.offsetWidth >= featuredContainer.scrollWidth) {
                    featuredContainer.scrollTo({ left: 0, behavior: 'smooth' });
                } else {
                    featuredContainer.scrollBy({ left: 340, behavior: 'smooth' });
                }
            }, 5000);
        });
    }

    // Sync all Add buttons on page
    window.addEventListener('cartUpdated', () => {
        const cart = JSON.parse(localStorage.getItem('cart') || '[]');
        const cartSet = new Set(cart);

        document.querySelectorAll('[data-service-id]').forEach(btn => {
            const sid = btn.dataset.serviceId;
            const isSelected = cartSet.has(sid);
            
            if (isSelected) {
                btn.className = btn.className.replace('bg-brand-blue/5 text-brand-blue hover:bg-brand-blue hover:text-white border border-brand-blue/10', 'bg-brand-red text-white shadow-lg');
                btn.innerHTML = `<i class="fas fa-check mr-2"></i> Added to Bucket`;
            } else {
                btn.className = btn.className.replace('bg-brand-red text-white shadow-lg', 'bg-brand-blue/5 text-brand-blue hover:bg-brand-blue hover:text-white border border-brand-blue/10');
                btn.innerHTML = `<i class="fas fa-cart-plus mr-2"></i> Add to Bucket`;
            }
    // --- Glass Break Effect for Expertise Cards ---
    document.querySelectorAll('.expertise-card').forEach(card => {
        card.addEventListener('click', function(e) {
            e.preventDefault();
            const targetUrl = this.getAttribute('href');
            
            // Create fragments
            for (let i = 0; i < 15; i++) {
                const fragment = document.createElement('div');
                fragment.className = 'glass-fragment';
                
                // Random position and trajectory
                const size = Math.random() * 20 + 10;
                fragment.style.width = `${size}px`;
                fragment.style.height = `${size}px`;
                fragment.style.left = `${e.clientX - 10}px`;
                fragment.style.top = `${e.clientY - 10}px`;
                fragment.style.position = 'fixed';
                
                fragment.style.setProperty('--tx', `${(Math.random() - 0.5) * 400}px`);
                fragment.style.setProperty('--ty', `${(Math.random() - 0.5) * 400}px`);
                fragment.style.setProperty('--tr', `${Math.random() * 360}deg`);
                
                document.body.appendChild(fragment);
                setTimeout(() => fragment.remove(), 1000);
            }

            // Apply break class to card
            this.classList.add('glass-break');

            // Navigate after animation
            setTimeout(() => {
                window.location.href = targetUrl;
            }, 550);
        });
    });
});

