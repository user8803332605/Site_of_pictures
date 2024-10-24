document.addEventListener("DOMContentLoaded", function() {
    fetch(`${basePath}components/header.html`)
      .then(response => response.text())
      .then(data => {
        document.getElementById('header-placeholder').innerHTML = data;
  
        // Корректируем пути в хедере
        adjustHeaderPaths();
  
        initializeHeader();
      });
  
    displayProductDetails();
});
  
function displayProductDetails() {
    const params = new URLSearchParams(window.location.search);
    const productId = params.get('id');
  
    fetch(`${basePath}pct.json`)
      .then(response => response.json())
      .then(products => {
        const product = products.find(p => p.id == productId);
        if (product) {
          const productDetails = document.getElementById('product-details');
  
          const img = document.createElement('img');
          img.src = basePath + product.image;
          img.alt = product.name;
          img.classList.add('product-image-large');
  
          const name = document.createElement('h1');
          name.textContent = product.name;
  
          const author = document.createElement('p');
          author.textContent = `Автор: ${product.author}`;
  
          productDetails.appendChild(img);
          productDetails.appendChild(name);
          productDetails.appendChild(author);
        } else {
          document.getElementById('product-details').textContent = 'Товар не найден.';
        }
      })
      .catch(error => console.error('Error fetching product details:', error));
}