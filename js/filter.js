/* ============================================
   FILTER.JS — Services Category Filter
   ============================================ */

function filterServices(category, clickedBtn) {
  // Update active button
  const allBtns = document.querySelectorAll('#filterBtns .filter-btn');
  allBtns.forEach((btn) => btn.classList.remove('active'));
  clickedBtn.classList.add('active');

  // Filter cards
  const cards = document.querySelectorAll('#allServices .service-card');
  cards.forEach((card) => {
    const cardCat = card.getAttribute('data-cat');
    const shouldShow = category === 'all' || cardCat === category;

    if (shouldShow) {
      card.style.display = 'block';
      // Re-trigger fade animation
      card.classList.remove('visible');
      setTimeout(() => card.classList.add('visible'), 50);
    } else {
      card.style.display = 'none';
    }
  });
}
