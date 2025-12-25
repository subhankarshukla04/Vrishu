# GitHub Copilot Guide - Step-by-Step Instructions

## How to Use This Project with GitHub Copilot

### Prerequisites
1. Install VS Code
2. Install GitHub Copilot extension
3. Open the `our-story` folder in VS Code

---

## DAY 1: Setup & Structure

### Task 1: Create index.html
1. Open `index.html` (create new file)
2. Type this comment at the top:
```
<!-- Create a romantic website with these sections:
1. Hero section with full-screen photo slideshow and music player
2. Timeline section for relationship milestones
3. Photo gallery section
4. Heartfelt message section
Use semantic HTML5, mobile-responsive meta tags, and link to css/style.css and all JS files -->
```
3. Press Enter and let Copilot generate the HTML structure
4. Accept the suggestions (Tab key)

**Alternative: Use Copilot Chat**
- Open Copilot Chat (Cmd+I or Ctrl+I)
- Paste this prompt:
```
Create a complete HTML5 page for a romantic relationship website with:
- Header with navigation
- Hero section (full-screen slideshow container, music player controls)
- Timeline section (vertical timeline with event cards)
- Photo gallery section (grid layout)
- Heartfelt message section (centered text with background image)
- Footer
Include meta tags for responsive design, link to Google Fonts (Playfair Display, Montserrat, Dancing Script), link to css/style.css, css/animations.css, and all JS files in js/ folder.
Use rose gold color scheme (#B76E79, #FFB6C1, #800020, #FAF9F6).
```

### Task 2: Create style.css
1. Open `css/style.css`
2. Type this comment:
```
/* Romantic website styles
Color scheme: Rose gold (#B76E79), blush pink (#FFB6C1), burgundy (#800020), cream (#FAF9F6)
Fonts: Playfair Display (headers), Montserrat (body), Dancing Script (love letters)
Mobile-first responsive design with smooth animations */
```
3. Let Copilot generate the base styles
4. You can also use Copilot Chat:
```
Create CSS for a romantic website with:
- CSS reset and box-sizing
- Mobile-first responsive design
- Color variables: --primary: #B76E79, --secondary: #800020, --accent: #FFB6C1, --bg: #FAF9F6
- Typography using Playfair Display, Montserrat, Dancing Script
- Smooth transitions on all interactive elements
- Styles for: hero section (full viewport height), timeline cards (with hover effects), photo gallery grid (responsive), heartfelt message section
```

### Task 3: Create timeline-data.js
1. Open `data/timeline-data.js`
2. Use this template and fill in YOUR stories:
```javascript
// Timeline data for our relationship
const timelineData = [
  {
    id: 1,
    date: "August 26, 2025",
    title: "The Day We Met",
    location: "Mississauga",
    story: "[YOUR STORY HERE - Write about your first date, how you felt, what you talked about, what made you laugh]",
    photos: ["first-date-1.jpg", "first-date-2.jpg"]
  },
  {
    id: 2,
    date: "August 27, 2025",
    title: "Second Date Magic",
    location: "Mississauga",
    story: "[YOUR STORY HERE]",
    photos: ["second-date-1.jpg"]
  },
  {
    id: 3,
    date: "August 29, 2025",
    title: "Frat Night Fun",
    location: "Mississauga",
    story: "[YOUR STORY HERE]",
    photos: ["frat-1.jpg", "frat-2.jpg"]
  },
  {
    id: 4,
    date: "September - October 2025",
    title: "Dinners, Sleepovers & Us",
    location: "Mississauga",
    story: "[YOUR STORY HERE - Talk about all the quality time, memorable dinners, inside jokes]",
    photos: ["dinner-1.jpg", "sleepover-1.jpg", "date-1.jpg"]
  },
  {
    id: 5,
    date: "November 12-17, 2025",
    title: "Our First Trip Together",
    location: "Quebec & Montreal",
    story: "[YOUR STORY HERE - Describe the trip, favorite moments, what made it special]",
    photos: ["quebec-1.jpg", "quebec-2.jpg", "montreal-1.jpg"]
  },
  {
    id: 6,
    date: "December 2025",
    title: "Three Months of Us",
    location: "Together",
    story: "[YOUR STORY HERE - Reflect on the relationship, what she means to you, how you feel]",
    photos: ["us-1.jpg", "us-2.jpg"]
  }
];
```

