// Robust IndexedDB + Compressed Storage for persistent user-uploaded images

const DB_NAME = 'warmi_lash_academy_db';
const STORE_NAME = 'custom_images';
const DB_VERSION = 1;

function openDB(): Promise<IDBDatabase> {
  return new Promise((resolve, reject) => {
    if (typeof window === 'undefined' || !window.indexedDB) {
      reject(new Error('IndexedDB not supported'));
      return;
    }

    const request = window.indexedDB.open(DB_NAME, DB_VERSION);

    request.onupgradeneeded = (event) => {
      const db = (event.target as IDBOpenDBRequest).result;
      if (!db.objectStoreNames.contains(STORE_NAME)) {
        db.createObjectStore(STORE_NAME);
      }
    };

    request.onsuccess = () => resolve(request.result);
    request.onerror = () => reject(request.error);
  });
}

/**
 * Optimizes an uploaded image using an HTML5 Canvas to ensure crisp quality
 * while keeping file size small (~200KB - 500KB) so it saves instantly and loads lightning fast.
 */
export async function optimizeImage(file: File, maxWidth = 1600, maxHeight = 1600): Promise<string> {
  return new Promise((resolve, reject) => {
    const reader = new FileReader();
    reader.onerror = () => reject(new Error('Error leyendo archivo'));
    reader.onload = (e) => {
      const img = new Image();
      img.onerror = () => reject(new Error('Error cargando imagen'));
      img.onload = () => {
        let width = img.width;
        let height = img.height;

        if (width > maxWidth || height > maxHeight) {
          if (width / maxWidth > height / maxHeight) {
            height = Math.round((height * maxWidth) / width);
            width = maxWidth;
          } else {
            width = Math.round((width * maxHeight) / height);
            height = maxHeight;
          }
        }

        const canvas = document.createElement('canvas');
        canvas.width = width;
        canvas.height = height;

        const ctx = canvas.getContext('2d');
        if (!ctx) {
          resolve(e.target?.result as string);
          return;
        }

        // Draw with image smoothing enabled for crisp lashes & details
        ctx.imageSmoothingEnabled = true;
        ctx.imageSmoothingQuality = 'high';
        ctx.drawImage(img, 0, 0, width, height);

        // Export as WebP if supported, otherwise JPEG 0.92
        try {
          const webpData = canvas.toDataURL('image/webp', 0.92);
          if (webpData && webpData.startsWith('data:image/webp')) {
            resolve(webpData);
            return;
          }
        } catch {
          // fallback to jpeg
        }

        resolve(canvas.toDataURL('image/jpeg', 0.92));
      };

      img.src = e.target?.result as string;
    };

    reader.readAsDataURL(file);
  });
}

/**
 * Persists an image permanently to IndexedDB + localStorage fallback
 */
export async function saveImage(key: string, dataUrl: string): Promise<boolean> {
  let savedInIndexedDB = false;

  try {
    const db = await openDB();
    await new Promise<void>((resolve, reject) => {
      const tx = db.transaction(STORE_NAME, 'readwrite');
      const store = tx.objectStore(STORE_NAME);
      const req = store.put(dataUrl, key);
      req.onsuccess = () => resolve();
      req.onerror = () => reject(req.error);
    });
    savedInIndexedDB = true;
  } catch (err) {
    console.warn('Could not save to IndexedDB, attempting localStorage fallback:', err);
  }

  // Also attempt localStorage as redundancy
  try {
    localStorage.setItem(`warmi_img_${key}`, dataUrl);
  } catch {
    // quota might be exceeded if localStorage is full, which is fine since IndexedDB has it
  }

  return savedInIndexedDB;
}

/**
 * Retrieves a persisted image across refreshes and sessions
 */
export async function getImage(key: string): Promise<string | null> {
  // First attempt IndexedDB
  try {
    const db = await openDB();
    const data = await new Promise<string | null>((resolve, reject) => {
      const tx = db.transaction(STORE_NAME, 'readonly');
      const store = tx.objectStore(STORE_NAME);
      const req = store.get(key);
      req.onsuccess = () => resolve(req.result || null);
      req.onerror = () => reject(req.error);
    });

    if (data) {
      return data;
    }
  } catch (err) {
    console.warn('IndexedDB read error, trying fallback:', err);
  }

  // Fallback to localStorage
  try {
    const local = localStorage.getItem(`warmi_img_${key}`) || localStorage.getItem(`warmi_${key}_image`);
    if (local) return local;
  } catch {
    // Ignore error
  }

  return null;
}

/**
 * Clears a custom image and reverts to default
 */
export async function removeImage(key: string): Promise<void> {
  try {
    const db = await openDB();
    await new Promise<void>((resolve, reject) => {
      const tx = db.transaction(STORE_NAME, 'readwrite');
      const store = tx.objectStore(STORE_NAME);
      const req = store.delete(key);
      req.onsuccess = () => resolve();
      req.onerror = () => reject(req.error);
    });
  } catch {
    // Ignore
  }

  try {
    localStorage.removeItem(`warmi_img_${key}`);
    localStorage.removeItem(`warmi_${key}_image`);
  } catch {
    // Ignore
  }
}
