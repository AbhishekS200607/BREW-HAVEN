/**
 * Mobile View Detector and UI Switcher
 * Checks screen width and applies mobile-specific styles/classes
 */

function checkMobileView() {
    const mobileThreshold = 768;
    const isMobile = window.innerWidth <= mobileThreshold;
    const body = document.body;
    const mobileCssId = 'mobile-stylesheet';

    if (isMobile) {
        // Add mobile-ui class for CSS hooks
        if (!body.classList.contains('mobile-ui')) {
            body.classList.add('mobile-ui');
        }

        // Dynamically load mobile.css if not already loaded
        if (!document.getElementById(mobileCssId)) {
            const link = document.createElement('link');
            link.id = mobileCssId;
            link.rel = 'stylesheet';
            link.href = 'css/mobile.css';
            document.head.appendChild(link);
        }
    } else {
        // Remove mobile-ui class
        body.classList.remove('mobile-ui');

        // Remove mobile.css if present
        const mobileLink = document.getElementById(mobileCssId);
        if (mobileLink) {
            mobileLink.remove();
        }
    }
}

// Initialize on load
window.addEventListener('DOMContentLoaded', checkMobileView);

// Check on resize
window.addEventListener('resize', checkMobileView);
