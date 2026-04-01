# SURYA SHIKSHA ☀️

AI-Powered Agentic Learning Operating System built with Next.js 14, Prisma, NextAuth, and OpenAI GPT-4o.

## Architecture Overview

- **Frontend:** Next.js 14 App Router + TypeScript + Tailwind CSS + Framer Motion + Radix UI.
- **Backend:** Next.js route handlers for auth, tutoring, curriculum, assessments, and dashboards.
- **Database:** PostgreSQL with Prisma ORM.
- **Auth:** NextAuth credentials provider with role-aware middleware.
- **AI Agents:** 12 specialized GPT-4o agents across curriculum, tutoring, assessment, and governance.
- **Analytics:** Recharts-powered mastery and progress visualizations.

## Project Structure

- `src/app/*`: App Router pages and APIs.
- `src/components/*`: Reusable UI components.
- `src/lib/*`: Prisma singleton, auth config, constants, utilities, and AI agents.
- `prisma/schema.prisma`: Full domain model.
- `prisma/seed.ts`: Demo data seed script.

## Local Setup

1. Install dependencies:
   ```bash
   npm install
   ```
2. Copy env file:
   ```bash
   cp .env.example .env
   ```
3. Start PostgreSQL (local or Docker):
   ```bash
   docker compose up -d postgres
   ```
4. Generate Prisma client + migrate:
   ```bash
   npx prisma generate
   npx prisma migrate dev --name init
   ```
5. Seed demo data:
   ```bash
   npm run seed
   ```
6. Run app:
   ```bash
   npm run dev
   ```

## Demo Users (password: `demo123`)

- Student: `arjun@surya.ai`
- Parent: `priya@surya.ai`
- Teacher: `ramesh@surya.ai`
- Admin: `admin@surya.ai`

## Docker Deployment

```bash
docker compose up --build
```

App: `http://localhost:3000`

## Vercel Deployment

1. Import repository in Vercel.
2. Set environment variables (`DATABASE_URL`, `OPENAI_API_KEY`, `NEXTAUTH_SECRET`, `NEXTAUTH_URL`).
3. Build command already configured in `vercel.json`:
   - `prisma generate && next build`
4. Deploy.

## CI

GitHub Actions workflow (`.github/workflows/ci.yml`) performs:
- dependency install
- Prisma client generation
- Next.js production build

