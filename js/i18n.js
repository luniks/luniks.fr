(function () {
  'use strict';

  const dict = {
    fr: {
      'meta.description': 'Martin Vuillemard — juste un dev',
      'hero.tagline': 'Just another dev.',
      'hero.cta': 'En savoir plus',
      'about.title': 'À propos de moi',
      'about.text': 'Salut, moi c\'est Martin. Je passe mes journées à interagir avec des machines, parfois capricieuses. Le reste du temps, je fais pareil avec des humains !',
      'links.title': 'Où me trouver',
      'links.email.label': 'Email',
      'links.email.sub': 'Écris-moi',
      'links.github.label': 'GitHub',
      'links.github.sub': 'Mes projets',
      'links.cvhtml.label': 'CV en ligne',
      'links.cvhtml.sub': 'Version HTML',
      'links.cvpdf.label': 'Mon CV',
      'links.cvpdf.sub': 'Télécharger',
      'footer.rights': 'Tous droits réservés.',
      'footer.top': 'Retour en haut'
    },
    en: {
      'meta.description': 'Martin Vuillemard — just another dev',
      'hero.tagline': 'Just another dev.',
      'hero.cta': 'Learn more',
      'about.title': 'About me',
      'about.text': 'Hi, I\'m Martin. I spend my days interacting with machines, sometimes moody ones. The rest of the time, I do the same with humans!',
      'links.title': 'Find me',
      'links.email.label': 'Email',
      'links.email.sub': 'Reach out',
      'links.github.label': 'GitHub',
      'links.github.sub': 'My projects',
      'links.cvhtml.label': 'Resume',
      'links.cvhtml.sub': 'HTML version',
      'links.cvpdf.label': 'My resume',
      'links.cvpdf.sub': 'Download',
      'footer.rights': 'All rights reserved.',
      'footer.top': 'Back to top'
    }
  };

  const STORAGE_KEY = 'luniks.lang';
  const SUPPORTED = ['fr', 'en'];

  function detectLang() {
    const stored = localStorage.getItem(STORAGE_KEY);
    if (stored && SUPPORTED.includes(stored)) return stored;
    const nav = (navigator.language || 'en').toLowerCase();
    return nav.startsWith('fr') ? 'fr' : 'en';
  }

  function applyLang(lang) {
    if (!SUPPORTED.includes(lang)) lang = 'en';
    const strings = dict[lang];
    document.documentElement.lang = lang;

    document.querySelectorAll('[data-i18n]').forEach(el => {
      const key = el.getAttribute('data-i18n');
      if (strings[key]) el.textContent = strings[key];
    });

    document.querySelectorAll('[data-i18n-attr]').forEach(el => {
      const spec = el.getAttribute('data-i18n-attr');
      spec.split(',').forEach(pair => {
        const [attr, key] = pair.split(':').map(s => s.trim());
        if (strings[key]) el.setAttribute(attr, strings[key]);
      });
    });

    document.querySelectorAll('.lang-toggle button').forEach(btn => {
      btn.classList.toggle('active', btn.dataset.lang === lang);
      btn.setAttribute('aria-pressed', btn.dataset.lang === lang ? 'true' : 'false');
    });

    localStorage.setItem(STORAGE_KEY, lang);
  }

  document.addEventListener('DOMContentLoaded', () => {
    document.querySelectorAll('.lang-toggle button').forEach(btn => {
      btn.addEventListener('click', () => applyLang(btn.dataset.lang));
    });

    applyLang(detectLang());

    if ('IntersectionObserver' in window) {
      const io = new IntersectionObserver((entries) => {
        entries.forEach(e => {
          if (e.isIntersecting) {
            e.target.classList.add('visible');
            io.unobserve(e.target);
          }
        });
      }, { threshold: 0.15 });
      document.querySelectorAll('.reveal').forEach(el => io.observe(el));
    } else {
      document.querySelectorAll('.reveal').forEach(el => el.classList.add('visible'));
    }

    document.querySelectorAll('a[href^="#"]').forEach(a => {
      a.addEventListener('click', (ev) => {
        const id = a.getAttribute('href').slice(1);
        const target = id ? document.getElementById(id) : null;
        if (!target) return;
        ev.preventDefault();
        const y = target.getBoundingClientRect().top + window.pageYOffset;
        window.scrollTo({ top: y, behavior: 'smooth' });
      });
    });
  });
})();
