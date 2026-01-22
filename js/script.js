const buttons = document.querySelectorAll('.top-nav button, .hero-buttons button, .hero-nav button');
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

// Animate project/activity cards
function animateCards(section) {
  const cards = section.querySelectorAll('.project-card, .activity-card');
  cards.forEach((card, index) => {
    setTimeout(() => card.classList.add('visible'), index * 150);
  });
}

// Show/hide sections on button click
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
        if (target.querySelector('.timeline')) {
          animateTimelineItems(target);
        }
        animateCards(target);
      }, 50);

      target.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  });
});

// Show hero section by default
window.addEventListener('DOMContentLoaded', () => {
  const hero = document.getElementById('hero');
  hero.classList.add('visible');
  animateCards(hero);
  if (hero.querySelector('.timeline')) {
    animateTimelineItems(hero);
  }
});

// Footer year
const yearEl = document.getElementById('year');
if (yearEl) {
  yearEl.textContent = `© ${new Date().getFullYear()}`;
}