### Task 4: Create letters-data.js
1. Open `data/letters-data.js`
2. Write 10-15 short love notes (2-4 sentences each):
```javascript
// Hidden love letters that appear throughout the site
const loveLetters = [
  "Every moment with you feels like a dream I never want to wake up from.",
  "You make ordinary days extraordinary just by being in them.",
  "I still get butterflies when I see your name pop up on my phone.",
  "[WRITE YOUR OWN - Make them personal!]",
  "[WRITE YOUR OWN]",
  "[WRITE YOUR OWN]",
  "[WRITE YOUR OWN]",
  "[WRITE YOUR OWN]",
  "[WRITE YOUR OWN]",
  "[WRITE YOUR OWN]",
  "[WRITE YOUR OWN]",
  "[WRITE YOUR OWN]",
  "[WRITE YOUR OWN]",
  "[WRITE YOUR OWN]"
];
```

---

## DAY 2: Slideshow & Timeline

### Task 5: Implement Slideshow (slideshow.js)
1. Open `js/slideshow.js`
2. Use Copilot Chat with this prompt:
```
Create a photo slideshow using Swiper.js for a romantic website.
Requirements:
- Use Swiper.js library (import from CDN)
- Auto-play with 4-second intervals
- Fade transition effect
- Loop infinitely
- Show navigation arrows and pagination dots
- Load photos from images/photos/ folder
- Include background music player controls (play/pause button for audio/our-song.mp3)
- Mobile responsive
The slideshow should fill the hero section (#hero-slideshow container).
```

**If Copilot doesn't include Swiper CDN:**
Add this to your index.html `<head>`:
```html
<link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/swiper@11/swiper-bundle.min.css"/>
<script src="https://cdn.jsdelivr.net/npm/swiper@11/swiper-bundle.min.js"></script>
```

### Task 6: Build Timeline (timeline.js)
1. Open `js/timeline.js`
2. Use Copilot Chat:
```
Create an interactive timeline feature using vanilla JavaScript.
Requirements:
- Load timeline data from ../data/timeline-data.js
- Display each event as a card with: date, title, location, preview image
- When card is clicked, expand to show full story and photo gallery
- Use smooth expand/collapse animation
- Add scroll animations using AOS library (import from CDN)
- Mobile responsive (stack vertically on small screens)
Include CSS for timeline cards with hover effects.
```

**Add AOS library to index.html `<head>`:**
```html
<link href="https://unpkg.com/aos@2.3.1/dist/aos.css" rel="stylesheet">
<script src="https://unpkg.com/aos@2.3.1/dist/aos.js"></script>
```

---

## DAY 3: Gallery & Love Letters

### Task 7: Photo Gallery (main.js)
1. Open `js/main.js`
2. Use Copilot Chat:
```
Create a photo gallery using PhotoSwipe library.
Requirements:
- Import PhotoSwipe from CDN
- Display all photos from images/photos/ in a responsive grid (3 columns desktop, 2 tablet, 1 mobile)
- When photo is clicked, open lightbox with navigation
- Support swipe gestures on mobile
- Include image captions with dates
Add CSS for gallery grid layout with smooth hover effects.
```

**Add PhotoSwipe to index.html `<head>`:**
```html
<link rel="stylesheet" href="https://unpkg.com/photoswipe/dist/photoswipe.css">
<script src="https://unpkg.com/photoswipe/dist/photoswipe.umd.min.js"></script>
<script src="https://unpkg.com/photoswipe/dist/photoswipe-lightbox.umd.min.js"></script>
```

### Task 8: Hidden Love Letters (love-letters.js)
1. Open `js/love-letters.js`
2. Use Copilot Chat:
```
Create a hidden love letter system using vanilla JavaScript.
Requirements:
- Load letters from ../data/letters-data.js
- Display random letters as modal overlays with fade-in animation
- Trigger letters based on:
  * Scroll position (every 20% of page scroll)
  * Time spent on page (every 30 seconds)
  * Clicking on timeline events
  * Random chance when hovering over photos
- Modal should have:
  * Semi-transparent dark background
  * White card with handwritten font (Dancing Script)
  * Close button (X)
  * Romantic styling (rose gold border, soft shadow)
- Track which letters have been shown (don't repeat)
- Maximum 5 letters per session
Include CSS for love letter modal.
```

