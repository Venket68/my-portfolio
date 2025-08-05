// Smooth scroll for anchor links
const scrollLinks = document.querySelectorAll('a[href^="#"]');
scrollLinks.forEach(link => {
  link.addEventListener('click', function(e) {
    const target = document.querySelector(this.getAttribute('href'));
    if (target) {
      e.preventDefault();
      target.scrollIntoView({ behavior: 'smooth' });
    }
  });
});

// Navbar background transition on scroll
window.addEventListener('scroll', function() {
  const navbar = document.querySelector('.navbar');
  if (window.scrollY > 50) {
    navbar.classList.add('bg-white', 'shadow-sm');
    navbar.classList.remove('bg-transparent');
  } else {
    navbar.classList.remove('bg-white', 'shadow-sm');
    navbar.classList.add('bg-transparent');
  }
});

// Contact form validation and success message
const contactForm = document.getElementById('contactForm');
if (contactForm) {
  contactForm.addEventListener('submit', function(e) {
    const name = document.getElementById('name').value.trim();
    const email = document.getElementById('email').value.trim();
    const message = document.getElementById('message').value.trim();
    const formMessage = document.getElementById('formMessage');
    if (!name || !email || !message) {
      formMessage.textContent = 'Please fill in all fields.';
      formMessage.className = 'text-danger';
      return;
    }
    // Simple email validation
    if (!/^[^@\s]+@[^@\s]+\.[^@\s]+$/.test(email)) {
      formMessage.textContent = 'Please enter a valid email address.';
      formMessage.className = 'text-danger';
      return;
    }
    formMessage.textContent = 'Message sent successfully!';
    formMessage.className = 'text-success';
    contactForm.reset();
  });
}