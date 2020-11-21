import React from 'react';

let Carousel = (props) => {
  // Product Data
  let productData = props.books.productData[0].relatedBooks;
  let limitRelatedBooks = '';

  if (props.books.leftArrow === true) {
    limitRelatedBooks = productData.slice(0,7);
  } else {
    limitRelatedBooks = productData.slice(3, 10)
  }

  let randomImage = 'https://source.unsplash.com/random/150x175';

  // Reviews Data
  let reviewsData = props.books.reviewsData.map(review => {return review.avgRating})
// console.log('review data:', reviewsData)
  // console.log('reviews:', reviewsData.avgRating);
  // console.log('books:', limitRelatedBooks);

  console.log(props);

  // Both my DB and Nathan's will have 10 identical books in DB
  // Shared ISBN = 9780765326386
  // Related books = identical books
  // Algo logic (Basic) = if category === category of 9780765326386, then add to new array.
    // Map through new array and render that new map

    // let test = reviewsData.map((review) => {
    //   productData.forEach((prod, index) => {
    //     prod['review'] = review
    //   })
    // })
    // console.log('PROD DATA:', productData);



  // scroll logic
  // display only 7 images
  // left arrow set to "True" by default
  // if right arrow clicked, remove first 3, show last 3
  // mark right arrow as "True" and left as "False"
  // if left arrow clicked, rmeove last 3, show first 3
  // mark left arrow as "True" and right as "False"

  // default = slice(0, 7).
  // onClick left = no action
  // onclick right = re-render w/ slice (3,  10) && set right to false, left to true

  // EVENTUALLY - get arrow to gray out and No-Action if all the way to the right or left

  let mapProductData = limitRelatedBooks.map((elem) => {
    // Title should only be 35 characters long, then "..."
    let title = '';
    if (elem.title.length > 35) {
      title = elem.title.substring(0, 35) + '...';
    } else {
      title = elem.title;
    }

    return (
      <div class="carousel">
      <ul class="book">
        <img src={randomImage}></img><br/>
        {title}<br/>
        by {elem.author}<br/>
      </ul>
    </div>
    );
  });

  // let mapReviewData =

  return (
    <div>
      <div style={{display: 'flex'}}>
        <p><i class="arrow left" onClick={props.leftClick}></i></p>
        {mapProductData}
        <p><i class="arrow right" onClick={props.rightClick}></i></p>
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
