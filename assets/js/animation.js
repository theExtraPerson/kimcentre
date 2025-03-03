// animations.js - Enhanced animations for KIMC website

document.addEventListener("DOMContentLoaded", function () {
  // Initialize GSAP ScrollTrigger
  gsap.registerPlugin(ScrollTrigger);

  // Navbar scroll effect
  window.addEventListener("scroll", function () {
    const navbar = document.querySelector(".navbar");
    if (window.scrollY > 50) {
      navbar.style.padding = "10px 0";
      navbar.style.backgroundColor = "rgba(255, 255, 255, 0.98)";
      navbar.style.boxShadow = "0 2px 10px rgba(0, 0, 0, 0.1)";
    } else {
      navbar.style.padding = "15px 0";
      navbar.style.backgroundColor = "rgba(255, 255, 255, 0.95)";
      navbar.style.boxShadow = "0 2px 10px rgba(0, 0, 0, 0.05)";
    }
  });

  // Feature cards animation
  gsap.utils.toArray(".feature-card").forEach((card) => {
    gsap.from(card, {
      y: 50,
      opacity: 0,
      duration: 1,
      scrollTrigger: {
        trigger: card,
        start: "top 80%",
        toggleActions: "play none none none",
      },
    });
  });

  // Services section animation
  gsap.from("#services-heading", {
    y: -50,
    opacity: 0,
    duration: 1,
    scrollTrigger: {
      trigger: "#services-heading",
      start: "top 80%",
      toggleActions: "play none none none",
    },
  });

  // Testimonials animation
  gsap.utils.toArray(".testimonial-card").forEach((card, index) => {
    gsap.from(card, {
      x: index % 2 === 0 ? -50 : 50,
      opacity: 0,
      duration: 1,
      delay: index * 0.2,
      scrollTrigger: {
        trigger: card,
        start: "top 80%",
        toggleActions: "play none none none",
      },
    });
  });

  // CTA section animation
  gsap.from(".cta-section", {
    backgroundColor: "#0d6efd",
    color: "#ffffff",
    duration: 1.5,
    scrollTrigger: {
      trigger: ".cta-section",
      start: "top 80%",
      toggleActions: "play none none none",
    },
  });

  // Update copyright year
  document.getElementById("current-year").textContent =
    new Date().getFullYear();
});
