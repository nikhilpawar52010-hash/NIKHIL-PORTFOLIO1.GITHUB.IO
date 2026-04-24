/* ========== CSS RESET & GLOBAL VARIABLES ========== */
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

:root {
  /* Light mode (default) */
  --bg-primary: #ffffff;
  --bg-secondary: #f8fafc;
  --text-primary: #0f172a;
  --text-secondary: #334155;
  --accent: #3b82f6;
  --accent-dark: #2563eb;
  --card-bg: #ffffff;
  --border-light: #e2e8f0;
  --shadow: 0 10px 25px -5px rgba(0, 0, 0, 0.05), 0 8px 10px -6px rgba(0, 0, 0, 0.02);
  --transition: all 0.3s cubic-bezier(0.25, 0.46, 0.45, 0.94);
}

body.dark {
  --bg-primary: #0f172a;
  --bg-secondary: #1e293b;
  --text-primary: #f1f5f9;
  --text-secondary: #cbd5e1;
  --card-bg: #1e293b;
  --border-light: #334155;
  --shadow: 0 10px 25px -5px rgba(0, 0, 0, 0.3);
}

body {
  font-family: 'Inter', sans-serif;
  background: var(--bg-primary);
  color: var(--text-primary);
  line-height: 1.6;
  transition: background 0.3s, color 0.3s;
  scroll-behavior: smooth;
}

.container {
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 2rem;
}

