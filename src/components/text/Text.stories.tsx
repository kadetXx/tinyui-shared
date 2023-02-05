import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";

import { Text } from "./Text";

export default {
  title: "Text",
  component: Text,
} as ComponentMeta<typeof Text>;

const Template: ComponentStory<typeof Text> = args => (
  <Text {...args}> Hello World! </Text>
);

export const H1 = Template.bind({});
H1.args = {
  variant: "h1",
};

export const H2 = Template.bind({});
H2.args = {
  variant: "h2",
};

export const H3 = Template.bind({});
H3.args = {
  variant: "h3",
};

export const H4 = Template.bind({});
H4.args = {
  variant: "h4",
};

export const Body1 = Template.bind({});
Body1.args = {
  variant: "body1",
};

export const Body2 = Template.bind({});
Body2.args = {
  variant: "body2",
};

export const Small = Template.bind({});
Small.args = {
  variant: "small",
};
