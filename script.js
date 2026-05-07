const year = document.querySelector("#year");
if (year) {
  year.textContent = new Date().getFullYear();
}

const heroImage = document.querySelector(".hero-image");
if (heroImage) {
  heroImage.addEventListener("error", () => {
    heroImage.classList.add("is-missing");
  });
}

const header = document.querySelector(".site-header");
const menuToggle = document.querySelector(".menu-toggle");
if (header && menuToggle) {
  menuToggle.addEventListener("click", () => {
    const isOpen = header.classList.toggle("nav-open");
    menuToggle.setAttribute("aria-expanded", String(isOpen));
  });

  document.querySelectorAll(".nav-links a").forEach((link) => {
    link.addEventListener("click", () => {
      header.classList.remove("nav-open");
      menuToggle.setAttribute("aria-expanded", "false");
    });
  });
}

const observer = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("visible");
        observer.unobserve(entry.target);
      }
    });
  },
  { threshold: 0.12 }
);

document.querySelectorAll(".reveal").forEach((element) => observer.observe(element));
