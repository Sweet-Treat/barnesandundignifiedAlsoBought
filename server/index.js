const express = require('express');
var cors = require('cors')
const app = express();
const port = process.env.PORT || 3004;
const db = require('../database');
const axios = require('axios').default;

app.use(cors())
app.use(express.static(__dirname + '/../client/dist'));
app.use(express.json());
app.use(express.urlencoded({extended: false}));

app.get('/products/:rootIsbn/alsoBought', (req, res) => {
  let bulkData;
  db.Book.findOne({rootIsbn: req.params.rootIsbn})
  .then((res) => {
    let relatedISBNs = res.relatedBooks.map((elem) => {
      return elem.isbn
    })
    bulkData = res.relatedBooks;
    return relatedISBNs;
  })
  .then((relatedBookIsbns) => {
    return Promise.all([
      axios.get(`http://localhost:8000/books/${Number(relatedBookIsbns[0])}/reviews/summary`),
      axios.get(`http://localhost:8000/books/${Number(relatedBookIsbns[1])}/reviews/summary`),
      axios.get(`http://localhost:8000/books/${Number(relatedBookIsbns[2])}/reviews/summary`),
      axios.get(`http://localhost:8000/books/${Number(relatedBookIsbns[3])}/reviews/summary`),
      axios.get(`http://localhost:8000/books/${Number(relatedBookIsbns[4])}/reviews/summary`),
      axios.get(`http://localhost:8000/books/${Number(relatedBookIsbns[5])}/reviews/summary`),
      axios.get(`http://localhost:8000/books/${Number(relatedBookIsbns[6])}/reviews/summary`),
      axios.get(`http://localhost:8000/books/${Number(relatedBookIsbns[7])}/reviews/summary`),
      axios.get(`http://localhost:8000/books/${Number(relatedBookIsbns[8])}/reviews/summary`),
      axios.get(`http://localhost:8000/books/${Number(relatedBookIsbns[9])}/reviews/summary`)
    ])
  })
  .then((ratingsData) => {
    let randomImages = [
      'https://picsum.photos/id/1/150/175',
      'https://picsum.photos/id/10/150/175',
      'https://picsum.photos/id/100/150/175',
      'https://picsum.photos/id/1000/150/175',
      'https://picsum.photos/id/1001/150/175',
      'https://picsum.photos/id/1002/150/175',
      'https://picsum.photos/id/1003/150/175',
      'https://picsum.photos/id/1004/150/175',
      'https://picsum.photos/id/1005/150/175',
      'https://picsum.photos/id/1006/150/175',
    ];

    let combinedData = bulkData.map((bulk, index) => {
      return {
        _id: bulk.id,
        isbn: bulk.isbn,
        title: bulk.title,
        author: bulk.author,
        genre: bulk.genre,
        avgRating: ratingsData[index].data.avgRating,
        img: randomImages[index]
      }
    })
    return combinedData;
  })
  .then((data) => {
    res.send(data)
  })
  .catch((err) => {
    console.log(err);
  })
  .finally(() => {
    console.log('Server parsing complete')
  })
});


// TODO //
// [] Find ISBN from URL (ignore React Router info for now)
// [X] Refactor DB to have 10 root ISBNs, and then 10 Related Books per root
    // Make all DB genre to match root ISBN
// [X] Change get request to be server side
  // 1. Get root ISBN (already have in line 13)
  // 2. Get related books to that root ISBN
  // 3. Get ratings data of those related books
  // send RES back as array of objects
  // What shape will I send back to React // refactor




app.listen(port, () => {
  console.log(`Listening at http://localhost:${port}`);
});


  // Old server code. Temporarily keeping as a reference
  // db.getData(req, (err, data) => {
  //   if (err) {
  //     res.status(500).send(err);
  //   } else {
  //     // console.log(data[0].relatedBooks)
  //     // res.status(200).send(data);
  //     return data;
  //   }
  // })