const mongoose = require('mongoose');
const username = ''; // use VIM to enter username
const pwd = ''; // use VIM to enter pwd

mongoose.connect(
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
// "Ratings" intentionally left off Schema.
// This will be directly pulled from Reviews service.

const BookSchema = mongoose.Schema({
  rootIsbn: String,
  genre: String,
  relatedBooks: [RelatedBooks]
});

let Book = mongoose.model('Book', BookSchema);

let getData = (isbn, callback) => {
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
