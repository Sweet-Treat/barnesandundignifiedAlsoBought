import React from 'react';
import ReactDOM from 'react-dom';
import axios from 'axios';

import Carousel from './components/Carousel.jsx'


class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      data: [],
      isLoading: true
    }
    this.getData = this.getData.bind(this);
  }

  getData(data) {
    axios.get('http://localhost:3004/getBooks')
    .then((res) => {
      // console.log("DATA:", res.data)
      this.setState({
        data: res.data,
        isLoading: false
      })
    })
    .catch((err) => {console.log('Axios GET Error', err)})
  }

  componentDidMount() {
    this.getData()
  }

  render() {
    if (this.state.isLoading) {
      return (<h1 style={{textAlign: "center"}}>Loading...</h1>)
    }

    return (
      <Carousel books={this.state}/>
    )
  }

}

ReactDOM.render(<App />, document.getElementById('root'));
