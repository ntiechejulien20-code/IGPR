// ============ HEADER SHRINK ON SCROLL ============
const header = document.getElementById('siteHeader');
function onScroll(){
  if(window.scrollY > 60){ header.classList.add('scrolled'); }
  else{ header.classList.remove('scrolled'); }
}
window.addEventListener('scroll', onScroll);
onScroll();

// ============ MOBILE MENU ============
const burger = document.getElementById('burgerBtn');
const mainNav = document.getElementById('mainNav');
burger.addEventListener('click', () => {
  mainNav.classList.toggle('is-open');
  burger.classList.toggle('is-open');
  header.classList.toggle('scrolled', mainNav.classList.contains('is-open') || window.scrollY > 60);
});

// ============ HERO CAROUSEL (autoplay every 3s) — only runs if a hero exists on this page ============
const slides = Array.from(document.querySelectorAll('.hero-slide'));
const dotsWrap = document.getElementById('heroDots');

if(slides.length > 0 && dotsWrap){
  let current = 0;
  let autoplayTimer;

  slides.forEach((_, i) => {
    const dot = document.createElement('span');
    if(i === 0) dot.classList.add('is-active');
    dot.addEventListener('click', () => goToSlide(i));
    dotsWrap.appendChild(dot);
  });
  const dots = Array.from(dotsWrap.children);

  function goToSlide(index){
    slides[current].classList.remove('is-active');
    dots[current].classList.remove('is-active');
    current = index;
    slides[current].classList.add('is-active');
    dots[current].classList.add('is-active');
  }

  function nextSlide(){
    goToSlide((current + 1) % slides.length);
  }

  function startAutoplay(){
    autoplayTimer = setInterval(nextSlide, 3000);
  }
  startAutoplay();

  dots.forEach(dot => {
    dot.addEventListener('click', () => {
      clearInterval(autoplayTimer);
      startAutoplay();
    });
  });
}

// ============ SCROLL REVEAL ============
const revealEls = document.querySelectorAll('.reveal, .reveal-left, .reveal-right');
const revealObserver = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if(entry.isIntersecting){
      entry.target.classList.add('is-visible');
      revealObserver.unobserve(entry.target);
    }
  });
}, { threshold: 0.15 });
revealEls.forEach(el => revealObserver.observe(el));

// stagger feature cards & gallery items slightly
document.querySelectorAll('.features-inner .feature-card').forEach((el, i) => {
  el.style.transitionDelay = (i * 0.1) + 's';
});
document.querySelectorAll('.gallery-grid .g-item').forEach((el, i) => {
  el.style.transitionDelay = (i * 0.06) + 's';
});
document.querySelectorAll('.ticket-grid .ticket').forEach((el, i) => {
  el.style.transitionDelay = (i * 0.12) + 's';
});

// ============ GALLERY LIGHTBOX — only runs if a gallery/lightbox exists on this page ============
const lightbox = document.getElementById('lightbox');
const lightboxImg = document.getElementById('lightboxImg');
const lightboxClose = document.getElementById('lightboxClose');

if(lightbox && lightboxImg && lightboxClose){
  document.querySelectorAll('.g-item').forEach(img => {
    img.addEventListener('click', () => {
      lightboxImg.src = img.dataset.full || img.src;
      lightboxImg.alt = img.alt;
      lightbox.classList.add('is-open');
    });
  });
  function closeLightbox(){ lightbox.classList.remove('is-open'); }
  lightboxClose.addEventListener('click', closeLightbox);
  lightbox.addEventListener('click', (e) => { if(e.target === lightbox) closeLightbox(); });
  document.addEventListener('keydown', (e) => { if(e.key === 'Escape') closeLightbox(); });
}

// ============ CLOSE MOBILE NAV ON LINK CLICK ============
mainNav.querySelectorAll('a').forEach(a => {
  a.addEventListener('click', () => mainNav.classList.remove('is-open'));
});

// ============ FLOATING WHATSAPP & GMAIL BUTTONS ============
(function(){
  const wrap = document.createElement('div');
  wrap.className = 'floating-actions';

  wrap.innerHTML = `
    <a href="https://wa.me/240222999090" target="_blank" rel="noopener" class="fab fab-whatsapp" aria-label="Contacter le restaurant sur WhatsApp">
      <svg viewBox="0 0 24 24"><path d="M12.04 2c-5.5 0-9.96 4.46-9.96 9.96 0 1.76.46 3.48 1.34 5L2 22l5.2-1.36a9.94 9.94 0 0 0 4.84 1.23h.01c5.5 0 9.96-4.45 9.96-9.95 0-2.66-1.04-5.15-2.92-7.03A9.9 9.9 0 0 0 12.04 2zm0 18.2c-1.5 0-2.98-.4-4.26-1.16l-.3-.18-3.09.81.82-3.01-.2-.31a8.15 8.15 0 0 1-1.26-4.38c0-4.52 3.68-8.2 8.2-8.2 2.19 0 4.25.85 5.8 2.4a8.14 8.14 0 0 1 2.4 5.8c0 4.52-3.68 8.23-8.11 8.23zm4.5-6.15c-.25-.12-1.47-.72-1.7-.81-.23-.08-.39-.12-.56.13-.17.25-.64.81-.78.97-.14.17-.29.19-.53.06-.25-.12-1.04-.38-1.98-1.22-.73-.65-1.23-1.46-1.37-1.7-.14-.25-.02-.38.11-.51.11-.11.25-.29.37-.43.12-.14.16-.25.25-.41.08-.17.04-.31-.02-.44-.06-.12-.56-1.35-.77-1.85-.2-.48-.41-.42-.56-.43-.14-.01-.31-.01-.48-.01-.17 0-.44.06-.67.31-.23.25-.87.85-.87 2.08 0 1.23.89 2.42 1.02 2.58.12.17 1.75 2.67 4.24 3.75.59.26 1.05.41 1.41.52.59.19 1.13.16 1.55.1.47-.07 1.47-.6 1.68-1.18.21-.58.21-1.08.15-1.18-.06-.1-.23-.16-.48-.28z"/></svg>
    </a>
  `;

  document.body.appendChild(wrap);
})();
