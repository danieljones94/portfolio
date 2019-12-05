import Column from "./Column";
import React from "react";
import { mount } from "enzyme";

let mockData =
  "I have  experience working with HTML, CSS, SASS and Javascript, completing various challenges and personal projects";

describe("column tests", () => {
  let testFunction;
  let component;

  beforeEach(() => {
    testFunction = jest.fn();
    component = mount(
      <Column text={mockData} onMouseEnter={() => testFunction()} />
    );
  });

  test("should match the snapshot", () => {
    expect(component).toMatchSnapshot();
  });

  test("should contain a HTML p tag", () => {
    expect(component.find("p").length).toEqual(1);
  });

  test("should receive data that is passed down as props", () => {
    expect(component.props().text).toEqual(mockData);
  });

  test("should render data passed down as props", () => {
    expect(component.text()).toContain(mockData);
  });

  test("should toggle the hover state when the enters the component", () => {
    expect(component.state("hover")).toEqual(false);
    component.instance().toggleHover();
    expect(component.state("hover")).toEqual(true);
  });
});
