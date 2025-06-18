window.addEventListener('DOMContentLoaded', () => {
  fetchAllProducts();

  document.getElementById('searchBtn').addEventListener('click', () => {
    const query = document.getElementById('searchInput').value.trim();
    if (query === '') {
      fetchAllProducts();
    } else {
      fetchSearchResults(query);
    }
  });
});


function fetchAllProducts() {
  fetch('https://dummyjson.com/products?limit=100')
    .then(res => res.json())
    .then(data => renderProducts(data.products))
    .catch(err => {
      document.getElementById('product').innerHTML = "<p>Failed to load products.</p>";
      console.error(err);
    });
}

function fetchSearchResults(query) {
  fetch(`https://dummyjson.com/products/search?q=${encodeURIComponent(query)}`)
    .then(res => res.json())
    .then(data => renderProducts(data.products))
    .catch(err => {
      document.getElementById('product').innerHTML = "<p>Error searching products.</p>";
      console.error(err);
    });
}

function renderProducts(products) {
  const container = document.getElementById('product');
  container.innerHTML = '';

  if (!products || products.length === 0) {
    container.innerHTML = "<p>No products found.</p>";
    return;
  }

  products.forEach(product => {
    const html = `
      <div class="product-item">
        <img src="${product.thumbnail}" alt="${product.title}">
        <h2>${product.title}</h2>
        <p><strong>Brand:</strong> ${product.brand}</p>
        <p><strong>Price:</strong> $${product.price}</p>
        <p><strong>Rating:</strong> ⭐ ${product.rating}</p>
      </div>
    `;
    container.innerHTML += html;
  });
}
