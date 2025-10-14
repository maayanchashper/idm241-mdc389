const button = document.querySelector('.add-button');
const icon = button.querySelector('.icon');
const text = button.querySelector('.text');

button.addEventListener('click', () => {
  button.classList.toggle('clicked');

  if (button.classList.contains('clicked')) {
    icon.textContent = "✓";
    text.textContent = "ADDED TO LIST";
  } else {
    icon.textContent = "+";
    text.textContent = "ADD TO LIST";
  }
});
