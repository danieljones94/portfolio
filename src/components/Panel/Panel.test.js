import React from "react";
import Panel from "./Panel";
import { mount } from "enzyme";

const mockURL = "http://nug-of-sauce.danmjones.co.uk/";
const mockDescription =
  "A tug of war game, whereby the player who presses their button the most times wins.";

describe("Panel tests", () => {
  let testFunction;
  let component;

  beforeEach(() => {
    testFunction = jest.fn();
    component = mount(
      <Panel
        url={mockURL}
        onMouseEnter={() => testFunction()}
        description={mockDescription}
      />
    );
  });

  it("should match the snapshot", () => {
    expect(component).toMatchSnapshot();
  });

  it("should contain a HTML p tag", () => {
    expect(component.find("p").length).toEqual(2);
    expect(component.find("a").length).toEqual(1);
    expect(component.find("img").length).toEqual(1);
  });

  it("should receive data that is passed down as props", () => {
    expect(component.props().url).toEqual(mockURL);
  });

  it("should render data passed down as props", () => {
    expect(component.text()).toContain(mockDescription);
  });

  it("should toggle the hover state when the enters the component", () => {
    expect(component.state("hover")).toEqual(false);
    component.instance().toggleHover();
    expect(component.state("hover")).toEqual(true);
  });
});
