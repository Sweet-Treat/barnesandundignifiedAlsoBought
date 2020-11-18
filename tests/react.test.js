// import Enzyme from 'enzyme';
import Enzyme, { shallow, mount, render } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import React from 'react';
import App from '../client/src/components/App.jsx';
import Carousel from '../client/src/components/Carousel.jsx';


Enzyme.configure({ adapter: new Adapter() });

describe('<App />', () => {
  it('renders one <Carousel /> component', () => {
    const wrapper = shallow(<App />);
    expect(wrapper.find(Carousel)).to.have.lengthOf(1);
  });

//   it('should render without throwing an error', function() {
//     expect(shallow(<App />).contains(<div> <h2 class="header">
//     Customers Who Bought This Item Also Bought
//   </h2>
//   <Carousel
//     books={this.state}
//     leftClick={this.leftClick}
//     rightClick={this.rightClick}
//   />
// </div>)).toBe(true);
//   });
});
