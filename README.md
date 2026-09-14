# ProxyStack

Practical notes on proxies, scraping and automation infrastructure. Static HTML, no build step,
published on GitHub Pages.

Live: <https://ostrovde.github.io/proxystack/>

## Why this site exists

It is one bet in a portfolio. The economics that shape every decision here:

* Money arrives **in crypto** (BTC / USDT), so every monetised program must pay crypto.
* Audience is **English-speaking** — the crypto-paying programs are global.
* Traffic must be **organic**. IPRoyal's program rules forbid bidding on their brand in paid
  search and forbid dropping referral links in Reddit, Discord or competitor forums.

## Conventions

* Plain HTML + one stylesheet (`assets/style.css`, shared with the rest of the portfolio).
* Every vendor link goes through the registry: `<a data-out="iproyal" href="https://iproyal.com/">`.
  The affiliate URL is switched on by editing `assets/links.js` only.
* Affiliate links carry `rel="sponsored nofollow noopener"` and a visible disclosure.
* No invented prices or limits. If a figure is uncertain, link to the vendor's own pricing page.
* After adding a page: add it to `sitemap.xml` and link it from `index.html`.

## Deploy

```powershell
git add -A
git commit -m "..."
git push origin main
```

Then confirm the new URL returns HTTP 200 (Pages takes about a minute).
