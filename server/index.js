const express = require('express');
const app = express();
const port = process.env.PORT || 3004;
const db = require('../database');

app.use(express.static(__dirname + '/../client/dist'));
app.use(express.json());
app.use(express.urlencoded({extended: false}));

app.get('/getBooks', (req, res) => {
  db.getData((err, data) => {
    if (err) {
      res.status(500).send('GET error:', err);
    } else {
      res.status(200).send(data)
    }
  })
})

app.listen(port, () => {
  console.log(`Listening at http://localhost:${port}`)
})