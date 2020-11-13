const mongoose = require('mongoose');

mongoose.connect(
  'mongodb://localhost/relatedbooks',
  {useUnifiedTopology: true, useNewUrlParser: true},
  () => {console.log('Connected to database!')}
);

let bookSchema = mongoose.Schema({
  isbn: Number,
  title: String,
  author: String,
  rating: Number
})

let Book = mongoose.model('Book', bookSchema);

module.exports = Book;