// Set current year
document.getElementById('year').textContent = new Date().getFullYear();

// Contact Modal Logic
const openBtn = document.getElementById('openContactForm');
const modal = document.getElementById('contactModal');
const closeBtn = document.getElementById('closeContactForm');

if(openBtn && modal && closeBtn) {
  openBtn.onclick = () => { modal.style.display = 'flex'; };
  closeBtn.onclick = () => { modal.style.display = 'none'; };
  window.onclick = (e) => { if(e.target === modal) modal.style.display = 'none'; };
  document.getElementById('contactForm').onsubmit = function(e) {
    e.preventDefault();
    alert('Thank you for your message!');
    modal.style.display = 'none';
    this.reset();
  };
}
