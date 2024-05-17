document.addEventListener('DOMContentLoaded', (event) => {
  const days = document.querySelectorAll('.day');

  days.forEach(day => {
      day.addEventListener('click', (e) => {
          const details = day.querySelector('.details');

        
          days.forEach(d => {
              if (d !== day) {
                  d.classList.remove('expanded');
                  d.querySelector('.details').style.display = 'none';
              }
          });

        
          if (day.classList.contains('expanded')) {
              day.classList.remove('expanded');
              details.style.display = 'none';
          } else {
              day.classList.add('expanded');
              details.style.display = 'block';
          }
      });
  });

});
