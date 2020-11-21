import React from 'react';
import axios from 'axios';
import Carousel from './Carousel.jsx';
import GetReviews from './GetReviews.jsx';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      productData: [],
      reviewsData: [],
      leftArrow: true,
      rightArrow: false,
      isLoading: true,
    };
    this.getData = this.getRatingsData.bind(this);
    this.leftClick = this.leftClick.bind(this);
    this.rightClick = this.rightClick.bind(this);
  }

  getData(isbn) {
    Promise.all([
      axios.get(`http://localhost:8000/reviewssummary/9781524763169`),
      axios.get(`http://localhost:8000/reviewssummary/9781571311931`),
      axios.get(`http://localhost:8000/reviewssummary/9781250793676`),
      axios.get(`http://localhost:8000/reviewssummary/9780316187183`),
      axios.get(`http://localhost:8000/reviewssummary/9780670020553`),
      axios.get(`http://localhost:8000/reviewssummary/9780765386489`),
      axios.get(`http://localhost:8000/reviewssummary/9781250088482`),
      axios.get(`http://localhost:8000/reviewssummary/9781524796372`),
      axios.get(`http://localhost:8000/reviewssummary/9780062667632`),
      axios.get(`http://localhost:8000/reviewssummary/9781982157999`),
      axios.get('http://localhost:3004/products/9780765326386/alsoBought'),
    ])
    .then( ([res1, res2, res3, res4, res5, res6, res7, res8, res9, res10, res11]) => {
      this.setState({
        productData: res11.data,
        reviewsData: [res1.data, res2.data, res3.data, res4.data, res5.data, res6.data, res7.data, res8.data, res9.data, res10.data],
        isLoading: false
      })
    })
    .catch(err => {
      console.log('PROMISE ALL Error:', err);
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

  render() {
    if (this.state.isLoading) {
      return (<h1 style={{textAlign: 'center'}}>Loading...</h1>);
    }

    return (
      <div>
        <h2 class="header">
          Customers Who Bought This Item Also Bought
        </h2>
        <Carousel
          books={this.state}
          leftClick={this.leftClick}
          rightClick={this.rightClick}
        />
      </div>
    );
  }
}

export default App;