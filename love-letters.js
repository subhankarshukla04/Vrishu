// ===================================
// Hidden Love Letters System
// ===================================

document.addEventListener('DOMContentLoaded', function() {

    // Check if love letters data exists
    if (typeof loveLetters === 'undefined') {
        console.error('Love letters data not found. Make sure letters-data.js is loaded.');
        return;
    }

    const modal = document.getElementById('love-letter-modal');
    const modalText = modal.querySelector('.love-letter-text');
    const closeButton = modal.querySelector('.love-letter-close');

    // Track shown letters to avoid repetition
    let shownLetters = [];
    let letterCount = 0;
    const maxLettersPerSession = 5;

    // Get random letter that hasn't been shown yet
    function getRandomLetter() {
        if (shownLetters.length >= loveLetters.length) {
            shownLetters = []; // Reset if all shown
        }

        let availableLetters = loveLetters.filter((_, index) => !shownLetters.includes(index));
        if (availableLetters.length === 0) return null;

        const randomIndex = Math.floor(Math.random() * availableLetters.length);
        const letterIndex = loveLetters.indexOf(availableLetters[randomIndex]);

        shownLetters.push(letterIndex);
        return loveLetters[letterIndex];
    }

    // Show love letter modal
    function showLoveLetter(letter) {
        if (letterCount >= maxLettersPerSession) return;

        modalText.textContent = letter;
        modal.classList.add('show');
        letterCount++;
    }

    // Close modal
    function closeLoveLetter() {
        modal.classList.remove('show');
    }

    // Close button click
    closeButton.addEventListener('click', closeLoveLetter);

    // Close on background click
    modal.addEventListener('click', function(e) {
        if (e.target === modal) {
            closeLoveLetter();
        }
    });

    // Close on ESC key
    document.addEventListener('keydown', function(e) {
        if (e.key === 'Escape' && modal.classList.contains('show')) {
            closeLoveLetter();
        }
    });

    // Global trigger function (can be called from other scripts)
    window.triggerLoveLetter = function(source) {
        const letter = getRandomLetter();
        if (letter && letterCount < maxLettersPerSession) {
            showLoveLetter(letter);
        }
    };

    // TRIGGER 1: Scroll-based triggers
    let scrollTriggers = [20, 40, 60, 80]; // Percentages
    let triggeredScrollPositions = [];

    function checkScrollTriggers() {
        const scrollPercent = (window.scrollY / (document.documentElement.scrollHeight - window.innerHeight)) * 100;

        scrollTriggers.forEach(trigger => {
            if (scrollPercent >= trigger && !triggeredScrollPositions.includes(trigger)) {
                triggeredScrollPositions.push(trigger);
                setTimeout(() => {
                    triggerLoveLetter('scroll');
                }, 500);
            }
        });
    }

    let scrollTimeout;
    window.addEventListener('scroll', function() {
        clearTimeout(scrollTimeout);
        scrollTimeout = setTimeout(checkScrollTriggers, 200);
    });

    // TRIGGER 2: Time-based trigger (every 45 seconds)
    let timeBasedInterval = setInterval(function() {
        if (letterCount < maxLettersPerSession && Math.random() > 0.5) {
            triggerLoveLetter('time');
        }
    }, 45000);

    // TRIGGER 3: Hover on gallery images
    setTimeout(function() {
        const galleryItems = document.querySelectorAll('.gallery-item img');
        galleryItems.forEach(item => {
            item.addEventListener('mouseenter', function() {
                if (Math.random() > 0.85 && letterCount < maxLettersPerSession) {
                    triggerLoveLetter('hover');
                }
            });
        });
    }, 2000); // Wait for gallery to load

    // TRIGGER 4: After spending time on heartfelt message section
    const messageSection = document.getElementById('message');
    if (messageSection) {
        const messageObserver = new IntersectionObserver(function(entries) {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    setTimeout(() => {
                        if (letterCount < maxLettersPerSession) {
                            triggerLoveLetter('message-section');
                        }
                    }, 5000); // After 5 seconds of viewing
                }
            });
        }, { threshold: 0.5 });

        messageObserver.observe(messageSection);
    }

    // TRIGGER 5: Random trigger on page load (after delay)
    setTimeout(function() {
        if (Math.random() > 0.7) {
            triggerLoveLetter('page-load');
        }
    }, 10000); // 10 seconds after page load

    // Clean up interval on page unload
    window.addEventListener('beforeunload', function() {
        clearInterval(timeBasedInterval);
    });
});
