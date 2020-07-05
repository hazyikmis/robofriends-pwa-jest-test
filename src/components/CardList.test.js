import { shallow } from "enzyme";
import React from "react";
import CardList from "./CardList";

it("snapshot match testing: CardList component", () => {
  const mockRobots = [
    {id: 1, name: "John Snow", username: "john", email: "john@snow.com"},
    {id: 2, name: "Regina Teideman", username: "jregina", email: "regina@teideman.com"}
  ]
  expect(shallow(<CardList robots={mockRobots} />).debug()).toMatchSnapshot();
})