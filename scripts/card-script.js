document.addEventListener("DOMContentLoaded", function() {
    fetch('../components/pikchi.html')
        .then(response => response.text())
        .then(data => {
            document.getElementById('pikchi-placeholder').innerHTML = data;
            initializeProducts();
        });
    });

function initializeProducts() {
    fetch('../public/pct.json')
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
    img.src = product.image;
    img.alt = product.name;
    img.classList.add('pct_of_content');

    // const name = document.createElement('h2');
    // name.textContent = product.name;
    // name.classList.add('product-name');

    const avtor = document.createElement('p');
    avtor.textContent = product.name;

    const button = document.createElement('button');
    button.textContent = 'купить';
    button.classList.add('pct_of_content');
    button.addEventListener('click', function() {
        window.location.href = 'pages/cardPage.html?id=' + product.id;
    });

    cardDiv.appendChild(img);
    cardDiv.appendChild(avtor);
    // cardDiv.appendChild(price);
    cardDiv.appendChild(button);

    return cardDiv;
}

if (window.location.pathname.endsWith('cardPage.html')) {
    document.addEventListener("DOMContentLoaded", function() {
        // Fetch header
        fetch('../components/header.html')
            .then(response => response.text())
            .then(data => {
                document.getElementById('header-placeholder').innerHTML = data;
                initializeHeader();
            });

        displayProductDetails();
    });
}

function displayProductDetails() {
    const params = new URLSearchParams(window.location.search);
    const productId = params.get('id');

    fetch('../public/products.json')
        .then(response => response.json())
        .then(products => {
            const product = products.find(p => p.id == productId);
            if (product) {
                const productDetails = document.getElementById('product-details');

                const img = document.createElement('img');
                img.src = product.image;
                img.alt = product.name;
                img.classList.add('product-image-large');

                const name = document.createElement('h1');
                name.textContent = product.name;

                const description = document.createElement('p');
                description.textContent = product.description;

                const price = document.createElement('p');
                price.textContent = 'Price: ' + product.price;

                productDetails.appendChild(img);
                productDetails.appendChild(name);
                productDetails.appendChild(description);
                productDetails.appendChild(price);
            } else {
                document.getElementById('product-details').textContent = 'Product not found.';
            }
        })
        .catch(error => console.error('Error fetching product details:', error));
}

document.addEventListener("DOMContentLoaded", function() {
      fetch('../components/pikchi.html')
          .then(response => response.text())
          .then(data => {
              document.getElementById('pikchi-placeholder').innerHTML = data;
              // initializeMain();
          });

});