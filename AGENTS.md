# Repository Guidelines

## Project Structure & Module Organization
Application code lives in `src/app`, split between the public site under `src/app/(site)` and the embedded Sanity Studio under `src/app/studio`. Shared UI lives in `src/components`. Structured content helpers are kept in `sanity/` (custom desk structure, client helpers) and the schema definitions sit in `schemas/`. Static assets belong in `public/`. TypeScript path aliases (`@/*`, `@sanity/*`) are configured in `tsconfig.json`; prefer these imports over relative `../../` chains.

## Build, Test, and Development Commands
Run `pnpm dev` for the Next.js dev server with Turbopack reloads. Use `pnpm build` to produce an optimized production bundle and `pnpm start` to serve that build locally. Apply static analysis with `pnpm lint` (Biome checks) and use `pnpm format` before pushing to keep diffs tidy. Sanity Studio is mounted at `/studio` automatically when the dev server is running. After every change, ensure that there are no lint warnings and no build warnings or errors. If there are, fix them until there are no more.

## Coding Style & Naming Conventions
We use TypeScript with React Server Components. Follow 2-space indentation and favor functional, stateless components when possible. Name files in `src/components` with `PascalCase.tsx`, hooks with `useSomething.ts`, and schema files with `nounSchema.ts`. Keep Tailwind utility classes grouped by function (layout → spacing → color). Run Biome to enforce formatting and ensure consistent import order.

## Testing Guidelines
No automated test harness is present yet; add coverage alongside new features. When introducing tests, colocate them near the code (e.g., `Component.test.tsx`) and rely on React Testing Library to avoid brittle DOM assertions. For CMS-driven changes, validate manually in the Studio and in the `/events` and `/menu` pages while the dev server is running. Document manual test notes in the pull request when UI or content queries change.

## Commit & Pull Request Guidelines
Follow the existing history: start the subject with a capitalized verb in present tense (`Add`, `Refactor`, `Update`) and keep it under 80 characters when possible. Include a short body if rationale or follow-up steps are useful. Pull requests should describe the change, reference any tracking issue, and include before/after screenshots for UI updates. Note required environment variables (`NEXT_PUBLIC_SANITY_PROJECT_ID`, dataset, phone number) so reviewers can reproduce locally.

## Sanity & Environment Tips
Create a `.env.local` with the Sanity project ID, dataset, and `NEXT_PUBLIC_PHONE` before running `pnpm dev`; missing values will throw at startup. Use the Studio desk structure to manage menus and events, and prefer the shared GROQ queries under `@sanity/lib/queries` to keep API requests consistent.
