// ===================================
// Photo Slideshow with Swiper.js
// ===================================

document.addEventListener('DOMContentLoaded', function() {

    // List of photos for the hero slideshow (add your photo filenames here)
    const slideshowPhotos = [
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
        // Add your actual photo filenames here when you're ready to replace them
    ];

    // Load photos into slideshow
    const slideshowContainer = document.getElementById('slideshow-container');

    slideshowPhotos.forEach(photo => {
        const slide = document.createElement('div');
        slide.className = 'swiper-slide';

        const img = document.createElement('img');
        img.src = `images/photos/${photo}`;
        img.alt = 'Our memories';
        img.loading = 'lazy';

        slide.appendChild(img);
        slideshowContainer.appendChild(slide);
    });

    // Initialize Swiper
    const swiper = new Swiper('.hero-swiper', {
        effect: 'fade',
        fadeEffect: {
            crossFade: true
        },
        speed: 1000,
        autoplay: {
            delay: 4000,
            disableOnInteraction: false,
        },
        loop: true,
        pagination: {
            el: '.swiper-pagination',
            clickable: true,
        },
        navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
        },
    });

    // Music Player Controls
    const musicToggle = document.getElementById('music-toggle');
    const backgroundMusic = document.getElementById('background-music');
    const playIcon = document.getElementById('play-icon');
    const pauseIcon = document.getElementById('pause-icon');

    let isPlaying = false;

    musicToggle.addEventListener('click', function() {
        if (isPlaying) {
            backgroundMusic.pause();
            playIcon.style.display = 'block';
            pauseIcon.style.display = 'none';
            isPlaying = false;
        } else {
            backgroundMusic.play().catch(error => {
                console.log('Autoplay prevented:', error);
                // Some browsers block autoplay, this is normal
            });
            playIcon.style.display = 'none';
            pauseIcon.style.display = 'block';
            isPlaying = true;
        }
    });

    // Auto-play music on first user interaction (optional)
    let hasInteracted = false;
    document.addEventListener('click', function() {
        if (!hasInteracted && !isPlaying) {
            hasInteracted = true;
            // Optionally auto-start music on first click
            // Uncomment below to enable:
            // musicToggle.click();
        }
    }, { once: true });

    // Handle music end (restart if loop attribute isn't working)
    backgroundMusic.addEventListener('ended', function() {
        if (isPlaying) {
            backgroundMusic.currentTime = 0;
            backgroundMusic.play();
        }
    });
});
