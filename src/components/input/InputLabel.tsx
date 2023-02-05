/* eslint-disable react/prop-types */
import React from "react";
import { Text, Flex } from "../../components";

export type InputLabelProps = React.ComponentProps<"label"> & {
  required?: boolean;
};

const InputLabel = React.forwardRef<HTMLLabelElement, InputLabelProps>(
  ({ required, children, htmlFor, className }, ref) => {
    return (
      <label ref={ref} htmlFor={htmlFor} className={className}>
        <Flex align="center">
          <Text color="$black">{children}</Text>
          {required && <Text color="$danger">*</Text>}
        </Flex>
      </label>
    );
  }
);

InputLabel.displayName = "InputLabel";

export default InputLabel;
