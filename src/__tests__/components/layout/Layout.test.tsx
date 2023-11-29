import React from "react";
import { render } from "@testing-library/react-native";
import Layout from "../../../components/layout/Layout";

const initialValues = {
  headerText: "test",
  goBack: true,
  backIcon: true,
  children: <></>,
};

describe("Layout component Test", () => {
  it("Layout render", () => {
    render(<Layout {...initialValues} />);
  });
});
