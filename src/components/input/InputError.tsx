import React from "react";
import { Text } from "../text";
import { CSS } from "../../stitches";
import { StyledInputError } from "./Input.styles";

type IProps = React.ComponentProps<typeof Text> & {
  children: React.ReactNode;
  className?: string;
  css?: CSS;
};

const InputError = React.forwardRef<HTMLParagraphElement, IProps>(
  ({ children, className, css }, ref) => {
    return (
      <StyledInputError ref={ref} css={css} className={className}>
        <Text color="$danger" variant="small" size="$xs">
          {children}
        </Text>
      </StyledInputError>
    );
  }
);

InputError.displayName = "InputError";

export default InputError;
