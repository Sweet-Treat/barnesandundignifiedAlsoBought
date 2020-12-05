import React from 'react';
import axios from 'axios';
import Carousel from './Carousel.jsx';
import Header from './Header.jsx';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      relatedBooks: [],
      leftArrow: true,
      rightArrow: false,
      isLoading: true,
    };
    this.getData = this.getData.bind(this);
    this.leftClick = this.leftClick.bind(this);
    this.rightClick = this.rightClick.bind(this);
    this.titleClick = this.titleClick.bind(this);
    this.authorClick = this.authorClick.bind(this);
  }

  // TODO //
// [] Proxy
// [] Get carousel to seamlessly scroll like B&N site
// [] V2 = cache actual data from Avigail's service as relatedBooks, instead of populating with fake data

  getData() {
    let queryUrl = window.location.search;
    let urlParams = new URLSearchParams(queryUrl);
    let paramIsbn = urlParams.get('isbn')

    axios.get(`http://localhost:3004/products/${paramIsbn}/alsoBought`)
    .then(res => {
      this.setState({
        relatedBooks: res.data,
        isLoading: false
      })
    })
    .catch((err) => {
      console.log('REACT GET ERROR:', err)
    })
  }

  componentDidMount() {
    this.getData();
  }

  leftClick() {
    if (this.state.leftArrow === false) {
      this.setState({
        leftArrow: true,
        rightArrow: false
      });
      console.log('left arrow clicked');
    }
  }

  rightClick() {
    if (this.state.rightArrow === false) {
      this.setState({
        leftArrow: false,
        rightArrow: true
      });
      console.log('right arrow clicked');
    }
  }

  titleClick(title) {
    alert (`Redirecting to ${title}`)
  }

  authorClick(author) {
    alert (`Redirecting to other books written by ${author}`)
  }

  render() {
    if (this.state.isLoading) {
      return (<h1 style={{textAlign: 'center'}}>Loading...</h1>);
    }

    return (
      <div>
        <Header />
        <Carousel
          relatedBooks={this.state.relatedBooks}
          leftArrow={this.state.leftArrow}
          rightArrow={this.state.rightArrow}
          leftClick={this.leftClick}
          rightClick={this.rightClick}
          titleClick={this.authorClick}
          authorClick={this.authorClick}
        />
      </div>
    );
  }
}

export default App;






//// If setting state w/ the URL ISBN param ////
// state === // currentBookIsbn: {isbn: '', genre: ''},
// bind === // this.getWindowParams = this.getWindowParams.bind(this);
// function ===
  // getWindowParams() {
  //   // URL param: http://localhost:3004/?isbn=9780765326386
  //   let queryUrl = window.location.search;
  //   let urlParams = new URLSearchParams(queryUrl);
  //   let paramIsbn = urlParams.get('isbn')
  //   console.log(paramIsbn);
  //   // console.log(urlParams.has('isbn'));

  //   // pass getData into getWindowParams as a callback (avoid infinite loop)
  //   // this.setState({
  //   //   currentBookIsbn: paramIsbn.toString()
  //   // }, () => {
  //   //   console.log(this.state.currentBookIsbn)
  //   //   this.getData()
  //   // })
  // }

  // in getData... // axios.get(`http://localhost:3004/products/${this.state.currentBookIsbn}/alsoBought`)

