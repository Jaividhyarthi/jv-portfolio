# JV — The Series 🎬

**A streaming-inspired interactive portfolio for Jaividhyarthi Vivekanand** — B.Tech Artificial Intelligence & Data Science student, AI/ML builder, researcher and full-stack developer.

[![Live Portfolio](https://img.shields.io/badge/Live_Portfolio-Visit-8B5CF6?style=for-the-badge&logo=googlechrome&logoColor=white)](https://jaividhyarthi.github.io/jv-portfolio)
[![LinkedIn](https://img.shields.io/badge/LinkedIn-Connect-0A66C2?style=for-the-badge&logo=linkedin&logoColor=white)](https://www.linkedin.com/in/jaividhyarthivivekanand/)
[![GitHub](https://img.shields.io/badge/GitHub-Profile-24292F?style=for-the-badge&logo=github&logoColor=white)](https://github.com/Jaividhyarthi)

**Live website:** https://jaividhyarthi.github.io/jv-portfolio

## Concept

Rather than a conventional résumé page, *JV — The Series* presents an engineering journey through a streaming-platform-inspired interface, including episodic journey sections, project collections, interactive overlays, and a résumé viewer.

## Tech stack

- React 18 and TypeScript
- Vite 6
- Tailwind CSS 4
- Framer Motion for motion and transitions
- Lenis for smooth scrolling

## Experience highlights

- Streaming-inspired design and navigation
- Project discovery and detail overlays
- Journey/episode storytelling
- Résumé viewing and professional links
- Responsive UI and accessibility-minded motion options

## Run locally

**Prerequisite:** A compatible Node.js and npm installation.

```bash
git clone https://github.com/Jaividhyarthi/jv-portfolio.git
cd jv-portfolio
npm ci
npm run dev
```

Open the local address printed by Vite.

### Production build

```bash
npm run build
npm run preview
```

The production build outputs files to `dist/`. This repository is intended for static hosting under the `/jv-portfolio/` base path.

## Content and assets

- `src/data/portfolio.ts` — portfolio content, projects, education, journey, skills, and awards
- `src/` — React interface and components
- `public/` — static resources and downloadable assets
- `index.html` — application entry HTML and site metadata
- `scripts/build-images.mjs` — optional image-processing script

Edit your content in the relevant data and component files, run `npm run build`, and publish the updated static build through the configured GitHub Pages workflow.

## Deployment

The portfolio is published at **[jaividhyarthi.github.io/jv-portfolio](https://jaividhyarthi.github.io/jv-portfolio)**. See [GitHub Actions](https://github.com/Jaividhyarthi/jv-portfolio/actions) for the latest deployment outcome.

## Credits and attribution

This project was **adapted from [Sushmita Dasari's Portfolio_series](https://github.com/Sushmitadasari/Portfolio_series)**. Its streaming-inspired foundation and animations originate from that work and have been customized for this portfolio. This README does not assert new licensing rights over upstream code.

## Connect

[LinkedIn](https://www.linkedin.com/in/jaividhyarthivivekanand/) · [GitHub profile](https://github.com/Jaividhyarthi) · [ORCID](https://orcid.org/0009-0000-3035-1061)
