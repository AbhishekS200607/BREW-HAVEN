gsap.registerPlugin(ScrollTrigger);

// ===== HERO ENTRANCE =====
gsap.timeline({ delay: 0.2 })
  .from('.gc-eyebrow', { opacity: 0, y: 20, duration: 0.6 })
  .from('.gc-title', { opacity: 0, x: -40, duration: 0.8, ease: 'power4.out' }, '-=0.3')
  .from('.gc-subtitle', { opacity: 0, y: 20, duration: 0.6 }, '-=0.4')
  .from('.gc-hero-btns', { opacity: 0, y: 20, duration: 0.6 }, '-=0.3')
  .from('.gc-hero-cards .gc-card-preview', { opacity: 0, y: 60, stagger: 0.15, duration: 0.8, ease: 'back.out(1.4)' }, '-=0.6');

// ===== SCROLL REVEALS =====
gsap.utils.toArray('.gc-step, .gc-design-item, .gc-faq-item').forEach(el => {
  gsap.from(el, {
    opacity: 0, y: 40, duration: 0.7, ease: 'power3.out',
    scrollTrigger: { trigger: el, start: 'top 85%' }
  });
});

gsap.from('.gc-redeem-text', {
  opacity: 0, x: -50, duration: 0.9, ease: 'power3.out',
  scrollTrigger: { trigger: '.gc-redeem', start: 'top 70%' }
});

gsap.from('.gc-redeem-form', {
  opacity: 0, x: 50, duration: 0.9, ease: 'power3.out',
  scrollTrigger: { trigger: '.gc-redeem', start: 'top 70%' }
});

// ===== AMOUNT BUTTONS =====
const amountBtns = document.querySelectorAll('.gc-amount-btn');
const checkoutBtn = document.querySelector('.gc-checkout-btn');
const previewAmount = document.getElementById('previewAmount');

amountBtns.forEach(btn => {
  btn.addEventListener('click', () => {
    amountBtns.forEach(b => b.classList.remove('active'));
    btn.classList.add('active');
    const val = btn.textContent;
    if (previewAmount) previewAmount.textContent = val;
    if (checkoutBtn) checkoutBtn.textContent = `ADD TO CART — ${val}`;
  });
});

// Custom amount input
const customInput = document.querySelector('.gc-custom-input input');
if (customInput) {
  customInput.addEventListener('input', () => {
    const val = customInput.value;
    if (val && parseInt(val) >= 5) {
      amountBtns.forEach(b => b.classList.remove('active'));
      if (previewAmount) previewAmount.textContent = `$${val}`;
      if (checkoutBtn) checkoutBtn.textContent = `ADD TO CART — $${val}`;
    }
  });
}

// ===== RECIPIENT NAME LIVE PREVIEW =====
const recipientInput = document.querySelector('.gc-form-grid input[placeholder="e.g. Sarah"]');
const previewName = document.getElementById('previewName');
if (recipientInput && previewName) {
  recipientInput.addEventListener('input', () => {
    previewName.textContent = recipientInput.value || 'Sarah';
  });
}

// ===== DELIVERY OPTIONS =====
document.querySelectorAll('.gc-delivery-opt').forEach(opt => {
  opt.addEventListener('click', () => {
    document.querySelectorAll('.gc-delivery-opt').forEach(o => o.classList.remove('active'));
    opt.classList.add('active');
  });
});

// ===== CARD DESIGN SELECTOR =====
document.querySelectorAll('.gc-design-item').forEach(item => {
  item.addEventListener('click', () => {
    document.querySelectorAll('.gc-design-item').forEach(i => i.classList.remove('selected'));
    item.classList.add('selected');

    // Update preview card style
    const preview = document.querySelector('.gc-preview-card');
    if (preview) {
      preview.className = 'gc-card-preview gc-preview-card';
      const cardClass = item.querySelector('.gc-card-preview').classList[1];
      preview.classList.add(cardClass);
    }
  });
});

// ===== FAQ ACCORDION =====
document.querySelectorAll('.gc-faq-item').forEach(item => {
  item.querySelector('.gc-faq-q').addEventListener('click', () => {
    const isOpen = item.classList.contains('open');
    document.querySelectorAll('.gc-faq-item').forEach(i => i.classList.remove('open'));
    if (!isOpen) item.classList.add('open');
  });
});

// ===== BALANCE CHECK (MOCK) =====
const checkBalanceBtn = document.querySelector('.gc-redeem-btns .gc-btn-primary');
const balanceValue = document.querySelector('.gc-balance-value');
if (checkBalanceBtn && balanceValue) {
  checkBalanceBtn.addEventListener('click', () => {
    const cardNum = document.querySelector('.gc-redeem-form input[placeholder*="XXXX"]').value;
    const pin = document.querySelector('.gc-redeem-form input[placeholder*="PIN"]').value;
    if (cardNum && pin) {
      balanceValue.textContent = '$42.50';
      gsap.from(balanceValue, { scale: 0.5, opacity: 0, duration: 0.5, ease: 'back.out(1.7)' });
    } else {
      balanceValue.textContent = 'Enter card details';
    }
  });
}
