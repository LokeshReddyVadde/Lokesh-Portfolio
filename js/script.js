const buttons = document.querySelectorAll('.top-nav button, .hero-buttons button');
const sections = document.querySelectorAll('.content .section');

// Animate timeline items
function animateTimelineItems(section) {
  const items = section.querySelectorAll('.timeline-item');
  items.forEach((item, index) => {
    setTimeout(() => {
      item.style.opacity = '1';
      item.style.transform = 'translateY(0)';
    }, index * 150);
  });
}

buttons.forEach(btn => {
  btn.addEventListener('click', () => {
    const targetId = btn.getAttribute('data-target');

    sections.forEach(sec => {
      sec.classList.remove('visible');
      sec.classList.add('hidden');

      // reset timeline animation
      sec.querySelectorAll('.timeline-item').forEach(item => {
        item.style.opacity = 0;
        item.style.transform = 'translateY(20px)';
      });
    });

    const target = document.getElementById(targetId);
    if (target) {
      target.classList.remove('hidden');

      setTimeout(() => {
        target.classList.add('visible');
        if (target.querySelector('.timeline')) {
          animateTimelineItems(target);
        }
      }, 50);

      target.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  });
});

// Footer year
document.getElementById('year').textContent = ` © ${new Date().getFullYear()}`;

