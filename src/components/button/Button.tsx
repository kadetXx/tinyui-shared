import React from "react";
import { StyledButton } from "./Button.styles";
import { Loader } from "../../components/loader";

export type ButtonProps = React.ComponentProps<typeof StyledButton> & {
  loading?: boolean;
};

export const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ children, loading, ...props }, ref) => {
    return (
      <StyledButton
        ref={ref}
        disabled={loading || props.disabled}
        isDisabled={loading || props.disabled}
        {...props}
      >
        {loading && (
          <Loader
            size="1rem"
            color="CurrentColor"
            thickness="2px"
            data-testid="loader"
          />
        )}
        {children}
      </StyledButton>
    );
  }
);
