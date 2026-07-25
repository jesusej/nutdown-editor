# Nutdown Editor

Nutdown Editor is a lightweight, real-time Markdown editor built with Next.js. Write Markdown on one side and see it rendered live on the other, complete with GitHub-flavored Markdown support (tables, task lists, strikethrough, etc.) and syntax-highlighted code blocks.

## Features

- **Live preview** — edits render instantly as you type
- **GitHub-flavored Markdown** via `remark-gfm`
- **Syntax highlighting** for fenced code blocks via `rehype-highlight`
- Built on Next.js 16, React 19, and Tailwind CSS 4

## How To Run

This project can be run with either [Bun](https://bun.sh) or Node.js.

### Using Bun (recommended)

```bash
bun install
bun dev
```

### Using Node.js

Install dependencies with your preferred package manager, then start the dev server:

```bash
npm install
npm run dev
# or
yarn install
yarn dev
# or
pnpm install
pnpm dev
```

Once running, open [http://localhost:3000](http://localhost:3000) in your browser to use the editor.

## Project Structure

- `src/app/page.tsx` — main page
- `src/app/components/MdEditor.tsx` — the Markdown input editor
- `src/app/components/MdPreview.tsx` — the rendered Markdown preview
- `src/app/context/MarkdownContext.tsx` — shared state between editor and preview

## Learn More

This project uses [Next.js](https://nextjs.org). To learn more, check out the [Next.js Documentation](https://nextjs.org/docs).
