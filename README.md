# purejuicery

Static marketing site for **purejuicery** — 100% organic juice, no sugar, no water, no preservatives added.

## Stack

Plain HTML/CSS/JS. No build step, no dependencies — works straight on GitHub Pages.

```
index.html
assets/
  css/style.css
  js/main.js
CNAME              → purejuicery.my (custom domain)
```

Product photography is hotlinked from Unsplash (free license, no attribution required).

## Run locally

Just open `index.html` in a browser, or serve it:

```bash
python3 -m http.server 8000
```

## Deploy to GitHub Pages

1. Push this repo to GitHub.
2. In **Settings → Pages**, set source to the `main` branch, root folder.
3. **Settings → Pages → Custom domain**: enter `purejuicery.my` (the `CNAME` file already in this repo handles this, GitHub will pick it up automatically).
4. At your domain registrar (where `purejuicery.my` was purchased), point DNS:
   - **Apex domain (`purejuicery.my`)**: add `A` records to GitHub Pages' IPs:
     ```
     185.199.108.153
     185.199.109.153
     185.199.110.153
     185.199.111.153
     ```
   - **`www` subdomain** (optional): add a `CNAME` record pointing to `<your-username>.github.io`.
5. Wait for DNS to propagate, then enable **Enforce HTTPS** in the Pages settings.

## Things to wire up before going live

- The "Notify Me" form (`#notifyForm` in `assets/js/main.js`) currently only shows a confirmation message — it does not send the email anywhere. Connect it to a form backend such as [Formspree](https://formspree.io) or [Buttondown](https://buttondown.email) by setting the `<form>`'s `action` attribute, or swap in your own endpoint.
- Replace the placeholder contact details in `index.html` (`hello@purejuicery.my` email and the WhatsApp `wa.me/0000000000` link) with your real ones.
- Swap any Unsplash photography for your own product photos once you have them — search-and-replace the `images.unsplash.com/photo-...` URLs in `index.html`.
