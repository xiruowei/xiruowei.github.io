const toggleBtn = document.getElementById("toggle-btn");
const body = document.body;
let isDark = false;

function toggleTheme() {
  if (isDark) {
    body.classList.remove("dark-theme");
    toggleBtn.textContent = "切换主题";
  } else {
    body.classList.add("dark-theme");
