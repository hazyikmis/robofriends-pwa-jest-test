import { shallow } from "enzyme";
import React from "react";
import MainPage from "./MainPage";

let wrapper;

beforeEach(() => {
  const mockProps = {
    onRequestRobots: jest.fn(),
    robots: [],
    searchField: "",
    isPending: false,
  };
  wrapper = shallow(<MainPage {...mockProps} />);
});

it("renders MainPage without crashing", () => {
  expect(wrapper.debug()).toMatchSnapshot();
});

it("filters robots correctly", () => {
  //special-case (we do not want to use the data set in beforeEach)
  const mockProps2 = {
    onRequestRobots: jest.fn(),
    robots: [{ id: 1, name: "John", email: "john@snow.com" }],
    searchField: "a",
    isPending: false,
  };
  let wrapper2 = shallow(<MainPage {...mockProps2} />);

  const mockProps3 = {
    onRequestRobots: jest.fn(),
    robots: [{ id: 1, name: "John", email: "john@snow.com" }],
    searchField: "o",
    isPending: false,
  };
  let wrapper3 = shallow(<MainPage {...mockProps3} />);

  //instance() helps us to access wrapped class component's functions
  expect(wrapper.instance().filteredRobots([])).toEqual([]);
  expect(wrapper2.instance().filteredRobots(mockProps2.robots)).toEqual([]);
  expect(wrapper3.instance().filteredRobots(mockProps3.robots)).toEqual([{ id: 1, name: "John", email: "john@snow.com" }]);
});
/*
it("snapshot match testing: App component/container", () => {
  const mockStore = {
    robots: [],
    searchField: ''
  };
  expect(shallow(<App store={mockStore} />).debug()).toMatchSnapshot();
});
*/
//redux-mock-store npm pack: A mock store for testing Redux async action creators and middleware.
//Buuuut, rather than testing App, we have moved everything (all components) from App to MainPage
//let redux, store, etc things remained in App. Now MainPage is more easily be testable!

//h@zy;kmi$
