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
            const message = `Hello EventSetup Team! I would like to inquire about a booking.\n*Name:* ${name}\n*Phone:* ${phone}\n*Date:* ${formattedDate}\n*Location:* ${location}\n*Services Required:* ${servicesString}\nPlease get in touch with me.`;

            // Encode message
            const encodedMessage = encodeURIComponent(message);

            // Phone number of the business (can be changed to real number later)
            const businessPhone = "919650624535";

            // Open WhatsApp in new tab
            window.open(`https://wa.me/${businessPhone}?text=${encodedMessage}`, '_blank');
        });
    }

    // --- Geolocation Logic ---
    const locationBtns = document.querySelectorAll('.location-btn');
    const eventLocationInput = document.getElementById('eventLocation');

    // Load saved location
    const savedLocation = localStorage.getItem('userLocation');
    if (savedLocation) {
        document.querySelectorAll('.location-text').forEach(el => el.textContent = savedLocation);
        document.querySelectorAll('.dynamic-city-text').forEach(el => el.textContent = ` in ${savedLocation}`);
        if (eventLocationInput && !eventLocationInput.value) {
            eventLocationInput.value = savedLocation;
        }
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
                            // Using OpenStreetMap Nominatim API with higher zoom for detailed area
                            const response = await fetch(`https://nominatim.openstreetmap.org/reverse?format=json&lat=${lat}&lon=${lon}&zoom=18`);
                            const data = await response.json();
                            
                            let locationName = "Unknown Location";
                            if (data.address) {
                                // Try to get the most specific area first
                                const area = data.address.suburb || data.address.neighbourhood || data.address.road || data.address.industrial || data.address.subdivision;
                                const city = data.address.city || data.address.town || data.address.village || data.address.state_district;
                                
                                if (area && city) {
                                    locationName = `${area}, ${city}`;
                                } else {
                                    locationName = area || city || data.address.state || "Unknown Location";
                                }
                            }
                            
                            locationTexts.forEach(el => el.textContent = locationName);
                            document.querySelectorAll('.dynamic-city-text').forEach(el => el.textContent = ` in ${locationName}`);
                            localStorage.setItem('userLocation', locationName);
                            
                            if (eventLocationInput) {
                                eventLocationInput.value = locationName;
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
                        // Show popup if location is denied or failed
                        alert("Enable location to find best service in your area. This helps us show available setups and pricing for your specific location.");
                    }
                );
            } else {
                alert("Geolocation is not supported by your browser. Please enter your location manually.");
                document.querySelectorAll('.location-text').forEach(el => el.textContent = "Not Supported");
            }
        });
    });

    // Initialize Typed.js for Hero Section
    const titleEl = document.getElementById('typed-title');
    const subtitleEl = document.getElementById('typed-subtitle');
    
    if (titleEl && subtitleEl) {
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
                                // Fade out the container before restarting
                                const container = titleEl.closest('.absolute');
                                container.style.transition = 'opacity 0.8s ease-in-out';
                                container.style.opacity = '0';
                                
                                setTimeout(() => {
                                    // Destroy instances and reset opacity
                                    titleSelf.destroy();
                                    subSelf.destroy();
                                    container.style.opacity = '1';
                                    runTypingLoop();
                                }, 800);
                            }, 4000); // 4-second pause to read
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
        
        if(bookingServicesGrid.children.length === 0) {
            bookingServicesGrid.innerHTML = '<p class="text-white/50 text-sm italic col-span-full">No specific services loaded yet. Please contact us.</p>';
        }
    }
});
