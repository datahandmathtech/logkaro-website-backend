import express from 'express';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const app = express();
const PORT = process.env.PORT || 5174;

// Serve static assets from the production dist folder
app.use(express.static(path.join(__dirname, 'dist')));

// API health endpoint
app.get('/api/health', (req, res) => {
  res.json({
    status: 'online',
    platform: 'LogKaro Fleet OS',
    version: '2.8.0',
    timestamp: new Date().toISOString()
  });
});

// Single Page Application (SPA) fallback to index.html for all client-side routes
app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, 'dist', 'index.html'));
});

app.listen(PORT, () => {
  console.log(`LogKaro Website & Backend Server is running on port ${PORT}`);
  console.log(`Access at: http://localhost:${PORT}`);
});
