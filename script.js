document.addEventListener('DOMContentLoaded', () => {
  const form = document.getElementById('itinerary-form');
  const input = document.getElementById('item-input');
  const list = document.getElementById('itinerary-list');

  form.addEventListener('submit', (event) => {
    event.preventDefault();
    const text = input.value.trim();
    if (!text) return;
    const li = document.createElement('li');
    li.textContent = text;
    list.appendChild(li);
    input.value = '';
  });
});
