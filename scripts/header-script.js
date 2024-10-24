document.addEventListener("DOMContentLoaded", function() {
      fetch('../components/header.html')
          .then(response => response.text())
          .then(data => {
              document.getElementById('header-placeholder').innerHTML = data;
              initializeHeader();
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