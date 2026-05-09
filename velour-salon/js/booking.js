/* ============================================
   BOOKING.JS — Appointment Form Handler
   ============================================ */

function confirmBooking() {
  // Basic validation
  const nameInput = document.querySelector('.booking-section input[type="text"]');
  const phoneInput = document.querySelector('.booking-section input[type="tel"]');
  const serviceSelect = document.querySelector('.booking-section select');

  if (nameInput && nameInput.value.trim() === '') {
    showError(nameInput, 'Please enter your name');
    return;
  }
  if (phoneInput && phoneInput.value.trim() === '') {
    showError(phoneInput, 'Please enter your phone number');
    return;
  }
  if (serviceSelect && serviceSelect.value === serviceSelect.options[0].value) {
    alert('Please select a service before booking.');
    return;
  }

  // Success
  alert(
    '✨ Thank you! Your appointment request has been received.\n\n' +
    'We will confirm via WhatsApp or call within 2 hours.\n\n' +
    'See you at Velour Salon! 💐'
  );
}

function showError(input, message) {
  input.style.borderColor = '#E88888';
  input.focus();
  const existing = input.parentNode.querySelector('.field-error');
  if (!existing) {
    const err = document.createElement('span');
    err.className = 'field-error';
    err.style.cssText = 'color:#E88888;font-size:0.75rem;margin-top:0.3rem;display:block';
    err.textContent = message;
    input.parentNode.appendChild(err);
    setTimeout(() => {
      err.remove();
      input.style.borderColor = '';
    }, 3000);
  }
}

// Newsletter subscription
document.addEventListener('DOMContentLoaded', () => {
  const newsletterBtns = document.querySelectorAll('.newsletter button');
  newsletterBtns.forEach((btn) => {
    btn.addEventListener('click', () => {
      const input = btn.previousElementSibling;
      if (input && input.value.includes('@')) {
        btn.textContent = 'Subscribed ✦';
        btn.style.background = '#5A9E87';
        input.value = '';
        setTimeout(() => {
          btn.textContent = 'Subscribe';
          btn.style.background = '';
        }, 3000);
      } else {
        input.style.borderColor = '#E88888';
        setTimeout(() => (input.style.borderColor = ''), 2000);
      }
    });
  });
});
