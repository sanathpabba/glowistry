# Glowistry project status

## Current phase

Basic public website UI completed. Supabase and admin functionality have not been implemented yet.

## Decisions

- Next.js 16 App Router, TypeScript, Tailwind CSS 4.
- Salon content from the supplied menu is centralized in `src/lib/salon-data.ts` so a Supabase data layer can replace it later.
- The first booking action uses the supplied phone number; this will later come from business settings.
- No third-party UI or icon packages were added for this phase.
- Homepage information architecture is inspired by the public Vanessa Nail & Spa experience: utility header, promotional hero, offer, About, service showcase/menu, reviews, contact/map, portfolio and persistent mobile booking actions.
- All visual blocks currently use CSS placeholders as requested. No photography is rendered in the UI.
- Added `/about`, adapting booking-profile patterns (salon summary, quick actions, hours, tags, story, promises and service preview) to Glowistry's verified information and existing visual system.
- Service category cards now use in-place selection: clicking highlights the chosen category and updates a focused pricing panel without anchor navigation.
- Increased selected-service name, duration and price typography for readability.
- Added statically generated detail pages for every service category at `/services/[slug]`; homepage and About service cards link to them.
- Public UI colors now match the archived Glowistry palette exactly: ivory, charcoal, muted grey, champagne gold, pale gold, blush and dusty rose.
- Added five custom generated sample photographs for the campaign hero, salon interior, nails, facial care, and hair/mehendi; integrated them across Home, About, service cards, detail pages and portfolio.
- Normalized public typography into a readable responsive system with larger body copy, navigation, buttons, labels, service pricing, contact details and footer text.
- Replaced generic category imagery with nine purpose-built photographs for threading, waxing, hydra facial, nail extensions, mehendi, massage, hair spa, saree pre-pleating and cosmetic bleach; mappings are centralized in `categoryImages`.
- Removed decorative numbered-circle overlays from all service imagery.
- Disabled legacy placeholder pseudo-elements on real service photographs to remove unintended circular shadows and bands.

## Next likely steps

- Review visual direction and copy with the owner.
- Add Supabase schema/client and migrate salon content to database records.
- Add real salon photography and gallery assets.
- Build protected owner dashboard and content management.
