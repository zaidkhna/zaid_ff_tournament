# ZAID FF Tournament — New Working Version

This is a clean Next.js replacement for the previous database-dependent version.

## Run
npm install
npm run dev

Open http://localhost:3000 and http://localhost:3000/admin

## Deploy
Push this folder to GitHub and import it into Vercel. No DATABASE_URL is required for this version.

## Important
Admin data is stored in browser localStorage. This makes the UI/actions work without PostgreSQL, but it is not a multi-user production database. For real public tournaments, connect Supabase/PostgreSQL after verifying the UI.
