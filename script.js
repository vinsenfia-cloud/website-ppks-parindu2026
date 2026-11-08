const menuToggle = document.getElementById('menuToggle');
const mainNav = document.getElementById('mainNav');
menuToggle.addEventListener('click', () => mainNav.classList.toggle('show'));
mainNav.querySelectorAll('a').forEach(link => link.addEventListener('click', () => mainNav.classList.remove('show')));
document.getElementById('year').textContent = new Date().getFullYear();
const backToTop = document.getElementById('backToTop');
window.addEventListener('scroll', () => {
  backToTop.style.display = window.scrollY > 350 ? 'block' : 'none';
});
backToTop.addEventListener('click', () => window.scrollTo({top: 0, behavior: 'smooth'}));
