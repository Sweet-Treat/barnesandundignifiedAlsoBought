import Enzyme, { shallow, mount, render } from 'enzyme';
import React from 'react';
import App from '../client/src/components/App.jsx';
import Carousel from '../client/src/components/Carousel.jsx';
import "@babel/polyfill";

const clickFn = jest.fn();

describe('App', () => {
  let wrapper;

  beforeEach(() => {
    wrapper = shallow(<App variant="h1" carousel={true}/>)
  });

  it('should render without crashing', () => {
    const appComponent = shallow(<App />);
    expect(appComponent).toMatchSnapshot();
  });

  it('renders a child component', () => {
    const carousel = <Carousel />
    expect(wrapper.contains(carousel)).toBeTruthy();
    // expect(wrapper.containsMatchingElement(<Carousel />)).toEqual(true);
    // expect(wrapper.find(carousel)).toHaveLength(1);
    // expect(wrapper.prop('carousel')).to.equal(true);

    // expect(wrapper.find(Carousel).length).to.equal(1);
  })

});

describe('Header', () => {
  let wrapper;

  beforeEach(() => {
    wrapper = shallow(<App variant="h1" />)
  });

  it('renders a header', () => {
    const elem = wrapper.find('h1');
    expect(elem.length).toBe(1);
    expect(elem).toMatchObject({})
  })

})

describe('Test the Carousel component', () => {

  var books, wrapper;

  beforeAll(() => {
    books = {
      currentBook: {
          genre: 'Fantasy',
          isbn: "9780765326386",
        }
      }


    return wrapper = shallow(<Carousel books={books} />);
  });

  it('it should have a title', () => {
    expect(wrapper.find('.title')).toHaveLength(1);
  });
});





// describe('Carousel', () => {
//   var productData, books, currentBook;
//   let wrapper = shallow(<Carousel productData={
//     books = {
//       currentBook:
//         {isbn:'9780765326386', genre:'Fantasy'}
//       }
//     }
//   />);
//   // let reviewsData = '';
//   // let currentBook = '';

//   // var wrapper, books, currentBook;

//   beforeEach(() => {
//     books = {
//       currentBook: {
//         isbn: "9780765326386",
//         genre: "Fantasy"
//       }

//     }
//     // return wrapper = shallow(<Carousel currentBook={currentBook} />);
//   })

//   it("accepts item data props", () => {
//     // expect(wrapper.exists('.title')).to.equal(true);

//     // expect(wrapper.find('.title')).exist().to.equal(true);
//     expect(wrapper.find('.title').exist()).toBeTruthy();

//     // expect(wrapper.find('.title')).toHaveLength(1);
//   });

// });

describe('App', () => {
  let reviewsData = {
    avgRating: 1.9,
    totalReviews: 27
  }

  it("passes down state as props", () => {
    const wrapper = mount(<App reviewsData={reviewsData} />);
    expect(wrapper.props().reviewsData).toEqual(reviewsData);
  });
});

// describe('Click', () => {
//   const wrapper = mount(<Carousel cart={cart} />);

//   const click = wrapper.find('.image')
// });

  // it("should update state on click", () => {
  //   const wrapper = mount(<App onClick={clickFn} />);
  //   const handleClick = jest.spyOn(React, "setState");
  //   handleClick.mockImplementation(isLoading => [isLoading, clickFn]);

  //   wrapper.find("#para1").simulate("click");
  //   expect(isLoading).toBeTruthy();
  // });

// })
