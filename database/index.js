const mongoose = require('mongoose');

mongoose.connect(
  'mongodb://localhost/relatedbooks',
  {useUnifiedTopology: true, useNewUrlParser: true},
  () => {console.log('Connected to database!')}
);