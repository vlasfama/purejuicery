# purejuicery

Static marketing site for **purejuicery** — 100% organic cold-pressed juice: no sugar, no water, no preservatives added. Fresh, colourful single-page landing site (HappyJuice-style layout) for the Retinol, Beetroot, Green Detox and Pure Orange blends.

## Stack

Plain HTML/CSS/JS. No build step, no dependencies — works straight on GitHub Pages.

```
index.html
assets/
  css/style.css
  js/main.js
  img/               ← product & hero photography (see below)
CNAME                → purejuicery.my (custom domain)
```

## Add your images  ⚠️ do this before going live

The page references four photos in `assets/img/`. Until you add them, the site
shows coloured SVG placeholders (the layout still works — each `<img>` falls back
to a matching `.svg` automatically). Drop your real photos in with these **exact
filenames** (JPG or PNG both work — keep the `.jpg` name or update the `src` in
`index.html`):

| File                  | Use this image                                   |
| --------------------- | ------------------------------------------------ |
| `assets/img/hero.jpg` | The big "harmony of nature's power" splash collage (square) |
| `assets/img/retinol.jpg`  | The orange **Retinol** blend bottle photo    |
| `assets/img/beetroot.jpg` | The red **Beetroot** blend bottle photo      |
| `assets/img/detox.jpg`    | The green **Green Detox** blend bottle photo |

The `.svg` placeholders in `assets/img/` can be kept (they stay as the automatic
fallback) or deleted once your real photos are in.

## Run locally

Open `index.html` in a browser, or serve it:

```bash
python3 -m http.server 8000
```

## Deploy to GitHub Pages

1. Push this repo to GitHub.
2. In **Settings → Pages**, set source to the `main` branch, root folder.
3. **Settings → Pages → Custom domain**: enter `purejuicery.my` (the `CNAME` file already in this repo handles this).
4. At your domain registrar, point DNS:
   - **Apex domain (`purejuicery.my`)**: add `A` records to GitHub Pages' IPs:
     ```
     185.199.108.153
     185.199.109.153
     185.199.110.153
     185.199.111.153
     ```
   - **`www` subdomain** (optional): add a `CNAME` record pointing to `<your-username>.github.io`.
5. Wait for DNS to propagate, then enable **Enforce HTTPS**.

## Things to wire up before going live

- **Add your four photos** to `assets/img/` (see the table above).
- The **"Notify Me" form** (`#notifyForm` in `assets/js/main.js`) currently only
  shows a confirmation message — it does not send the email anywhere. Connect it to
  a form backend such as [Formspree](https://formspree.io) or
  [Buttondown](https://buttondown.email) by setting the `<form>`'s `action`
  attribute, or swap in your own endpoint.
- Replace the placeholder contact details in `index.html` (`hello@purejuicery.my`
  email and the WhatsApp `wa.me/0000000000` link) with your real ones.
