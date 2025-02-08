document.addEventListener('DOMContentLoaded', () => {
  const toggles = document.querySelectorAll('.switch input');
  
  toggles.forEach(toggle => {
      toggle.addEventListener('change', (e) => {
          const toggleState = e.target.checked ? 'ON' : 'OFF';
          const toggleStyle = e.target.closest('.switch').classList[1] || 'default';
          console.log(`Toggle switched: ${toggleState} (${toggleStyle} style)');
          
          // Optional: Add visual feedback or additional actions
          const slider = e.target.nextElementSibling;
          slider.classList.add('active');
          setTimeout(() => {
              slider.classList.remove('active');
          }, 500);
      });
  });
});