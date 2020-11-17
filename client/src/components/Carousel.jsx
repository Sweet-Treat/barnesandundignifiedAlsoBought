import React from 'react';


let Carousel = (props) => {

  // TODO: map over res.data and setState //
  let data = props.books.data
  let randomImage = "https://source.unsplash.com/random/150x175";
  let leftArrowState = true;
  let rightArrowState = false;

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

  let map = data.map((elem) => {
    // Title should only be 35 characters long, then "..."
    let title = '';
    if (elem.title.length > 35) {
      title = elem.title.substring(0, 35) + '...';
    } else {
      title = elem.title;
    }

    return(
      <div class="carousel">
        <ul class="book">
    <img src='https://source.unsplash.com/random/150x175'></img><br/>
          {title}<br/>
          by {elem.author}<br/>
          {elem.rating}
        </ul>
      </div>
    )
  })

  return (
    <div>
      <div style={{display: 'flex'}}>
        <button><i class="arrow left" onClick={props.leftClick}></i></button>
        {map}
        <button><i class="arrow right" onClick={props.rightClick}></i></button>
      </div>
    </div>

  )
}

export default Carousel;

        {/* <div className="image">image placeholder</div>
        <div className="title">{elem.title}</div>
        <div className="author">{elem.author}></div>
        <div className="rating">{elem.rating}</div> */}


// ask other service for title and endpoint

// page load time can be slow = on page load asking service every time for data
// next iteration = cache data to enable faster render


// What do I need to get from other services?