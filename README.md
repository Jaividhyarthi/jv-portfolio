# JV — The Series

Personal portfolio for Jaividhyarthi Vivekanand (JV), B.Tech AI & Data Science student at SRM Valliammai Engineering College.

Adapted from [Sushmita Dasari’s Portfolio_series](https://github.com/Sushmitadasari/Portfolio_series), preserving its streaming-inspired design and animations. This fork does not assert a new license over the upstream code.

## Run locally

```sh
npm ci
npm run dev
```

## Production build

```sh
npm run build
npm run preview
```

Deploy the `dist` folder to a static host. Vite uses a relative base for subdirectory hosting. No external hosting has been enabled by this change.

## Edit your content

- `src/data/portfolio.ts`: profile, projects, journey, skills, awards and certifications.
- `public/assets/JV_Complete_Resume.pdf`: downloadable resume.
- `public/assets/jv-monogram.svg`: temporary JV graphic. Set `profile.portrait.src` and `srcSet` when adding your own portrait.
- `public/favicon.svg`: site icon.
- `index.html`: page title and social metadata.

All 14 resume projects are included. Unknown dates and unprovided credential URLs are omitted. Add certificate URLs to `certifications[].link` when ready. Projects with no confirmed repository link do not display a GitHub button.

## Original features retained

Opening sequence, viewer profiles, Play Intro, project overlays, horizontal rails, journey seasons, resume viewer, keyboard controls, and reduced-motion support.
