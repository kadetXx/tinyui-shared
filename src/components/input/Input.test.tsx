import React from "react";
import { render, fireEvent, within } from "@testing-library/react";
import { Input, InputProps } from "./Input";

/** Custom Jest matchers */
import "@testing-library/jest-dom/extend-expect";

describe("Input component", () => {
  const setup = (props: InputProps) => {
    const utils = render(<Input {...props} />);
    const input = utils.getByTestId("input");

    return { ...utils, input };
  };

  it("renders component", () => {
    const { input } = setup({ id: "input", type: "text" });

    expect(input).toBeInTheDocument();
  });

  it("displays label if provided", () => {
    const label = "Email Address";
    const { getByText } = setup({ id: "input", type: "text", label });

    expect(getByText(label)).toBeInTheDocument();
  });

  it("displays error message if provided", () => {
    const errorMessage = "This is a required field";

    const { getByText } = setup({
      id: "input",
      type: "text",
      errorMessage,
    });

    expect(getByText(errorMessage)).toBeInTheDocument();
  });

  it("updates value on user input", () => {
    const onChange = jest.fn();
    const { input } = setup({ id: "input", type: "text", onChange });

    const inputField = within(input).getByTestId("input-field");

    fireEvent.change(inputField, { target: { value: "new value" } });
    expect(onChange).toHaveBeenCalledWith(expect.any(Object));
  });
});
