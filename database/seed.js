const db = require('./index.js');
const Book = require('./index.js');
const mongoose = require('mongoose');

let authorGenerator = () => {
  let firstName = ['Joe', 'Susan', 'Jake', 'Cherise', 'Ann', 'Alex', 'Jess', 'Daniel', 'Mike', 'Amber', 'Walter', 'Adney',
    'Aldo', 'Aleyn', 'Alford', 'Amherst', 'Annabeth', 'Annalynn',
    'Araminta', 'Ardys', 'Ashland', 'Jax', 'Jaxon', 'Jay', 'Jet'];
  let lastName = ['Smith', 'Lewis', 'Miller', 'Hill', 'Jones', 'Silva', 'Garrett', 'Johnson', 'Garcia', 'Davis', 'Brighton', 'Broderick', 'Bronson', 'Bryce', 'Burdette', 'Burle', 'Byrd', 'Byron', 'Cabal', 'Cage', 'Cahir', 'Cavalon', 'Peony', 'Petunia', 'Pixie'];
  let fullName = [];

  for (var i = 0; i < 100; i++) {
    var random = Math.floor(Math.random() * 25);
    fullName.push(`${firstName[random]} ${lastName[random]}`);
  }

  return fullName;
};
let authors = authorGenerator();

//////////////////////////////////////

let isbnGenerator = () => {
  let isbnArr = [];

  for (var i = 0; i < 100; i++) {
    let max = Math.pow(10, 10);
    var min = max / 10;
    var number = Math.floor(Math.random() * min) + min;


    isbnArr.push(parseInt('979' + ('' + number).substring(0)));
  }
  return isbnArr;
};
let isbn = isbnGenerator();

//////////////////////////////////////

let titleGenerator = () => {
  let nouns = ['Actor', 'Gold', 'Painting', 'Advertisement', 'Grass', 'Parrot', 'Afternoon', 'Greece', 'Pencil', 'Airport', 'Guitar',
    'Piano', 'Ambulance', 'Hair', 'Pillow', 'Animal', 'Hamburger', 'Pizza', 'Answer', 'Helicopter', 'Planet', 'Apple', 'Helmet', 'Plastic', 'Army'];
  let adjectives = ['Alive', 'Better', 'Careful', 'Careful', 'Clever', 'Dead', 'Easy', 'Famous', 'Gifted', 'Hallowed', 'Helpful', 'Important',
    'Inexpensive', 'Mealy', 'Mushy', 'Diligent', 'Poor', 'Powerful', 'Rich', 'Shy', 'Tender', 'Unimportant', 'Uninterested', 'Vast', 'Wrong'];
  let verbs = ['Act', 'Answer', 'Approve', 'Arrange', 'Break', 'Build', 'Buy', 'Coach', 'Color', 'Cough', 'Create', 'Complete',
    'Cry', 'Dance', 'Describe', 'Draw', 'Drink', 'Eat', 'Edit', 'Enter', 'Exit', 'Imitate', 'Invent', 'Jump', 'Laugh'];

  let fullTitle = [];

  for (var i = 0; i < 100; i++) {
    var random = Math.floor(Math.random() * 25);
    fullTitle.push(`${adjectives[random]} ${nouns[random]} ${verbs[random]}`);
  }

  return fullTitle;
};
let titles = titleGenerator();

//////////////////////////////////////

let ratingGenerator = () => {
  let ratings = [0, 0.5, 1, 1.5, 2, 2.5, 3, 3.5, 4, 4.5, 5];
  let randomRatings = [];

  for (var i = 0; i < 100; i++) {
    var number = Math.floor(Math.random() * ratings.length);
    randomRatings.push(ratings[number]);
  }
  return randomRatings;
};
let ratings = ratingGenerator();

//////////////////////////////////////

let categoryGenerator = () => {
  let category = ['Nonfiction', 'Fiction', 'History', 'Fantasy', 'Romance', 'Home and garden', 'Graphic novel', 'Humor', 'Autobiography', 'Business/economics', 'Cookbook', 'Diary'];
  let randomCategory = [];

  for (var i = 0; i < 100; i++) {
    var number = Math.floor(Math.random() * category.length);
    randomCategory.push(category[number]);
  }
  return randomCategory;
};
let category = categoryGenerator();

//////////////////////////////////////

