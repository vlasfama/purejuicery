# purejuicery

Static marketing site for **purejuicery** — 100% organic cold-pressed juice: no sugar, no water, no preservatives added. A fresh, single-page landing site for the Retinol, Beetroot, Green Detox, Pure Orange and Pomegranate blends.

Live at **[purejuicery.my](https://purejuicery.my)**.

## Stack

Plain HTML/CSS/JS — no build step, no dependencies. Hosted on GitHub Pages.

```
index.html
assets/
  css/style.css
  js/main.js
  img/            product & hero photography
CNAME             purejuicery.my (custom domain)
```

## Run locally

Open `index.html` in a browser, or serve it:

```bash
python3 -m http.server 8000
```

## Deploy

The site deploys automatically from the `main` branch via GitHub Pages
(**Settings → Pages**, source `main` / root). Push to `main` to publish:

```bash
git add -A && git commit -m "your change" && git push
```

## To-do

- The **"Notify Me" form** (`#notifyForm`) only shows a confirmation message — it
  doesn't send the email anywhere. Wire it to a form backend such as
  [Formspree](https://formspree.io) by setting the `<form>`'s `action` attribute.
