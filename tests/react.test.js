import Enzyme, { shallow, mount, render } from 'enzyme';
import React from 'react';
import App from '../client/src/components/App.jsx';
import Carousel from '../client/src/components/Carousel.jsx';
import "@babel/polyfill";

const clickFn = jest.fn();

describe('App', () => {
  it('should render without crashing', () => {
    const appComponent = shallow(<App />);
    expect(appComponent).toMatchSnapshot();
  });

  it('renders a header', () => {
    const wrapper = mount(<App variant="h2" />);
    const elem = wrapper.find('h1');
    expect(elem.length).toBe(1);
  })
});

describe('Props are passed correctly', () => {
  const reviewsData = {
    avgRating: 1.9,
    totalReviews: 27
  }
  it("accepts item data props", () => {
    const wrapper = mount(<App reviewsData={reviewsData} />);
    expect(wrapper.props().reviewsData).toEqual(reviewsData);
  });

  // it("should update state on click", () => {
  //   const wrapper = mount(<App onClick={clickFn} />);
  //   const handleClick = jest.spyOn(React, "setState");
  //   handleClick.mockImplementation(isLoading => [isLoading, clickFn]);

  //   wrapper.find("#para1").simulate("click");
  //   expect(isLoading).toBeTruthy();
  // });

})