// Seeded w/ 10 real books, then 100 fake books
let seedData = () => {
  let results = [
    {
      rootIsbn: 9781524763169, // A Promised Land
      genre: 'Autobiography',
      relatedBooks: []
    },
    {
      rootIsbn: 9781571311931, // World of Wonders: In Praise of Fireflies, Whale Sharks, and Other Astonishments (B&N Exclusive Gift Edition)
      genre: 'Nonfiction',
      relatedBooks: []
    },
    {
      rootIsbn: 9780765326386, // Rhythm of War (Stormlight Archive Series #4)
      genre: 'Fiction',
      relatedBooks: [
        {
          isbn: '3549766819492',
          title: 'ut voluptate deserunt',
          author: 'Andrea Adamson',
          genre: 'Fiction'
        },
        {
          isbn: '4888082539964',
          title: 'labore proident sunt',
          author: 'Carol Baskins',
          genre: 'Fiction'
        },
        {
          isbn: '4653431348365',
          title: 'ullamco labore minim',
          author: 'Chloe Anne',
          genre: 'Fiction'
        },
        {
          isbn: '3336296187779',
          title: 'incididunt quis deserunt',
          author: 'Tony LeTiger',
          genre: 'Fiction'
        },
        {
          isbn: '3431282961667',
          title: 'irure magna minim',
          author: 'Emily Jackson',
          genre: 'Fiction'
        },
        {
          isbn: '8360466769743',
          title: 'commodo pariatur elit',
          author: 'Adam Biscuit',
          genre: 'Fiction'
        },
        {
          isbn: '8017965135457',
          title: 'culpa dolore deserunt',
          author: 'Tom Tomlinson',
          genre: 'Fiction'
        },
        {
          isbn: '2971458493741',
          title: 'sint quis irure',
          author: 'John Johnson',
          genre: 'Fiction'
        },
        {
          isbn: '1866703983316',
          title: 'ea anim minim',
          author: 'Captain Crunch',
          genre: 'Fiction'
        },
        {
          isbn: '2611572491071',
          title: 'cillum nulla officia',
          author: 'Andrew Swords',
          genre: 'Fiction'
        }
      ]
    },
    {
      rootIsbn: 9780316187183, // The Trouble with Peace
      genre: 'Fantasy',
      relatedBooks: []
    },
    {
      rootIsbn: 9780670020553, // The Magicians (Magicians Series #1)
      genre: 'Graphic novel',
      relatedBooks: [
        {
          isbn: '4122189963635',
          title: 'pariatur id sint',
          author: 'Joe Smith',
          genre: 'Graphic novel'
        },
        {
          isbn: '8878675108493',
          title: 'voluptate culpa id',
          author: 'Ann Jones',
          genre: 'Graphic novel'
        },
        {
          isbn: '5295358919192',
          title: 'et do incididunt',
          author: 'Andy Cage',
          genre: 'Graphic novel'
        },
        {
          isbn: '2719906981322',
          title: 'ex irure duis',
          author: 'Jaxon Peony',
          genre: 'Graphic novel'
        },
        {
          isbn: '6406575419412',
          title: 'aute id pariatur',
          author: 'Alfonso Wilson',
          genre: 'Graphic novel'
        },
        {
          isbn: '7839772481636',
          title: 'eiusmod cillum pariatur',
          author: 'Alford Burdette',
          genre: 'Graphic novel'
        },
        {
          isbn: '2481732987414',
          title: 'pariatur non anim',
          author: 'Tony LeTiger',
          genre: 'Graphic novel'
        },
        {
          isbn: '6211819984756',
          title: 'proident reprehenderit nulla',
          author: 'John Jones',
          genre: 'Graphic novel'
        },
        {
          isbn: '6484958739042',
          title: 'sint excepteur eu',
          author: 'Nick Jones',
          genre: 'Graphic novel'
        },
        {
          isbn: '2691079544745',
          title: 'exercitation nulla ipsum',
          author: 'Beth Simpson',
          genre: 'Graphic novel'
        }
      ]
    },
    {
      rootIsbn: 9780765386489, // Soleri: A Novel
      genre: 'Fantasy',
      relatedBooks: []
    },
    {
      rootIsbn: 9781250088482, // The Empire\'s Ghost: A Novel
      genre: 'Fiction',
      relatedBooks: []
    },
    {
      rootIsbn: 9781524796372, // Lost Roses
      genre: 'Romance',
      relatedBooks: []
    },
    {
      rootIsbn: 9780062667632, // Leave the World Behind Alam
      genre: 'Nonfiction',
      relatedBooks: []
    },
    {
      rootIsbn: 9781982157999, // The Answer Is...: Reflections on My Life
      genre: 'Diary',
      relatedBooks: []
    },
  ];


  for (var i = 0; i < 10; i++) {
    var random = Math.floor(Math.random() * 100);

    results.forEach(elem => {
      elem.relatedBooks.push({
        isbn: isbn[random],
        title: titles[random],
        author: authors[random],
        genre: elem.genre
      });
    });
  }
  return results;
};

const sampleBooks = seedData();

const insertSampleBooks = function() {
  Book.Book.create(sampleBooks)
    .then(() => mongoose.connection.close());
};

insertSampleBooks();