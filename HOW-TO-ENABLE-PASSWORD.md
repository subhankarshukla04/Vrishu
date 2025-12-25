# How to Enable Password Protection

The password protection is currently DISABLED so you can see the site immediately. Here's how to enable it when you're ready:

## Method 1: Enable Password (Simple - 1 minute)

### Step 1: Open index.html
Navigate to: `our-story/index.html`

### Step 2: Find line 30
Look for this line:
```html
<div id="password-overlay" class="password-overlay hidden">
```

### Step 3: Remove the word "hidden"
Change it to:
```html
<div id="password-overlay" class="password-overlay">
```

### Step 4: Find line 41
Look for this line:
```html
<div id="main-content">
```

### Step 5: Add the word "hidden"
Change it to:
```html
<div id="main-content" class="hidden">
```

### Step 6: Save the file
That's it! Password protection is now enabled.

---

## Method 2: Change the Password

The default password is: **OurStory2025**

To change it:

### Step 1: Open js/password.js
Navigate to: `our-story/js/password.js`

### Step 2: Find line 9
Look for:
```javascript
const correctPassword = 'OurStory2025';
```

### Step 3: Change the password
Replace 'OurStory2025' with your own password:
```javascript
const correctPassword = 'YourCustomPassword';
```

### Step 4: Save the file
Done!

---

## Quick Copy-Paste Guide

**To enable password protection:**
1. In `index.html` line 30: Change `class="password-overlay hidden"` → `class="password-overlay"`
2. In `index.html` line 41: Change `id="main-content"` → `id="main-content" class="hidden"`

**To change password:**
1. In `js/password.js` line 9: Change `'OurStory2025'` → `'YourPassword'`

---

## Testing

After enabling:
1. Refresh the webpage
2. You should see a password prompt
3. Enter your password
4. You should see the website

If something doesn't work, make sure you:
- Saved both files
- Refreshed the browser (Cmd+R or Ctrl+R)
- Typed the password exactly as you set it (case-sensitive!)

---

## Recommendation

Keep the password DISABLED while you're:
- Adding your photos
- Writing your stories
- Testing the website
- Making changes

Enable it BEFORE you:
- Deploy to GitHub Pages
- Share the link with her
