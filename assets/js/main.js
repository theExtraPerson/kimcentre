/**
 * Main application module for KIMC website
 * Implements the Module pattern and Observer pattern for animations
 */
const KIMCApp = (function() {
    /**
     * Initialize the application
     */
    function init() {
        setupNavigation();
        renderServiceCards();
        setupAnimations();
        updateCopyrightYear();
    }
    
    /**
     * Set up navigation highlighting and scroll behavior
     */
    function setupNavigation() {
        const navbar = document.querySelector('.navbar');
        const currentLocation = location.href;
        const navItems = document.querySelectorAll('.navbar-nav .nav-link');
        
        // Highlight current page in navigation
        navItems.forEach(item => {
            if (item.href === currentLocation) {
                item.classList.add('active');
            }
        });
        
        // Navbar scroll effect
        window.addEventListener('scroll', function() {
            if (window.scrollY > 50) {
                navbar.classList.add('navbar-scrolled');
            } else {
                navbar.classList.remove('navbar-scrolled');
            }
        });
    }
    
    /**
     * Render service cards from configuration data
     * Implements the Template Method pattern
     */
    function renderServiceCards() {
        const servicesContainer = document.getElementById('services-container');
        
        if (!servicesContainer || !KIMCConfig.services) return;
        
        // Clear existing content
        servicesContainer.innerHTML = '';
        
        // Create and append service cards
        KIMCConfig.services.forEach(service => {
            const cardElement = ServiceCardComponent.create(service);
            servicesContainer.appendChild(cardElement);
        });
    }
    
    /**
     * Set up GSAP animations
     * Implements the Observer pattern
     */
    function setupAnimations() {
        // Check if GSAP is available
        if (typeof gsap === 'undefined') {
            console.warn('GSAP library not loaded. Animations disabled.');
            return;
        }
        
        // Navigation animations
        gsap.from('.navbar-brand', {
            y: -50,
            opacity: 0,
            duration: 1,
            ease: 'power3.out'
        });
        
        gsap.from('.nav-item', {
            y: -50,
            opacity: 0,
            duration: 0.8,
            stagger: 0.1,
            delay: 0.3,
            ease: 'power3.out'
        });
        
        // Hero section animations

        const heroTimeline = gsap.timeline();

        heroTimeline.from('.hero-content h1', {
            y: 50,
            opacity: 0,
            duration: 1,
            ease: 'power3.out'
        }).from('.hero-content p', {
            y: 30,
            opacity: 0,
            duration: 1,
            ease: 'power3.out'
        }, '-=0.5').from('.ambulance-btn', {
            y: 30,
            opacity: 0,
            duration: 1,
            ease: 'power3.out'
        }, '-=0.5');
        
        // Check if ScrollTrigger is available
        if (typeof ScrollTrigger !== 'undefined') {
            gsap.registerPlugin(ScrollTrigger);
            
            // Service cards scroll animations
            ScrollTrigger.batch('.service-card', {
                onEnter: batch => gsap.to(batch, {
                    opacity: 1,
                    y: 0,
                    duration: 1,
                    stagger: 0.3,
                    ease: 'power3.out'
                }),
                start: 'top 80%',
                once: true
            });
        } else {
            // Fallback animation if ScrollTrigger is not available
            gsap.to('.service-card', {
                opacity: 1,
                y: 0,
                duration: 1,
                stagger: 0.3,
                delay: 0.5
            });
        }
    }
    
    /**
     * Update copyright year to current year
     */
    function updateCopyrightYear() {
        const yearElement = document.getElementById('current-year');
        if (yearElement) {
            yearElement.textContent = new Date().getFullYear();
        }
    }
    
    // Return public API
    return {
        init: init
    };
})();

// Initialize the application when DOM is fully loaded
document.addEventListener('DOMContentLoaded', KIMCApp.init);
