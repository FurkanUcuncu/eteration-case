import "react-native";
import React from "react";
import { render } from "@testing-library/react-native";
import App from "../../App";
import { it } from "@jest/globals";

import renderer from "react-test-renderer";

describe("App", () => {
  it("renders correctly", () => {
    renderer.create(<App />);
  });

  it("should renders correctly", () => {
    const page = render(<App />);
    expect(page.toJSON()).toMatchSnapshot();
  });
});
