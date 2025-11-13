function toggleAdd(event) {
  event.stopPropagation();

  const button = event.currentTarget;
  const icon = button.querySelector('.icon');
  const label = button.querySelector('.label');

  button.classList.toggle("added");

  if (button.classList.contains("added")) {
    icon.textContent = "✓";
    label.textContent = "ADDED TO LIST";
  } else {
    icon.textContent = "＋";
    label.textContent = "ADD TO LIST";
  }
}

function goToProductPage() {
  window.open(
    "https://www.traderjoes.com/home/products/pdp/mango-cream-bars-074869",
    "_blank",
    "noopener noreferrer"
  );
}

function toggleHeart(event) {
  event.stopPropagation();
  const button = event.currentTarget;

  // Trigger animation
  button.classList.add("animate");

  // Toggle fill
  button.classList.toggle("filled");

  // Remove animation class after it ends so it can replay next click
  setTimeout(() => {
    button.classList.remove("animate");
  }, 400);
}

function copyLink(event) {
  event.stopPropagation();

  // Copy current product page link
  navigator.clipboard.writeText("https://www.traderjoes.com/home/products/pdp/mango-cream-bars-074869");

  const feedback = event.currentTarget.parentElement.querySelector(".copy-feedback");
  feedback.classList.add("show");

  setTimeout(() => {
    feedback.classList.remove("show");
  }, 1500);
}
