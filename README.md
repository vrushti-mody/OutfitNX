# Outfit NX website

Static, mobile-first informational site for Outfit NX, Sion, Mumbai. Serve the repository root as the web root. The clean page routes are `/`, `/privacy/`, and `/store-policies/`.

## Before publishing

- Configure the real verified domain with the hosting provider, force HTTP to HTTPS at the host, and update every `outfitnx.in` reference in `sitemap.xml` to that domain. The canonical tags are intentionally omitted until the deployment hostname is confirmed.
- `_headers` supplies HSTS and baseline browser security headers on hosts that support this file format. HSTS is effective after HTTPS is served; configure the host's HTTP-to-HTTPS redirect separately.
- Confirm the business phone, store hours, current rating and rating count, and exchange terms with the store. The phone currently follows a public verified Magicpin listing; the rating and count are the business-provided 4.7/137 from the project brief. Public listings may show different totals.
- Replace the editorial Unsplash campaign photos with approved Outfit NX photography from the shared Drive or Instagram before claiming the pictures show current inventory. The supplied Drive and Instagram pages were not fetchable in this environment. Current photos use Unsplash's image CDN with `fm=webp`, responsive width and quality parameters; there are no scraped brand assets in the repository.
- Review the privacy copy against the actual hosting provider, log retention, contact/grievance route, and any analytics or marketing services enabled at launch. This implementation has no contact form, checkout or analytics. The interactive Google map waits for a visitor to select its load button. Google Fonts is requested externally.
- Confirm address and business-profile details in Google Business Profile so site, schema, and business listings remain consistent.

## SEO and local data

The homepage contains the `ClothingStore` / `LocalBusiness` JSON-LD block. Its aggregate rating is included from the brief and should be reconciled with the live business profile before publication. `robots.txt` points crawlers to `sitemap.xml`. Update the sitemap host after domain configuration.
