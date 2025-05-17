const express = require('express');
const app = express();
const port = process.env.PORT || 3000;

app.get('/', (req, res) => {
  res.send('🎉 Hello from Node.js running in AKS via GitHub Actions!');
});

app.listen(port, () => {
  console.log(`🚀 App listening at http://localhost:${port}`);
});
