document.addEventListener("DOMContentLoaded", () => {
  const toggleBtn = document.querySelector('.theme-toggle');
  const root = document.documentElement;

  // Disable transitions for the first frame
  root.classList.add("no-theme-transition");
  requestAnimationFrame(() => {
    root.classList.remove("no-theme-transition");
  });

  // Update icons + thumb
  function updateToggleVisual() {
    const isDark = root.classList.contains('dark-mode');
    document.querySelector('.icon-sun').style.opacity = isDark ? "0" : "1";
    document.querySelector('.icon-moon').style.opacity = isDark ? "1" : "0";
    document.querySelector('.toggle-thumb').style.transform =
      isDark ? "translateX(24px)" : "translateX(0)";
  }

  updateToggleVisual();

  // Toggle theme
  toggleBtn.addEventListener('click', () => {
    root.classList.toggle('dark-mode');
    localStorage.setItem('theme',
      root.classList.contains('dark-mode') ? 'dark' : 'light'
    );
    updateToggleVisual();
  });
});
