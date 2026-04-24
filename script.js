// ========== DARK / LIGHT MODE TOGGLE ==========
const toggleBtn = document.getElementById('themeToggleBtn');
const body = document.body;

const savedTheme = localStorage.getItem('theme');
if (savedTheme === 'dark') {
  body.classList.add('dark');
  toggleBtn.innerHTML = '<i class="fas fa-sun"></i>';
} else {
  toggleBtn.innerHTML = '<i class="fas fa-moon"></i>';
}
toggleBtn.addEventListener('click', () => {
  body.classList.toggle('dark');
  const isDark = body.classList.contains('dark');
  localStorage.setItem('theme', isDark ? 'dark' : 'light');
  toggleBtn.innerHTML = isDark ? '<i class="fas fa-sun"></i>' : '<i class="fas fa-moon"></i>';
});

// ========== MOBILE MENU LOGIC ==========
const hamburger = document.getElementById('hamburgerIcon');
const mobileNav = document.getElementById('mobileNav');
const closeNav = document.getElementById('closeMobileNav');

function openMobileMenu() {
  mobileNav.classList.add('active');
  document.body.style.overflow = 'hidden';
}

function closeMobileMenu() {
  mobileNav.classList.remove('active');
  document.body.style.overflow = '';
}

if (hamburger) hamburger.addEventListener('click', openMobileMenu);
if (closeNav) closeNav.addEventListener('click', closeMobileMenu);

document.querySelectorAll('.mobile-nav-links a').forEach(link => {
  link.addEventListener('click', () => {
    closeMobileMenu();
  });
});

// ========== SMOOTH SCROLLING ==========
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function(e) {
    e.preventDefault();
    const targetId = this.getAttribute('href');
    if (targetId === '#') return;
    const targetElement = document.querySelector(targetId);
    if (targetElement) {
      targetElement.scrollIntoView({
        behavior: 'smooth',
        block: 'start'
      });
    }
  });
});

// ========== ADD SCROLL REVEAL ANIM
