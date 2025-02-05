const modeToggle = document.getElementById("mode-toggle");
const body = document.body;

modeToggle.addEventListener("change", () => {
  body.classList.toggle("dark-mode");
  localStorage.setItem("dark-mode", body.classList.contains("dark-mode"));
});

// Check for saved preference
if (localStorage.getItem("dark-mode") === "true") {
  body.classList.add("dark-mode");
  modeToggle.checked = true;
}