import { styled } from "../../stitches";

export const StyledFlex = styled("div", {
  display: "flex",

  defaultvariants: {
    direction: "row",
    align: "start",
    justify: "start",
  },

  variants: {
    stretchx: { true: { width: "100%" } },
    stretchy: { true: { height: "100%" } },
    container: {
      true: {
        margin: "0 $container",
      },
    },
  },
});
