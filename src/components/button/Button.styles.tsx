import { styled } from "../../stitches";
import { Flex } from "components/flex";

export const StyledButton = styled("button", {
  gap: "1rem",
  border: "none",
  background: "none",
  outline: "none",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  cursor: "pointer",
  borderRadius: "8px",
  fontSize: "$sm",
  fontWeight: "500",
  fontFamily: "$default",
  transition: "all 0.2s linear",
  flexShrink: 0,

  defaultVariants: {
    size: "default",
    variant: "primary",
  },

  variants: {
    size: {
      default: {
        height: "2.8125rem",
        padding: "0 1.5rem",
      },
      large: {
        height: "3.5rem",
        padding: "0 2.5rem",
      },
    },

    variant: {
      primary: {
        color: "$white",
        backgroundColor: "$black",
        border: "1px solid $black",

        "&:hover": {
          backgroundColor: "$secondary",
          borderColor: "$secondary",
        },
      },

      secondary: {
        color: "$black",
        backgroundColor: "$white",
        border: "1px solid $black",

        "&:hover": {
          backgroundColor: "$black",
          color: "$white",
        },
      },

      ghost: {
        padding: "0",
        height: "fit-content",
        color: "inherit",
        boxShadow: "none",
        backgroundColor: "transparent !important",
      },
    },

    fullWidth: {
      true: {
        width: "100%",
      },
    },

    disabled: {
      true: {
        pointerEvents: "none",
        backgroundColor: "$black",
        color: "$white",
        opacity: 0.7,
      },
    },
  },
});
