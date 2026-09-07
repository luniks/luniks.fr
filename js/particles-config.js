/* particles.js — galaxy starfield config */
(function () {
  'use strict';

  if (typeof particlesJS !== 'function') return;

  particlesJS('particles-bg', {
    particles: {
      number: { value: 160, density: { enable: true, value_area: 900 } },
      color: { value: ['#ffffff', '#a78bfa', '#22d3ee'] },
      shape: { type: 'circle' },
      opacity: {
        value: 0.8,
        random: true,
        anim: { enable: true, speed: 0.6, opacity_min: 0.1, sync: false }
      },
      size: {
        value: 2.2,
        random: true,
        anim: { enable: true, speed: 2, size_min: 0.3, sync: false }
      },
      line_linked: {
        enable: true,
        distance: 130,
        color: '#a78bfa',
        opacity: 0.18,
        width: 1
      },
      move: {
        enable: true,
        speed: 0.6,
        direction: 'none',
        random: true,
        straight: false,
        out_mode: 'out',
        bounce: false
      }
    },
    interactivity: {
      detect_on: 'window',
      events: {
        onhover: { enable: true, mode: 'grab' },
        onclick: { enable: true, mode: 'push' },
        resize: true
      },
      modes: {
        grab: { distance: 160, line_linked: { opacity: 0.5 } },
        push: { particles_nb: 4 }
      }
    },
    retina_detect: true
  });
})();
