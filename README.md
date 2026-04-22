# Cureledger (Guthrie site)

Next.js App Router site for [Cureledger](https://cureledger.com): landing, blog, Zebra Reports, and Guthrie chat.

## Develop

```bash
bun install
bun run dev
```

## Build

```bash
bun run build
```

## Environment

Copy `.env.example` to `.env.local` and set `ELIZAOS_API_URL` to your Guthrie Eliza API (e.g. Railway) for the chat widget.

## Deploy

Connect this repository to [Vercel](https://vercel.com) (root directory: repo root). Set production environment variables as in `.env.example`.

Pushes to `main` trigger production deploys when the project is connected.

MIT
