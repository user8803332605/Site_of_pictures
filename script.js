document.addEventListener("DOMContentLoaded", function() {
      fetch('header.html')
          .then(response => response.text())
          .then(data => {
              document.getElementById('header-placeholder').innerHTML = data;
              initializeHeader();
          });

   });
function initializeHeader() {
    const navLinkNav = document.getElementById('nav-link-nav');
    const navMenu = document.getElementById('nav-menu');
    const navLinkAbout = document.getElementById('nav-link-about');

    navLinkNav.addEventListener('click', function(e) {
        e.preventDefault();
        navMenu.style.display = navMenu.style.display === 'block' ? 'none' : 'block';
    });

    // Скрытие меню при клике вне его области
    document.addEventListener('click', function(e) {
        if (!navLinkNav.contains(e.target) && !navMenu.contains(e.target)) {
            navMenu.style.display = 'none';
        }
    });
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
      fetch('pikchi.html')
          .then(response => response.text())
          .then(data => {
              document.getElementById('pikchi-placeholder').innerHTML = data;
              initializeMain();
          });

   });