/* ========== ANIMATIONS ========== */
@keyframes fadeInUp {
  from {
    opacity: 0;
    transform: translateY(30px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

@keyframes glowPulse {
  0% { box-shadow: 0 0 0 0 rgba(59,130,246,0.4); }
  70% { box-shadow: 0 0 0 10px rgba(59,130,246,0); }
  100% { box-shadow: 0 0 0 0 rgba(59,130,246,0); }
}

section {
  animation: fadeInUp 0.8s ease-out forwards;
  opacity: 0; /* Start invisible, then animate */
}

section:nth-child(1) { animation-delay: 0.1s; }
section:nth-child(2) { animation-delay: 0.2s; }
section:nth-child(3) { animation-delay: 0.3s; }
section:nth-child(4) { animation-delay: 0.4s; }
section:nth-child(5) { animation-delay: 0.5s; }
section:nth-child(6) { animation-delay: 0.6s; }

/* ========== TYPOGRAPHY & UTILITIES ========== */
.section-title {
  text-align: center;
  margin-bottom: 3rem;
}

.section-title h2 {
  font-size: 2.2rem;
  font-weight: 700;
  font-family: 'Poppins', sans-serif;
  position: relative;
  display: inline-block;
}

.title-underline {
  width: 70px;
  height: 4px;
  background: var(--accent);
  margin: 0.8rem auto 0;
  border-radius: 4px;
  transition: width 0.4s ease;
}

.section-title:hover .title-underline {
  width: 120px;
}

/* ========== HEADER & NAVIGATION ========== */
.header {
  position: sticky;
  top: 0;
  background: rgba(var(--bg-primary-rgb), 0.9);
  backdrop-filter: blur(10px);
  z-index: 100;
  box-shadow: 0 1px 3px rgba(0,0,0,0.05);
  border-bottom: 1px solid var(--border-light);
}

.nav-container {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1rem 2rem;
}

.logo {
  font-size: 1.6rem;
  font-weight: 800;
  letter-spacing: -0.5px;
}

.logo span {
  color: var(--accent);
}

.nav-links {
  display: flex;
  gap: 2rem;
  list-style: none;
}

.nav-links a {
  text-decoration: none;
  color: var(--text-primary);
  font-weight: 500;
  transition: var(--transition);
  position: relative;
}

.nav-links a:hover {
  color: var(--accent);
}

.nav-links a::after {
  content: '';
  position: absolute;
  bottom: -5px;
  left: 0;
  width: 0%;
  height: 2px;
  background: var(--accent);
  transition: 0.3s;
}

.nav-links a:hover::after {
  width: 100%;
}

/* ========== MOBILE MENU ========== */
.hamburger {
  display: none;
  font-size: 1.8rem;
  position: fixed;
  top: 1.2rem;
  right: 1.5rem;
  z-index: 200;
  cursor: pointer;
  color: var(--text-primary);
}

.mobile-nav {
  position: fixed;
  top: 0;
  left: -100%;
  width: 80%;
  max-width: 320px;
  height: 100%;
  background: var(--bg-primary);
  backdrop-filter: blur(12px);
  box-shadow: 2px 0 20px rgba(0,0,0,0.1);
  z-index: 300;
  transition: left 0.3s ease;
  padding: 2rem 1.5rem;
  display: flex;
  flex-direction: column;
}

.mobile-nav.active {
  left: 0;
}

/* ... (rest of mobile styles from previous version, same as before but keep all) ... */

/* ========== HERO SECTION ========== */
.hero {
  padding: 5rem 0 4rem;
  background: var(--bg-secondary);
}

.hero-grid {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 3rem;
  align-items: center;
}

.hero-content h1 {
  font-size: 3.2rem;
  font-weight: 800;
  line-height: 1.2;
  margin-bottom: 1rem;
  background: linear-gradient(135deg, var(--accent), #8b5cf6);
  -webkit-background-clip: text;
  background-clip: text;
  color: transparent;
  animation: glowPulse 3s infinite;
}

.tagline {
  font-size: 1.2rem;
  color: var(--text-secondary);
  margin-bottom: 1rem;
}

.intro-text {
  margin-bottom: 2rem;
  color: var(--text-secondary);
}

.hero-buttons {
  display: flex;
  gap: 1rem;
}

.btn-primary, .btn-outline {
  padding: 0.8rem 1.8rem;
  border-radius: 40px;
  text-decoration: none;
  font-weight: 600;
  transition: var(--transition);
  display: inline-flex;
  align-items: center;
  gap: 0.5rem;
}

.btn-primary {
  background: var(--accent);
  color: white;
}

.btn-primary:hover {
  background: var(--accent-dark);
  transform: translateY(-3px);
}

.btn-outline {
  border: 2px solid var(--accent);
  color: var(--accent);
}

.btn-outline:hover {
  background: var(--accent);
  color: white;
  transform: translateY(-3px);
}

.hero-image {
  position: relative;
}

.hero-image img {
  width: 100%;
  border-radius: 30% 70% 70% 30% / 30% 30% 70% 70%;
  box-shadow: var(--shadow);
  transition: transform 0.5s;
}

.hero-image:hover img {
  transform: scale(1.02);
}

.floating-badge {
  position: absolute;
  bottom: -15px;
  right: -15px;
  background: var(--accent);
  color: white;
  padding: 0.6rem 1.2rem;
  border-radius: 50px;
  font-weight: 600;
  font-size: 0.9rem;
  box-shadow: 0 5px 15px rgba(0,0,0,0.2);
  animation: float 3s infinite ease;
}

@keyframes float {
  0% { transform: translateY(0px); }
  50% { transform: translateY(-8px); }
  100% { transform: translateY(0px); }
}

/* ========== ABOUT SECTION ========== */
.about {
  padding: 5rem 0;
}

.about-grid {
  display: grid;
  grid-template-columns: 2fr 1fr;
  gap: 3rem;
}

.about-details {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 1.5rem;
  margin-top: 2rem;
}

.detail-item {
  display: flex;
  gap: 1rem;
  align-items: flex-start;
}

.detail-item i {
  font-size: 1.6rem;
  color: var(--accent);
  margin-top: 0.2rem;
}

.about-stats {
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
}

.stat-card {
  background: var(--card-bg);
  border-radius: 20px;
  padding: 1.5rem;
  text-align: center;
  box-shadow: var(--shadow);
  transition: var(--transition);
  border: 1px solid var(--border-light);
}

.stat-card:hover {
  transform: translateY(-5px);
  border-color: var(--accent);
}

.stat-card i {
  font-size: 2rem;
  color: var(--accent);
}

.stat-card h3 {
  font-size: 2rem;
  margin: 0.5rem 0;
}

/* ========== ACHIEVEMENTS SECTION (NEW) ========== */
.achievements {
  padding: 5rem 0;
  background: var(--bg-secondary);
}

.achievements-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
  gap: 2rem;
}

.achievement-card {
  background: var(--card-bg);
  padding: 1.8rem;
  border-radius: 20px;
  text-align: center;
  transition: all 0.3s ease;
  border: 1px solid var(--border-light);
}

.achievement-card:hover {
  transform: translateY(-8px);
  box-shadow: var(--shadow);
  border-color: var(--accent);
}

.achievement-card i {
  font-size: 2.5rem;
  color: var(--accent);
  margin-bottom: 1rem;
}

.achievement-card h3 {
  margin-bottom: 0.5rem;
}

.achievement-date {
  display: inline-block;
  margin-top: 1rem;
  font-size: 0.85rem;
  color: var(--accent);
  font-weight: 600;
}

/* ========== PROJECTS SECTION ========== */
.projects {
  padding: 5rem 0;
}

.projects-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(320px, 1fr));
  gap: 2rem;
}

.project-card {
  background: var(--card-bg);
  border-radius: 20px;
  overflow: hidden;
  transition: var(--transition);
  box-shadow: var(--shadow);
  border: 1px solid var(--border-light);
}

.project-card:hover {
  transform: translateY(-10px);
  box-shadow: 0 20px 30px -12px rgba(0,0,0,0.15);
}

.card-img img {
  width: 100%;
  height: 220px;
  object-fit: cover;
  transition: transform 0.5s;
}

.project-card:hover .card-img img {
  transform: scale(1.05);
}

.card-content {
  padding: 1.5rem;
}

.card-content h3 {
  font-size: 1.4rem;
  margin-bottom: 0.5rem;
}

.tech-tags {
  display: flex;
  flex-wrap: wrap;
  gap: 0.5rem;
  margin: 1rem 0;
}

.tech-tags span {
  background: var(--bg-secondary);
  padding: 0.2rem 0.8rem;
  border-radius: 20px;
  font-size: 0.75rem;
  font-weight: 600;
  color: var(--accent);
}

.card-link {
  display: inline-flex;
  align-items: center;
  gap: 0.5rem;
  text-decoration: none;
  color: var(--accent);
  font-weight: 600;
  transition: gap 0.3s;
}

.card-link:hover {
  gap: 0.8rem;
}

/* ========== CERTIFICATIONS ========== */
.certifications {
  padding: 5rem 0;
  background: var(--bg-secondary);
}

.certs-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(220px, 1fr));
  gap: 2rem;
}

