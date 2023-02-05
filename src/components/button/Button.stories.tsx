import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";

import { Button } from "./Button";

export default {
  title: "Button",
  component: Button,
} as ComponentMeta<typeof Button>;

const Template: ComponentStory<typeof Button> = args => (
  <Button {...args}>Click Me!</Button>
);

export const Primary = Template.bind({});
Primary.args = {
  variant: "primary",
};

export const Secondary = Template.bind({});
Secondary.args = {
  variant: "secondary",
};

export const Ghost = Template.bind({});
Ghost.args = {
  variant: "ghost",
};

export const Large = Template.bind({});
Large.args = {
  size: "large",
};

export const Loading = Template.bind({});
Loading.args = {
  loading: true,
};
