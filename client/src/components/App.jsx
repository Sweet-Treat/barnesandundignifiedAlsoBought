import React from 'react';
import axios from 'axios';
import Carousel from './Carousel.jsx';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      currentBook: {isbn: '9780765326386', genre: 'Fantasy'},
      relatedBooks: [],
      reviewsData: [],
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

  getData(isbn) {
    axios.get(`http://localhost:3004/products/${this.state.currentBook.isbn}/alsoBought`)
    .then((res) => {
      let sameGenre = []
      res.data[0].relatedBooks.map((related) => {
        if (related.genre === this.state.currentBook.genre) {
          sameGenre.push(related);
        }
      })
      this.setState({
        relatedBooks: sameGenre
      })
      return sameGenre;
    })
    .then((res) => {
      return Promise.all([
        axios.get(`http://localhost:8000/reviewssummary/${res[0].isbn}`),
        axios.get(`http://localhost:8000/reviewssummary/${res[1].isbn}`),
        axios.get(`http://localhost:8000/reviewssummary/${res[2].isbn}`),
        axios.get(`http://localhost:8000/reviewssummary/${res[3].isbn}`),
        axios.get(`http://localhost:8000/reviewssummary/${res[4].isbn}`),
        axios.get(`http://localhost:8000/reviewssummary/${res[5].isbn}`),
        axios.get(`http://localhost:8000/reviewssummary/${res[6].isbn}`),
        axios.get(`http://localhost:8000/reviewssummary/${res[7].isbn}`),
        axios.get(`http://localhost:8000/reviewssummary/${res[8].isbn}`),
        axios.get(`http://localhost:8000/reviewssummary/${res[9].isbn}`),
      ])
    })
    .then(([res1, res2, res3, res4, res5, res6, res7, res8, res9, res10]) => {
      this.setState({
        reviewsData: [res1.data, res2.data, res3.data, res4.data, res5.data, res6.data, res7.data, res8.data, res9.data, res10.data],
        isLoading: false
      })
    })
    .catch(err => {
      console.log('PROMISE ALL Error:', err);
    })
  }


  // getData(isbn) {
  //   // axios.get('http://localhost:3004/products/9780765326386/alsoBought')
  //   // .then((res) => {console.log(res.data)})
  //   Promise.all([
  //     axios.get(`http://localhost:8000/reviewssummary/9781524763169`),
  //     axios.get(`http://localhost:8000/reviewssummary/9781571311931`),
  //     axios.get(`http://localhost:8000/reviewssummary/9781250793676`),
  //     axios.get(`http://localhost:8000/reviewssummary/9780316187183`),
  //     axios.get(`http://localhost:8000/reviewssummary/9780670020553`),
  //     axios.get(`http://localhost:8000/reviewssummary/9780765386489`),
  //     axios.get(`http://localhost:8000/reviewssummary/9781250088482`),
  //     axios.get(`http://localhost:8000/reviewssummary/9781524796372`),
  //     axios.get(`http://localhost:8000/reviewssummary/9780062667632`),
  //     axios.get(`http://localhost:8000/reviewssummary/9781982157999`),
  //     axios.get(`http://localhost:3004/products/${this.state.currentBook.isbn}/alsoBought`),
  //   ])
  //   .then(([res1, res2, res3, res4, res5, res6, res7, res8, res9, res10, res11]) => {
  //     this.setState({
  //       relatedBooks: res11.data,
  //       reviewsData: [res1.data, res2.data, res3.data, res4.data, res5.data, res6.data, res7.data, res8.data, res9.data, res10.data],
  //       isLoading: false
  //     })
  //     // console.log(this.state)
  //   })
  //   .catch(err => {
  //     console.log('PROMISE ALL Error:', err);
  //   })
  // }



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
        <h1 className="header">Customers Who Bought This Item Also Bought</h1>
        <Carousel
          books={this.state}
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