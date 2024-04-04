// Inicializa o ScrollReveal
const sr = ScrollReveal({
    origin: 'left', // De onde os elementos vão aparecer
    distance: '50px', // A distância que os elementos vão percorrer
    duration: 2000, // Duração da animação em milissegundos
    reset: true // Define se a animação deve ocorrer toda vez que o elemento aparecer na tela
  });
  


// Seleciona os elementos e aplica a animação
document.addEventListener('DOMContentLoaded', function () {
    sr.reveal('#animation__display', { 
        delay: 0, // Atraso antes da animação começar
        viewFactor: 0.5 // A porcentagem do elemento que precisa estar visível para iniciar a animação
    });
});

  