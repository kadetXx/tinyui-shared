import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import { Header } from "./Header";
import { BrowserRouter as Router } from "react-router-dom";

export default {
  title: "Header",
  component: Header,
} as ComponentMeta<typeof Header>;

const Template: ComponentStory<typeof Header> = args => (
  <Router>
    <Header {...args} />
  </Router>
);

export const Default = Template.bind({});
Default.args = {
  profile: {
    avatarUrl: undefined,
    profileUrl: "http://localhost:6006",
    username: "Collins Enebeli",
    onLogout: () => console.log("logged out"),
  },
};
