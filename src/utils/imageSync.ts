import { getImage } from './imageStorage';

let isSyncing = false;
let hasSynced = false;

export async function syncStoredImagesToServer(): Promise<boolean> {
  if (isSyncing || hasSynced) return false;
  isSyncing = true;

  try {
    const hero = await getImage('hero');
    const trad = await getImage('trad');
    const coreano = await getImage('coreano');

    // If this browser has stored custom images, sync them to the server so mobile devices can access them
    if (!hero && !trad && !coreano) {
      isSyncing = false;
      return false;
    }

    const res = await fetch('/api/sync-images', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        hero: hero || null,
        trad: trad || null,
        coreano: coreano || null,
      }),
    });

    if (res.ok) {
      const data = await res.json();
      hasSynced = true;
      if (typeof window !== 'undefined') {
        window.dispatchEvent(new CustomEvent('photos-synced', { detail: data }));
      }
      return true;
    }
  } catch (err) {
    console.warn('Sync attempt note:', err);
  } finally {
    isSyncing = false;
  }
  return false;
}
