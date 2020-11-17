import React from 'react';
import axios from 'axios';
import Carousel from './Carousel.jsx'

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      data: [],
      isLoading: true
    }
    this.getData = this.getData.bind(this);
    this.leftClick = this.leftClick.bind(this);
    this.rightClick = this.rightClick.bind(this);
  }

  getData(isbn) {
    axios.get(`http://localhost:3004/getBooks/9780765326386`)
    .then((res) => {
      // console.log("DATA:", res.data)
      this.setState({
        data: res.data,
        isLoading: false,
        leftArrow: true,
        rightArrow: false
      })
    })
    .catch((err) => {console.log('Axios GET Error', err)})
  }

  componentDidMount() {
    this.getData()
  }

  leftClick() {
    // console.log('left!');
    this.setState({
      leftArrow: true,
      rightArrow: false
    })
  }

  rightClick() {
    // console.log('right!');
    this.setState({
      leftArrow: false,
      rightArrow: true
    })
  }

  render() {
    if (this.state.isLoading) {
      return (<h1 style={{textAlign: "center"}}>Loading...</h1>)
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
    )
  }
}

export default App;
