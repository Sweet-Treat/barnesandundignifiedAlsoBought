const mongoose = require('mongoose');

mongoose.connect(
  'mongodb://localhost/relatedbooks',
  {useUnifiedTopology: true, useNewUrlParser: true},
  () => { console.log('Connected to database!'); }
);

// This is relational data I own
let bookSchema = mongoose.Schema({
  rootIsbn: String,
  relatedBooks: [{
    isbn: String,
    title: String,
    author: String,
    category: String,
    rating: Number
  }]
})

let Book = mongoose.model('Book', bookSchema);

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

module.exports = Book;
module.exports.getData = getData;


// Now that I have my data, I need to pull data from other DBs

/*
TODO:
1. [x] Research representing mongo collection of array of books w/ attributes
2. [x] Rewrite schema
3. [x] Refactor seeding script so it will write to the new schema
4. [x] Render to the DOM the related books from DB

Next steps:
- What does algo look like?
- How & when to request from other services?
  - How to keep Ratings data current?
  - Assume Product data is static
*/


// FUTURE STEP: cache product data to DB // how to have array of book properties?
// w/ proxy, Get request if cached product array is empty. otherwise not.

// Cache to increase speed.
  // Product info won't change frequently
    // cache title, author, description immediately
  // Ratings info will change frequently
    //



// first attempt schema //
// let bookSchema = mongoose.Schema({
//   rootIsbn: String,
//   isbn: String,
//   title: String,
//   author: String,
//   rating: Number,
//   category: String
// });