const button = document.querySelector('.add-button');
const icon = button.querySelector('.icon');
const text = button.querySelector('.text');

button.addEventListener('click', () => {
  button.classList.toggle('clicked');

  if (button.classList.contains('clicked')) {
    icon.innerHTML = `<svg width="20" height="20" viewBox="0 0 20 20" fill="none" stroke="#A8231C" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"><path d="M4 10l4 4 8-8"/></svg>`;
    text.textContent = "ADDED TO LIST";
  } else {
    icon.textContent = "+";
    text.textContent = "ADD TO LIST";
  }
});
