import React from "react";
import { render, fireEvent } from "@testing-library/react";
import { Button } from "./Button";

/** Custom Jest matchers */
import "@testing-library/jest-dom/extend-expect";

describe("Button", () => {
  it("renders correctly with children ", () => {
    const { getByText } = render(<Button>Click me</Button>);

    const button = getByText("Click me");
    expect(button).toBeInTheDocument();
  });

  it("displays a loader and disables button when loading prop is set to true", () => {
    const { getByTestId, getByText } = render(
      <Button loading>Click me</Button>
    );

    const button = getByText("Click me");
    const loader = getByTestId("loader");

    expect(loader).toBeInTheDocument();
    expect(button).toBeDisabled();
  });

  it("disables the button when disabled prop is set to true", () => {
    const { getByText } = render(<Button disabled>Click me</Button>);

    const button = getByText("Click me");
    expect(button).toBeDisabled();
  });

  it("fires the onClick event", () => {
    const onClick = jest.fn();
    const { getByText } = render(<Button onClick={onClick}>Click me</Button>);

    fireEvent.click(getByText("Click me"));
    expect(onClick).toHaveBeenCalled();
  });
});
