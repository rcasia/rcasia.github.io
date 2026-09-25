# ricardocasia.com (Astro)

Personal site for Ricardo Casía Moka. Migrated from Jekyll al-folio to Astro.

## Stack

- [Astro 5](https://astro.build) static output
- Content Collections for `blog` + `projects`
- `astro:assets` (Sharp) for responsive images
- `@astrojs/sitemap` for SEO

## Develop

```sh
bun install
bun run dev
```

## Build

```sh
bun run build
bun run preview
```

Output in `dist/`. Deployed to GitHub Pages via `.github/workflows/deploy.yml` on push to `main`/`master`. Custom domain via `public/CNAME` (`ricardocasia.com`).

## Content

- Home: `src/pages/index.astro`
- Blog index: `src/pages/blog/index.astro`, posts in `src/content/blog/*.md`
- Projects: `src/pages/projects/`, entries in `src/content/projects/*.md`
- Site metadata: `src/site.ts`
- Images: `src/assets/prof_pic.jpg`, OG image `public/og-image.jpg`

## Notes vs old Jekyll site

- Removed al-folio boilerplate (bibliography, Docker, Jupyter, masonry, 16 Jekyll plugins).
- Fixed: broken `prof_pic-480.webp` 404, placeholder `blog, blogg, blogging` copy, template `display_tags`, missing OG/sitemap, unlabeled icon buttons, filename-only image alt.
- Redirect-only Substack post links externally with `↗` + `Cross-posted on Substack` label instead of a dead detail page.
- URLs preserved: `/`, `/blog/`, `/projects/`, `/projects/:slug/`.

## Visual variants

Global style and Projects layout experiments are available through the developer-only feature panel. See [`docs/visual-variants.md`](docs/visual-variants.md) for activation instructions, the style matrix, and the shared component boundaries.
