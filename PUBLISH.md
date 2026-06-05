# Publishing the Clutch site

## First time only — connect the repo to Cloudflare (~2 min, once)

1. Go to **dash.cloudflare.com** → **Workers & Pages** → **Create** → **Pages** → **Connect to Git**.
2. Pick the **`listonproductions/clutchsound`** repo, branch **`main`**.
3. Build settings:
   - **Framework preset:** None
   - **Build command:** *(leave empty)*
   - **Build output directory:** `/`
4. **Save and Deploy.**
5. **Custom domains** → add **`clutchsound.com`** and follow the DNS steps.

That's the only setup. From now on, the site rebuilds itself whenever the repo changes.

## Every time after — publish a change (~30 sec)

When I make an edit here, I'll tell you **exactly which files changed** (e.g. "`stage-f.html` + `assets/img/stage-f-wide.jpg`").

1. Open the repo on **github.com/listonproductions/clutchsound**.
2. Navigate to the folder, click **Add file → Upload files**, drop in **just the changed files**.
3. Type a short note ("update stage F photos") → **Commit changes.**

Cloudflare sees the commit and **auto-deploys only the diff.** You never touch the whole site again — just the files that changed.

## What's in this folder
- `index.html`, `rooms.html`, and the 6 room pages
- `assets/` — CSS, JS, images, logos, floor-plan PDF
- `tweaks-panel.jsx` — the live theme toggle

No build step. These are the live files exactly as served.