.cert-card {
  background: var(--card-bg);
  padding: 1.8rem;
  text-align: center;
  border-radius: 20px;
  transition: var(--transition);
  border: 1px solid var(--border-light);
  cursor: default;
}

.cert-card:hover {
  transform: translateY(-5px);
  border-color: var(--accent);
}

.cert-card i {
  font-size: 2.5rem;
  color: var(--accent);
  margin-bottom: 1rem;
}

.cert-card h3 {
  font-size: 1.2rem;
  margin-bottom: 0.3rem;
}

.cert-desc {
  font-size: 0.8rem;
  color: var(--text-secondary);
  display: block;
  margin-top: 0.5rem;
}

/* ========== CONTACT ========== */
.contact {
  padding: 5rem 0;
}

.contact-wrapper {
  max-width: 800px;
  margin: 0 auto;
  text-align: center;
}

.contact-info {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 1rem;
  margin-bottom: 2rem;
}

.contact-item {
  display: flex;
  align-items: center;
  gap: 0.6rem;
  background: var(--card-bg);
  padding: 0.6rem 1.2rem;
  border-radius: 40px;
  border: 1px solid var(--border-light);
  transition: var(--transition);
}

.contact-item:hover {
  transform: translateY(-3px);
  border-color: var(--accent);
}

.contact-item i {
  color: var(--accent);
  font-size: 1.2rem;
}

.social-links {
  display: flex;
  justify-content: center;
  gap: 1.5rem;
}

.social-links a {
  background: var(--bg-secondary);
  width: 48px;
  height: 48px;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 50%;
  color: var(--text-primary);
  font-size: 1.4rem;
  transition: var(--transition);
  text-decoration: none;
}

.social-links a:hover {
  background: var(--accent);
  color: white;
  transform: translateY(-4px) rotate(360deg);
}

/* ========== FOOTER ========== */
footer {
  background: var(--bg-secondary);
  text-align: center;
  padding: 2rem;
  border-top: 1px solid var(--border-light);
}

footer i {
  color: #ef4444;
  animation: pulse 1.5s infinite;
}

@keyframes pulse {
  0%, 100% { transform: scale(1); }
  50% { transform: scale(1.1); }
}

/* ========== RESPONSIVE ========== */
@media (max-width: 900px) {
  .hero-grid {
    grid-template-columns: 1fr;
    text-align: center;
  }
  .hero-buttons {
    justify-content: center;
  }
  .about-grid {
    grid-template-columns: 1fr;
  }
  .nav-links {
    display: none;
  }
  .hamburger {
    display: block;
  }
  .hero-content h1 {
    font-size: 2.5rem;
  }
}

@media (max-width: 600px) {
  .container {
    padding: 0 1rem;
  }
  .about-details {
    grid-template-columns: 1fr;
  }
  .contact-info {
    flex-direction: column;
    align-items: center;
  }
}
