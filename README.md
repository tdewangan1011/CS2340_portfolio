# Personal Portfolio Website

A personal portfolio website for a Georgia Tech Computer Science student focused on machine learning, software engineering, data science, research, and community projects.

## Run Locally

```bash
npm install
npm run dev
```

Then open the local URL printed by Vite, usually `http://localhost:5173`.

## Build

```bash
npm run build
```

## Customize

Most portfolio content lives in `src/data/portfolio.ts`:

- Projects
- Experience timeline
- Skill groups
- Homepage summary cards

To enable the resume download, place your PDF at:

```text
public/resume.pdf
```

The existing resume button already links to `/resume.pdf`.
