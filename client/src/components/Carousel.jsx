import React from 'react';
import StarRatings from 'react-star-ratings';


let Carousel = (props) => {
  let productData = props.books.productData[0].relatedBooks;
  let reviewsData = props.books.reviewsData;
  let limitRelatedBooks = '';
  let limitReviews = '';

  let randomImages = ['https://source.unsplash.com/random/150x175', 'https://source.unsplash.com/random/150x175', 'https://source.unsplash.com/random/150x175', 'https://source.unsplash.com/random/150x175', 'https://source.unsplash.com/random/150x175', 'https://source.unsplash.com/random/150x175', 'https://source.unsplash.com/random/150x175', 'https://source.unsplash.com/random/150x175', 'https://source.unsplash.com/random/150x175', 'https://source.unsplash.com/random/150x175'];

  if (props.books.leftArrow === true) {
    limitRelatedBooks = productData.slice(0,7);
    limitReviews = reviewsData.slice(0, 7);
  } else {
    limitRelatedBooks = productData.slice(3, 10);
    limitReviews = reviewsData.slice(3, 10);
  }

  limitRelatedBooks.forEach((prod, index) => {
    limitReviews.forEach(review => {
      prod['imgUrl'] = randomImages[index]
      return prod['avgRating'] = review.avgRating;
    })
  })

  // console.log(limitRelatedBooks);

// TODO
// - ratings only displays a single Number. Fix.
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


  let mapProductData = limitRelatedBooks.map((elem, index) => {

    console.log(elem.imgUrl)

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
        <img className="image" onClick={() => {props.titleClick(title)}} src='https://source.unsplash.com/random/150x175'></img><br/>
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
