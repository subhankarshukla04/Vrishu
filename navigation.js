// ===================================
// Navigation & UX Enhancements
// ===================================

document.addEventListener('DOMContentLoaded', function() {

    // ===================================
    // Fixed Navigation with Active States
    // ===================================

    const navbar = document.querySelector('.navbar');
    const navLinks = document.querySelectorAll('.nav-link');
    const sections = document.querySelectorAll('section[id]');

    // Add scroll effect to navbar
    window.addEventListener('scroll', () => {
        if (window.scrollY > 50) {
            navbar.classList.add('scrolled');
        } else {
            navbar.classList.remove('scrolled');
        }

        // Update active nav link based on scroll position
        let current = '';
        sections.forEach(section => {
            const sectionTop = section.offsetTop;
            const sectionHeight = section.clientHeight;
            if (window.scrollY >= (sectionTop - 200)) {
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

    // Smooth scroll for navigation links
    navLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            const targetId = this.getAttribute('href');
            const targetSection = document.querySelector(targetId);

            if (targetSection) {
                const offsetTop = targetSection.offsetTop - 80; // Account for navbar height
                window.scrollTo({
                    top: offsetTop,
                    behavior: 'smooth'
                });
            }
        });
    });

    // ===================================
    // Nav Music Toggle (sync with main player)
    // ===================================

    const navMusicBtn = document.getElementById('nav-music-toggle');
    const mainMusicBtn = document.getElementById('music-toggle');
    const backgroundMusic = document.getElementById('background-music');

    if (navMusicBtn && backgroundMusic) {
        navMusicBtn.addEventListener('click', function() {
            if (mainMusicBtn) {
                mainMusicBtn.click(); // Trigger the main music button
            }
        });
    }

    // ===================================
    // Hide scroll indicator on scroll
    // ===================================

    const scrollIndicator = document.querySelector('.scroll-indicator');
    if (scrollIndicator) {
        window.addEventListener('scroll', () => {
            if (window.scrollY > 100) {
                scrollIndicator.style.opacity = '0';
                scrollIndicator.style.pointerEvents = 'none';
            } else {
                scrollIndicator.style.opacity = '1';
                scrollIndicator.style.pointerEvents = 'auto';
            }
        });
    }

    // ===================================
    // Enhanced Explore Button
    // ===================================

    const exploreButton = document.querySelector('.explore-button');
    if (exploreButton) {
        exploreButton.addEventListener('click', function() {
            scrollIndicator.style.opacity = '0';
        });
    }

    // ===================================
    // Loading Animation
    // ===================================

    window.addEventListener('load', function() {
        document.body.classList.add('loaded');

        // Fade in hero content
        const heroContent = document.querySelector('.hero-content');
        if (heroContent) {
            setTimeout(() => {
                heroContent.style.opacity = '1';
                heroContent.style.transform = 'translateY(0)';
            }, 300);
        }
    });

    // ===================================
    // Intersection Observer for Timeline
    // ===================================

    const timelineEvents = document.querySelectorAll('.timeline-event');

    const observerOptions = {
        threshold: 0.2,
        rootMargin: '0px 0px -50px 0px'
    };

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
            }
        });
    }, observerOptions);

    timelineEvents.forEach(event => {
        observer.observe(event);
    });

    // ===================================
    // Gallery Item Hover Effects
    // ===================================

    const galleryItems = document.querySelectorAll('.gallery-item');

    galleryItems.forEach(item => {
        item.addEventListener('mouseenter', function() {
            this.style.transform = 'scale(1.05) translateY(-5px)';
        });

        item.addEventListener('mouseleave', function() {
            this.style.transform = 'scale(1) translateY(0)';
        });
    });

    // ===================================
    // Back to Top Button
    // ===================================

    // Create back to top button
    const backToTop = document.createElement('button');
    backToTop.className = 'back-to-top';
    backToTop.innerHTML = `
        <svg width="24" height="24" viewBox="0 0 24 24" fill="white">
            <path d="M7 14l5-5 5 5z"/>
        </svg>
    `;
    backToTop.setAttribute('aria-label', 'Back to top');
    document.body.appendChild(backToTop);

    // Show/hide back to top button
    window.addEventListener('scroll', () => {
        if (window.scrollY > 500) {
            backToTop.classList.add('show');
        } else {
            backToTop.classList.remove('show');
        }
    });

    // Scroll to top on click
    backToTop.addEventListener('click', () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    });

    // ===================================
    // Console Art (Easter Egg)
    // ===================================

    console.log('%c💕 Made with love for someone special 💕',
        'color: #B76E79; font-size: 20px; font-weight: bold; font-family: Playfair Display;');
    console.log('%cHappy Birthday! 🎉',
        'color: #800020; font-size: 16px; font-family: Montserrat;');

});
