import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";

import { Flex } from "./Flex";
import { Text } from "../text";
import { styled } from "../../stitches";

export default {
  title: "Flex",
  component: Flex,
  argTypes: {
    direction: {},
  },
} as ComponentMeta<typeof Flex>;

const Template: ComponentStory<typeof Flex> = args => {
  const Box = styled("div", {
    width: "10rem",
    height: "10rem",
    display: "grid",
    placeItems: "center",
    border: "2px solid $secondary",
  });

  return (
    <Flex {...args}>
      <Box>
        <Text>ITEM 1</Text>
      </Box>
      <Box>
        <Text>ITEM 2</Text>
      </Box>
      <Box>
        <Text>ITEM 3</Text>
      </Box>
    </Flex>
  );
};

export const Row = Template.bind({});
Row.args = {
  direction: "row",
};

export const Column = Template.bind({});
Column.args = {
  direction: "column",
};

export const WithColumnGap = Template.bind({});
WithColumnGap.args = {
  direction: "row",
  gapX: "1rem",
};

export const WithRowGap = Template.bind({});
WithRowGap.args = {
  direction: "column",
  gapY: "1rem",
};

export const Justify = Template.bind({});
Justify.args = {
  direction: "row",
  stretchx: true,
  justify: "space-between",
};

export const Fullwidth = Template.bind({});
Fullwidth.args = {
  direction: "row",
  stretchx: true,
  justify: 'space-around'
};
