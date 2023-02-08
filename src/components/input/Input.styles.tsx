import { styled } from "../../stitches";
import { Flex } from "../flex/Flex";

export const StyledInputWrapper = styled(Flex, {
  border: "1px solid $border",
  backgroundColor: "$lightgrey",
  borderRadius: "8px",
  height: "3.5rem",
  padding: "0 1.25rem",
  fontFamily: "$default",
  transition: "all 0.2s ease-out",

  "&:focus-within": {
    borderColor: "$primary",
  },

  variants: {
    hasError: {
      true: {
        borderColor: "$danger",

        "&:focus-within": {
          borderColor: "$danger",
        },
      },
    },

    isDisabled: {
      true: {
        opacity: 0.6,
        pointerEvents: "none",
      },
    },
  },
});

export const StyledInput = styled("input", {
  border: "none",
  background: "transparent",
  appearance: "none",
  fontFamily: "$primary",
  fontSize: "$base",
  color: "$darkgrey",
  width: "100%",
  height: "100%",
  padding: 0,
  outline: "none",

  "&::placeholder": {
    color: "$grey",
  },
});

export const StyledInputError = styled(Flex, {
  marginLeft: "1rem",
});
