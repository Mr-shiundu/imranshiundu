// Animation for Home Section (Hero Section)
gsap.from(".home-content h1", {
    opacity: 0,
    y: -60,
    duration: 0.8,
    delay: 0.3,
    ease: "power4.out"
  });
  
  gsap.from(".home-content p", {
    opacity: 0,
    x: -80,
    duration: 0.9,
    delay: 0.6,
    ease: "power4.out"
  });
  
  gsap.from(".social-media a", {
    opacity: 0,
    y: 50,
    stagger: 0.15,
    duration: 0.8,
    delay: 1,
    ease: "power4.out"
  });
  
  // Animation for About Section
  gsap.from(".about-img img", {
    opacity: 0,
    x: -150,
    scale: 0.85,
    rotation: -15,
    duration: 1.2,
    ease: "power4.out"
  });
  
  gsap.from(".about-content h3", {
    opacity: 0,
    y: 20,
    duration: 0.8,
    delay: 0.5,
    ease: "power4.out"
  });
  
  // Animation for Services Section (More snappy effects)
  gsap.from(".services-box", {
    opacity: 0,
    y: 120,
    stagger: 0.2,
    duration: 1.1,
    ease: "power4.out",
    scrollTrigger: {
      trigger: ".services",
      start: "top 85%",
    }
  });
  
  
  
  // Client Section (With a bounce effect)
  gsap.from(".client_box", {
    opacity: 0,
    y: 60,
    stagger: 0.2,
    duration: 1.2,
    ease: "bounce.out",
    scrollTrigger: {
      trigger: ".client_section",
      start: "top 80%",
    }
  });
  
  
  
  // Floating Icons (Smooth effect with scaling)
  gsap.from(".whatsapp-icon, .email-icon", {
    opacity: 0,
    y: 40,
    scale: 0.9,
    duration: 1,
    stagger: 0.2,
    ease: "power4.out",
    scrollTrigger: {
      trigger: ".whatsapp-icon",
      start: "top 85%",
    }
  });
  
  // Footer Section (Subtle slide-up effect)
  gsap.from(".footer-text", {
    opacity: 0,
    y: 60,
    duration: 0.9,
    ease: "power4.out",
    scrollTrigger: {
      trigger: ".footer",
      start: "top 85%",
    }
  });
  

  gsap.registerPlugin(ScrollTrigger);

// Animate Home Section
gsap.from(".home-content", {
  duration: 1,
  y: 50,
  opacity: 0,
  ease: "power2.out",
  scrollTrigger: {
    trigger: ".home",
    start: "top 80%",
  },
});

gsap.from(".home-img", {
  duration: 1,
  x: 50,
  opacity: 0,
  ease: "power2.out",
  scrollTrigger: {
    trigger: ".home",
    start: "top 80%",
  },
});

// Animate About Section
gsap.from(".about-img", {
  duration: 1,
  x: -50,
  opacity: 0,
  ease: "power2.out",
  scrollTrigger: {
    trigger: ".about",
    start: "top 80%",
  },
});

gsap.from(".about-content", {
  duration: 1,
  x: 50,
  opacity: 0,
  ease: "power2.out",
  scrollTrigger: {
    trigger: ".about",
    start: "top 80%",
  },
});




// Animate Contact Section
gsap.from(".contact form", {
  duration: 1,
  y: 50,
  opacity: 0,
  ease: "power2.out",
  scrollTrigger: {
    trigger: ".contact",
    start: "top 80%",
  },
});

// Animate the button on page load
gsap.from(".top-link .btn", {
  duration: 1,
  y: 50,
  opacity: 0,
  ease: "bounce.out",
  delay: 1, // Delay the animation to make it appear after other content
});

// Add hover animation
const certificateButton = document.querySelector(".top-link .btn");

certificateButton.addEventListener("mouseenter", () => {
  gsap.to(certificateButton, {
    scale: 1.1,
    backgroundColor: "#ff3b3f",
    color: "#fff",
    duration: 0.3,
    ease: "power2.out",
  });
});

certificateButton.addEventListener("mouseleave", () => {
  gsap.to(certificateButton, {
    scale: 1,
    backgroundColor: "#ff6f61",
    color: "#fff",
    duration: 0.3,
    ease: "power2.out",
  });
});

// Add click animation
certificateButton.addEventListener("click", () => {
  gsap.to(certificateButton, {
    scale: 0.9,
    duration: 0.2,
    ease: "power2.out",
    yoyo: true, // Makes the animation reverse after completing
    repeat: 1, // Repeats the animation once
  });
});

// Animate form inputs
gsap.from(".input-box input", {
  duration: 1,
  y: 50,
  opacity: 0,
  stagger: 0.2,
  ease: "power2.out",
  scrollTrigger: {
    trigger: ".contact",
    start: "top 80%",
  },
});

gsap.from("textarea", {
  duration: 1,
  y: 50,
  opacity: 0,
  ease: "power2.out",
  scrollTrigger: {
    trigger: ".contact",
    start: "top 80%",
  },
});

gsap.from(".btn", {
  duration: 1,
  y: 50,
  opacity: 0,
  ease: "power2.out",
  scrollTrigger: {
    trigger: ".contact",
    start: "top 80%",
  },
});