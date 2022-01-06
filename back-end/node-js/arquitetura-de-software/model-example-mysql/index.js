const express = require('express');
const app = express();
const PORT = 3000;
const HTML_OK_STATUS = 200;

const Author = require('./models/Author');

app.get('/authors', async (_req, res) => {
  const authors = await Author.getDataFromMongo();
  res.status(HTML_OK_STATUS).json(authors);
});

app.listen(PORT, () => console.log('listenig on 3000'));