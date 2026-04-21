// ========== DARK / LIGHT MODE TOGGLE ==========
const toggleBtn = document.getElementById('themeToggleBtn');
const body = document.body;

// Check local storage for theme preference
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

hamburger.addEventListener('click', openMobileMenu);
closeNav.addEventListener('click', closeMobileMenu);

// Close mobile nav when a link is clicked
document.querySelectorAll('.mobile-nav-links a').forEach(link => {
  link.addEventListener('click', () => {
    closeMobileMenu();
  });
});

// ========== SMOOTH SCROLLING FOR ALL ANCHOR LINKS ==========
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

// ========== LIGHTBOX GALLERY ==========
const lightbox = document.getElementById('lightboxModal');
const lightboxImg = document.getElementById('lightboxImg');
const closeLightbox = document.querySelector('.close-lightbox');
const galleryItems = document.querySelectorAll('.gallery-item');

galleryItems.forEach(item => {
  item.addEventListener('click', () => {
    const largeImageUrl = item.getAttribute('data-image');
    lightboxImg.src = largeImageUrl;
    lightbox.classList.add('active');
    document.body.style.overflow = 'hidden';
  });
});

closeLightbox.addEventListener('click', () => {
  lightbox.classList.remove('active');
  document.body.style.overflow = '';
});

lightbox.addEventListener('click', (e) => {
  if (e.target === lightbox) {
    lightbox.classList.remove('active');
    document.body.style.overflow = '';
  }
});

// Optional: close with ESC key
document.addEventListener('keydown', (e) => {
  if (e.key === 'Escape' && lightbox.classList.contains('active')) {
    lightbox.classList.remove('active');
    document.body.style.overflow = '';
  }
});

// ========== ADD ACTIVE CLASS TO NAV LINKS ON SCROLL (optional enhancement) ==========
const sections = document.querySelectorAll('section');
const navLinks = document.querySelectorAll('.nav-links a, .mobile-nav-links a');

window.addEventListener('scroll', () => {
  let current = '';
  sections.forEach(section => {
    const sectionTop = section.offsetTop - 100;
    const sectionHeight = section.clientHeight;
    if (pageYOffset >= sectionTop && pageYOffset < sectionTop + sectionHeight) {
      current = section.getAttribute('id');
    }
  });
  navLinks.forEach(link => {
    link.classList.remove('active');
    if (link.getAttribute('href') === `#${current}`) {
      link.classList.add('active');
    }
  });
});
