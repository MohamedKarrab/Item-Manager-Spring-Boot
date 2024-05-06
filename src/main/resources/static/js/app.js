// Example adding a fetch API call
document.addEventListener('DOMContentLoaded', function() {
    fetch('/api/v1/items')
        .then(response => response.json())
        .then(data => console.log(data));
});