/* ============================================
   SLIDER.JS — Testimonials Carousel
   ============================================ */

let tIndex = 0;

function slideT(direction) {
  const slider = document.getElementById('tSlider');
  if (!slider) return;

  const cards = slider.querySelectorAll('.testimonial-card');
  const visible = window.innerWidth > 900 ? 3 : 1;
  const max = cards.length - visible;

  tIndex = Math.max(0, Math.min(tIndex + direction, max));

  const cardWidth = cards[0].offsetWidth + 24; // card width + gap
  slider.style.transform = `translateX(-${tIndex * cardWidth}px)`;
}

// Auto-slide every 4.5 seconds
setInterval(() => {
  const slider = document.getElementById('tSlider');
  if (!slider) return;

  const cards = slider.querySelectorAll('.testimonial-card');
  if (!cards.length) return;

  const visible = window.innerWidth > 900 ? 3 : 1;
  const max = cards.length - visible;

  if (tIndex >= max) {
    tIndex = -1;
  }
  slideT(1);
}, 4500);

// Reset on window resize
window.addEventListener('resize', () => {
  tIndex = 0;
  const slider = document.getElementById('tSlider');
  if (slider) slider.style.transform = 'translateX(0)';
});
