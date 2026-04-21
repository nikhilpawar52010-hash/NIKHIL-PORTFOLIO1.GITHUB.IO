// script.js - smooth scroll, dark mode, typing animation, gallery lightbox, mobile menu

// Wait for DOM to load
document.addEventListener('DOMContentLoaded', () => {

  // ========== 1. DARK MODE TOGGLE (extra feature) ==========
  const themeToggle = document.getElementById('themeToggle');
  const currentTheme = localStorage.getItem('theme');
  if (currentTheme === 'dark') {
    document.body.classList.add('dark');
    themeToggle.innerHTML = '<i class="fas fa-sun"></i>';
  } else {
    themeToggle.innerHTML = '<i class="fas fa-moon"></i>';
  }

  themeToggle.addEventListener('click', () => {
    document.body.classList.toggle('dark');
    if (document.body.classList.contains('dark')) {
      localStorage.setItem('theme', 'dark');
      themeToggle.innerHTML = '<i class="fas fa-sun"></i>';
    } else {
      localStorage.setItem('theme', 'light');
      themeToggle.innerHTML = '<i class="fas fa-moon"></i>';
    }
  });

  // ========== 2. TYPING ANIMATION (extra feature) ==========
  const roles = ['AI Enthusiast', 'Full Stack Developer', 'Design Thinker', 'Problem Solver'];
  let roleIndex = 0;
  let charIndex = 0;
  let isDeleting = false;
  const typedTextSpan = document.getElementById('typedText');
  function typeEffect() {
    const currentRole = roles[roleIndex];
    if (isDeleting) {
      typedTextSpan.textContent = currentRole.substring(0, charIndex - 1);
      charIndex--;
    } else {
      typedTextSpan.textContent = currentRole.substring(0, charIndex + 1);
      charIndex++;
    }
    if (!isDeleting && charIndex === currentRole.length) {
      isDeleting = true;
      setTimeout(typeEffect, 1800);
      return;
    }
    if (isDeleting && charIndex === 0) {
      isDeleting = false;
      roleIndex = (roleIndex + 1) % roles.length;
      setTimeout(typeEffect, 200);
      return;
    }
    const speed = isDeleting ? 50 : 100;
    setTimeout(typeEffect, speed);
  }
  if (typedTextSpan) typeEffect();

  // ========== 3. Mobile menu toggle ==========
  const hamburger = document.getElementById('hamburger');
  const navLinks = document.getElementById('navLinks');
  if (hamburger) {
    hamburger.addEventListener('click', () => {
      navLinks.classList.toggle('active');
    });
    // close when clicking any nav link
    document.querySelectorAll('.nav-links a').forEach(link => {
      link.addEventListener('click', () => {
        navLinks.classList.remove('active');
      });
    });
  }

  // ========== 4. Smooth scrolling for anchor links ==========
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
      const targetId = this.getAttribute('href');
      if (targetId === "#" || !targetId) return;
      const targetElement = document.querySelector(targetId);
      if (targetElement) {
        e.preventDefault();
        targetElement.scrollIntoView({ behavior: 'smooth' });
      }
    });
  });

  // ========== 5. Gallery generation + Lightbox effect ==========
  // Gallery images (placeholder images + some repeated but all using assets)
  const galleryImages = [
    { src: "assets/images/gallery-event1.jpg", alt: "Hackathon victory" },
    { src: "assets/images/gallery-cert1.jpg", alt: "Award ceremony" },
    { src: "assets/images/project-demo.jpg", alt: "Project presentation" },
    { src: "assets/images/design-sprint.jpg", alt: "Design Thinking workshop" },
    { src: "assets/images/cert-ai4a.jpg", alt: "AI4A certificate" },
    { src: "assets/images/code-clash.jpg", alt: "Coding competition" },
    { src: "assets/images/coursera-ml.jpg", alt: "Coursera certificate" },
    { src: "assets/images/yuva-ai.jpg", alt: "Yuva AI event" }
  ];
  // Fallback placeholder if images don't exist
  const fallbackPlaceholder = "https://placehold.co/500x350?text=Gallery+Image";
  
  const galleryGrid = document.getElementById('galleryGrid');
  if (galleryGrid) {
    galleryImages.forEach(img => {
      const galleryItem = document.createElement('div');
      galleryItem.className = 'gallery-item';
      const imageElem = document.createElement('img');
      imageElem.src = img.src;
      imageElem.alt = img.alt;
      imageElem.onerror = function() { this.src = fallbackPlaceholder; };
      galleryItem.appendChild(imageElem);
      galleryItem.addEventListener('click', () => {
        const modal = document.getElementById('lightboxModal');
        const lightboxImg = document.getElementById('lightboxImg');
        lightboxImg.src = imageElem.src;
        modal.style.display = 'flex';
      });
      galleryGrid.appendChild(galleryItem);
    });
  }
  
  // Lightbox close functionality
  const modal = document.getElementById('lightboxModal');
  const closeBtn = document.querySelector('.close-lightbox');
  if (closeBtn) {
    closeBtn.addEventListener('click', () => {
      modal.style.display = 'none';
    });
    modal.addEventListener('click', (e) => {
      if (e.target === modal) modal.style.display = 'none';
    });
  }
  
  // also manually add some default gallery if grid empty? but we already populated.
  // For better experience, also add images from achievements & certs section to gallery? No requirement, but we add dynamic.

  // ========== 6. Contact form simple alert (optional) ==========
  const contactForm = document.getElementById('contactForm');
  if (contactForm) {
    contactForm.addEventListener('submit', (e) => {
      e.preventDefault();
      alert('Thank you for reaching out! I will get back to you soon.');
      contactForm.reset();
    });
  }

  // ========== 7. progress bars animation on scroll (simple) ==========
  const progressBars = document.querySelectorAll('.progress');
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        const bar = entry.target;
        const width = bar.style.width;
        bar.style.width = width; // already set inline width from style.css but ensure visible
        observer.unobserve(bar);
      }
    });
  }, { threshold: 0.2 });
  progressBars.forEach(bar => observer.observe(bar));
  
  // Set initial progress widths from inline styles: they are set in HTML inline but if missing, reassign
  document.querySelectorAll('.progress').forEach(bar => {
    const styleWidth = bar.style.width;
    if (!styleWidth && bar.getAttribute('style')) {} else if (!styleWidth) {
      if (bar.parentElement.previousElementSibling?.innerText.includes('JavaScript')) bar.style.width = '85%';
      else if (bar.parentElement.previousElementSibling?.innerText.includes('Python')) bar.style.width = '80%';
      else if (bar.parentElement.previousElementSibling?.innerText.includes('HTML')) bar.style.width = '90%';
      else bar.style.width = '75%';
    }
  });
  
  // "View Portfolio" button smooth scroll to projects section
  const viewBtn = document.getElementById('viewPortfolioBtn');
  if(viewBtn) {
    viewBtn.addEventListener('click', (e) => {
      e.preventDefault();
      document.querySelector('#projects').scrollIntoView({ behavior: 'smooth' });
    });
  }
  
  // small fix: ensure any broken images in achievements/certs sections get placeholder
  const allImgs = document.querySelectorAll('img');
  allImgs.forEach(img => {
    img.onerror = function() {
      if(!this.src.includes('placehold')) this.src = 'https://placehold.co/600x400?text=Image+Preview';
    };
  });
});
