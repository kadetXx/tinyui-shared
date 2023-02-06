import React from "react";
import { render } from "@testing-library/react";
import { Text, TEXVARIANTS } from "./Text";

/** Custom Jest matchers*/
import "@testing-library/jest-dom/extend-expect";

describe("Text component", () => {
  it("renders children correctly", () => {
    const text = "Hello World!";
    const { getByText } = render(<Text>{text}</Text>);

    const textElement = getByText(text);
    expect(textElement).toBeInTheDocument();
  });

  it("renders correct HTML element", () => {
    const variant = TEXVARIANTS.h1;
    const { container } = render(<Text variant={variant}>Hello World</Text>);

    const textElement = container.querySelector(variant);
    expect(textElement).toBeInTheDocument();
  });
});
