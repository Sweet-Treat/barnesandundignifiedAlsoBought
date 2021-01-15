const mongoose = require('mongoose');
const username = ''; // use VIM to enter username
const pwd = ''; // use VIM to enter pwd

mongoose.connect(
  // 'mongodb://localhost/relatedbooks',
  `mongodb://${username}:${pwd}@52.9.216.153:27017/relatedbooks`,
  {useUnifiedTopology: true, useNewUrlParser: true},
  (err) => {
    if (err) {
      console.log(err);
    } else {
      console.log('Connected to database!');
    }
  }
);

const RelatedBooks = mongoose.Schema({
  isbn: String,
  title: String,
  author: String,
  genre: String,
});
// "ratings" intentionally left off Schema.
// This will be directly pulled from Reviews service.

const BookSchema = mongoose.Schema({
  rootIsbn: String,
  genre: String,
  relatedBooks: [RelatedBooks]
});

let Book = mongoose.model('Book', BookSchema);

let getData = (isbn, callback) => {
  // console.log(isbn.params.rootIsbn)
  Book.find({rootIsbn: isbn.params.rootIsbn}, (err, data) => {
    if (err) {
      callback(err, null);
    } else {
      callback(null, data);
    }
  }).limit(10);
};

module.exports.Book = Book;
module.exports.getData = getData;



/*

Next steps:
- What does "related books" algo look like?
- How & when to request from other services?
  - How to keep Ratings data current? (cache to DB)
  - Assume Product data is static (no cache)

  w/ proxy, Get request if cached product array is empty. otherwise not.


  // Cache to increase speed.
  // Product info won't change frequently
  // cache title, author, description immediately
  // Ratings info will change frequently
  //

*/