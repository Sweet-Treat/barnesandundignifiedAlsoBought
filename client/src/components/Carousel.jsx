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
    // Titles longer than 35 characters long are truncated with "..."
    let title = '';
    if (elem.title.length > 35) {
      title = elem.title.substring(0, 35) + '...';
    } else {
      title = elem.title;
    }

    return (
        <ul className="book" key={index}>
          <img className="image" onClick={() => { props.titleClick(title); }} src={elem.img}></img><br/>
          <div className="title" onClick={() => { props.titleClick(title); }}>{title}</div>
          <div className="author" onClick={() => { props.authorClick(elem.author); }}>by {elem.author}</div>
          <div className="stars">
            <StarRatings
              rating={elem.avgRating}
              starDimension="20px"
              starSpacing=".5px"
              starRatedColor="orange"
              starEmptyColor="lightGrey"
            />
          </div>
        </ul>
    );
  });

  return (
    <div>
      <div className='carousel'>
        <p><i className="arrow left" onClick={props.leftClick}></i></p>
        {mapRelatedBooks}
        <p><i className="arrow right" onClick={props.rightClick}></i></p>
      </div>
    </div>
  );
};

export default Carousel;






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


// <div className='carousel' style={{display: 'flex'}}>