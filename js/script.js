const buttons = document.querySelectorAll('.top-nav button');
const sections = document.querySelectorAll('.content .section');

// Function to animate timeline items dynamically
function animateTimelineItems(section) {
  const items = section.querySelectorAll('.timeline-item');
  items.forEach((item, index) => {
    setTimeout(() => item.style.opacity = '1', index * 150); // stagger fade-in
    setTimeout(() => item.style.transform = 'translateY(0)', index * 150);
  });
}

buttons.forEach(btn => {
  btn.addEventListener('click', () => {
    const targetId = btn.getAttribute('data-target');

    sections.forEach(sec => {
      sec.classList.remove('visible');
      sec.classList.add('hidden');

      // Reset timeline items
      const items = sec.querySelectorAll('.timeline-item');
      items.forEach(i => {
        i.style.opacity = 0;
        i.style.transform = 'translateY(20px)';
      });
    });

    const target = document.getElementById(targetId);
    if (target) {
      target.classList.remove('hidden');
      setTimeout(() => {
        target.classList.add('visible');

        // Animate timeline items dynamically
        if (target.querySelector('.timeline')) {
          animateTimelineItems(target);
        }
      }, 50);

      target.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  });
});

// Set current year
document.getElementById('year').textContent = new Date().getFullYear();
