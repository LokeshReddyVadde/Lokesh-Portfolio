// Wait until DOM is fully loaded
window.addEventListener('DOMContentLoaded', () => {

  const buttons = document.querySelectorAll('.top-nav button, .hero-buttons button, .hero-nav button');
  const sections = document.querySelectorAll('.content .section');

  // Show target section and hide others
  function showSection(targetId) {
    sections.forEach(sec => {
      sec.classList.remove('visible');
      sec.classList.add('hidden');

      // reset timeline animation
      sec.querySelectorAll('.timeline-item').forEach(item => {
        item.style.opacity = 0;
        item.style.transform = 'translateY(20px)';
      });

      // reset cards animation
      sec.querySelectorAll('.project-card, .activity-card').forEach(card => {
        card.classList.remove('visible');
      });
    });

    const target = document.getElementById(targetId);
    if (target) {
      target.classList.remove('hidden');

      setTimeout(() => {
        target.classList.add('visible');

        // Animate timeline items if present
        const timeline = target.querySelectorAll('.timeline-item');
        if (timeline.length) {
          timeline.forEach((item, index) => {
            setTimeout(() => {
              item.style.opacity = '1';
              item.style.transform = 'translateY(0)';
            }, index * 150);
          });
        }

        // Animate project/activity cards
        const cards = target.querySelectorAll('.project-card, .activity-card');
        cards.forEach((card, index) => {
          setTimeout(() => card.classList.add('visible'), index * 150);
        });

      }, 50);

      // Scroll smoothly to section
      target.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  }

  // Attach click listeners to all buttons
  buttons.forEach(btn => {
    btn.addEventListener('click', () => {
      const targetId = btn.dataset.target;
      if (targetId) showSection(targetId);
    });
  });

  // Footer year (optional)
  const yearEl = document.getElementById('year');
  if (yearEl) yearEl.textContent = `© ${new Date().getFullYear()}`;

});
