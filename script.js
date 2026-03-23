document.addEventListener("DOMContentLoaded", () => {
  // ===== Sticky header scroll effect =====
  const header = document.getElementById("siteHeader");

  window.addEventListener("scroll", () => {
    if (window.scrollY > 50) {
      header.classList.add("scrolled");
    } else {
      header.classList.remove("scrolled");
    }
  });

  // ===== Mobile menu =====
  const mobileNav = document.getElementById("mobileNav");
  const menuOpen = document.getElementById("menuOpen");
  const menuClose = document.getElementById("menuClose");

  menuOpen.addEventListener("click", () => {
    mobileNav.classList.add("open");
    document.body.style.overflow = "hidden";
  });

  const closeMobileMenu = () => {
    mobileNav.classList.remove("open");
    document.body.style.overflow = "";
  };

  menuClose.addEventListener("click", closeMobileMenu);

  // Close mobile menu when a nav link is clicked
  mobileNav.querySelectorAll(".mobile-nav-link").forEach((link) => {
    link.addEventListener("click", closeMobileMenu);
  });

  // ===== Hero fade-in animation =====
  const heroText = document.getElementById("heroText");
  // Small delay so the animation is visible after page paint
  requestAnimationFrame(() => {
    heroText.classList.add("animate-in");
  });

  // ===== Stats scroll-triggered animation =====
  const scrollElements = document.querySelectorAll(".animate-on-scroll");

  if ("IntersectionObserver" in window) {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("visible");
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.15 }
    );

    scrollElements.forEach((el) => observer.observe(el));
  } else {
    // Fallback: show everything immediately
    scrollElements.forEach((el) => el.classList.add("visible"));
  }
});
