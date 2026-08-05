# Nutdown Editor — Agent Instructions

A lightweight, real-time Markdown editor: type Markdown on one side, see it
rendered live on the other. Built with Next.js 16 (App Router), React 19, and
Tailwind CSS 4.

## Tooling

- **Package manager: Bun.** Use `bun install` / `bun add` / `bun remove`, not
  npm/yarn/pnpm. A `bun.lock` is the source of truth; ignore
  `pnpm-workspace.yaml` and `pnpm-lock.yaml` (legacy, kept only for
  npm/yarn/pnpm users per the README's alt install path).
- **Runtime:** Node version pinned in `.nvmrc` (v24.12.0) if not using Bun's
  own runtime.
- **Bundler:** Turbopack, wired into both `dev` and `build` scripts already —
  don't add `--turbopack` flags elsewhere or switch to webpack.

## Commands

```bash
bun install       # install deps
bun dev           # dev server, http://localhost:3000
bun run build     # production build (turbopack)
bun start         # run the production build
bun run lint      # eslint (next/core-web-vitals + next/typescript)
```

Always run `bun run lint` after changes to `.ts`/`.tsx` files. There is no
test suite in this project — do not invent one unless asked.

## Project structure

```
src/app/
  layout.tsx                 # root layout, metadata
  page.tsx                   # main page: composes editor + preview
  globals.css                # Tailwind v4 import + theme tokens
  components/
    MdEditor.tsx              # textarea, writes to MarkdownContext
    MdPreview.tsx              # react-markdown render, reads MarkdownContext
  context/
    MarkdownContext.tsx        # shared markdown string state (client context)
```

- Path alias `@/*` → `./src/*` (see `tsconfig.json`).
- State flows through `MarkdownContext`, not props — if you add editor/preview
  features, extend that context rather than introducing prop drilling or a
  new state library.
- `MdEditor` and `MdPreview` are both `"use client"` components. `page.tsx`
  and `layout.tsx` are server components — keep them that way; push
  interactivity down into client components rather than adding `"use client"`
  at the page level.

## Styling

- Tailwind CSS 4, configured via `@import "tailwindcss"` and `@theme inline`
  in `globals.css` (no `tailwind.config.js` — v4 is CSS-first). Add design
  tokens there, not in a JS config file.
- Dark mode is driven by `prefers-color-scheme` in `globals.css`, and by
  Tailwind's `dark:` variant in components (e.g. `dark:bg-gray-800`). Keep
  both in sync when touching colors.

## Known gaps

- `rehype-highlight` is a dependency and the README advertises syntax
  highlighting, but `MdPreview.tsx` does not currently use it — fenced code
  blocks render unstyled. Don't assume it's wired up; check before relying on
  highlighted code blocks.
