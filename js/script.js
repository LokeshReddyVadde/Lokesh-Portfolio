// Year
document.getElementById("year").textContent = new Date().getFullYear();

// Fade-in observer
const observer = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add("visible");
      observer.unobserve(entry.target);
    }
  });
}, { threshold: 0.15 });
document.querySelectorAll(".fade-in").forEach(el => observer.observe(el));

// Top-nav click to show sections
const buttons = document.querySelectorAll(".top-nav button");
buttons.forEach(btn => {
  btn.addEventListener("click", () => {
    const targetId = btn.getAttribute("data-target");
    document.querySelectorAll(".section").forEach(sec => sec.classList.add("hidden"));
    const targetSection = document.getElementById(targetId);
    if (targetSection) {
      targetSection.classList.remove("hidden");
      targetSection.scrollIntoView({ behavior: "smooth" });
    }
  });
});
