const searchInput = document.getElementById('searchInput');
const searchBtn = document.getElementById('searchBtn');
const sortSelect = document.getElementById('sortSelect');
const productContainer = document.getElementById('product');

let allProducts = [];

fetch('https://dummyjson.com/products?limit=100')
  .then(res => res.json())
  .then(data => {
    allProducts = data.products;
    showProducts(allProducts);
  });

searchBtn.onclick = function () {
  const query = searchInput.value.trim();

  if (query === '') {
    fetch('https://dummyjson.com/products?limit=100')
      .then(res => res.json())
      .then(data => {
        allProducts = data.products;
        sortAndDisplay();
      });
  } else {
    fetch(`https://dummyjson.com/products/search?q=${query}`)
      .then(res => res.json())
      .then(data => {
        allProducts = data.products;
        sortAndDisplay();
      });
  }
};

// Sorting handler
sortSelect.onchange = function () {
  sortAndDisplay();
};

// Sort and display based on selected value
function sortAndDisplay() {
  let sorted = [...allProducts];

  if (sortSelect.value === 'asc') {
    sorted.sort((a, b) => a.price - b.price);
  } else if (sortSelect.value === 'desc') {
    sorted.sort((a, b) => b.price - a.price);
  }

  showProducts(sorted);
}

// Show products function
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
