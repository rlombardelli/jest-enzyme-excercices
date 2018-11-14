import React from "react";
import { shallow } from "enzyme";
import Enzyme from "enzyme";
import Adapter from "enzyme-adapter-react-16";
import App from "../App";

Enzyme.configure({ adapter: new Adapter() });

it("should render the App component", () => {
  const tree = shallow(<App />);

  expect(tree).toMatchSnapshot();
});
