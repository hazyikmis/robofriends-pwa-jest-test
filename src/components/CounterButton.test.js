import { shallow } from "enzyme";
import React from "react";
import CounterButton from "./CounterButton";

it("snapshot match testing: CounterButton component", () => {
  const mockColor = "red";
  expect(
    shallow(<CounterButton color={mockColor} />).debug()
  ).toMatchSnapshot();
});

it("correctly increments the counter", () => {
  const mockColor = "red";
  const wrapper = shallow(<CounterButton color={mockColor} />);
  wrapper.find('[id="counter"]').simulate("click");
  //wrapper.find('[id="counter"]').simulate('click');
  wrapper.find("button").simulate("click"); //same button clicked!!!
  //wrapper.find('button').simulate('click');
  expect(wrapper.state()).toEqual({ count: 3 });
  wrapper.find('[id="counter"]').simulate("click");
  expect(wrapper.state()).toEqual({ count: 4 });
  wrapper.find('[id="counter"]').simulate("keypress");
  expect(wrapper.state()).toEqual({ count: 4 });
});

it("props.color check", () => {
  const mockColor = "red";
  const wrapper = shallow(<CounterButton color={mockColor} />);
  //expect(wrapper.props()).toEqual({ color: "red" }); //this DOES NOT WORKS, because %99.9 props have many objects, not only color
  expect(wrapper.props().color).toEqual(mockColor);
});
