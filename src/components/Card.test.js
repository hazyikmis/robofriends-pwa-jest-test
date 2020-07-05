//import { shallow, mount, render } from "enzyme";
import { shallow } from "enzyme";
//import toJson from 'enzyme-to-json';
import React from "react";
import Card from "./Card";

//console.log(toJson(shallow(<Card />))); //must logs out "ShallowWrapper {length: 1}"
//console.log(shallow(<Card />)); //must logs out "ShallowWrapper {length: 1}"

// it("expect to render Card component", () => {
//   expect(shallow(<Card />).length).toEqual(1);
// });

it("snapshot match testing: Card component", () => {
  //expect(shallow(<Card />).length).toEqual(1);
  //const wrapper = shallow(<Card />);
  
  const mockCard = {id: 1, name: "John Snow", email: "john@snow.com"}
  const wrapper = shallow(<Card id={mockCard.id} name={mockCard.name} email={mockCard.email} />);
  //expect(wrapper.exists()).toBe(true);
  expect(wrapper.debug()).toMatchSnapshot();
});
