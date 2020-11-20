const express = require('express');
const app = express();
const port = process.env.PORT || 3004;
const db = require('../database');

app.use(express.static(__dirname + '/../client/dist'));
app.use(express.json());
app.use(express.urlencoded({extended: false}));

// Retrieve dummy seed data
app.get('/products/:rootIsbn/alsoBought', (req, res) => {
  db.getData(req, (err, data) => {
    if (err) {
      res.status(500).send(err);
    } else {
      // console.log('express data:', data)
      res.status(200).send(data);
    }
  });
});

// // Retrieve review data. Search criteria can be 'isbn' or 'title'
// app.get('/reviewsummary/:isbn', (req, res) => {
//   // db.getData((err, data) => {
//   //   if (err) {
//   //     res.status(500).send('GET error:', err);
//   //   } else {
//   //     res.status(200).send(data)
//   //   }
//   // })
// });

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