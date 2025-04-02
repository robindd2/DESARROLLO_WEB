let teclas = document.querySelectorAll('.teclas div');

teclas.forEach(tecla => {
    tecla.addEventListener('click', () => {
        let sonido = tecla.getAttribute('data-sound'); 
        if (sonido) {
            let audio = new Audio(sonido); 
            audio.play(); 
        }
    });
});