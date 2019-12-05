import React from "react";
import Intro from "./Intro";
import { shallow } from "enzyme";

let mockText =
  "A tug of war game, whereby the player who presses their button the most times wins.";

describe("Intro tests", () => {
  let component;
  beforeEach(() => {
    component = shallow(<Intro text={mockText} />);
  });

  test("should match the snapshot", () => {
    expect(component).toMatchSnapshot();
  });

  test("there should be an a tag rendered", () => {
    expect(component.find("a").length).toEqual(1);
  });

  test("there should be test rendered out for each grid section", () => {
    expect(component.text()).toContain(mockText);
  });

  test("the hover state of the page should be false", () => {
    expect(component.state("hover").toEqual(false));
  });
});
