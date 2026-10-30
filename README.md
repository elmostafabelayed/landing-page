# Académie Al-Andalous Fès

Bilingual French/Arabic landing page for language courses and academic tutoring. Built with React 19, Vite 8 and Lucide icons. No backend is required: inquiries open WhatsApp with a prepared message; the visitor sends it themselves.

## Development

```bash
npm ci
npm run dev
```

Use the Local URL printed by Vite (port 3000 by default; the next available port if occupied).

```bash
npm test       # Message encoding and language fallback regression checks
npm run build # Production output in dist/
npm run preview
```

## Content and design

- `src/config/academyConfig.js`: original academy data, contacts, nine programs, schedules, benefits, registration steps and FAQs. Both French and Arabic values are retained.
- `src/context/LanguageContext.jsx`: translated interface strings and language preference. The preference is the only information written to local storage; the form is kept in memory.
- `src/index.css`: shared palette, typography, responsive layouts, RTL styles, keyboard focus and reduced-motion support.
- `src/components/`: individual sections; program details expand inline, and “Personnaliser ma demande” selects the program in the inquiry panel.
- `public/social-card.png`: branded 1200 × 630 sharing image. Its source generator is `scripts/generate-brand-assets.py` (requires Pillow and the Noto fonts listed there).

The map is explicitly an illustrative diagram. Its Google Maps link uses the latitude and longitude already present in the academy data. Course availability, accreditation, real contact ownership and response-time claims have not been independently verified. The existing demo disclosure is retained; no live online status is simulated.

## Deployment

Serve the contents of `dist/` using static hosting. No deployment is performed by the build command. The canonical URL, Open Graph URLs and structured organization data in `index.html` retain the existing `academie-alandalous-fes.ma` domain. Synchronize these if the production domain or academy data changes.

The fonts are requested from Google Fonts, with local system fallbacks. The page does not send form values to an application server. A WhatsApp link contains the current inquiry only when the visitor follows that link.

## Browser review checklist

- Test French and Arabic at 320, 390, 768 and 1440px.
- Check menu toggling, Escape, keyboard focus, section anchors and no horizontal overflow.
- Check all course filters, expanded schedules and course selection in the inquiry panel.
- Check inquiry preview and URL encoding without sending a real message.
- Check FAQs, telephone, email, Maps, and browser console.
