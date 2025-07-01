// Main JavaScript file for Hout Bay Barber Shop
document.addEventListener('DOMContentLoaded', function() {
    // Initialize all components
    initScrollAnimations();
    initSmoothScrolling();
    initWhatsAppButton();
    initContactForm();
    initMobileMenu();
    
    console.log('Hout Bay Barber Shop website loaded successfully!');
});

/**
 * Initialize scroll animations
 */
function initScrollAnimations() {
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };

    const observer = new IntersectionObserver(function(entries) {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
            }
        });
    }, observerOptions);

    // Observe all elements with fade-in class
    document.querySelectorAll('.fade-in').forEach(el => {
        observer.observe(el);
    });

    // Add fade-in class to service cards and gallery items
    document.querySelectorAll('.service-card, .gallery-item').forEach(el => {
        el.classList.add('fade-in');
        observer.observe(el);
    });
}

/**
 * Initialize smooth scrolling for navigation links
 */
function initSmoothScrolling() {
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                const headerOffset = 80;
                const elementPosition = target.offsetTop;
                const offsetPosition = elementPosition - headerOffset;

                window.scrollTo({
                    top: offsetPosition,
                    behavior: 'smooth'
                });
            }
        });
    });
}

/**
 * Initialize WhatsApp button functionality
 */
function initWhatsAppButton() {
    const whatsappButton = document.getElementById('whatsapp-float');
    
    if (whatsappButton) {
        // Show/hide WhatsApp button based on scroll position
        window.addEventListener('scroll', function() {
            if (window.scrollY > 300) {
                whatsappButton.style.display = 'block';
            } else {
                whatsappButton.style.display = 'none';
            }
        });

        // Add click tracking
        whatsappButton.addEventListener('click', function() {
            gtag('event', 'click', {
                'event_category': 'WhatsApp',
                'event_label': 'Float Button'
            });
        });
    }
}

/**
 * Initialize contact form functionality
 */
function initContactForm() {
    const contactForm = document.querySelector('#contact form');
    
    if (contactForm) {
        contactForm.addEventListener('submit', function(e) {
            // Basic form validation
            const name = this.querySelector('#name').value.trim();
            const email = this.querySelector('#email').value.trim();
            const message = this.querySelector('#message').value.trim();
            
            if (!name || !email || !message) {
                e.preventDefault();
                showAlert('Please fill in all required fields.', 'warning');
                return;
            }
            
            if (!isValidEmail(email)) {
                e.preventDefault();
                showAlert('Please enter a valid email address.', 'warning');
                return;
            }
            
            // Track form submission
            gtag('event', 'submit', {
                'event_category': 'Contact Form',
                'event_label': 'Form Submission'
            });
        });
    }
}

/**
 * Initialize mobile menu functionality
 */
function initMobileMenu() {
    const navbarToggler = document.querySelector('.navbar-toggler');
    const navbarCollapse = document.querySelector('.navbar-collapse');
    
    if (navbarToggler && navbarCollapse) {
        // Close mobile menu when clicking on a link
        document.querySelectorAll('.navbar-nav .nav-link').forEach(link => {
            link.addEventListener('click', function() {
                if (window.innerWidth < 992) {
                    const bsCollapse = new bootstrap.Collapse(navbarCollapse, {
                        hide: true
                    });
                }
            });
        });
    }
}

/**
 * Utility function to validate email
 */
function isValidEmail(email) {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
}

/**
 * Show alert message
 */
function showAlert(message, type = 'info') {
    const alertDiv = document.createElement('div');
    alertDiv.className = `alert alert-${type} alert-dismissible fade show`;
    alertDiv.innerHTML = `
        ${message}
        <button type="button" class="btn-close" data-bs-dismiss="alert"></button>
    `;
    
    const container = document.querySelector('.container');
    if (container) {
        container.insertBefore(alertDiv, container.firstChild);
        
        // Auto-hide after 5 seconds
        setTimeout(() => {
            alertDiv.remove();
        }, 5000);
    }
}

/**
 * Booking button click handler
 */
function handleBookingClick() {
    const phoneNumber = '27123456789'; // Replace with actual WhatsApp number
    const message = encodeURIComponent('Hi! I would like to book an appointment at Hout Bay Barber Shop. What times do you have available?');
    const whatsappUrl = `https://wa.me/${phoneNumber}?text=${message}`;
    
    // Track booking click
    gtag('event', 'click', {
        'event_category': 'Booking',
        'event_label': 'Book Now Button'
    });
    
    window.open(whatsappUrl, '_blank');
}

/**
 * Add event listeners for booking buttons
 */
document.addEventListener('DOMContentLoaded', function() {
    document.querySelectorAll('a[href*="book"]').forEach(button => {
        button.addEventListener('click', function(e) {
            e.preventDefault();
            handleBookingClick();
        });
    });
});

/**
 * Initialize Google Analytics (placeholder)
 */
function gtag() {
    // Placeholder for Google Analytics
    // In production, replace with actual gtag implementation
    console.log('Analytics event:', arguments);
}

/**
 * Lazy loading for images
 */
function initLazyLoading() {
    if ('IntersectionObserver' in window) {
        const imageObserver = new IntersectionObserver((entries, observer) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    const img = entry.target;
                    img.src = img.dataset.src;
                    img.classList.remove('lazy');
                    imageObserver.unobserve(img);
                }
            });
        });

        document.querySelectorAll('img[data-src]').forEach(img => {
            imageObserver.observe(img);
        });
    }
}

/**
 * Add parallax effect to hero section
 */
function initParallax() {
    const hero = document.querySelector('.hero-section');
    
    if (hero) {
        window.addEventListener('scroll', function() {
            const scrolled = window.pageYOffset;
            const rate = scrolled * -0.5;
            hero.style.transform = `translateY(${rate}px)`;
        });
    }
}

/**
 * Initialize all animations and effects
 */
function initAdvancedEffects() {
    initLazyLoading();
    initParallax();
    
    // Add hover effects to service cards
    document.querySelectorAll('.service-card').forEach(card => {
        card.addEventListener('mouseenter', function() {
            this.style.transform = 'translateY(-10px) scale(1.02)';
        });
        
        card.addEventListener('mouseleave', function() {
            this.style.transform = 'translateY(0) scale(1)';
        });
    });
}

// Initialize advanced effects when DOM is loaded
document.addEventListener('DOMContentLoaded', initAdvancedEffects);

/**
 * Handle window resize events
 */
window.addEventListener('resize', function() {
    // Adjust layout for different screen sizes
    if (window.innerWidth < 768) {
        document.body.classList.add('mobile-view');
    } else {
        document.body.classList.remove('mobile-view');
    }
});

/**
 * Performance optimization
 */
function optimizePerformance() {
    // Debounce scroll events
    let scrollTimeout;
    window.addEventListener('scroll', function() {
        clearTimeout(scrollTimeout);
        scrollTimeout = setTimeout(function() {
            // Handle scroll events here
        }, 16); // ~60fps
    });
}

// Initialize performance optimizations
optimizePerformance();
