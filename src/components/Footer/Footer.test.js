import React from "react";
import Footer from "./Footer";
import { shallow } from "enzyme";

describe("footer tests", () => {
  let component;

  beforeEach(() => {
    component = shallow(<Footer />);
  });

  test("it should match the snapshot", () => {
    expect(component).toMatchSnapshot();
  });

  test("there should be three a tags rendered", () => {
    expect(component.find("a").length).toEqual(3);
  });

  test("testing all class styles", () => {
    // expect(component.firstChild).hasClass("infoIcon");
    expect(component.hasClass("footerContainer")).toBe(true);
  });
});
