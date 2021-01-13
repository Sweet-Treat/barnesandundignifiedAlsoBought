const express = require('express');
var cors = require('cors');
const app = express();
const port = process.env.PORT || 3004;
const db = require('../database');
const axios = require('axios').default;

app.use(cors());
app.use(express.static(__dirname + '/../client/dist'));
app.use(express.json());
app.use(express.urlencoded({extended: false}));

app.get('/products/:rootIsbn/alsoBought', (req, res) => {
  let bulkData;
  db.Book.findOne({rootIsbn: req.params.rootIsbn})
    .then((res) => {
      let relatedISBNs = res.relatedBooks.map((elem) => {
        return elem.isbn;
      });
      bulkData = res.relatedBooks.slice(0, 10);
      return relatedISBNs.slice(0, 10);
    })
    .then((relatedBookIsbns) => {
      return Promise.all(
        relatedBookIsbns.map(isbn => {
          // return axios.get(`http://localhost:8000/books/${isbn}/reviews/summary`).catch((err) => {return null})
          return axios.get(`http://3.140.58.207:8000/books/${isbn}/reviews/summary`).catch((err) => {return null}) // Review service EC2 URL
        })
      );
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
        if (!ratingsData[index]) {
          return {
            _id: bulk.id,
            isbn: bulk.isbn,
            title: bulk.title,
            author: bulk.author,
            genre: bulk.genre,
            avgRating: 0,
            img: randomImages[index]
          };
        } else {
          return {
            _id: bulk.id,
            isbn: bulk.isbn,
            title: bulk.title,
            author: bulk.author,
            genre: bulk.genre,
            avgRating: ratingsData[index].data.avgRating,
            img: randomImages[index]
          };
        }
      });
      return combinedData;
    })
    .then((data) => {
      res.send(data);
    })
    .catch((err) => {
      console.log('Error with Server GET Promise:', err);
    });
});

app.listen(port, () => {
  console.log(`Listening on ${port}`);
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