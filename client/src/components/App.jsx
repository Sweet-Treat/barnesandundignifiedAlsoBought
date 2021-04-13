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

  getData() {
    let queryUrl = window.location.search;
    let urlParams = new URLSearchParams(queryUrl);
    let paramIsbn = urlParams.get('isbn');

    axios.get(`http://54.176.137.254:3004/products/${paramIsbn}/alsoBought`)
      .then(res => {
        this.setState({
          relatedBooks: res.data,
          isLoading: false
        });
      })
      .catch((err) => {
        console.log('REACT GET ERROR:', err);
      });
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
    alert (`Redirecting to your next book: ${title}`);
  }

  authorClick(author) {
    alert (`Redirecting to other books written by ${author}`);
  }

  render() {
    if (this.state.isLoading) {
      return (
      <div>
        <div className="header">
          <Header />
        </div>
        <h1 style={{textAlign: 'center'}}>Loading...</h1>
      </div>
      )}

    return (
      <div className="books-carousel">
        <Header />
        <Carousel
          relatedBooks={this.state.relatedBooks}
          leftArrow={this.state.leftArrow}
          rightArrow={this.state.rightArrow}
          leftClick={this.leftClick}
          rightClick={this.rightClick}
          titleClick={this.titleClick}
          authorClick={this.authorClick}
        />
      </div>
    );
  }
}

export default App;
