document.addEventListener("DOMContentLoaded", function() {
    fetch(`${basePath}components/pikchi.html`)
      .then(response => response.text())
      .then(data => {
        document.getElementById('pikchi-placeholder').innerHTML = data;
        initializeProducts();
      });
});
  
function initializeProducts() {
    fetch(`${basePath}pct.json`)
      .then(response => response.json())
      .then(products => {
        const productContainer = document.getElementById('product-container');
        products.forEach(product => {
          const card = createProductCard(product);
          productContainer.appendChild(card);
        });
      })
      .catch(error => console.error('Error fetching products:', error));
}
  
function createProductCard(product) {
    const cardDiv = document.createElement('div');
    cardDiv.classList.add('pikcha');
  
    const img = document.createElement('img');
    img.src = basePath + product.image;
    img.alt = product.name;
    img.classList.add('pct_of_content');
  
    const name = document.createElement('h2');
    name.textContent = product.name;
    name.classList.add('product-name');
  
    const author = document.createElement('p');
    author.textContent = `Автор: ${product.author}`;
  
    const button = document.createElement('button');
    button.textContent = 'купить';
    button.classList.add('pct_btn');
    button.addEventListener('click', function() {
      window.location.href = `${basePath}pages/cardPage.html?id=${product.id}`;
    });
  
    cardDiv.appendChild(img);
    cardDiv.appendChild(name);
    cardDiv.appendChild(author);
    cardDiv.appendChild(button);
  
    return cardDiv;
}