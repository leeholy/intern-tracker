// main.js - Universal JavaScript for Internship Tracker

// Apply saved theme on page load
(function applyTheme() {
  if (localStorage.getItem('theme') === 'dark') {
    document.body.classList.add('dark-mode');
  }
})();

// Toggle light/dark theme
function toggleTheme() {
  document.body.classList.toggle('dark-mode');
  localStorage.setItem('theme', document.body.classList.contains('dark-mode') ? 'dark' : 'light');
}

// Real-time clock display
function startClock() {
  const timeEl = document.getElementById('current-time');
  if (!timeEl) return;
  setInterval(() => {
    const now = new Date();
    timeEl.textContent = now.toLocaleString();
  }, 1000);
}

// Logout with confirmation
function logout() {
  if (confirm("Are you sure you want to log out?")) {
    window.location.href = "index.html";
  }
}

// Initialize tooltips (Bootstrap)
document.addEventListener('DOMContentLoaded', () => {
  const tooltipTriggerList = [].slice.call(document.querySelectorAll('[data-bs-toggle="tooltip"]'));
  tooltipTriggerList.forEach(el => new bootstrap.Tooltip(el));

  startClock();

  // Example: Show greeting if user stored
  const greetingEl = document.getElementById("greeting-user");
  if (greetingEl && localStorage.getItem("userName")) {
    greetingEl.textContent = `Welcome back, ${localStorage.getItem("userName")}`;
  }
});

// Expose to global scope
window.toggleTheme = toggleTheme;
window.logout = logout;
