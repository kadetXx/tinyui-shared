import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";

import { Input } from "./Input";

export default {
  title: "Input",
  component: Input,
} as ComponentMeta<typeof Input>;

const Template: ComponentStory<typeof Input> = args => <Input {...args} />;

export const Default = Template.bind({});
Default.args = {
  placeholder: "Input text",
};

export const WithLabel = Template.bind({});
WithLabel.args = {
  label: "Email address",
  placeholder: "example@adplist.com",
};

export const WithError = Template.bind({});
WithError.args = {
  label: "Email address",
  error: "Enter a valid email",
  placeholder: "example@adplist.com",
};

export const Required = Template.bind({});
Required.args = {
  required: true,
  label: "Email address",
  placeholder: "example@adplist.com",
};

export const Disabled = Template.bind({});
Disabled.args = {
  disabled: true,
  placeholder: "disabled input",
};
