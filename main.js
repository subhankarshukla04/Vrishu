// ===================================
// Main JavaScript - Photo Gallery & General Functions
// ===================================

document.addEventListener('DOMContentLoaded', function() {

    // ===================================
    // Photo Gallery
    // ===================================

    const galleryGrid = document.getElementById('gallery-grid');

    // List all your photos here (same as slideshow or all 50+ photos)
    const galleryPhotos = [
        'photo-1.jpg',
        'photo-2.jpg',
        'photo-3.jpg',
        'photo-4.jpg',
        'photo-5.jpg',
        'photo-6.jpg',
        'photo-7.jpg',
        'photo-8.jpg',
        'photo-9.jpg',
        'photo-10.jpg',
        'photo-11.jpg',
        'photo-12.jpg',
        'photo-13.jpg',
        'photo-14.jpg',
        'photo-15.jpg',
        'photo-16.jpg',
        'photo-17.jpg',
        'photo-18.jpg',
        'photo-19.jpg',
        'photo-20.jpg',
        'photo-21.jpg',
        'photo-22.jpg',
        'photo-23.jpg',
        'photo-24.jpg',
        'photo-25.jpg',
        // Add all your actual photos here when ready to replace
    ];

    // Generate gallery items
    galleryPhotos.forEach((photo, index) => {
        const item = document.createElement('a');
        item.href = `images/photos/${photo}`;
        item.className = 'gallery-item';
        item.setAttribute('data-pswp-width', '1200');
        item.setAttribute('data-pswp-height', '800');
        item.setAttribute('data-aos', 'zoom-in');
        item.setAttribute('data-aos-delay', (index % 6) * 100);

        const img = document.createElement('img');
        img.src = `images/photos/${photo}`;
        img.alt = `Memory ${index + 1}`;
        img.loading = 'lazy';

        item.appendChild(img);
        galleryGrid.appendChild(item);
    });

    // Initialize PhotoSwipe Lightbox
    if (typeof PhotoSwipeLightbox !== 'undefined') {
        const lightbox = new PhotoSwipeLightbox({
            gallery: '#gallery-grid',
            children: 'a',
            pswpModule: PhotoSwipe,
            bgOpacity: 0.9,
            spacing: 0.1,
            preload: [1, 3],
            showHideAnimationType: 'zoom',
        });

        lightbox.init();
    }

    // ===================================
    // Smooth Scroll for Navigation
    // ===================================

    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                target.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }
        });
    });

    // ===================================
    // Parallax Effect for Message Section
    // ===================================

    const messageSection = document.getElementById('message');

    window.addEventListener('scroll', function() {
        if (messageSection) {
            const scrolled = window.pageYOffset;
            const rate = scrolled * 0.3;
            messageSection.style.backgroundPositionY = `${rate}px`;
        }
    });

    // ===================================
    // Lazy Loading Images
    // ===================================

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

        document.querySelectorAll('img[data-src]').forEach(img => {
            imageObserver.observe(img);
        });
    }

    // ===================================
    // Heartbeat Animation on Special Elements
    // ===================================

    const heartElements = document.querySelectorAll('.heartfelt-text, .hero-title');
    heartElements.forEach(element => {
        element.addEventListener('mouseenter', function() {
            this.style.animation = 'heartbeat 0.8s ease';
        });
        element.addEventListener('animationend', function() {
            this.style.animation = '';
        });
    });

    // ===================================
    // Dynamic Year in Footer
    // ===================================

    const footerDate = document.querySelector('.footer-date');
    if (footerDate && footerDate.textContent.includes('2025')) {
        const currentYear = new Date().getFullYear();
        if (currentYear !== 2025) {
            footerDate.textContent = footerDate.textContent.replace('2025', currentYear);
        }
    }

    // ===================================
    // Console Message (Easter Egg)
    // ===================================

    console.log('%c❤️ Made with love for the most amazing person in the world ❤️',
        'color: #B76E79; font-size: 16px; font-weight: bold; font-family: Playfair Display;');
    console.log('%cThank you for being you. Happy Birthday! 🎉',
        'color: #800020; font-size: 14px; font-family: Montserrat;');

    // ===================================
    // Loading Complete
    // ===================================

    console.log('✅ Website loaded successfully!');
});

// ===================================
// Window Load Event
// ===================================

window.addEventListener('load', function() {
    // Hide loading spinner if you add one
    const loadingSpinner = document.querySelector('.loading-spinner');
    if (loadingSpinner) {
        loadingSpinner.style.display = 'none';
    }

    // Add loaded class to body
    document.body.classList.add('loaded');
});

// ===================================
// Error Handling for Images
// ===================================

document.addEventListener('error', function(e) {
    if (e.target.tagName === 'IMG') {
        console.warn('Failed to load image:', e.target.src);
        // You can add a placeholder image here
        // e.target.src = 'images/placeholder.jpg';
    }
}, true);
