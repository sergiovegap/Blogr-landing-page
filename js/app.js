const connectLink = document.getElementById('p-connect'),
      connect = document.querySelector('.connect'),
      btnOpen = document.getElementById('btn-open'),
      btnClose = document.getElementById('btn-close'),
      links = document.getElementById('links'),
      arrowDark = document.querySelectorAll('.arrow-dark'),
      arrowLight = document.querySelectorAll('.arrow-light'),
      navLinks = document.querySelectorAll('.link-class'),
      movilDevice = () => window.innerWidth <= 480;


/* --- Desktop --- */
navLinks.forEach( nav => {
    nav.addEventListener('mouseover', () => {
        if (!movilDevice()) {
            switch (nav.id) {
                case 'nav':
                    arrowLight[0].classList.toggle('transition');
                    break;
                case 'company':
                    arrowLight[1].classList.toggle('transition');
                    break;
                case 'connect':
                    arrowLight[2].classList.toggle('transition');
                    break;
            }
        }        
    });
});

navLinks.forEach( nav => {
    nav.addEventListener('mouseout', (i) => {
        if (!movilDevice()) {
            switch (nav.id) {
                case 'nav':
                    arrowLight[0].classList.toggle('transition');
                    break;
                case 'company':
                    arrowLight[1].classList.toggle('transition');
                    break;
                case 'connect':
                    arrowLight[2].classList.toggle('transition');
                    break;
            }
        }        
    });
});

connectLink.addEventListener('mouseover', () => {
    if (!movilDevice()) {
        connect.classList.add('connect-active');
    }
});

connect.addEventListener('mouseout', () => {
    connect.classList.toggle('connect-active');
    arrowLight.classList.toggle('transition');
});


/* --- Mobile --- */

connectLink.addEventListener('click', (e) => {
    e.preventDefault();
    if (movilDevice() ) {
        connect.classList.toggle('connect-active');
    }
});

btnOpen.addEventListener('click', (e) => {
    e.preventDefault();
    btnOpen.classList.add('btn-open-inactive');
    btnClose.classList.add('btn-close-active');
    
    if (links.classList.contains('links-active')) {
        links.classList.remove('links-active');
    } else {
        links.classList.add('links-active');
    }
});

btnClose.addEventListener('click', (e) => {
    e.preventDefault();
    if (links.classList.contains('links-active')) {
        links.classList.remove('links-active');
        connect.classList.remove('connect-active');
        btnOpen.classList.remove('btn-open-inactive');
        btnClose.classList.remove('btn-close-active');
        arrowDark.classList.remove('transition');
    }
});

if (movilDevice()) {
    navLinks.forEach( nav => {
        nav.addEventListener('click', () => {
            switch (nav.id) {
                case 'nav':
                    arrowDark[0].classList.toggle('transition');
                    break;
                case 'company':
                    arrowDark[1].classList.toggle('transition');
                    break;
                case 'connect':
                        arrowDark[2].classList.toggle('transition');
                    break;
            }
        });
    });
}