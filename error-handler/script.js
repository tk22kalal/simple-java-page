
function goBack() {
    // Check if there's history to go back to
    if (window.history.length > 1) {
        window.history.back();
    } else {
        // If no history, go to home
        goHome();
    }
}

function goHome() {
    // Try to go to the main index page
    const possibleHomePaths = [
        '/',
        '/index.html',
        '../index.html',
        '../../index.html',
        '../../../index.html'
    ];
    
    // Try the first available home path
    window.location.href = possibleHomePaths[0];
}

// Handle page load errors
window.addEventListener('error', function(e) {
    console.log('Page error detected, but handled gracefully');
});

// Handle unhandled promise rejections
window.addEventListener('unhandledrejection', function(e) {
    console.log('Promise rejection handled gracefully');
    e.preventDefault();
});
