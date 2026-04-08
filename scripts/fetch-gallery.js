/**
 * fetch-gallery.js
 * Runs at Netlify build time — queries Cloudinary API, writes gallery-data.json
 * so gallery.html always reflects the current state of your Cloudinary folders.
 *
 * Required environment variables (set in Netlify UI):
 *   CLOUDINARY_CLOUD_NAME
 *   CLOUDINARY_API_KEY
 *   CLOUDINARY_API_SECRET
 */

const https = require('https');
const fs = require('fs');
const path = require('path');

const CLOUD_NAME = process.env.CLOUDINARY_CLOUD_NAME || 'dkfypt2cb';
const API_KEY    = process.env.CLOUDINARY_API_KEY;
const API_SECRET = process.env.CLOUDINARY_API_SECRET;

// Display order and labels for each Cloudinary folder.
// Add a new entry here whenever you create a new folder you want shown.
// id must match the HTML section id attributes in gallery.html (used as grid-{id} lookup)
const SECTION_CONFIG = [
  { folder: 'Cocktails',                               id: 'cocktails',            label: 'Cocktails'              },
  { folder: 'General bar photos',                      id: 'behind-the-bar',       label: 'Behind the Bar'         },
  { folder: 'XMAS 2025',                               id: 'xmas-2025',            label: 'XMAS 2025'              },
  { folder: 'Halloween',                               id: 'halloween',            label: 'Halloween'              },
  { folder: 'Friendsgiving',                           id: 'friendsgiving',        label: 'Friendsgiving'          },
  { folder: 'Pickleball',                              id: 'pickleball',           label: 'Pickleball'             },
  { folder: 'Birthday Party - Natalies First Rodeo',   id: 'natalies-first-rodeo', label: "Natalie's First Rodeo"  },
  { folder: "Birthday Party - Eddie's 36th",           id: 'eddies-36th',          label: "Eddie's 36th Birthday"  },
];

// These folders are never shown in the gallery.
const EXCLUDE_FOLDERS = new Set(['Do not use', 'Logos']);

function apiRequest(urlPath) {
  return new Promise((resolve, reject) => {
    const auth = Buffer.from(`${API_KEY}:${API_SECRET}`).toString('base64');
    const options = {
      hostname: 'api.cloudinary.com',
      path: urlPath,
      headers: { Authorization: `Basic ${auth}` },
    };
    https.get(options, (res) => {
      let raw = '';
      res.on('data', (chunk) => (raw += chunk));
      res.on('end', () => {
        try { resolve(JSON.parse(raw)); }
        catch (e) { reject(new Error(`JSON parse error: ${raw.slice(0, 200)}`)); }
      });
    }).on('error', reject);
  });
}

async function fetchAllResources() {
  const resources = [];
  let nextCursor = null;

  do {
    const qs = new URLSearchParams({
      max_results: '500',
      with_field: 'asset_folder',
      type: 'upload',
      ...(nextCursor ? { next_cursor: nextCursor } : {}),
    });
    const data = await apiRequest(`/v1_1/${CLOUD_NAME}/resources/image?${qs}`);
    resources.push(...(data.resources || []));
    nextCursor = data.next_cursor || null;
  } while (nextCursor);

  return resources;
}

async function main() {
  if (!API_KEY || !API_SECRET) {
    console.warn('[fetch-gallery] No Cloudinary credentials found — skipping API fetch.');
    console.warn('  Set CLOUDINARY_API_KEY and CLOUDINARY_API_SECRET in Netlify environment variables.');
    process.exit(0); // exit cleanly so deploys don't fail during initial setup
  }

  console.log('[fetch-gallery] Fetching resources from Cloudinary...');
  const resources = await fetchAllResources();
  console.log(`[fetch-gallery] Found ${resources.length} total resources.`);

  // Group by asset_folder
  const byFolder = {};
  for (const r of resources) {
    const folder = r.asset_folder || '(root)';
    if (!byFolder[folder]) byFolder[folder] = [];
    byFolder[folder].push(r.public_id);
  }

  // Build sections in configured order
  const sections = [];
  for (const config of SECTION_CONFIG) {
    const photos = byFolder[config.folder] || [];
    if (photos.length === 0) {
      console.log(`  ${config.folder}: 0 photos (skipped)`);
      continue;
    }
    sections.push({ id: config.id, label: config.label, photos });
    console.log(`  ${config.folder}: ${photos.length} photos`);
  }

  // Warn about any folders in Cloudinary not in SECTION_CONFIG
  for (const folder of Object.keys(byFolder)) {
    if (EXCLUDE_FOLDERS.has(folder) || folder === '(root)') continue;
    const inConfig = SECTION_CONFIG.some((s) => s.folder === folder);
    if (!inConfig) {
      console.warn(`  [!] Cloudinary folder "${folder}" is not in SECTION_CONFIG — add it to scripts/fetch-gallery.js to show it.`);
    }
  }

  const output = {
    sections,
    generated: new Date().toISOString(),
    total: sections.reduce((n, s) => n + s.photos.length, 0),
  };

  const outPath = path.join(__dirname, '..', 'gallery-data.json');
  fs.writeFileSync(outPath, JSON.stringify(output, null, 2));
  console.log(`[fetch-gallery] Wrote ${output.total} photos across ${sections.length} sections → gallery-data.json`);
}

main().catch((err) => {
  console.error('[fetch-gallery] Error:', err.message);
  process.exit(1);
});