### Task 9: Password Protection (password.js)
1. Open `js/password.js`
2. Use Copilot Chat:
```
Create simple password protection for a romantic website.
Requirements:
- Show password prompt immediately on page load
- Correct password: "OurStory2025" (customizable)
- If wrong password, show error and ask again
- If correct, fade out password overlay and show website
- Store password success in sessionStorage (valid for browser session only)
- Styled with romantic colors and fonts
Include CSS for password prompt overlay.
```

---

## DAY 4: Polish & Deploy

### Task 10: Animations (animations.css)
1. Open `css/animations.css`
2. Use Copilot Chat:
```
Create CSS animations for a romantic website:
- Fade in for page load
- Slide in from left/right for timeline cards
- Zoom in on hover for photos
- Pulse animation for music player button
- Smooth transitions for all interactive elements
- Keyframe animations: fadeIn, slideInLeft, slideInRight, zoomIn, pulse
Use smooth easing functions (ease-in-out).
```

### Task 11: Add Heartfelt Message Section
1. In `index.html`, find the heartfelt message section
2. Use Copilot Chat:
```
Style a heartfelt message section for a romantic website.
Requirements:
- Full viewport height with parallax background image
- Centered text overlay with semi-transparent background
- Large, elegant typography (Playfair Display)
- Fade in animation when scrolling to section
- Message text: "[YOUR PERSONAL MESSAGE TO HER - Write from the heart about what she means to you]"
Include CSS with parallax effect and text styling.
```

### Task 12: Mobile Responsiveness Check
Use Copilot Chat to fix any responsive issues:
```
Review all CSS and make sure the website is fully responsive:
- Mobile (320px - 767px): Single column, stack all elements
- Tablet (768px - 1024px): 2-column grid for gallery
- Desktop (1025px+): Full layout with 3-column grid
Fix any overflow issues, ensure text is readable on all screens, and touch targets are at least 44px.
```

### Task 13: Deploy to GitHub
1. Initialize git in your project:
```bash
git init
git add .
git commit -m "Initial commit: Our Story website"
```

2. Create GitHub repo (use GitHub website or CLI):
   - Go to github.com → New Repository
   - Name: `our-story`
   - Private repository
   - Don't initialize with README

3. Push to GitHub:
```bash
git remote add origin https://github.com/YOUR-USERNAME/our-story.git
git branch -M main
git push -u origin main
```

4. Enable GitHub Pages:
   - Go to repository Settings → Pages
   - Source: Deploy from branch `main`, folder `/ (root)`
   - Save
   - Your site will be live at: `https://YOUR-USERNAME.github.io/our-story/`

---

## Tips for Working with Copilot

### Best Practices:
1. **Be specific in comments** - The more detail you provide, the better code Copilot generates
2. **Use Copilot Chat** - For complex features, use chat instead of inline suggestions
3. **Review suggestions** - Don't blindly accept; read and understand the code
4. **Iterate** - If first suggestion isn't perfect, ask Copilot to refine it
5. **Test frequently** - Open index.html in browser after each feature

### If Copilot Gets Stuck:
- Rephrase your prompt with more context
- Break the task into smaller steps
- Provide example code structure
- Ask: "Explain how this should work step by step"

### Useful Copilot Chat Commands:
- `/fix` - Fix errors in selected code
- `/explain` - Explain what code does
- `/tests` - Generate test cases
- `Make this responsive` - Fix mobile layout
- `Add error handling` - Make code more robust

---

## Final Checklist Before Giving Her the Gift

- [ ] All 50+ photos added to `images/photos/`
- [ ] Background song added to `audio/our-song.mp3`
- [ ] Timeline stories written in `data/timeline-data.js`
- [ ] Love letters written in `data/letters-data.js`
- [ ] Heartfelt message added to HTML
- [ ] Password set in `js/password.js`
- [ ] Tested on phone and laptop
- [ ] Deployed to GitHub Pages
- [ ] Created access card with URL and password

---

## Need Help?

If you get stuck:
1. Copy the error message
2. Paste into Copilot Chat with: "Fix this error: [error message]"
3. Or ask: "Why isn't [feature] working?"

You've got this! 💪
