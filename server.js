const express = require('express');
const path = require('path');

const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.static(path.join(__dirname, 'public')));

app.get('/api/health', (_req, res) => {
  res.json({ ok: true, app: 'PPM HRM Starter', db: 'disabled' });
});

app.listen(PORT, () => {
  console.log(`PPM app running on http://localhost:${PORT}`);
});
