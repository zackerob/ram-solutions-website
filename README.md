# RAM Solutions

Marketing website for **RAM Solutions** — engineering consulting, CAD modeling, and additive manufacturing.

Built as a monorepo: a **FastAPI** backend and a **React 18 + Vite + TypeScript** frontend, deployed on **Render**.

```
backend/    FastAPI app (routes → services → schemas); contact-form endpoint + health check
frontend/   Vite/React SPA — Home / Services / About / Contact
skills/     Claude Code task playbooks (dev tooling, carried over from the template)
docs/       architecture.md
render.yaml Render blueprint (backend web service + frontend static site, prod + staging)
```

## Run locally

Two terminals.

**Backend** (from `backend/`, needs [uv](https://docs.astral.sh/uv/)):

```bash
uv run python -m app.main
# → http://localhost:8000  (Swagger at /docs, health at /api/health)
```

**Frontend** (from `frontend/`):

```bash
npm install
npm run dev
# → http://localhost:5173  (Vite proxies /api → localhost:8000, so no CORS in dev)
```

No `.env` is required for local dev — `backend/app/core/config.py` ships working defaults. Copy `.env.example` → `.env` to override.

## Build

```bash
cd frontend && npm run build   # tsc --noEmit && vite build → frontend/dist
npm run preview                # serve the production build locally
```

## Contact form

The Contact page posts to `POST /api/contact`. By default the backend **logs** each submission (`backend/app/services/contact.py`) so nothing is dropped. Wire real delivery (SMTP to `CONTACT_EMAIL`, a provider like Resend, or a Supabase table) in that service as a follow-up.

## Deploy (Render)

`render.yaml` defines four services — backend + frontend, each for prod (`main`) and staging (`dev`):

- **Backend** — Docker web service, health check `/api/health`. `SECRET_KEY` is generated; set any delivery secrets in the dashboard.
- **Frontend** — static site (`npm ci && npm run build`, publish `dist`) with a SPA rewrite so deep links resolve. `VITE_API_URL` points at the matching backend.

**Custom domain:** the site previously ran on GitHub Pages at `robertsamsolutions.com`. On Render, add that domain to the **frontend** service (Settings → Custom Domains) and update DNS per Render's instructions — there is no `CNAME` file.

## AI agent

The template's Pydantic-AI/Anthropic agent (`backend/app/agents/agent.py`) is present but **dormant** — no route mounts it and the app boots without `ANTHROPIC_API_KEY`. Enable it later if desired.
