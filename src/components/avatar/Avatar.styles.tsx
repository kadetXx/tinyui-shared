import { styled } from "../../stitches";

export const StyledAvatar = styled("span", {
  display: "grid",
  placeItems: "center",
  overflow: "hidden",
  textTransform: "uppercase",

  defaultVariants: {
    size: "default",
    shape: "circle",
  },

  variants: {
    size: {
      small: {
        width: "2.5rem",
        height: "2.5rem",
      },

      default: {
        width: "3.5rem",
        height: "3.5rem",
      },
    },

    shape: {
      circle: {
        borderRadius: "100%",
      },

      square: {
        borderRadius: "$1",
      },
    },
  },

  "& svg": {
    maxWidth: "60%",
  },
});

export const StyledImg = styled("img", {
  width: "100%",
  height: "100%",
});
