require('dotenv').config();
const express = require('express');
const cors = require('cors');
const app = express();
const URL = require('url').URL

// Basic Configuration
const port = process.env.PORT || 3000;

app.use(cors());
app.use(express.urlencoded({ extended: true }));
app.use('/public', express.static(`${process.cwd()}/public`));

app.get('/', function (req, res) {
  res.sendFile(process.cwd() + '/views/index.html');
});

// Your first API endpoint
app.get('/api/hello', function (req, res) {
  res.json({ greeting: 'hello API' });
});

app.post('/api/shorturl', (req, res) => {
  const { url } = req.body;
  let message = {};
  try {
    url = new URL(url)
  }
  catch {
    message = { "error": "Invalid URL" }
  }
  res.send(message);
});

app.listen(port, function () {
  console.log(`Listening on port ${port}`);
});
