document.addEventListener('DOMContentLoaded', () => {
  // --- Theme Toggle logic ---
  const themeBtn = document.getElementById('theme-btn');
  const currentTheme = localStorage.getItem('theme') || 'dark';

  document.documentElement.setAttribute('data-theme', currentTheme);

  themeBtn.addEventListener('click', () => {
    let theme = document.documentElement.getAttribute('data-theme');
    let newTheme = theme === 'dark' ? 'light' : 'dark';
    
    document.documentElement.setAttribute('data-theme', newTheme);
    localStorage.setItem('theme', newTheme);
  });

  // --- Print Command logic ---
  const printBtn = document.getElementById('print-btn');
  printBtn.addEventListener('click', () => {
    window.print();
  });

});
