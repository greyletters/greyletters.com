# Greyletters

An anonymous writing platform for thoughts that never get said out loud.

## About

Greyletters is a place for raw, unfiltered writing about pressure, burnout, mental health, and the weight of modern life. No accounts. No tracking. No pretending.

## Tech Stack

- **Framework**: Next.js 15 (App Router)
- **Styling**: TailwindCSS
- **Hosting**: Cloudflare Workers (Edge Runtime)
- **Deployment**: Cloudflare Pages

## Running Locally

```bash
# Install dependencies
npm install --legacy-peer-deps

# Start dev server
npm run dev
```

Open [http://localhost:3000](http://localhost:3000)

## Deployment

This project is designed to run on Cloudflare Workers edge runtime.

```bash
# Build
npm run build

# Deploy to Cloudflare
npx wrangler deploy
```

## Contributing

This is an open source project. Feel free to submit pull requests or open issues.

## License

Open source. Do what you want with it.

---

**No personal data is collected. Ever.**
