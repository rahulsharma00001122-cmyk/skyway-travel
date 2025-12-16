// Flight form submission
document.getElementById('flightForm').addEventListener('submit', function(e) {
  e.preventDefault();
  alert('Flight search is coming soon!');
});

// Menu tab interactivity
const tabs = document.querySelectorAll('.menu-tabs li');
tabs.forEach(tab => {
  tab.addEventListener('click', () => {
    tabs.forEach(t => t.classList.remove('active'));
    tab.classList.add('active');
  });
});
