import express from 'express';
import { createServer as createViteServer } from 'vite';
import * as path from 'path';
import * as fs from 'fs';

async function startServer() {
  const app = express();
  const PORT = parseInt(process.env.PORT || '3000', 10);

  // Parse large JSON payloads for base64 images
  app.use(express.json({ limit: '50mb' }));
  app.use(express.urlencoded({ extended: true, limit: '50mb' }));

  const publicImagesDir = path.resolve('public/images');
  if (!fs.existsSync(publicImagesDir)) {
    fs.mkdirSync(publicImagesDir, { recursive: true });
  }

  // API endpoint: Sync images from client IndexedDB to server files
  app.post('/api/sync-images', (req, res) => {
    try {
      const { hero, trad, coreano } = req.body;
      let count = 0;

      const saveBase64Image = (dataUrl: string, filename: string) => {
        if (!dataUrl || typeof dataUrl !== 'string' || !dataUrl.includes('base64,')) return;
        const base64Data = dataUrl.split('base64,')[1];
        if (!base64Data) return;
        const buffer = Buffer.from(base64Data, 'base64');
        const targetPath = path.join(publicImagesDir, filename);
        fs.writeFileSync(targetPath, buffer);

        // Also copy to dist/images if dist directory exists
        const distImagesDir = path.resolve('dist/images');
        if (fs.existsSync(distImagesDir)) {
          fs.writeFileSync(path.join(distImagesDir, filename), buffer);
        }
        count++;
      };

      if (hero) saveBase64Image(hero, 'hero-active.jpg');
      if (trad) saveBase64Image(trad, 'trad-active.jpg');
      if (coreano) saveBase64Image(coreano, 'coreano-active.jpg');

      res.json({ success: true, count, timestamp: Date.now() });
    } catch (err) {
      console.error('Error saving synced images:', err);
      res.status(500).json({ success: false, error: String(err) });
    }
  });

  // Check sync status
  app.get('/api/sync-status', (_req, res) => {
    const heroExists = fs.existsSync(path.join(publicImagesDir, 'hero-active.jpg'));
    const tradExists = fs.existsSync(path.join(publicImagesDir, 'trad-active.jpg'));
    const coreanoExists = fs.existsSync(path.join(publicImagesDir, 'coreano-active.jpg'));

    res.json({
      hero: heroExists ? `/images/hero-active.jpg?v=${fs.statSync(path.join(publicImagesDir, 'hero-active.jpg')).mtimeMs}` : null,
      trad: tradExists ? `/images/trad-active.jpg?v=${fs.statSync(path.join(publicImagesDir, 'trad-active.jpg')).mtimeMs}` : null,
      coreano: coreanoExists ? `/images/coreano-active.jpg?v=${fs.statSync(path.join(publicImagesDir, 'coreano-active.jpg')).mtimeMs}` : null,
    });
  });

  // Serve static files from public
  app.use(express.static(path.resolve('public')));

  if (process.env.NODE_ENV === 'production') {
    app.use(express.static(path.resolve('dist')));
    app.get('*', (_req, res) => {
      res.sendFile(path.resolve('dist/index.html'));
    });
  } else {
    const vite = await createViteServer({
      server: { middlewareMode: true },
      appType: 'spa',
    });
    app.use(vite.middlewares);
  }

  app.listen(PORT, '0.0.0.0', () => {
    console.log(`Server listening on http://0.0.0.0:${PORT}`);
  });
}

startServer().catch((err) => {
  console.error('Failed to start server:', err);
  process.exit(1);
});
