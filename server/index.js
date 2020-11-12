const express = require('express');
const app = express();
const port = process.env.PORT || 3010;
const db = require('../database');

app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.listen(port, () => {
  console.log(`Listening at http://localhost:${port}`)
})