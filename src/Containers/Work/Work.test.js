import React from "react";
import Work from "./Work";
import mount from "enzyme";
import data from "../../static/data";

const mockData = {
  title: "Nug o'Sauce",
  image: nugosauce,
  description:
    "A tug of war game, whereby the player who presses their button the most times wins.",
  requirements:
    "Be responsive, be able to see how many times each player has won and be able to refresh the game, only using HTML, CSS and Javascript.",
  url: "http://nug-of-sauce.danmjones.co.uk/"
};

describe("work tests", () => {
  beforeEach(() => {
    testfunction = jest.fn();
    component = mount(
      <Work
        title={mockData.title}
        image={nugosauce}
        description={mockData.description}
        requirements={mockData.requirements}
        url={mockData.url}
      />
    );
  });

  test("it should match the snapshot", () => {
    expect(component).toMatchSnapshot();
  });

  test("it should render 8 img tags", () => {
    expect(component.find("img").length).toEqual(8);
  });

  test("it should render 16 p tags", () => {
    expect(component.find("p").length).toEqual(16);
  });

  test("it should render 8 a tags", () => {
    expect(component.find("a").length).toEqual(8);
  });

  //   test("it should render on instance of each panel called in the data file", () => {});s
});
