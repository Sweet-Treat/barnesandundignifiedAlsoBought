const express = require('express');
var cors = require('cors')
const app = express();
const port = process.env.PORT || 3004;
const db = require('../database');

app.use(cors())
app.use(express.static(__dirname + '/../client/dist'));
app.use(express.json());
app.use(express.urlencoded({extended: false}));

// Retrieve dummy seed data
app.get('/products/:rootIsbn/alsoBought', (req, res) => {
  db.getData(req, (err, data) => {
    if (err) {
      res.status(500).send(err);
    } else {
      res.status(200).send(data);
    }
  });
});

// // Retrieve review data. Search criteria can be 'isbn' or 'title'
// app.get('localhost:8000/reviewssummary/:identifier', (req, res) => {
//   model.get({ISBN: req.params.identifier}, (err, data) => {
//     if (err) {
//       res.status(400).send('Controller: Error in get');
//     } else {
//       res.status(200).send(data);
//     }
//   });
// })

// // Retrieve product data. Search criteria will be 'isbn'
// // Book categories = [“Nonfiction”, “Fiction”, “History”, “Fantasy”, “Romance” “Home and garden”, “Graphic novel”, “Humor”, “Autobiography”, “Business/economics”, “Cookbook”, “Diary”]
// app.get('/product/:isbn', (req, res) => {
//   // db.getData((err, data) => {
//   //   if (err) {
//   //     res.status(500).send('GET error:', err);
//   //   } else {
//   //     res.status(200).send(data)
//   //   }
//   // })
// });

app.listen(port, () => {
  console.log(`Listening at http://localhost:${port}`);
});