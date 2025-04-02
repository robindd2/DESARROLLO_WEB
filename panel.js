let paneles = document.querySelectorAll('.panel');

for (let i = 0; i < paneles.length; i++) {
    paneles[i].addEventListener('click', function () {
        paneles[i].classList.toggle('abierto');

        let p1 = paneles[i].querySelector('p:first-child');
        let p2 = paneles[i].querySelector('.pm');
        let p3 = paneles[i].querySelector('p:last-child');

        if (paneles[i].classList.contains('abierto')) {
            if (p1) p1.classList.add('p1m');
            if (p3) p3.classList.add('p3m');

            if (p2) {
                p2.classList.remove('animacion-e2'); 
                p2.classList.add('animacion-e1'); 
            }
        } else {
            if (p1) p1.classList.remove('p1m');
            if (p3) p3.classList.remove('p3m');

            if (p2) {
                p2.classList.remove('animacion-e1'); 
                p2.classList.add('animacion-e2'); 
            }
        }
    });
}

