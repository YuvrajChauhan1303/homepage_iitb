const menuBtn = document.getElementById('menu-btn');
const menu = document.getElementById('menu');

menuBtn.addEventListener('click', () => {
  const isOpen = menu.classList.toggle('active');
  menuBtn.classList.toggle('active', isOpen);
  document.body.style.overflow = isOpen ? 'hidden' : '';
});

menu.querySelectorAll('a').forEach(link => {
  link.addEventListener('click', () => {
    menu.classList.remove('active');
    menuBtn.classList.remove('active');
    document.body.style.overflow = '';
  });
});

window.addEventListener('scroll', () => {
  if (menu.classList.contains('active')) {
    menu.classList.remove('active');
    menuBtn.classList.remove('active');
    document.body.style.overflow = '';
  }
});