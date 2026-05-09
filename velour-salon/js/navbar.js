/* ============================================
   NAVBAR.JS — Sticky Navbar & Mobile Menu
   ============================================ */

// Sticky navbar on scroll
window.addEventListener('scroll', () => {
  const nav = document.getElementById('navbar');
  if (nav) {
    nav.classList.toggle('scrolled', window.scrollY > 60);
  }

  // Back to top button
  const backTop = document.getElementById('backTop');
  if (backTop) {
    backTop.classList.toggle('visible', window.scrollY > 300);
  }
});

// Toggle mobile menu
function toggleMobile() {
  const menu = document.getElementById('mobileMenu');
  const btn = document.getElementById('hamBtn');
  if (menu) {
    menu.classList.toggle('open');
    // Animate hamburger
    const spans = btn.querySelectorAll('span');
    if (menu.classList.contains('open')) {
      spans[0].style.transform = 'rotate(45deg) translateY(9px)';
      spans[1].style.opacity = '0';
      spans[2].style.transform = 'rotate(-45deg) translateY(-9px)';
    } else {
      spans[0].style.transform = '';
      spans[1].style.opacity = '';
      spans[2].style.transform = '';
    }
  }
}

// Close mobile menu when clicking outside
document.addEventListener('click', (e) => {
  const menu = document.getElementById('mobileMenu');
  const btn = document.getElementById('hamBtn');
  if (menu && menu.classList.contains('open')) {
    if (!menu.contains(e.target) && !btn.contains(e.target)) {
      toggleMobile();
    }
  }
});
