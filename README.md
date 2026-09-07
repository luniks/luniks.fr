# luniks.fr

Code source du site personnel [home.luniks.fr](https://home.luniks.fr/) — page d'accueil statique.

## Aperçu

Site statique mono-page présentant :

- une section hero avec avatar et tagline,
- une courte présentation,
- des liens vers email, GitHub et CV (PDF),
- un bascule de langue FR / EN,
- un fond étoilé animé (particles.js) sur thème sombre.

## Stack

- HTML5 / CSS3 (thème dark "galaxy" avec variables CSS)
- JavaScript vanilla (pas de bundler)
- [particles.js](https://github.com/VincentGarreau/particles.js/) pour le starfield
- [Font Awesome](https://fontawesome.com/) et [Inter](https://fonts.google.com/specimen/Inter) via CDN

Aucune étape de build — le site se sert tel quel.

## Structure

```
index.html                 # Page principale
sitemap.xml
css/style.css              # Thème et layout
js/i18n.js                 # Traductions FR/EN + reveal on scroll
js/particles-config.js     # Config du fond étoilé
data/CV-M.Vuillemard-2025.html
img/                       # Avatars, favicon, og-image (voir img/LICENSE)
```

## Développement local

Servir le dossier avec n'importe quel serveur statique, par exemple :

```sh
python3 -m http.server 8000
# puis ouvrir http://localhost:8000
```

## Internationalisation

Les chaînes traduites sont dans [js/i18n.js](js/i18n.js) (`dict.fr` / `dict.en`).
Le texte utilise `data-i18n="clé"` et les attributs `data-i18n-attr="attr:clé"`.
La langue est détectée depuis `localStorage` puis `navigator.language`, et persistée.

## Déploiement

Copier le contenu du dossier sur l'hébergement sur votre site auto-hébergé.

## À améliorer

- **Cache-busting** : les paramètres `?v=1` sur les assets (`css/style.css?v=1`, `js/*.js?v=1`) dans [index.html](index.html) sont figés. Automatiser leur mise à jour (hash de contenu ou timestamp de build) pour éviter d'oublier de les incrémenter lors d'une modification.

## Licence

- Code source : [MIT](LICENSE)
- Images (`img/`) : tous droits réservés — voir [img/LICENSE](img/LICENSE)

## Contact

martin@luniks.fr
