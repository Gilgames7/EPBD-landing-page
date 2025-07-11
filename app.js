// EPBD Pro Landing Page JavaScript

document.addEventListener('DOMContentLoaded', function() {
    // Initialize all functionality
    initMobileNavigation();
    initFAQAccordion();
    initLeadForms();
    initPurchaseForm();
    initSmoothScrolling();
    initHeaderScroll();
});

// Mobile Navigation
function initMobileNavigation() {
    const navToggle = document.querySelector('.nav__toggle');
    const navMenu = document.querySelector('.nav__menu');
    
    if (navToggle && navMenu) {
        navToggle.addEventListener('click', function() {
            navMenu.classList.toggle('active');
            navToggle.classList.toggle('active');
        });
        
        // Close menu when clicking on a link
        const navLinks = document.querySelectorAll('.nav__menu a');
        navLinks.forEach(link => {
            link.addEventListener('click', function() {
                navMenu.classList.remove('active');
                navToggle.classList.remove('active');
            });
        });
        
        // Close menu when clicking outside
        document.addEventListener('click', function(event) {
            if (!navToggle.contains(event.target) && !navMenu.contains(event.target)) {
                navMenu.classList.remove('active');
                navToggle.classList.remove('active');
            }
        });
    }
}

// FAQ Accordion
function initFAQAccordion() {
    const faqItems = document.querySelectorAll('.faq__item');
    
    faqItems.forEach(item => {
        const question = item.querySelector('.faq__question');
        
        question.addEventListener('click', function() {
            const isActive = item.classList.contains('active');
            
            // Close all other FAQ items
            faqItems.forEach(otherItem => {
                if (otherItem !== item) {
                    otherItem.classList.remove('active');
                }
            });
            
            // Toggle current item
            if (isActive) {
                item.classList.remove('active');
            } else {
                item.classList.add('active');
            }
        });
    });
}

// Lead Magnet Forms
function initLeadForms() {
    const leadForms = document.querySelectorAll('.lead-form');
    
    leadForms.forEach(form => {
        form.addEventListener('submit', function(e) {
            e.preventDefault();
            
            const email = form.querySelector('input[type="email"]').value;
            const magnet = form.getAttribute('data-magnet');
            const submitButton = form.querySelector('button[type="submit"]');
            
            if (!email || !isValidEmail(email)) {
                showMessage(form, 'Bitte geben Sie eine gültige E-Mail-Adresse ein.', 'error');
                return;
            }
            
            // Show loading state
            submitButton.classList.add('loading');
            submitButton.disabled = true;
            
            // Simulate form submission
            setTimeout(() => {
                // In a real implementation, this would send data to your server
                console.log('Lead magnet download requested:', { email, magnet });
                
                // Show success message
                showMessage(form, 'Vielen Dank! Ihr Download wird in Kürze per E-Mail zugeschickt.', 'success');
                
                // Reset form
                form.reset();
                
                // Remove loading state
                submitButton.classList.remove('loading');
                submitButton.disabled = false;
                
                // Track conversion (you can integrate with your analytics)
                trackConversion('lead_magnet', magnet);
                
            }, 1500);
        });
    });
}

// Purchase Form
function initPurchaseForm() {
    const purchaseForm = document.querySelector('.purchase-form');
    
    if (purchaseForm) {
        purchaseForm.addEventListener('submit', function(e) {
            e.preventDefault();
            
            const email = purchaseForm.querySelector('input[type="email"]').value;
            const submitButton = purchaseForm.querySelector('button[type="submit"]');
            
            if (!email || !isValidEmail(email)) {
                showMessage(purchaseForm, 'Bitte geben Sie eine gültige E-Mail-Adresse ein.', 'error');
                return;
            }
            
            // Show loading state
            submitButton.classList.add('loading');
            submitButton.disabled = true;
            
            // Simulate purchase process
            setTimeout(() => {
                // In a real implementation, this would redirect to payment processor
                console.log('Purchase initiated:', { email, product: 'EPBD Pro Starter Kit', price: 39 });
                
                // Show success message
                showMessage(purchaseForm, 'Vielen Dank für Ihr Interesse! Sie werden zur Zahlung weitergeleitet...', 'success');
                
                // Track conversion
                trackConversion('purchase', 'starter_kit');
                
                // In a real implementation, redirect to payment processor
                // window.location.href = 'https://your-payment-processor.com/checkout';
                
                // Remove loading state
                submitButton.classList.remove('loading');
                submitButton.disabled = false;
                
            }, 1500);
        });
    }
}

