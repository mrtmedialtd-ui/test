const filterButtons = document.querySelectorAll(".filter-btn");
const portfolioCards = document.querySelectorAll(".work-grid .portfolio-card");

if (filterButtons.length && portfolioCards.length) {
  filterButtons.forEach((button) => {
    button.addEventListener("click", () => {
      filterButtons.forEach((btn) => btn.classList.remove("active"));
      button.classList.add("active");
      const filter = button.dataset.filter;

      portfolioCards.forEach((card) => {
        if (filter === "all") {
          card.style.display = "block";
          return;
        }
        const categories = card.dataset.category.split(" ");
        card.style.display = categories.includes(filter) ? "block" : "none";
      });
    });
  });
}

const caseButtons = document.querySelectorAll(".case-button");
caseButtons.forEach((button) => {
  button.addEventListener("click", () => {
    alert("Case study details are available upon request. Let's connect!");
  });
});
