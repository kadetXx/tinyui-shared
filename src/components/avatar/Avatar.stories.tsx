import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";

import { Avatar } from "./Avatar";

export default {
  title: "Avatar",
  component: Avatar,
} as ComponentMeta<typeof Avatar>;

const Template: ComponentStory<typeof Avatar> = args => <Avatar {...args} />;

export const Default = Template.bind({});
Default.args = {
  title: "Collins Enebeli",
};

export const Small = Template.bind({});
Small.args = {
  size: "small",
  title: "Collins Enebeli",
};

export const Large = Template.bind({});
Large.args = {
  size: "large",
  title: "Collins Enebeli",
};

export const WithImage = Template.bind({});
WithImage.args = {
  title: "Collins Enebeli",
  src: "https://picsum.photos/200",
};

export const WithIcon = Template.bind({});
WithIcon.args = {
  title: "Collins Enebeli",
  icon: (
    <svg
      viewBox="0 0 24 24"
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      stroke="#ffffff"
    >
      <g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
      <g
        id="SVGRepo_tracerCarrier"
        strokeLinecap="round"
        strokeLinejoin="round"
      ></g>
      <g id="SVGRepo_iconCarrier">
        <path
          stroke="#ffffff"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="1"
          d="M18 19v-1.25c0-2.071-1.919-3.75-4.286-3.75h-3.428C7.919 14 6 15.679 6 17.75V19m9-11a3 3 0 11-6 0 3 3 0 016 0z"
        ></path>
      </g>
    </svg>
  ),
};
