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
  button.classList.toggle("filled");
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
