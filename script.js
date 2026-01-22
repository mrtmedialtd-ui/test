const toggle = document.querySelector('.menu-toggle');
const mobilePanel = document.querySelector('.mobile-panel');
const dropdownToggles = document.querySelectorAll('.dropdown-toggle');

if (toggle && mobilePanel) {
  toggle.addEventListener('click', () => {
    const isOpen = toggle.getAttribute('aria-expanded') === 'true';
    toggle.setAttribute('aria-expanded', String(!isOpen));
    mobilePanel.hidden = isOpen;
  });
}

dropdownToggles.forEach((btn) => {
  btn.addEventListener('click', () => {
    const isExpanded = btn.getAttribute('aria-expanded') === 'true';
    btn.setAttribute('aria-expanded', String(!isExpanded));
  });
});

const observer = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
      }
    });
  },
  { threshold: 0.15 }
);

document.querySelectorAll('.reveal').forEach((el) => observer.observe(el));
