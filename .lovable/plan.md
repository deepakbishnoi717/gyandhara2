## Goal

Make the **exact same site** (same design, same pages, same n8n webhook) deploy cleanly on **Vercel** (and Netlify) — no 404 on refresh, no blank pages.

Nothing visible changes. The n8n webhook on Contact + Admissions keeps working exactly as it does now.

## Why it breaks on Vercel today

The project is built on **TanStack Start** targeting **Cloudflare Workers**. Vercel treats it as a static site and:
- has no SPA fallback → refreshing `/courses`, `/about`, etc. → **404**
- doesn't run the Workers SSR entry → home can show **blank page**

Your app has no real backend (forms POST to n8n from the browser), so the fix is to ship the same UI as a plain Vite SPA.

## Plan — convert to plain Vite + React Router SPA

1. **Swap framework packages**
   - Remove: `@tanstack/react-start`, `@tanstack/react-router`, `@tanstack/router-plugin`, `@cloudflare/vite-plugin`, `wrangler`, `@lovable.dev/vite-tanstack-config`.
   - Add: `react-router-dom`, `react-helmet-async`.
   - New `vite.config.ts` — standard `@vitejs/plugin-react` + Tailwind v4 plugin, `@` alias preserved.

2. **New SPA entry**
   - `index.html` at project root with title, meta description, OG tags, favicon (copied from current `__root.tsx` head).
   - `src/main.tsx` mounts `<HelmetProvider>` + `<BrowserRouter>` + `<Routes>`.

3. **Port the 6 pages 1-to-1** (UI unchanged)
   - `/` ← `src/routes/index.tsx`
   - `/about` ← `about.tsx`
   - `/courses` ← `courses.tsx`
   - `/admissions` ← `admissions.tsx` *(keeps the n8n `fetch` exactly as-is)*
   - `/contact` ← `contact.tsx` *(keeps the n8n `fetch` exactly as-is)*
   - 404 page for unknown URLs
   - Replace `@tanstack/react-router`'s `<Link to=...>` with `react-router-dom`'s in `Layout.tsx` and pages.
   - Per-page `<Helmet>` keeps current titles / descriptions / OG tags.

4. **Delete unused server/Start files**
   - `src/server.ts`, `src/router.tsx`, `src/start.ts`, `src/routes/__root.tsx`, `src/routeTree.gen.ts`, `src/lib/api/example.functions.ts`, `src/lib/config.server.ts`, `src/routes/sitemap[.]xml.ts`, `wrangler.jsonc`.
   - Replace dynamic sitemap with static `public/sitemap.xml` (same URLs). Keep `public/robots.txt`.

5. **Deep-link config for hosts**
   - `vercel.json`: rewrite `/(.*)` → `/index.html`.
   - `public/_redirects`: `/*  /index.html  200` (Netlify, no-op on Vercel).

6. **Verify before handing off**
   - `bun run build` clean, `dist/` produced.
   - Click through `/`, `/about`, `/courses`, `/admissions`, `/contact`, refresh each.
   - Submit Contact and Admissions forms → confirm POST hits `https://deepaksihag.app.n8n.cloud/webhook/da4995f6-f1b5-421d-95b2-8451c28b622a` with the same `text/plain` Content-Type as today.

## What stays identical

- Every page's layout, copy, colors, images, courses list.
- The n8n production webhook URL and payload shape — untouched.
- SEO metadata per page (via Helmet instead of TanStack `head()`).
- `robots.txt` and sitemap URLs.

## After the migration — deploying to Vercel

1. Push to GitHub, import the repo on Vercel.
2. Framework preset: **Vite**. Build: `npm run build` (or `bun run build`). Output dir: `dist`.
3. Deploy. `vercel.json` handles SPA routing. Same `dist/` also works on Netlify.

## Caveats

- One-way migration — you lose TanStack Start–specific features (SSR, server functions). You're not using any of them today.
- The Lovable preview will also run as the plain SPA after this change. You can still publish from Lovable **or** deploy to Vercel/Netlify — same `dist/`.

Approve and I'll execute the whole migration in one pass.
