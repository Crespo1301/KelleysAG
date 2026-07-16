# AGENTS.md

Guidance for Codex when working in this repo.

## Role

`KelleysAG` is a real maintained client site for Kelley's Auto Glass LLC. Treat it as production client property, not a mockup or template.

## Project Shape

- Plain HTML/CSS static site.
- No npm, framework, or build step.
- Netlify deploys the `main` branch directly.
- Main pages are `index.html`, `services.html`, `portfolio.html`, `about.html`, and `contact.html`.
- Contact submissions use Formspree from `contact.html`.

## Local Workflow

Use a local static server when checking cross-page links:

```bash
python3 -m http.server 4173
```

Then open `http://localhost:4173`.

## Working Rules

- Preserve business contact details unless the owner explicitly provides replacements.
- Keep customer-facing tone direct, local, and reassuring.
- Do not commit copied `.agents/skills/` or `.claude/skills/` folders.
- Do not commit `.mcp.json`, `.env.ai.local`, archives, build artifacts, or local caches.
- Keep `.mcp.example.json`, `.env.ai.example`, workflow docs, and security checklist portable.
- Before changing the contact form endpoint, submit a test quote request after the change.

## Verification

Before pushing, run:

```bash
git diff --check
```

For content changes, spot-check every edited page in a browser or static server.
