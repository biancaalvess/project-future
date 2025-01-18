// Initialize particles.js
particlesJS("particles-js", {
  particles: {
      number: {
          value: 80,
          density: {
              enable: true,
              value_area: 800
          }
      },
      color: {
          value: "#00f2fe"
      },
      shape: {
          type: "circle",
          stroke: {
              width: 0,
              color: "#fff"
          },
          polygon: {
              nb_sides: 5
          }
      },
      opacity: {
          value: 0.5,
          random: true,
          anim: {
              enable: true,
              speed: 1,
              opacity_min: 0.1,
              sync: false
          }
      },
      size: {
          value: 5,
          random: true,
          anim: {
              enable: false
          }
      },
      line_linked: {
          enable: true,
          distance: 150,
          color: "#00f2fe",
          opacity: 0.4,
          width: 1
      },
      move: {
          enable: true,
          speed: 3,
          direction: "none",
          random: false,
          straight: false,
          out_mode: "out",
          attract: {
              enable: false
          }
      }
  },
  interactivity: {
      detect_on: "canvas",
      events: {
          onhover: {
              enable: true,
              mode: "repulse"
          },
          onclick: {
              enable: true,
              mode: "push"
          }
      },
      modes: {
          repulse: {
              distance: 100,
              duration: 0.4
          },
          push: {
              particles_nb: 4
          }
      }
  },
  retina_detect: true
});
