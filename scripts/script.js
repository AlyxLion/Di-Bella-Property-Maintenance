// Detect when the user scrolls and trigger the scroll event
window.addEventListener('scroll', function() {
    // Get the body element
    const body = document.body;

    // Check how far the user has scrolled
    if (window.scrollY > 100) {
        body.classList.add('scrolled');  // Add 'scrolled' class after scroll distance
    } else {
        body.classList.remove('scrolled');  // Remove 'scrolled' class when scrolling back up
    }
});
