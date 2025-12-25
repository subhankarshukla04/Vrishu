// ===================================
// Password Protection
// ===================================

document.addEventListener('DOMContentLoaded', function() {

    // ⚠️ IMPORTANT: Change this password to your own!
    const correctPassword = 'OurStory2025';

    const overlay = document.getElementById('password-overlay');
    const mainContent = document.getElementById('main-content');
    const passwordInput = document.getElementById('password-input');
    const submitButton = document.getElementById('password-submit');
    const errorMessage = document.getElementById('password-error');

    // Check if user has already entered password in this session
    const isAuthenticated = sessionStorage.getItem('authenticated');

    if (isAuthenticated === 'true') {
        // Already authenticated, show content immediately
        showContent();
    } else {
        // Show password overlay
        overlay.style.display = 'flex';
        mainContent.classList.add('hidden');
    }

    // Submit button click
    submitButton.addEventListener('click', checkPassword);

    // Enter key press
    passwordInput.addEventListener('keypress', function(e) {
        if (e.key === 'Enter') {
            checkPassword();
        }
    });

    // Check password function
    function checkPassword() {
        const enteredPassword = passwordInput.value.trim();

        if (enteredPassword === correctPassword) {
            // Correct password
            sessionStorage.setItem('authenticated', 'true');
            showContent();
        } else {
            // Wrong password
            showError('Incorrect password. Please try again.');
            passwordInput.value = '';
            passwordInput.focus();

            // Shake animation
            overlay.querySelector('.password-container').style.animation = 'shake 0.5s';
            setTimeout(() => {
                overlay.querySelector('.password-container').style.animation = '';
            }, 500);
        }
    }

    // Show main content
    function showContent() {
        overlay.style.animation = 'fadeOut 0.5s ease';
        setTimeout(() => {
            overlay.style.display = 'none';
            mainContent.classList.remove('hidden');
            mainContent.style.animation = 'fadeIn 1s ease';
        }, 500);
    }

    // Show error message
    function showError(message) {
        errorMessage.textContent = message;
        errorMessage.classList.add('show');
        setTimeout(() => {
            errorMessage.classList.remove('show');
        }, 3000);
    }
});

// Add shake animation to CSS dynamically
const style = document.createElement('style');
style.textContent = `
    @keyframes shake {
        0%, 100% { transform: translateX(0); }
        10%, 30%, 50%, 70%, 90% { transform: translateX(-10px); }
        20%, 40%, 60%, 80% { transform: translateX(10px); }
    }

    @keyframes fadeOut {
        from { opacity: 1; }
        to { opacity: 0; }
    }
`;
document.head.appendChild(style);
