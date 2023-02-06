import React from "react";
import { render } from "@testing-library/react";
import { Loader } from "./Loader";

/** Custom Jest matchers */
import "@testing-library/jest-dom/extend-expect";

describe("Loader", () => {
  it("renders correctly", () => {
    const { getByTestId } = render(<Loader />);

    const spinner = getByTestId("spinner");
    expect(spinner).toBeInTheDocument();
  });
});
