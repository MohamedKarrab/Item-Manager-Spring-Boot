document.addEventListener('DOMContentLoaded', function () {
    const baseUrl = '/api/v1/items';
    const itemsListDiv = document.getElementById('itemsList');

    fetch(baseUrl)
        .then(response => response.json())
        .then(items => {
            let content = `<table border="1"><tr><th>Name</th><th>Description</th><th>Price</th><th>Category ID</th></tr>`;
            items.forEach(item => {
                content += `<tr><td>${item.name}</td><td>${item.description}</td><td>${item.price}</td><td>${item.categoryId}</td></tr>`;
            });
            content += `</table>`;
            itemsListDiv.innerHTML = content;
        })
        .catch(error => {
            console.error('Error fetching items:', error);
            itemsListDiv.innerHTML = `<p>Error loading items.</p>`;
        });
});