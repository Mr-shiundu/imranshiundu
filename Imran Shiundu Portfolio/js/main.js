const typed = new Typed(".my-name", {
    strings: ["Web Developer", "Problem Solver", "Creative Thinker"],
    typeSpeed: 100,
    backSpeed: 60,
    loop: true,
  });

  const progressBar = document.createElement("div");
progressBar.classList.add("progress-bar");
document.body.appendChild(progressBar);

window.addEventListener("scroll", () => {
  const scrollTop = document.documentElement.scrollTop;
  const scrollHeight = document.documentElement.scrollHeight;
  const clientHeight = document.documentElement.clientHeight;
  const progress = (scrollTop / (scrollHeight - clientHeight)) * 100;
  progressBar.style.width = `${progress}%`;
});

window.addEventListener("load", () => {
  const loadingScreen = document.querySelector(".loading-screen");
  loadingScreen.style.display = "none";
});

certificateButton.addEventListener("click", (e) => {
  // Create a ripple element
  const ripple = document.createElement("span");
  ripple.classList.add("ripple");
  ripple.style.left = `${e.clientX - certificateButton.getBoundingClientRect().left}px`;
  ripple.style.top = `${e.clientY - certificateButton.getBoundingClientRect().top}px`;
  certificateButton.appendChild(ripple);

  // Remove the ripple element after the animation
  setTimeout(() => {
    ripple.remove();
  }, 600);
});
certificateButton.addEventListener("click", () => {
  confetti({
    particleCount: 100,
    spread: 70,
    origin: { y: 0.6 },
  });
});

const hoverSound = document.getElementById("hover-sound");

certificateButton.addEventListener("mouseenter", () => {
  hoverSound.play();
});