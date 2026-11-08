const filterButtons = document.querySelectorAll("[data-filter]");
const projectCards = document.querySelectorAll(".project-card");

filterButtons.forEach((button) => {
  button.addEventListener("click", () => {
    const selectedCategory = button.dataset.filter;

    projectCards.forEach((card) => {
      const matchesCategory =
        selectedCategory === "all" ||
        card.dataset.category === selectedCategory;

      card.hidden = !matchesCategory;
    });

    filterButtons.forEach((filterButton) => {
      filterButton.setAttribute("aria-pressed", "false");
    });

    button.setAttribute("aria-pressed", "true");
  });
});