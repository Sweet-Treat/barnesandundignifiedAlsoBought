import React from 'react';
import StarRatings from 'react-star-ratings';


let Carousel = (props) => {
  console.log('PROPS:', props);
  let originalGenre = props.books.currentBook.genre;
  let productData = props.books.relatedBooks;
  let reviewsData = props.books.reviewsData;
  let limitRelatedBooks = [];
  let limitReviews = [];
  let combinedDB = [];


  let randomImages = [
    'https://prodimage.images-bn.com/pimages/9780765326386_p0_v8_s550x406.jpg',
    'https://prodimage.images-bn.com/pimages/9780316187183_p0_v3_s550x406.jpg',
    'https://prodimage.images-bn.com/pimages/9781250813602_p0_v1_s550x406.jpg',
    'https://picsum.photos/id/1/150/175',
    'https://picsum.photos/id/10/150/175',
    'https://picsum.photos/id/100/150/175',
    'https://picsum.photos/id/1000/150/175',
    'https://picsum.photos/id/1001/150/175',
    'https://picsum.photos/id/1002/150/175',
    'https://picsum.photos/id/1003/150/175',
  ];
  let limitImages = [];


// Algo to confirm the same Book Genre, then limit to 7 viewable books depending on which arrow is clicked
  // Left arrow clicked
  if (props.books.leftArrow === true) {
    productData.forEach(relatedBook => {
      if (originalGenre === relatedBook.genre) {
        limitRelatedBooks.push(relatedBook)
      }
    })
    limitRelatedBooks = limitRelatedBooks.slice(0,7);
    for (var i = 0; i < reviewsData.length; i++) {
      if (reviewsData[i] !== reviewsData[i+1]) {
        limitReviews = reviewsData.slice(0, 7);
      }
    }
    limitImages = randomImages.slice(0,7);

  // Right arrow clicked
  } else {
    productData.forEach(relatedBook => {
      if (originalGenre === relatedBook.genre) {
        limitRelatedBooks.push(relatedBook)
      }
    })
    limitRelatedBooks = limitRelatedBooks.slice(3,10);
    for (var j = 0; j < reviewsData.length; j++) {
      if (reviewsData[j] !== reviewsData[j+1]) {
        limitReviews = reviewsData.slice(3, 10);
      }
    }
    limitImages= randomImages.slice(3,10);
  }

// Combine data from both DBs after filtered above
for (var i = 0; i < limitRelatedBooks.length; i++) {
  combinedDB[i] = {
    author: limitRelatedBooks[i].author,
    genre: limitRelatedBooks[i].genre,
    isbn: limitRelatedBooks[i].isbn,
    title: limitRelatedBooks[i].title,
    _id: limitRelatedBooks[i]._id,
    totalReviews: limitReviews[i].totalReviews,
    avgRating: limitReviews[i].avgRating
  }
}

// TODO
// - image only displays a single image. Fix.
// - carousel doesn't "scroll" seamlessly
// - improve logic of choosing data from my DB and Nathan's
// FUTURE CSS - get arrow to gray out and No-Action if all the way to the right or left


  // Both my DB and Nathan's will have 10 identical books in DB
  // Shared ISBN = 9780765326386
  // Related books = identical books
  // Algo logic (Basic) = if category === category of 9780765326386, then add to new array.
    // Map through new array and render that new map


// HD QUESTIONS
// - Why doesn't Unsplash random image produce a new image w/ each iteration? (look up image API)
// - How can I map both Product & Review data together?


  let mapProductData = combinedDB.map((elem, index) => {
    // Title's longer than 35 characters long are truncated with "..."
    let title = '';
    if (elem.title.length > 35) {
      title = elem.title.substring(0, 35) + '...';
    } else {
      title = elem.title;
    }

    return (
      <div className="carousel">
      <ul className="book">
        <img className="image" onClick={() => {props.titleClick(title)}} src={limitImages[index]}></img><br/>
        <div className="title" onClick={() => {props.titleClick(title)}}>{title}</div>
        <div onClick={() => {props.authorClick(elem.author)}}>by {elem.author}</div>
        <div>
          <StarRatings
            rating={elem.avgRating}
            starDimension="20px"
            starSpacing=".5px"
            starRatedColor="orange"
            starEmptyColor="lightGrey"
          />
        </div>
      </ul>
    </div>
    );
  });

  return (
    <div>
      <div style={{display: 'flex'}}>
        <p><i className="arrow left" onClick={props.leftClick}></i></p>
        {mapProductData}
        <p><i className="arrow right" onClick={props.rightClick}></i></p>
      </div>
    </div>

  );
};

export default Carousel;



// ask other service for title and endpoint

// page load time can be slow = on page load asking service every time for data
// next iteration = cache data to enable faster render


// What do I need to get from other services?

// Fulfillment service/purchase history
// What are other orders if someone bought this book?
// Which should we show? (genre)
// Most frequently purchased book in genre
