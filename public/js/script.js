// Function to add 'visible' class when element is in view
function handleIntersection(entries, observer) {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.classList.add("visible");
      observer.unobserve(entry.target);
    }
  });
}

// Create a new Intersection Observer
const observer = new IntersectionObserver(handleIntersection, {
  root: null,
  rootMargin: "0px",
  threshold: 0.2, // Adjust threshold as needed
});

// Get all elements with the 'card' class
const cards = document.querySelectorAll(".card");

// Observe each card
cards.forEach((card) => {
  observer.observe(card);
});
