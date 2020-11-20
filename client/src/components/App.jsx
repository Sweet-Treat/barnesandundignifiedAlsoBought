import React from 'react';
import axios from 'axios';
import Carousel from './Carousel.jsx';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      data: [],
      isLoading: true,
      leftArrow: true,
      rightArrow: false
    };
    this.getData = this.getData.bind(this);
    this.leftClick = this.leftClick.bind(this);
    this.rightClick = this.rightClick.bind(this);
  }

  getData(isbn) {
    axios.get('http://localhost:3004/products/9780765326386/alsoBought')
      .then((res) => {
        console.log('data:', res.data)
        this.setState({
          data: res.data,
          isLoading: false,
        });
      })
      .catch((err) => { console.log('Axios GET Error', err); });
  }

  componentDidMount() {
    this.getData();
  }

  leftClick() {
    if (this.state.leftArrow === false) {
      { inputStyle = {
        border: 'solid blue'
      }; }

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