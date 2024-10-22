document.addEventListener("DOMContentLoaded", function() {
      fetch('header.html')
          .then(response => response.text())
          .then(data => {
              document.getElementById('header-placeholder').innerHTML = data;
              initializeHeader();
          });
      fetch('pikchis.html')
        .then(response => response.text())
        .then(data => {
            document.getElementById('pikchi-placeholder').innerHTML = data;
            initializeProducts();
        });

});

function initializeHeader() {
    const navLinkNav = document.getElementById('nav-link-nav');
    const navMenu = document.getElementById('nav-menu');
    const setMenu = document.getElementById('set-menu');
    const setting = document.getElementById('setting');
    const tema = document.getElementById('tema');

    // Изначально скрываем оба меню
    navMenu.style.display = 'none';
    setMenu.style.display = 'none';

    // Обработчик клика на "личный кабинет"
    navLinkNav.addEventListener('click', function(e) {
        e.preventDefault();
        // Переключаем отображение navMenu и скрываем setMenu
        navMenu.style.display = navMenu.style.display === 'block' ? 'none' : 'block';
        setMenu.style.display = 'none';
    });

    // Обработчик клика на "настройки"
    setting.addEventListener('click', function(e) {
        e.preventDefault();
        navMenu.style.display = 'none';
        setMenu.style.display = 'block';
    });

    // Обработчик клика на "сменить тему"
    tema.addEventListener('click', function(e) {
        e.preventDefault();
        document.body.classList.toggle('dark-mode');
    });

    // Скрываем меню при клике вне его области
    document.addEventListener('click', function(e) {
        if (
            !navLinkNav.contains(e.target) &&
            !navMenu.contains(e.target) &&
            !setMenu.contains(e.target) &&
            !setting.contains(e.target)
        ) {
            navMenu.style.display = 'none';
            setMenu.style.display = 'none';
        }
    });
}

function initializeProducts() {
    fetch('products.json')
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
    cardDiv.classList.add('product-card');

    const img = document.createElement('img');
    img.src = product.image;
    img.alt = product.name;
    img.classList.add('product-image');

    const name = document.createElement('h2');
    name.textContent = product.name;
    name.classList.add('product-name');

    const price = document.createElement('p');
    price.textContent = product.price;
    price.classList.add('product-price');

    const button = document.createElement('button');
    button.textContent = 'View Details';
    button.classList.add('view-details-button');
    button.addEventListener('click', function() {
        window.location.href = 'cardPage.html?id=' + product.id;
    });

    cardDiv.appendChild(img);
    cardDiv.appendChild(name);
    cardDiv.appendChild(price);
    cardDiv.appendChild(button);

    return cardDiv;
}

if (window.location.pathname.endsWith('cardPage.html')) {
    document.addEventListener("DOMContentLoaded", function() {
        // Fetch header
        fetch('header.html')
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

    fetch('products.json')
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

// let pen = 111111;

// function message() {
//   const buy = document.getElementById('buy');
//   buy.addEventListener('click', function(e) {
//     e.preventDefault();
//     // alert('привяжите карту');
//     pen = pen + 729;
//     console.log(pen);
//      buy.style.color = '#' + pen;
//   });

// }

document.addEventListener("DOMContentLoaded", function() {
      fetch('pikchis.html')
          .then(response => response.text())
          .then(data => {
              document.getElementById('pikchi-placeholder').innerHTML = data;
              // initializeMain();
          });

});

