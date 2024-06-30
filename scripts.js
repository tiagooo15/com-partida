const navToggle = document.querySelector('.nav-toggle');
const navMenu = document.querySelector('.nav-menu');
const footer = document.querySelector('footer');

navMenu.classList.remove('nav-menu_visible'); 

navToggle.addEventListener('click', () => {
  navMenu.classList.toggle('nav-menu_visible');

  if (navMenu.classList.contains("nav-menu_visible")) {
    navToggle.setAttribute("aria-label", "cerrar menú");
    footer.classList.add('footer-hidden');
  } else {
    navToggle.setAttribute("aria-label", "abrir menú");
    footer.classList.remove('footer-hidden');
  }
});

navMenu.addEventListener('click', (e) => {
  if (e.target.tagName === 'A') {
    navToggle.click(); 
  }
});

