import React from "react";
import { MemoryRouter } from "react-router-dom";
import { render, screen, fireEvent, within } from "@testing-library/react";
import { Header, HeaderProps } from "./Header";

/** Custom Jest matchers */
import "@testing-library/jest-dom/extend-expect";

const profile = {
  avatarUrl: "https://example.com/avatar.jpg",
  profileUrl: "/profile",
  username: "Collins Enebeli",
  onLogout: jest.fn(),
};

describe("Header Component", () => {
  const setup = (props: HeaderProps) => {
    const utils = render(<Header {...props} />, {
      wrapper: MemoryRouter,
    });

    return { ...utils };
  };

  it("renders with logo text", () => {
    const { getByText } = setup({});

    const logo = getByText("AdpTest");
    expect(logo).toBeInTheDocument();
  });

  it("renders with profile info and logout button", () => {
    const { getByAltText, getByText } = setup({ profile });

    expect(getByAltText(profile.username)).toHaveAttribute(
      "src",
      profile.avatarUrl
    );

    const logoutBtn = getByText("Logout");

    expect(logoutBtn).toBeInTheDocument();

    fireEvent.click(logoutBtn);
    expect(profile.onLogout).toHaveBeenCalled();
  });

  it("renders avatar container as router Link", () => {
    const { getByTestId } = setup({ profile });

    const linkContainer = getByTestId("header-profile-link-container");
    const link = within(linkContainer).getByRole("link");

    expect(link).not.toHaveAttribute("rel");
    expect(link).not.toHaveAttribute("target", "_blank");
  });

  it("renders avatar container as external link if profile url is a different origin", () => {
    profile.profileUrl = "https://external-origin.com/profile";
    const { getByTestId } = setup({ profile });

    const linkContainer = getByTestId("header-profile-link-container");
    const link = within(linkContainer).getByRole("link");

    expect(link).toHaveAttribute("href", profile.profileUrl);
    expect(link).toHaveAttribute("target", "_blank");
  });
});
