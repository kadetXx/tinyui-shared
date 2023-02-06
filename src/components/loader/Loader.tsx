import React from "react";
import { CSS } from "../../stitches";
import { StyledLoader, StyledSpinner } from "./Loader.styles";

export type Loaderprops = React.ComponentProps<typeof StyledLoader> & {
  size?: CSS["width"];
  color?: CSS["color"];
  thickness?: CSS["borderWidth"];
};

export const Loader = React.forwardRef<HTMLSpanElement, Loaderprops>(
  ({ size, color, thickness, ...props }, ref) => {
    return (
      <StyledLoader {...props} ref={ref}>
        <StyledSpinner
          data-testid="spinner"
          css={{
            width: size,
            height: size,
            borderColor: color,
            borderWidth: thickness,
            borderBottomColor: "transparent",
          }}
        />
      </StyledLoader>
    );
  }
);
