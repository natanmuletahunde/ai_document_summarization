const express = require('express');
const path = require('path');
const app = express();
const port = process.env.PORT || 3000;

// Set correct MIME types
app.use(express.static(path.join(__dirname), {
  setHeaders: (res, filePath) => {
    if (filePath.endsWith('.js')) {
      res.setHeader('Content-Type', 'application/javascript');
    } else if (filePath.endsWith('.css')) {
      res.setHeader('Content-Type', 'text/css');
    } else if (filePath.endsWith('.mjs')) {
      res.setHeader('Content-Type', 'application/javascript');
    }
  }
}));

// Always serve index.html for any request
app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, 'index.html'));
});

app.listen(port, () => {
  console.log(`Frontend server running on port ${port}`);
});