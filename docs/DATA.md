# Data

## Foundation

No memory data is collected, stored or transmitted. The only state is React Router navigation. No IndexedDB, localStorage, sessionStorage, cookies or service worker are created by application code. Browser history still records visited paths.

## Future planning contract — not implemented

A single Memory will connect its text, optional approximate date/range, service context, keepsake, place and attachments. Timeline, keepsake, map and story screens will be views over the same record. Unknown dates must not be converted to invented exact dates. Places, coordinates, units and branch remain optional.

Family books will select records and fields for an explicitly reviewed snapshot. Full backups and shareable books are different outputs. Schema versioning, atomic writes, failed-save recovery, multi-tab conflict handling, attachment bounds and round-trip restore need tests before any archive release.

MVP planning assumes unencrypted local storage with clear device-access and loss disclosures. Do not describe it as a secure vault or a backup. Downloadable HTML books and browser print are planned; no format, schema or serializer is implemented now.
