/* ============================================
   ANIMATIONS.JS — Scroll-triggered Animations
   ============================================ */

function initObserver() {
  const elements = document.querySelectorAll(
    '.fade-in:not(.visible), .fade-left:not(.visible), .fade-right:not(.visible)'
  );

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible');
          observer.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.1 }
  );

  elements.forEach((el) => observer.observe(el));
}

// Run on page load
document.addEventListener('DOMContentLoaded', initObserver);
