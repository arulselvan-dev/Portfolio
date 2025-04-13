// Smooth scroll behavior for the navigation links
const navLinks = document.querySelectorAll('nav .nav-links a');
navLinks.forEach(link => {
  link.addEventListener('click', function (e) {
    e.preventDefault();
    const targetId = link.getAttribute('href').slice(1);
    document.getElementById(targetId).scrollIntoView({
      behavior: 'smooth'
    });
  });
});

// Basic form validation for the contact form
document.getElementById('contact-form').addEventListener('submit', function (e) {
  const name = document.getElementById('name').value;
  const email = document.getElementById('email').value;
  const message = document.getElementById('message').value;

  if (!name || !email || !message) {
    alert('Please fill in all the fields!');
    e.preventDefault();
  }
});
