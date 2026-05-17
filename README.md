# PPM HRM Starter (Node.js + Tailwind)

This project has been initialized as a **Node.js + Tailwind CSS** web app starter.

## Current status
- Flutter-style approach is not used.
- Database is intentionally **not connected** yet.
- Includes a starter dashboard page and a health endpoint.

## Run locally
```bash
npm install
npm run dev
```

Open: `http://localhost:3000`

## Endpoint
- `GET /api/health` → `{ ok: true, app: 'PPM HRM Starter', db: 'disabled' }`

## Next planned steps
1. Login UI + account block rules
2. Employee panel pages (attendance, monthly dashboard, leave, settings)
3. HR/Admin dashboards
4. Upwork withdrawal module
5. Connect Supabase in a later phase
