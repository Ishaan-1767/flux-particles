# Particle Art Tool

Vite + React + Tailwind CSS + Framer Motion starter scaffold for a particle system / generative art tool.

## Quick start

1. Install dependencies:
```bash
npm install
```

2. Run dev server:
```bash
npm run dev
```

3. Build for production:
```bash
npm run build
```

## Notes

- This repo uses wildcard `*` versions in `package.json` so `npm install` will fetch the latest versions available on npm.
- Tailwind is configured via `tailwind.config.js`. `src/index.css` includes the Tailwind directives.
- Add your particle system logic to `src/utils/particleSystem.js` and connect it to `src/components/Canvas.jsx`.
