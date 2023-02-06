import React from "react";
import { fireEvent, render } from "@testing-library/react";
import { Avatar, Avatarprops } from "./Avatar";

/** Custom Jest matchers*/
import '@testing-library/jest-dom/extend-expect';

const defaultProps: Avatarprops = {
  title: "Collins Enebeli",
  size: "default",
  background: "black",
};

describe("Avatar Component", () => {
  it("renders avatar using text initials", () => {
    const { getByText } = render(<Avatar {...defaultProps} />);
    const initials = getByText(/CE/i);
    expect(initials).toBeInTheDocument();
  });

  it("renders avatar image when a src is provided", () => {
    const props = { ...defaultProps, src: "example.jpg" };
    const { getByAltText } = render(<Avatar {...props} />);

    const img = getByAltText(/Collins Enebeli/i);
    expect(img).toBeInTheDocument();
  });

  it("renders the fallback text when image fails to load", () => {
    const props = { ...defaultProps, src: "invalid.jpg" };

    const { getByTestId, getByText } = render(<Avatar {...props} />);

    const img = getByTestId("avatar-img")
    fireEvent.error(img);

    const initials = getByText(/CE/i);
    expect(initials).toBeInTheDocument();
  });
});
