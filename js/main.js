// ===== CUSTOM CURSOR GLOW =====
const cursorGlow = document.createElement('div');
cursorGlow.id = 'cursor-glow';
document.body.appendChild(cursorGlow);

document.addEventListener('mousemove', (e) => {
  cursorGlow.style.left = e.clientX + 'px';
  cursorGlow.style.top = e.clientY + 'px';
});

// ===== HERO THUMBNAILS & PRODUCT SWITCHER =====
const thumbs = document.querySelectorAll('.thumb');
const heroImg = document.querySelector('.main-frapp');
const verticalTextOutline = document.querySelector('.vertical-text-solid span:nth-child(1)');
const verticalTextFilled = document.querySelector('.vertical-text-solid span:nth-child(2)');
const sideLabelName = document.querySelector('#sideLabel h4');
const sideLabelPrice = document.querySelector('#sideLabel .price');

const productData = {
  'hero-frapp.png': { name: 'ICED CARAMEL LATTE', price: '₹540.00' },
  'menu-mocha.png': { name: 'MOCHA FRAPPUCCINO', price: '₹620.00' },
  'menu-vanilla.png': { name: 'VANILLA BEAN CREAM', price: '₹580.00' },
  'menu-hazelnut.png': { name: 'HAZELNUT COLD BREW', price: '₹550.00' }
};

thumbs.forEach(thumb => {
  thumb.addEventListener('click', () => {
    // 1. Update Active State
    thumbs.forEach(t => t.parentElement.classList.remove('active'));
    thumb.parentElement.classList.add('active');

    // 2. Prepare Transition
    heroImg.style.transition = 'all 0.4s cubic-bezier(0.16, 1, 0.3, 1)';
    heroImg.style.transform = 'scale(0.8) translateY(20px)';
    heroImg.style.opacity = '0';
    
    if(sideLabelName) sideLabelName.style.opacity = '0';
    if(verticalTextOutline) verticalTextOutline.parentElement.style.opacity = '0';

    // 3. Swap Content after fade out
    setTimeout(() => {
      const fullSrc = thumb.getAttribute('src');
      const filename = fullSrc.split('/').pop();
      heroImg.src = fullSrc;

      const data = productData[filename] || { name: 'PREMIUM COFFEE', price: '₹450.00' };
      
      // Update Side Label
      if(sideLabelName) {
        const words = data.name.split(' ');
        sideLabelName.innerHTML = `${words[0]} ${words[1] || ''}<br>${words.slice(2).join(' ')}`;
        sideLabelPrice.textContent = data.price;
        sideLabelName.style.opacity = '1';
      }

      // Update Decorative Vertical Text
      if(verticalTextOutline) {
        const words = data.name.split(' ');
        verticalTextOutline.textContent = words.slice(0, 2).join(' ');
        verticalTextFilled.textContent = words.slice(2).join(' ');
        verticalTextOutline.parentElement.style.opacity = '0.15';
      }

      // 4. Animate back in
      heroImg.style.transform = 'scale(1) translateY(0)';
      heroImg.style.opacity = '1';
    }, 400);
  });
});

// ===== CAROUSEL NAVIGATION =====
const carouselItems = document.querySelector('.carousel-items');
const prevBtn = document.querySelector('.carousel-nav.prev');
const nextBtn = document.querySelector('.carousel-nav.next');

if (carouselItems && prevBtn && nextBtn) {
  prevBtn.addEventListener('click', () => {
    carouselItems.scrollBy({ left: -300, behavior: 'smooth' });
  });
  nextBtn.addEventListener('click', () => {
    carouselItems.scrollBy({ left: 300, behavior: 'smooth' });
  });
}

// ===== MAGNETIC BUTTONS =====
const magnets = document.querySelectorAll('.order-btn, .card-btn, .add-btn');
magnets.forEach(btn => {
  btn.addEventListener('mousemove', (e) => {
    const rect = btn.getBoundingClientRect();
    const x = e.clientX - rect.left - rect.width / 2;
    const y = e.clientY - rect.top - rect.height / 2;
    btn.style.transform = `translate(${x * 0.3}px, ${y * 0.3}px)`;
  });
  btn.addEventListener('mouseleave', () => {
    btn.style.transform = `translate(0, 0)`;
  });
});
