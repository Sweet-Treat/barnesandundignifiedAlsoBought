import React from 'react';
import StarRatings from 'react-star-ratings';

let Carousel = (props) => {
  let productData = props.relatedBooks;
  let limitProductData;

  if (props.leftArrow) {
    limitProductData = productData.slice(0, 7);
  } else if (props.rightArrow) {
    limitProductData = productData.slice(3, 10);
  }

  let mapRelatedBooks = limitProductData.map((elem, index) => {
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
          <img className="image" onClick={() => { props.titleClick(title); }} src={elem.img}></img><br/>
          <div className="title" onClick={() => { props.titleClick(title); }}>{title}</div>
          <div onClick={() => { props.authorClick(elem.author); }}>by {elem.author}</div>
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
        {mapRelatedBooks.slice(0, 7)}
        <p><i className="arrow right" onClick={props.rightClick}></i></p>
      </div>
    </div>
  );
};

export default Carousel;



// TODO
// - carousel doesn't "scroll" seamlessly
// FUTURE CSS - get arrow to gray out and No-Action if all the way to the right or left

////////

// V2 CONSIDERATIONS //
// page load time can be slow = on page load asking service every time for data
// next iteration = cache data to enable faster render

// "RELATED" ALGO IDEAS
// What do I need to get from other services?
// Fulfillment service/purchase history
// What are other orders if someone bought this book?
// Which should we show? (genre)
// Most frequently purchased book in genre

////////

////CHANGED DATA MANIPULATION TO LIVE ON SERVER. TEMPORARILY KEEPING FOR REFERENCE////
// // Algo to confirm the same Book Genre, then limit to 7 viewable books depending on which arrow is clicked
//   // Left arrow clicked
//   if (props.books.leftArrow === true) {
//     productData.forEach(relatedBook => {
//       if (originalGenre === relatedBook.genre) {
//         limitRelatedBooks.push(relatedBook)
//       }
//     })
//     limitRelatedBooks = limitRelatedBooks.slice(0,7);
//     for (var i = 0; i < reviewsData.length; i++) {
//       if (reviewsData[i] !== reviewsData[i+1]) {
//         limitReviews = reviewsData.slice(0, 7);
//       }
//     }
//     limitImages = randomImages.slice(0,7);

//   // Right arrow clicked
//   } else {
//     productData.forEach(relatedBook => {
//       if (originalGenre === relatedBook.genre) {
//         limitRelatedBooks.push(relatedBook)
//       }
//     })
//     limitRelatedBooks = limitRelatedBooks.slice(3,10);
//     for (var j = 0; j < reviewsData.length; j++) {
//       if (reviewsData[j] !== reviewsData[j+1]) {
//         limitReviews = reviewsData.slice(3, 10);
//       }
//     }
//     limitImages= randomImages.slice(3,10);
//   }

// // Combine data from both DBs after filtered above
// for (var i = 0; i < limitRelatedBooks.length; i++) {
//   combinedDB[i] = {
//     author: limitRelatedBooks[i].author,
//     genre: limitRelatedBooks[i].genre,
//     isbn: limitRelatedBooks[i].isbn,
//     title: limitRelatedBooks[i].title,
//     _id: limitRelatedBooks[i]._id,
//     totalReviews: limitReviews[i].totalReviews,
//     avgRating: limitReviews[i].avgRating
//   }
// }