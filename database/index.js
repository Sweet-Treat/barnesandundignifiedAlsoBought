const mongoose = require('mongoose');

mongoose.connect(
  'mongodb://localhost/relatedbooks',
  {useUnifiedTopology: true, useNewUrlParser: true},
  () => { console.log('Connected to database!'); }
);

const RelatedBooks = mongoose.Schema({
  isbn: String,
  title: String,
  author: String,
  genre: String,
});
// "ratings" intentionally left off Schema.
// This will be directly pulled from Reviews service.

// build V1 w/o ratings, and simply build to GET ratings from Nathan's data.
// RATINGS DEFAULT in case Nathan's service is down
// Pull down Nathan's service, run locally, try to get Ratings from his service

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