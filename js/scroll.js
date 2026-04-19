// ===== GSAP SCROLL ANIMATIONS =====
gsap.registerPlugin(ScrollTrigger);

// ===== HERO ENTRANCE =====
const heroTl = gsap.timeline({ delay: 0.2 });
heroTl
  .from('.hero-eyebrow', { opacity: 0, y: 20, duration: 0.6 })
  .from('.hero-title', { opacity: 0, x: -50, duration: 0.8, ease: 'power4.out' }, '-=0.4')
  .from('.hero-product-info > *', { opacity: 0, y: 20, duration: 0.6, stagger: 0.1 }, '-=0.4')
  .from('.hero-image', { opacity: 0, scale: 0.8, duration: 1, ease: 'back.out(1.7)' }, '-=0.8')
  .from('.vertical-text', { opacity: 0, x: 100, duration: 1 }, '-=1');

// ===== FLOATING BEANS PARALLAX =====
gsap.to('.b1', {
  yPercent: -100,
  ease: 'none',
  scrollTrigger: {
    trigger: 'body',
    start: 'top top',
    end: 'bottom bottom',
    scrub: true
  }
});

// ===== MENU SECTION STAGGER =====
gsap.from('.menu-card', {
  opacity: 0,
  y: 50,
  duration: 0.8,
  stagger: 0.15,
  ease: 'power3.out',
  scrollTrigger: {
    trigger: '.menu-section',
    start: 'top 70%'
  }
});

// ===== PERFECTION SECTION TITLE =====
gsap.from('.title', {
  opacity: 0,
  y: 30,
  duration: 1,
  scrollTrigger: {
    trigger: '.perfection-section',
    start: 'top 70%'
  }
});

// ===== POPULAR SECTION CARDS =====
gsap.from('.popular-card', {
  opacity: 0,
  scale: 0.9,
  y: 40,
  duration: 0.8,
  stagger: 0.2,
  scrollTrigger: {
    trigger: '.popular-section',
    start: 'top 75%'
  }
});

// ===== LOCATIONS SECTION STAGGER =====
gsap.from('.location-card', {
  opacity: 0,
  y: 30,
  duration: 0.6,
  stagger: 0.1,
  scrollTrigger: {
    trigger: '.locations-section',
    start: 'top 80%'
  }
});
