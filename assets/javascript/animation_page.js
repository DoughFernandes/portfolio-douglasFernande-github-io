const sr = ScrollReveal({
    origin: 'left', 
    distance: '1000px', 
    duration: 2000,
    reset: true
  });
  
document.addEventListener('DOMContentLoaded', function () {
    sr.reveal('#animation__display', { 
        delay: 0,
        reset: false
    });
});
