// ===================================
// Interactive Timeline
// ===================================

document.addEventListener('DOMContentLoaded', function() {

    const timelineContainer = document.getElementById('timeline-container');

    // Check if timeline data exists
    if (typeof timelineData === 'undefined') {
        console.error('Timeline data not found. Make sure timeline-data.js is loaded.');
        return;
    }

    // Generate timeline events
    timelineData.forEach((event, index) => {
        const eventDiv = document.createElement('div');
        eventDiv.className = 'timeline-event';
        eventDiv.setAttribute('data-aos', index % 2 === 0 ? 'fade-left' : 'fade-right');
        eventDiv.setAttribute('data-aos-duration', '800');

        // Timeline dot
        const dot = document.createElement('div');
        dot.className = 'timeline-dot';

        // Timeline card
        const card = document.createElement('div');
        card.className = 'timeline-card';
        card.setAttribute('data-event-id', event.id);

        // Date
        const date = document.createElement('div');
        date.className = 'timeline-date';
        date.textContent = event.date;

        // Title
        const title = document.createElement('h3');
        title.className = 'timeline-title';
        title.textContent = event.title;

        // Location
        const location = document.createElement('div');
        location.className = 'timeline-location';
        location.innerHTML = `📍 ${event.location}`;

        // Preview image (first photo)
        if (event.photos && event.photos.length > 0) {
            const previewImg = document.createElement('img');
            previewImg.className = 'timeline-preview-img';
            previewImg.src = `images/photos/${event.photos[0]}`;
            previewImg.alt = event.title;
            previewImg.loading = 'lazy';
            card.appendChild(previewImg);
        }

        // Story (hidden initially)
        const story = document.createElement('div');
        story.className = 'timeline-story';

        const storyText = document.createElement('p');
        storyText.textContent = event.story;
        story.appendChild(storyText);

        // Photos gallery (if there are more photos)
        if (event.photos && event.photos.length > 1) {
            const photosDiv = document.createElement('div');
            photosDiv.className = 'timeline-photos';

            event.photos.slice(1).forEach(photo => {
                const img = document.createElement('img');
                img.src = `images/photos/${photo}`;
                img.alt = event.title;
                img.loading = 'lazy';
                photosDiv.appendChild(img);
            });

            story.appendChild(photosDiv);
        }

        // Append elements to card
        card.appendChild(date);
        card.appendChild(title);
        card.appendChild(location);
        card.appendChild(story);

        // Append card and dot to event
        eventDiv.appendChild(dot);
        eventDiv.appendChild(card);

        // Append event to container
        timelineContainer.appendChild(eventDiv);

        // Add click event to expand/collapse
        card.addEventListener('click', function() {
            this.classList.toggle('expanded');

            // Trigger love letter on timeline click (random chance)
            if (typeof triggerLoveLetter === 'function' && Math.random() > 0.6) {
                setTimeout(() => {
                    triggerLoveLetter('click');
                }, 500);
            }
        });
    });

    // Scroll reveal animation
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -100px 0px'
    };

    const observer = new IntersectionObserver(function(entries) {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
            }
        });
    }, observerOptions);

    // Observe all timeline events
    document.querySelectorAll('.timeline-event').forEach(event => {
        observer.observe(event);
    });

    // Initialize AOS (Animate On Scroll)
    if (typeof AOS !== 'undefined') {
        AOS.init({
            duration: 800,
            once: false,
            offset: 100,
        });
    }
});
