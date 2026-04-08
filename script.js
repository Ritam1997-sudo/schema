// ===============================================
// Dental Studio 32 - Interactive JavaScript
// ===============================================

document.addEventListener('DOMContentLoaded', function() {
    
    // ===== Mobile Menu Toggle =====
    const mobileMenuToggle = document.querySelector('.mobile-menu-toggle');
    const navMenu = document.querySelector('.nav-menu');
    
    if (mobileMenuToggle) {
        mobileMenuToggle.addEventListener('click', function() {
            navMenu.classList.toggle('active');
            const icon = this.querySelector('i');
            icon.classList.toggle('fa-bars');
            icon.classList.toggle('fa-times');
        });
    }

    // Close mobile menu when clicking on a link
    const navLinks = document.querySelectorAll('.nav-menu a');
    navLinks.forEach(link => {
        link.addEventListener('click', function() {
            if (window.innerWidth <= 768) {
                navMenu.classList.remove('active');
                const icon = mobileMenuToggle.querySelector('i');
                icon.classList.add('fa-bars');
                icon.classList.remove('fa-times');
            }
        });
    });

    // ===== Sticky Header =====
    const header = document.getElementById('header');
    let lastScroll = 0;
    
    window.addEventListener('scroll', function() {
        const currentScroll = window.pageYOffset;
        
        if (currentScroll > 100) {
            header.style.boxShadow = '0 4px 20px rgba(31, 47, 74, 0.15)';
        } else {
            header.style.boxShadow = '0 4px 20px rgba(31, 47, 74, 0.12)';
        }
        
        lastScroll = currentScroll;
    });

    // ===== Smooth Scroll for Navigation Links =====
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();
            const targetId = this.getAttribute('href');
            if (targetId === '#') return;
            
            const targetElement = document.querySelector(targetId);
            if (targetElement) {
                const headerHeight = header.offsetHeight;
                const targetPosition = targetElement.offsetTop - headerHeight;
                
                window.scrollTo({
                    top: targetPosition,
                    behavior: 'smooth'
                });
            }
        });
    });

    // ===== Active Navigation Link =====
    const sections = document.querySelectorAll('section[id]');
    
    window.addEventListener('scroll', function() {
        let current = '';
        const scrollPosition = window.pageYOffset + 150;
        
        sections.forEach(section => {
            const sectionTop = section.offsetTop;
            const sectionHeight = section.clientHeight;
            
            if (scrollPosition >= sectionTop && scrollPosition < sectionTop + sectionHeight) {
                current = section.getAttribute('id');
            }
        });
        
        navLinks.forEach(link => {
            link.classList.remove('active');
            if (link.getAttribute('href') === `#${current}`) {
                link.classList.add('active');
            }
        });
    });

    // ===== Counter Animation =====
    const achievementNumbers = document.querySelectorAll('.achievement-number');
    let counterAnimated = false;
    
    function animateCounter(element) {
        const target = parseInt(element.getAttribute('data-target'));
        const duration = 2000; // 2 seconds
        const increment = target / (duration / 16); // 60 FPS
        let current = 0;
        
        const updateCounter = () => {
            current += increment;
            if (current < target) {
                element.textContent = Math.floor(current).toLocaleString();
                requestAnimationFrame(updateCounter);
            } else {
                element.textContent = target.toLocaleString();
            }
        };
        
        updateCounter();
    }
    
    function checkCounterVisibility() {
        const achievementsSection = document.querySelector('.achievements-section');
        if (!achievementsSection || counterAnimated) return;
        
        const rect = achievementsSection.getBoundingClientRect();
        const isVisible = rect.top < window.innerHeight && rect.bottom >= 0;
        
        if (isVisible) {
            achievementNumbers.forEach(number => animateCounter(number));
            counterAnimated = true;
        }
    }
    
    window.addEventListener('scroll', checkCounterVisibility);
    checkCounterVisibility(); // Check on load

    // ===== Review Slider =====
    const reviewTrack = document.querySelector('.review-track');
    const prevBtn = document.querySelector('.slider-btn.prev');
    const nextBtn = document.querySelector('.slider-btn.next');
    
    if (reviewTrack && prevBtn && nextBtn) {
        let currentSlide = 0;
        const reviewCards = document.querySelectorAll('.review-card');
        const totalSlides = reviewCards.length;
        
        // Calculate slides to show based on screen width
        function getSlidesToShow() {
            if (window.innerWidth >= 992) return 3;
            if (window.innerWidth >= 768) return 2;
            return 1;
        }
        
        function updateSlider() {
            const slidesToShow = getSlidesToShow();
            const cardWidth = reviewCards[0].offsetWidth;
            const gap = 30;
            const offset = currentSlide * (cardWidth + gap);
            
            reviewTrack.style.transform = `translateX(-${offset}px)`;
            
            // Update button states
            prevBtn.disabled = currentSlide === 0;
            nextBtn.disabled = currentSlide >= totalSlides - slidesToShow;
            
            prevBtn.style.opacity = prevBtn.disabled ? '0.5' : '1';
            nextBtn.style.opacity = nextBtn.disabled ? '0.5' : '1';
        }
        
        prevBtn.addEventListener('click', () => {
            if (currentSlide > 0) {
                currentSlide--;
                updateSlider();
            }
        });
        
        nextBtn.addEventListener('click', () => {
            const slidesToShow = getSlidesToShow();
            if (currentSlide < totalSlides - slidesToShow) {
                currentSlide++;
                updateSlider();
            }
        });
        
        // Auto-slide every 5 seconds
        let autoSlide = setInterval(() => {
            const slidesToShow = getSlidesToShow();
            if (currentSlide < totalSlides - slidesToShow) {
                currentSlide++;
            } else {
                currentSlide = 0;
            }
            updateSlider();
        }, 5000);
        
        // Pause auto-slide on hover
        reviewTrack.addEventListener('mouseenter', () => clearInterval(autoSlide));
        reviewTrack.addEventListener('mouseleave', () => {
            autoSlide = setInterval(() => {
                const slidesToShow = getSlidesToShow();
                if (currentSlide < totalSlides - slidesToShow) {
                    currentSlide++;
                } else {
                    currentSlide = 0;
                }
                updateSlider();
            }, 5000);
        });
        
        // Update on window resize
        window.addEventListener('resize', () => {
            currentSlide = 0;
            updateSlider();
        });
        
        // Initial update
        updateSlider();
    }

    // ===== Gallery Load More =====
    const loadMoreBtn = document.getElementById('loadMoreGallery');
    const hiddenGalleryItems = document.querySelectorAll('.gallery-item.hidden');
    
    if (loadMoreBtn && hiddenGalleryItems.length > 0) {
        loadMoreBtn.addEventListener('click', function() {
            hiddenGalleryItems.forEach(item => {
                item.classList.remove('hidden');
            });
            
            // Hide the button after showing all images
            this.style.display = 'none';
            
            // Smooth scroll to first newly revealed item
            if (hiddenGalleryItems[0]) {
                setTimeout(() => {
                    hiddenGalleryItems[0].scrollIntoView({
                        behavior: 'smooth',
                        block: 'center'
                    });
                }, 100);
            }
        });
    } else if (loadMoreBtn && hiddenGalleryItems.length === 0) {
        loadMoreBtn.style.display = 'none';
    }

    // ===== FAQ Accordion =====
    const faqQuestions = document.querySelectorAll('.faq-question');
    
    faqQuestions.forEach(question => {
        question.addEventListener('click', function() {
            const faqItem = this.parentElement;
            const isActive = faqItem.classList.contains('active');
            
            // Close all FAQ items
            document.querySelectorAll('.faq-item').forEach(item => {
                item.classList.remove('active');
            });
            
            // Open clicked item if it wasn't active
            if (!isActive) {
                faqItem.classList.add('active');
            }
        });
    });

    // ===== Contact Form Submission =====
    const appointmentForm = document.getElementById('appointmentForm');
    
    if (appointmentForm) {
        appointmentForm.addEventListener('submit', function(e) {
            e.preventDefault();
            
            // Get form data
            const formData = {
                name: document.getElementById('name').value,
                phone: document.getElementById('phone').value,
                email: document.getElementById('email').value,
                service: document.getElementById('service').value,
                preferredDate: document.getElementById('preferredDate').value,
                message: document.getElementById('message').value
            };
            
            // Basic validation
            if (!formData.name || !formData.phone || !formData.service) {
                alert('Please fill in all required fields (Name, Phone, Treatment)');
                return;
            }
            
            // Phone validation
            const phoneRegex = /^[0-9]{10}$/;
            const cleanPhone = formData.phone.replace(/\D/g, '');
            if (!phoneRegex.test(cleanPhone)) {
                alert('Please enter a valid 10-digit phone number');
                return;
            }
            
            // Email validation (if provided)
            if (formData.email) {
                const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
                if (!emailRegex.test(formData.email)) {
                    alert('Please enter a valid email address');
                    return;
                }
            }
            
            // Simulate form submission (replace with actual API call)
            console.log('Form submitted:', formData);
            
            // Show success message
            alert('Thank you for your appointment request! We will contact you within 2 hours to confirm your appointment.');
            
            // Reset form
            appointmentForm.reset();
            
            // In production, you would send this data to your backend:
            // fetch('/api/appointments', {
            //     method: 'POST',
            //     headers: { 'Content-Type': 'application/json' },
            //     body: JSON.stringify(formData)
            // })
            // .then(response => response.json())
            // .then(data => {
            //     alert('Appointment request submitted successfully!');
            //     appointmentForm.reset();
            // })
            // .catch(error => {
            //     alert('Error submitting form. Please try again or call us directly.');
            // });
        });
    }

    // ===== Scroll to Top Button =====
    const scrollTopBtn = document.getElementById('scrollTopBtn');
    
    if (scrollTopBtn) {
        window.addEventListener('scroll', function() {
            if (window.pageYOffset > 300) {
                scrollTopBtn.classList.add('visible');
            } else {
                scrollTopBtn.classList.remove('visible');
            }
        });
        
        scrollTopBtn.addEventListener('click', function() {
            window.scrollTo({
                top: 0,
                behavior: 'smooth'
            });
        });
    }

    // ===== Lazy Loading Images (Performance Optimization) =====
    if ('IntersectionObserver' in window) {
        const imageObserver = new IntersectionObserver((entries, observer) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    const img = entry.target;
                    if (img.dataset.src) {
                        img.src = img.dataset.src;
                        img.removeAttribute('data-src');
                    }
                    observer.unobserve(img);
                }
            });
        });
        
        // Observe all images with data-src attribute
        document.querySelectorAll('img[data-src]').forEach(img => {
            imageObserver.observe(img);
        });
    }

    // ===== Animation on Scroll (Fade in elements) =====
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };
    
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';
            }
        });
    }, observerOptions);
    
    // Apply animation to service cards, credential cards, etc.
    const animatedElements = document.querySelectorAll(
        '.service-card, .credential-card, .achievement-card, .review-card, .faq-item'
    );
    
    animatedElements.forEach(el => {
        el.style.opacity = '0';
        el.style.transform = 'translateY(30px)';
        el.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
        observer.observe(el);
    });

    // ===== Set minimum date for appointment form =====
    const preferredDateInput = document.getElementById('preferredDate');
    if (preferredDateInput) {
        const today = new Date();
        const tomorrow = new Date(today);
        tomorrow.setDate(tomorrow.getDate() + 1);
        
        const minDate = tomorrow.toISOString().split('T')[0];
        preferredDateInput.setAttribute('min', minDate);
    }

    // ===== Click to Call Analytics (Optional) =====
    const phoneLinks = document.querySelectorAll('a[href^="tel:"]');
    phoneLinks.forEach(link => {
        link.addEventListener('click', function() {
            console.log('Phone call initiated:', this.getAttribute('href'));
            // You can add analytics tracking here
        });
    });

    // ===== WhatsApp Link Analytics (Optional) =====
    const whatsappLinks = document.querySelectorAll('a[href*="wa.me"]');
    whatsappLinks.forEach(link => {
        link.addEventListener('click', function() {
            console.log('WhatsApp chat initiated');
            // You can add analytics tracking here
        });
    });

    // ===== Console Welcome Message =====
    console.log('%cWelcome to Dental Studio 32!', 'color: #C2A56D; font-size: 20px; font-weight: bold;');
    console.log('%cBest Dentist in Goregaon West Mumbai', 'color: #1F2F4A; font-size: 14px;');
    console.log('Contact: +91 98765 43210');

});

// ===== Window Load Event (for final optimizations) =====
window.addEventListener('load', function() {
    // Remove any loading states
    document.body.classList.add('loaded');
    
    // Log page load time (for performance monitoring)
    const loadTime = performance.now();
    console.log(`Page loaded in ${Math.round(loadTime)}ms`);
});
