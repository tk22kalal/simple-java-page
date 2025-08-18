
// Global error handler to be included in all HTML files
(function() {
    'use strict';
    
    // Function to redirect to not-updated page
    function redirectToNotUpdated() {
        const currentPath = window.location.pathname;
        const basePath = currentPath.substring(0, currentPath.lastIndexOf('/'));
        
        // Calculate relative path to error-handler
        let errorHandlerPath = '../error-handler/not-updated.html';
        
        // Adjust path based on current directory depth
        const depth = (currentPath.match(/\//g) || []).length - 1;
        if (depth > 1) {
            errorHandlerPath = '../'.repeat(depth - 1) + 'error-handler/not-updated.html';
        }
        
        window.location.href = errorHandlerPath;
    }
    
    // Handle navigation errors
    function handleNavigationError(url) {
        console.log('Navigation error to:', url);
        redirectToNotUpdated();
        return false;
    }
    
    // Override window.location.href assignments
    const originalLocation = window.location;
    Object.defineProperty(window, 'location', {
        get: function() {
            return originalLocation;
        },
        set: function(url) {
            // Check if URL exists before navigating
            fetch(url, { method: 'HEAD' })
                .then(response => {
                    if (response.ok) {
                        originalLocation.href = url;
                    } else {
                        handleNavigationError(url);
                    }
                })
                .catch(() => {
                    handleNavigationError(url);
                });
        }
    });
    
    // Handle click events on links
    document.addEventListener('click', function(e) {
        const link = e.target.closest('a[href]');
        if (link && link.href) {
            const href = link.href;
            
            // Skip external links and anchors
            if (href.startsWith('http') && !href.includes(window.location.host)) {
                return;
            }
            if (href.startsWith('#')) {
                return;
            }
            
            e.preventDefault();
            
            // Check if the target page exists
            fetch(href, { method: 'HEAD' })
                .then(response => {
                    if (response.ok) {
                        window.location.href = href;
                    } else {
                        redirectToNotUpdated();
                    }
                })
                .catch(() => {
                    redirectToNotUpdated();
                });
        }
    });
    
    // Handle form submissions
    document.addEventListener('submit', function(e) {
        const form = e.target;
        if (form.action) {
            e.preventDefault();
            
            fetch(form.action, { method: 'HEAD' })
                .then(response => {
                    if (response.ok) {
                        form.submit();
                    } else {
                        redirectToNotUpdated();
                    }
                })
                .catch(() => {
                    redirectToNotUpdated();
                });
        }
    });
    
    // Handle window errors
    window.addEventListener('error', function(e) {
        if (e.target && e.target.tagName) {
            console.log('Resource loading error handled gracefully');
            return true;
        }
    });
    
    // Handle unhandled promise rejections
    window.addEventListener('unhandledrejection', function(e) {
        console.log('Promise rejection handled gracefully');
        e.preventDefault();
    });
    
    // Safe navigation function for use in onclick handlers
    window.safeNavigate = function(url) {
        fetch(url, { method: 'HEAD' })
            .then(response => {
                if (response.ok) {
                    window.location.href = url;
                } else {
                    redirectToNotUpdated();
                }
            })
            .catch(() => {
                redirectToNotUpdated();
            });
    };
    
})();
