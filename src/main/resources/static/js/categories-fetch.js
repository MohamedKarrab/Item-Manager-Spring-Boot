document.addEventListener('DOMContentLoaded', function () {
const baseUrl = '/api/v1/categories';
const categoriesListDiv = document.getElementById('categoriesList');

fetch(baseUrl)
.then(response => response.json())
.then(categories => {
let content = `<table border="1"><tr><th>ID</th><th>Name</th></tr>`;
    categories.forEach(category => {
    content += `<tr><td>${category.id}</td><td>${category.name}</td></tr>`;
    });
    content += `</table>`;
categoriesListDiv.innerHTML = content;
})
.catch(error => {
console.error('Error fetching categories:', error);
categoriesListDiv.innerHTML = `<p>Error loading categories.</p>`;
});
});