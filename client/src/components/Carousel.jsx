import React from 'react';


let Carousel = (props) => {

  // TODO: map over res.data and setState //
  let data = props.books.data
  let map = data.map((elem) => {
    return(
      <li>
        <div className="image">image placeholder</div>
        <div className="title">{elem.title}</div>
        <div className="author">{elem.author}</div>
        <div className="rating">{elem.rating}</div>
      </li>
    )
  })

  return (
    <div>{map}</div>
  )
}

export default Carousel;