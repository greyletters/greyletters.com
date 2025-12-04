# Greyletters

Anonymous. Encrypted. Edge Runtime.

## Project Setup

1.  **Install Dependencies:**
    ```bash
    npm install
    ```

2.  **Run Locally:**
    ```bash
    npm run dev
    ```

3.  **Build for Cloudflare Workers:**
    ```bash
    npm run build
    ```
    This command runs `next build` followed by `next-on-pages` to generate the `_worker.js` output.

4.  **Deploy:**
    ```bash
    npm run deploy
    ```
    This uses `wrangler` to deploy to Cloudflare.

## Architecture

-   **Framework:** Next.js 16 (App Router)
-   **Runtime:** Cloudflare Workers (Edge)
-   **Styling:** TailwindCSS (Neon/Futuristic)
-   **Content:** Static JSON (No database required)

## Notes

-   All pages force `export const runtime = 'edge'`.
-   No `fs` or Node.js specific APIs are used in the runtime.
-   Content is located in `content/`.
