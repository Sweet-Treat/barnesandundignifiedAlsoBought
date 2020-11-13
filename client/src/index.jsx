import React from 'react';
import ReactDOM from 'react-dom';
import Carousel from './components/Carousel.jsx'

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      something: 0
    }
  }

  render() {
    return (
      <Carousel />
    )
  }
}

ReactDOM.render(<App />, document.getElementById('root'));
