const carouselItems = document.querySelectorAll('.carousel-item');
const prevButton = document.getElementById('prev');
const nextButton = document.getElementById('next');
let currentItem = 0;

function showItem(index) {
    carouselItems.forEach((item) => item.classList.remove('active'));
    carouselItems[index].classList.add('active');
}

function nextItem() {
    currentItem = (currentItem + 1) % carouselItems.length;
    showItem(currentItem);
}

function prevItem() {
    currentItem = (currentItem - 1 + carouselItems.length) % carouselItems.length;
    showItem(currentItem);
}

nextButton.addEventListener('click', nextItem);
prevButton.addEventListener('click', prevItem);

// Mostrar o primeiro item ao carregar a página
showItem(currentItem);

particlesJS('particles-js', {
    particles: {
        number: {
            value: 80, // Número de partículas
            density: {
                enable: true,
                value_area: 800 // Densidade das partículas
            }
        },
        color: {
            value: '#eee' // Cor das partículas (branco/cinza claro)
        },
        shape: {
            type: 'circle', // Formato das partículas
            stroke: {
                width: 0,
                color: '#000000'
            },
            polygon: {
                nb_sides: 5
            },
            image: {
                src: 'img/github.svg',
                width: 100,
                height: 100
            }
        },
        opacity: {
            value: 0.5, // Opacidade das partículas
            random: true,
            anim: {
                enable: true,
                speed: 1,
                opacity_min: 0.1,
                sync: false
            }
        },
        size: {
            value: 3, // Tamanho das partículas
            random: true,
            anim: {
                enable: true,
                speed: 4,
                size_min: 0.3,
                sync: false
            }
        },
        line_linked: {
            enable: true, // Linhas conectando as partículas
            distance: 150,
            color: '#eee',
            opacity: 0.4,
            width: 1
        },
        move: {
            enable: true,
            speed: 2, // Velocidade de movimento
            direction: 'none',
            random: true,
            straight: false,
            out_mode: 'out',
            bounce: false,
            attract: {
                enable: false,
                rotateX: 600,
                rotateY: 1200
            }
        }
    },
    interactivity: {
        detect_on: 'canvas',
        events: {
            onhover: {
                enable: true,
                mode: 'grab' // Efeito ao passar o mouse (agarrar)
            },
            onclick: {
                enable: true,
                mode: 'push' // Efeito ao clicar (empurrar)
            },
            resize: true
        },
        modes: {
            grab: {
                distance: 140,
                line_linked: {
                    opacity: 1
                }
            },
            bubble: {
                distance: 400,
                size: 40,
                duration: 2,
                opacity: 8,
                speed: 3
            },
            repulse: {
                distance: 200,
                duration: 0.4
            },
            push: {
                particles_nb: 4
            },
            remove: {
                particles_nb: 2
            }
        }
    },
    retina_detect: true
});