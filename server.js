// server.js
const express = require('express');
const path = require('path');
const app = express();

// Serve all files in /public as static assets
app.use(express.static(path.join(__dirname, 'public')));

// Start on port 8000
const PORT = 8000;
app.listen(PORT, () => {
  console.log(`OAuth test app listening at http://localhost:${PORT}`);
});
