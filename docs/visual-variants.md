# Visual Variants

The site has two independent visual experiments:

- `siteStyle` changes the global visual language across home, blog, projects, blog posts, and the 404 page.
- `projectsLayout` changes only the composition of the Projects card grid.

Both use the same content collections, project data, navigation, page shell, and components. The default is always `current`.

## Activation

1. Run the site locally with `bun run dev`.
2. Open the developer feature panel with `Ctrl+Alt+Shift+F`.
3. On macOS, use `Control+Command+Shift+F`.
4. Select a global site style and a Projects layout.
5. Select **Apply and reload**.

The selected values persist in `localStorage` under `siteStyle` and `projectsLayout`. Clearing those keys restores the current fallback:

```js
localStorage.removeItem('siteStyle');
localStorage.removeItem('projectsLayout');
localStorage.removeItem('projectsV2');
location.reload();
```

The older `projectsV2=true` flag is still recognized once so existing local experiments are not lost. New selections use `projectsLayout`.

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
- Projects fetched through `getProjects()` and rendered through `ProjectsCards.astro`.
- Focus rings, skip navigation, named controls, semantic headings, meaningful image alt text, and reduced-motion behavior.

Only the visual tokens and layout rules change. No content is duplicated to create a variant.

## Evaluation Notes

Compare each style on home, `/blog/`, a local blog post, `/projects/`, and the 404 page. Check both 1280px desktop and a narrow mobile viewport. The useful questions are:

- Does the hierarchy make the work and writing easier to scan?
- Is blue reserved for actions, links, and useful wayfinding rather than used as decoration everywhere?
- Do image treatments support the work without overpowering the content?
- Are hover changes subtle enough to preserve focus on the portfolio?
- Does the variant still feel like Ricardo's software-engineering portfolio rather than a generic theme?
