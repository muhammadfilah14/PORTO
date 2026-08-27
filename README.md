# Portfolio Filah v40 — Hero / Tools / Scroll Polish

Base: portfolio-filah-v39-r3f-rapier.

## Main revisions
- Hero ID card redesigned as a taller, narrower portrait card with a layered photo-first layout.
- R3F + Rapier lanyard retained: 4-link rope chain, spline strap, physics drag and release.
- Removed the "drag me around" note.
- Tools keyboard now uses 12 tools in 4 / 5 / 3 rows:
  - Word, Excel, PowerPoint, RStudio
  - VS Code, ChatGPT, Gemini AI, Claude AI, GitHub
  - CapCut, Canva, YouTube
- Tool logos updated with dedicated marks and English/Indonesian descriptions.
- Keyboard hint is moved into its own reserved panel so it cannot cover the keycaps.
- About / Experience / Skills / Tools / YouTube / Contact have visually distinct section backgrounds.
- Scroll reveal animations now replay when sections re-enter the viewport, so scrolling both down and back up triggers motion.

## Profile photo
The ID card expects the user's photo at:

`public/profile-photo.jpg`

The card currently has a graceful visual fallback until that file is added. Replace it with the actual photo; no code change is required.

## Run

```bash
npm install
npm run dev
```
