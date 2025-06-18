const searchInput = document.getElementById('searchInput');
const searchBtn = document.getElementById('searchBtn');
const productContainer = document.getElementById('product');

fetch('https://dummyjson.com/products?limit=100')
  .then(res => res.json())
  .then(data => showProducts(data.products));

searchBtn.onclick = function () {
  const query = searchInput.value.trim();

  if (query === '') {
    fetch('https://dummyjson.com/products?limit=100')
      .then(res => res.json())
      .then(data => showProducts(data.products));
  } else {
    fetch(`https://dummyjson.com/products/search?q=${query}`)
      .then(res => res.json())
      .then(data => showProducts(data.products));
  }
};

function showProducts(products) {
  productContainer.innerHTML = '';

  if (!products || products.length === 0) {
    productContainer.innerHTML = '<p>No products found.</p>';
    return;
  }

  products.forEach(p => {
    const item = `
      <div class="product-item">
        <img src="${p.thumbnail}" alt="${p.title}">
        <h2>${p.title}</h2>
        <p><b>Brand:</b> ${p.brand}</p>
        <p><b>Price:</b> $${p.price}</p>
        <p><b>Rating:</b> ⭐ ${p.rating}</p>
      </div>
    `;
    productContainer.innerHTML += item;
  });
}
