# Visual Variants

The site has two independent visual experiments:

- `siteStyle` changes the global visual language across home, blog, projects, blog posts, and the 404 page.
- `projectsLayout` changes only the composition of the Projects card grid.

Both use the same content collections, project data, navigation, page shell, and components. The defaults are `technical` for `siteStyle` and `showcase` for `projectsLayout`.

## Activation

1. Run the site locally with `bun run dev`.
2. Open the developer feature panel with `Ctrl+Alt+Shift+F`.
3. On macOS, use `Control+Command+Shift+F`.
4. Select a global site style and a Projects layout.
5. Select **Apply and reload**.

The selected values live in `sessionStorage` under `siteStyle` and `projectsLayout`. Reloading the tab keeps them, while closing the tab resets to the technical and showcase fallback. A new deployment also resets every flag automatically: the site stores the deployment version in `sessionStorage` under `siteDeploymentVersion` and clears all flag keys when it changes. Use **Reset to defaults** in the panel, or clear the session keys manually:

```js
sessionStorage.removeItem('siteStyle');
sessionStorage.removeItem('projectsLayout');
sessionStorage.removeItem('projectsV2');
sessionStorage.removeItem('bioRefresh');
sessionStorage.removeItem('blogApplause');
sessionStorage.removeItem('homeCta');
sessionStorage.removeItem('blogShare');
location.reload();
```

The site also clears any legacy `localStorage` copies of those keys on load, so older persisted experiments do not leak into new sessions.

The older `projectsV2=true` flag is still recognized once per session so existing local experiments are not lost. New selections use `projectsLayout`.

The home page has a separate content experiment:

- `bioRefresh` swaps the home hero bio to the LinkedIn-informed version (`off` by default, `on` to show).
- It lives in the same developer panel, stores `off` or `on` in `sessionStorage` for the current tab, and sets `data-bio-refresh` on the document.
- The stable hero stays visible unless the flag is `on`, so visitors never see panel copy, metadata, or navigation for it.
- To promote it, keep the experiment copy and remove the flag hooks. To drop it, remove the experiment block and its styles.

The blog has a separate applause experiment:

- `blogApplause` shows local applause controls on blog posts (`off` by default, `on` to show).
- It lives in the same developer panel, stores `off` or `on` in `sessionStorage` for the current tab, and sets `data-blog-applause` on the document.
- The control is a shared icon button with four placements: a compact row under the post header, a sticky side rail on wide screens, the end of article section, and a sticky bottom dock on narrow screens. Rail and dock appear only while reading and hide near the footer. All placements share one per post `localStorage` count.
- Repeat presses are allowed with a short cooldown, holding the button repeats, and the button kindly ignores non trusted events and honeypot fills.
- Visitors never see the controls unless the flag is `on`. To promote it, keep the applause blocks and remove the flag hooks. To drop it, remove the applause blocks and their styles.

The blog rail shows a reading progress ring around the applause button. The ring is part of the rail markup and follows it: it appears with the rail while reading on wide screens and stays hidden with it otherwise. The ring carries the accessible progress role and updates from the same scroll handler as the table of contents highlighting, which stays always on. The earlier top bar, percent, and vertical bar variants were removed when the ring was promoted.

The home page has a separate call to action experiment:

- `homeCta` refreshes the hero actions for View selected work, Get in touch, and GitHub (`off` by default, `on` to show).
- It lives in the same developer panel, stores `off` or `on` in `sessionStorage` for the current tab, and sets `data-home-cta` on the document.
- The stable row stays visible unless the flag is `on`, so visitors see no change by default. The experiment keeps the same labels and destinations, but gives View selected work primary emphasis, keeps Get in touch secondary, and moves GitHub to a quiet external link with an icon and new tab indication.
- To promote it, keep the experiment markup and remove the flag hooks. To drop it, remove the experiment block and its styles.

The blog has a separate share experiment:

- `blogShare` shows share actions on blog posts (`off` by default, `on` to show).
- It lives in the same developer panel, stores `off` or `on` in `sessionStorage` for the current tab, and sets `data-blog-share` on the document.
- The control is a shared `BlogShare.astro` block with four placements: a quiet trigger under the post header, a low emphasis footer row, a sticky side rail on wide screens, and a sticky corner dock on narrow screens. Rail and dock appear only while reading and hide near the footer. All placements share the same absolute post URL.
- Each placement shows a single subtle trigger that expands to LinkedIn share, X post intent, copy link with clipboard fallback and status text, and native system share shown only when `navigator.share` exists. The trigger stays smaller and muted next to applause, which keeps the primary action.
- The sticky rail lives in the right gutter, opposite the applause rail, so it never overlaps the applause button or its reading progress variants. The sticky dock lives in the opposite bottom corner from the applause dock, so the two never stack.
- Visitors never see the controls unless the flag is `on`. To promote it, keep the share blocks and remove the flag hooks. To drop it, remove the share blocks and their styles.

## Global Styles

| Value | Direction | Main changes |
| --- | --- | --- |
| `current` | Existing portfolio | Keeps the navy/cyan system, centered blog title, compact cards, and current spacing. |
| `refined` | Polished base | Adds more breathing room, softer surfaces, quieter shadows, larger type, and a restrained blue accent. |
| `editorial` | Gallery / reading | Uses warmer paper-like surfaces, Newsreader headings, a larger hero, numbered blog rhythm, and more considered image framing. |
| `technical` | Developer tooling | Uses a low-contrast grid, IBM Plex Mono labels, precise borders, compact tags, and structured spacing without terminal imitation. |
| `dark` | Atmospheric dark | Uses deep ink surfaces, selective blue, circular portrait treatment, and depth from elevation rather than neon glow. |

Every style has light-mode values as well. The existing theme toggle remains independent from the style flag.

## Projects Layouts

| Value | Direction | Main changes |
| --- | --- | --- |
| `current` | Existing cards | Keeps the featured first card and the existing three-column card grid. |
| `v2` | Featured grid | Reuses the same `ProjectsCards` markup and data but gives the lead project a larger eight-column area with supporting four-column cards. |

The layout is responsive: the featured grid becomes a single-column flow on narrow screens.

## Shared Surface

The variants intentionally share:

- `Base.astro` navigation, social links, theme toggle, feature panel, metadata, and footer.
- Home page copy, profile image, selected work carousel, experiments, and latest note data.
- Blog collection rendering, post metadata, tags, redirects, and prose content.
- Projects fetched through `getProjects()` and rendered through `ProjectsCards.astro`, with detail pages rendered from the project collection.
- Focus rings, skip navigation, named controls, semantic headings, meaningful image alt text, and reduced-motion behavior.

Only the visual tokens and layout rules change. No content is duplicated to create a variant.
Project detail pages stay under `ricardocasia.com/**`; their GitHub buttons are the intentional boundary that leaves the site scope.

## Evaluation Notes

Compare each style on home, `/blog/`, a local blog post, `/projects/`, and the 404 page. Check both 1280px desktop and a narrow mobile viewport. The useful questions are:

- Does the hierarchy make the work and writing easier to scan?
- Is blue reserved for actions, links, and useful wayfinding rather than used as decoration everywhere?
- Do image treatments support the work without overpowering the content?
- Are hover changes subtle enough to preserve focus on the portfolio?
- Does the variant still feel like Ricardo's software-engineering portfolio rather than a generic theme?