// Smooth Scrolling for Navigation
function initSmoothScrolling() {
    const navLinks = document.querySelectorAll('a[href^="#"]');
    
    navLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            
            const targetId = this.getAttribute('href').substring(1);
            const targetElement = document.getElementById(targetId);
            
            if (targetElement) {
                const headerHeight = document.querySelector('.header').offsetHeight;
                const targetPosition = targetElement.offsetTop - headerHeight - 20;
                
                window.scrollTo({
                    top: targetPosition,
                    behavior: 'smooth'
                });
            }
        });
    });
}

// Header Scroll Effect
function initHeaderScroll() {
    const header = document.querySelector('.header');
    
    if (header) {
        window.addEventListener('scroll', function() {
            if (window.scrollY > 100) {
                header.classList.add('scrolled');
            } else {
                header.classList.remove('scrolled');
            }
        });
    }
}

// Utility Functions
function isValidEmail(email) {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
}

function showMessage(form, message, type) {
    // Remove existing messages
    const existingMessage = form.querySelector('.message');
    if (existingMessage) {
        existingMessage.remove();
    }
    
    // Create new message
    const messageDiv = document.createElement('div');
    messageDiv.className = `message ${type}-message`;
    messageDiv.textContent = message;
    
    // Add message to form
    form.appendChild(messageDiv);
    
    // Show message with animation
    setTimeout(() => {
        messageDiv.classList.add('show');
    }, 10);
    
    // Remove message after 5 seconds
    setTimeout(() => {
        messageDiv.classList.remove('show');
        setTimeout(() => {
            if (messageDiv.parentNode) {
                messageDiv.parentNode.removeChild(messageDiv);
            }
        }, 300);
    }, 5000);
}

function trackConversion(type, value) {
    // Integration with analytics services
    console.log('Conversion tracked:', { type, value });
    
    // Example Google Analytics integration
    if (typeof gtag !== 'undefined') {
        gtag('event', 'conversion', {
            event_category: 'EPBD Pro',
            event_label: value,
            value: type === 'purchase' ? 39 : 0
        });
    }
    
    // Example Facebook Pixel integration
    if (typeof fbq !== 'undefined') {
        if (type === 'purchase') {
            fbq('track', 'Purchase', {
                value: 39,
                currency: 'EUR',
                content_name: 'EPBD Pro Starter Kit'
            });
        } else {
            fbq('track', 'Lead', {
                content_name: value
            });
        }
    }
}

// Add intersection observer for animations
function initScrollAnimations() {
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };
    
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('animate-in');
            }
        });
    }, observerOptions);
    
    // Observe elements for animation
    const animateElements = document.querySelectorAll('.benefit-card, .testimonial, .lead-magnet');
    animateElements.forEach(el => observer.observe(el));
}

// Initialize scroll animations when DOM is ready
document.addEventListener('DOMContentLoaded', initScrollAnimations);

// Add keyboard navigation for accessibility
document.addEventListener('keydown', function(e) {
    // Escape key closes mobile menu
    if (e.key === 'Escape') {
        const navMenu = document.querySelector('.nav__menu');
        const navToggle = document.querySelector('.nav__toggle');
        
        if (navMenu && navMenu.classList.contains('active')) {
            navMenu.classList.remove('active');
            navToggle.classList.remove('active');
        }
        
        // Close any open FAQ items
        const activeFAQ = document.querySelector('.faq__item.active');
        if (activeFAQ) {
            activeFAQ.classList.remove('active');
        }
    }
});

// Form validation enhancement
function enhanceFormValidation() {
    const emailInputs = document.querySelectorAll('input[type="email"]');
    
    emailInputs.forEach(input => {
        input.addEventListener('blur', function() {
            if (this.value && !isValidEmail(this.value)) {
                this.classList.add('error');
                this.setAttribute('aria-invalid', 'true');
            } else {
                this.classList.remove('error');
                this.setAttribute('aria-invalid', 'false');
            }
        });
        
        input.addEventListener('input', function() {
            if (this.classList.contains('error') && isValidEmail(this.value)) {
                this.classList.remove('error');
                this.setAttribute('aria-invalid', 'false');
            }
        });
    });
}

// Initialize form validation
document.addEventListener('DOMContentLoaded', enhanceFormValidation);

// Performance optimization: Lazy load images if any are added
function initLazyLoading() {
    const images = document.querySelectorAll('img[data-src]');
    
    const imageObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const img = entry.target;
                img.src = img.dataset.src;
                img.classList.remove('lazy');
                imageObserver.unobserve(img);
            }
        });
    });
    
    images.forEach(img => imageObserver.observe(img));
}

// Initialize lazy loading
document.addEventListener('DOMContentLoaded', initLazyLoading);