const toggle = document.getElementById('theme-toggle');
const body = document.body;
const filters = document.querySelectorAll('.filter');
const cards = document.querySelectorAll('.trend-card');

// Dark mode toggle
toggle.onclick = () => {
  body.classList.toggle('dark');
};

// Platform filter buttons
filters.forEach(button => {
  button.addEventListener('click', () => {
    document.querySelector('.filter.active').classList.remove('active');
    button.classList.add('active');

    const platform = button.getAttribute('data-platform');
    cards.forEach(card => {
      card.style.display =
        platform === 'all' || card.dataset.platform === platform
          ? 'block'
          : 'none';
    });
  });
});
