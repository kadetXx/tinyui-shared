import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";

import { Loader } from "./Loader";

export default {
  title: "Loader",
  component: Loader,
} as ComponentMeta<typeof Loader>;

const Template: ComponentStory<typeof Loader> = args => <Loader {...args} />;

export const Default = Template.bind({});

export const Stretch = Template.bind({});
Default.args = {
  stretch: true,
};

export const FullScreen = Template.bind({});
FullScreen.args = {
  fullScreen: true,
};

export const CustomColor = Template.bind({});
CustomColor.args = {
  fullScreen: true,
  color: "$black",
};
