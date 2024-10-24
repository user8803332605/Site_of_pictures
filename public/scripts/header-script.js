document.addEventListener("DOMContentLoaded", function() {
    fetch(`${basePath}components/header.html`)
      .then(response => response.text())
      .then(data => {
        document.getElementById('header-placeholder').innerHTML = data;
  
        // Корректируем пути в ссылках и изображениях
        adjustHeaderPaths();
  
        initializeHeader();
      });
  });
  
  function adjustHeaderPaths() {
    // Корректируем ссылки
    const links = document.querySelectorAll('#header-placeholder a');
    links.forEach(link => {
      const href = link.getAttribute('href');
      if (href && !href.startsWith('http') && !href.startsWith('#')) {
        link.setAttribute('href', basePath + href);
      }
    });
  
    // Корректируем пути к изображениям
    const images = document.querySelectorAll('#header-placeholder img');
    images.forEach(img => {
      const src = img.getAttribute('src');
      if (src && !src.startsWith('http')) {
        img.setAttribute('src', basePath + src);
      }
    });
  }
  
  function initializeHeader() {
    const navLinkNav = document.getElementById('nav-link-nav');
    const navMenu = document.getElementById('nav-menu');
    const setMenu = document.getElementById('set-menu');
    const setting = document.getElementById('setting');
    const tema = document.getElementById('tema');
  
    if (!navLinkNav || !navMenu || !setMenu || !setting || !tema) {
      console.error('Header elements not found. Please check your header HTML.');
      return;
    }
  
    navMenu.style.display = 'none';
    setMenu.style.display = 'none';
  
    navLinkNav.addEventListener('click', function(e) {
      e.preventDefault();
      navMenu.style.display = navMenu.style.display === 'block' ? 'none' : 'block';
      setMenu.style.display = 'none';
    });
  
    setting.addEventListener('click', function(e) {
      e.preventDefault();
      navMenu.style.display = 'none';
      setMenu.style.display = 'block';
    });
  
    tema.addEventListener('click', function(e) {
      e.preventDefault();
      document.body.classList.toggle('dark-mode');
    });
  
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