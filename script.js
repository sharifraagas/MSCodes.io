// Typing Animation
const texts = [
  "Web Developer",
  "Graphic Designer",
  "programmer",
  "Computer Engineer",
  "Tech Explorer",
  "Arduino Enthusiast",
  "Problem Solver"
];
let count = 0;
let index = 0;
let currentText = '';
let letter = '';

(function type() {
  if (count === texts.length) count = 0;
  currentText = texts[count];
  letter = currentText.slice(0, ++index);

  document.querySelector('.typing').textContent = letter;
  if (letter.length === currentText.length) {
    count++;
    index = 0;
    setTimeout(type, 2000); // wait before next word
  } else {
    setTimeout(type, 100);
  }

})();
// Theme Toggle
const toggleBtn = document.getElementById('themeToggle');
let isDark = true;

toggleBtn.addEventListener('click', () => {
  document.body.classList.toggle('light-theme');
  isDark = !isDark;
  toggleBtn.textContent = isDark ? '🌙' : '☀️';
});

// Scroll Reveal
ScrollReveal().reveal('.hero', { delay: 200, origin: 'top', distance: '50px' });
ScrollReveal().reveal('#about', { delay: 300, origin: 'left', distance: '60px' });
ScrollReveal().reveal('#projects', { delay: 400, origin: 'right', distance: '60px' });
ScrollReveal().reveal('#contact', { delay: 500, origin: 'bottom', distance: '60px' });

// Back to Top Button
document.getElementById('backToTop')?.addEventListener('click', () => {
  window.scrollTo({ top: 0, behavior: 'smooth' });
});
const menuToggle = document.getElementById('menuToggle');
const navLinks = document.getElementById('navLinks');

menuToggle.addEventListener('click', () => {
  navLinks.classList.toggle('show');
});
document.querySelectorAll('.nav-links a').forEach(link => {
  link.addEventListener('click', () => {
    navLinks.classList.remove('show');
  });
});


