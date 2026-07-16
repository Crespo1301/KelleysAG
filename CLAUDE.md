# CLAUDE.md

Repo role: real maintained client site and featured client portfolio entry.

## Business Context

- This repo is a real client property, not a mockup.
- Shared workflow rules live in `/home/cresp3/Portfolio/AI-WORKFLOW.md`.
- Its README is one of the stronger documentation models in the workspace.

## Claude Role Here

- Use Claude for trust-focused visual critique, service-page tone, local-business offer framing, and screenshot review.
- Let Codex handle maintenance, content edits, file updates, and GitHub closeout.

## Working Notes

- Static site with strong brand and content documentation already in place.
- Preserve the direct, trustworthy local-service tone.

## Useful Commands

```bash
bash ./scripts/stitch-doctor.sh
bash ./scripts/stitch-proxy.sh
bash ./scripts/magic-mcp.sh
```

## Shared AI Tooling

- Follow `AI-WORKFLOW.md` for the shared CSolutions AI stack.
- Copied skill packs under `.claude/skills/` are local-only and ignored by Git.
  Use them when present, but do not commit bulk skill directories.
- Use `.mcp.json` with `code-review-graph` after running `code-review-graph build` so exploration and reviews stay token-efficient.
- Use OpenSpec for larger changes that benefit from proposal, spec, and task artifacts.
