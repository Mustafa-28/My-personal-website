window.scrollToTop = function() {
  window.scrollTo({ top: 0, behavior: 'smooth' });
};

document.getElementById('year').textContent = new Date().getFullYear()
// Loader
window.addEventListener('DOMContentLoaded', () => {
  document.getElementById('loader').classList.add('hidden');
});

// Back to top
window.addEventListener('scroll', () => {
  const btn = document.getElementById('backToTop');
  if(window.scrollY > 300) btn.classList.add('show');
  else btn.classList.remove('show');
});    

const themeController = document.querySelector('input.theme-controller')

themeController.addEventListener('change', () => {
  const isDark = themeController.checked;

  if (isDark) {
    document.documentElement.classList.add('dark')
  } else {
    document.documentElement.classList.remove('dark')
  }
})

