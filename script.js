const menuToggle = document.querySelector(".menu-toggle");
const mobileMenu = document.querySelector(".mobile-menu");

const toggleMenu = () => {
  const isOpen = mobileMenu.classList.toggle("open");
  menuToggle.setAttribute("aria-expanded", isOpen);
  mobileMenu.setAttribute("aria-hidden", !isOpen);
  document.body.style.overflow = isOpen ? "hidden" : "";
};

if (menuToggle && mobileMenu) {
  menuToggle.addEventListener("click", toggleMenu);
  mobileMenu.addEventListener("click", (event) => {
    if (event.target === mobileMenu) {
      toggleMenu();
    }
  });
  mobileMenu.querySelectorAll("a").forEach((link) => {
    link.addEventListener("click", () => {
      if (mobileMenu.classList.contains("open")) {
        toggleMenu();
      }
    });
  });
}

const observer = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("is-visible");
        observer.unobserve(entry.target);
      }
    });
  },
  { threshold: 0.15 }
);

document.querySelectorAll("section, .card, .work-card, .quote-card").forEach((el) => {
  el.classList.add("fade-up");
  observer.observe(el);
});
