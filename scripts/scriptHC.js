// Optionally, add any JS here for advanced interactions (like opening links or animations)
document.querySelectorAll('.honeycomb-item').forEach(item => {
    item.addEventListener('click', function() {
        alert("You clicked on " + item.getAttribute("data-title"));
    });
});
