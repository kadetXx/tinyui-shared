import { keyframes, styled } from "../../stitches";
import { Flex } from "../../components/flex";

const spin = keyframes({
  "0%": { transform: "rotate(0deg)" },
  "100%": { transform: "rotate(360deg)" },
});

export const StyledLoader = styled(Flex, {
  display: "grid",
  placeItems: "center",

  variants: {
    stretch: {
      true: {
        width: "100%",
        height: "100%",
      },
    },

    fullScreen: {
      true: {
        position: "fixed",
        inset: 0,
      },
    },
  },
});

export const StyledSpinner = styled("span", {
  width: "2.8rem",
  height: "2.8rem",
  border: "3px solid $secondary",
  borderBottomColor: "transparent",
  borderRadius: "50%",
  display: "inline-block",
  boxSizing: "border-box",
  animation: `${spin} 1s linear infinite`,
});
