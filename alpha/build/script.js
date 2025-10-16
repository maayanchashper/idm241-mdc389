const button = document.querySelector('.add-button');
const icon = button.querySelector('.icon');
const text = button.querySelector('.text');

button.addEventListener('click', () => {
  // Remove toggle — now click only activates once
  // button.classList.toggle('clicked');

  // Instead, only add the clicked class if not already clicked
  if (!button.classList.contains('clicked')) {
    button.classList.add('clicked');
    icon.innerHTML = `<svg width="20" height="20" viewBox="0 0 20 20" fill="none" stroke="#A8231C" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"><path d="M4 10l4 4 8-8"/></svg>`;
    text.textContent = "ADDED TO LIST";
  }

  // Commented out the "un-click" code below:
  /*
  else {
    button.classList.remove('clicked');
    icon.textContent = "+";
    text.textContent = "ADD TO LIST";
  }
  */
});
