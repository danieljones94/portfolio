import Column from "./Column";
import React from "react";
import { mount } from "enzyme";

describe("column tests", () => {
  let testFunction;
  let component;

  beforeEach(() => {
    testFunction = jest.fn();
    component = mount(<Column />);
  });

  it("should contain a HTML p tag", () => {
    expect(component.find("p").length).toEqual(1);
  });
});
