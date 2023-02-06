import React from "react";
import { Flex } from "./Flex";
import { render, cleanup } from "@testing-library/react";


describe("Flex", () => {
  afterEach(cleanup);

  it("renders without crashing", () => {
    const { container, getByText } = render(<Flex>Test</Flex>);
    expect(container).toBeTruthy();

    const text = getByText("Test");
    expect(text).toBeTruthy();
  });
});
