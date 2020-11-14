import React from 'react';


let Carousel = (props) => {

  // TODO: map over res.data and setState //
  let data = props.books.data
  let map = data.map((elem) => {
    return(
      <div class="carousel">
        <ul class="book">
          IMAGE<br/>
          {elem.title}<br/>
          {elem.author}<br/>
          {elem.rating}
        </ul>
      </div>
    )
  })

  return (
    <div>
      <button class="left" onClick={props.leftClick}>Left</button>
      <div>{map}</div>
      <button class="right" onClick={props.rightClick}>Right</button>
    </div>

  )
}

export default Carousel;

        {/* <div className="image">image placeholder</div>
        <div className="title">{elem.title}</div>
        <div className="author">{elem.author}></div>
        <div className="rating">{elem.rating}</div> */}