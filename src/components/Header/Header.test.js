import React from "react";
import Header from "./Header";
import { mount } from "enzyme";
import ReactTestUtils from "react-dom/test-utils";

describe("Header tests", () => {
  let component;

  beforeEach(() => {
    component = mount(<Header />);
  });

  test("should match the snapshot", () => {
    expect(component).toMatchSnapshot();
  });

  test("should contain various tags", () => {
    expect(component.find("h1").length).toEqual(1);
    expect(component.find("h2").length).toEqual(2);
    expect(component.find("a").length).toEqual(1);
  });

  test("href of a tag should point to intro", () => {
    const test_component = ReactTestUtils.renderIntoDocument(<Header />);
    const link = ReactTestUtils.findRenderedDOMComponentWithClass(
      test_component,
      "a"
    );
    expect(link.getAttribute("href").length).toEqual(3);
  });
});
