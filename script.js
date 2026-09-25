document.addEventListener('DOMContentLoaded', () => {

  // ================= 1. MENU MOBILE =================
  const btnMenuMobile = document.getElementById('menu-mobile');
  const navMenu = document.getElementById('nav');
  const iconeMenu = btnMenuMobile.querySelector('i');

  if (btnMenuMobile && navMenu) {
    // Abrir / Fechar menu ao clicar no botão
    btnMenuMobile.addEventListener('click', () => {
      navMenu.classList.toggle('hide');

      // Troca o ícone de hambúrguer por X
      if (navMenu.classList.contains('hide')) {
        iconeMenu.classList.remove('fa-xmark');
        iconeMenu.classList.add('fa-bars');
      } else {
        iconeMenu.classList.remove('fa-bars');
        iconeMenu.classList.add('fa-xmark');
      }
    });

    // Fechar o menu automaticamente ao clicar em qualquer link da nav
    const linksNav = navMenu.querySelectorAll('a');
    linksNav.forEach(link => {
      link.addEventListener('click', () => {
        navMenu.classList.add('hide');
        iconeMenu.classList.remove('fa-xmark');
        iconeMenu.classList.add('fa-bars');
      });
    });
  }

  // ================= 2. SLIDERS (SWIPER) =================
  carregarSwiper(() => {

    // Slider FACIAL
    new Swiper('.meu-swiper', {
      slidesPerView: 1,
      spaceBetween: 20,
      loop: true,
      grabCursor: true,
      autoplay: {
        delay: 6000, // 8 segundos
        disableOnInteraction: false,
      },
      breakpoints: {
        640: { slidesPerView: 2 },
        1024: { slidesPerView: 3 },
      },
      navigation: {
        nextEl: '.next-slide',
        prevEl: '.previous-slide',
      },
    });

    // Slider CORPORAL
    new Swiper('.swiper-corporal', {
      slidesPerView: 1,
      spaceBetween: 20,
      loop: true,
      grabCursor: true,
      autoplay: {
        delay: 7000, // 8 segundos
        disableOnInteraction: false,
      },
      breakpoints: {
        640: { slidesPerView: 2 },
        1024: { slidesPerView: 3 },
      },
      navigation: {
        nextEl: '.next-slide-corporal',
        prevEl: '.previous-slide-corporal',
      },
    });

  });
});

// Função para carregar a biblioteca Swiper dinamicamente
function carregarSwiper(callback) {
  if (window.Swiper) {
    callback();
    return;
  }

  const linkCSS = document.createElement('link');
  linkCSS.rel = 'stylesheet';
  linkCSS.href = 'https://cdn.jsdelivr.net/npm/swiper@11/swiper-bundle.min.css';
  document.head.appendChild(linkCSS);

  const scriptJS = document.createElement('script');
  scriptJS.src = 'https://cdn.jsdelivr.net/npm/swiper@11/swiper-bundle.min.js';
  scriptJS.onload = callback;
  document.body.appendChild(scriptJS);
}