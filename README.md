# MRTMedia Agency Website

A static, multi-page marketing and web development agency website for MRTMedia.

## Run locally

From the project root:

```bash
python -m http.server 8000
```

Then open <http://localhost:8000> in your browser.

## Deploy to Vercel

### Option 1: Vercel CLI

1. Install the CLI:

   ```bash
   npm i -g vercel
   ```

2. From this project directory, run:

   ```bash
   vercel
   ```

3. When prompted, choose the default settings (the site is static). Vercel will deploy the current directory.

### Option 2: Vercel Dashboard

1. Create a new project in the Vercel dashboard.
2. Import this repository.
3. Use the default build settings (no framework).
4. Deploy.
