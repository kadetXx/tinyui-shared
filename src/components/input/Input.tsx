import React from "react";

import { VariantProps, CSS } from "../../stitches";
import { StyledInput, StyledInputWrapper } from "./Input.styles";
import { Flex } from "../flex/Flex";

import InputLabel from "./InputLabel";
import InputError from "./InputError";

export type InputProps = React.ComponentProps<typeof StyledInput> &
  VariantProps<typeof StyledInputWrapper> & {
    prepend?: React.ReactNode;
    append?: React.ReactNode;
    containerStyle?: CSS;
    wrapperStyle?: CSS;
    inputStyle?: CSS;
    label?: string | React.ReactNode;
    errorMessage?: string;
    required?: boolean;
  };

export const Input: React.FC<InputProps> = ({
  append,
  prepend,
  label,
  error,
  css,
  id,
  type,
  required,
  disabled,
  wrapperStyle,
  errorMessage,
  className,
  ...inputProps
}) => {
  return (
    <Flex direction="column" gapY="0.7rem" data-testid="input">
      {label && (
        <InputLabel required={required} htmlFor={id}>
          {label}
        </InputLabel>
      )}

      <StyledInputWrapper
        align="center"
        gapX="1.7rem"
        disabled={disabled}
        error={!!errorMessage}
      >
        {prepend}

        <StyledInput
          id={id}
          disabled={disabled}
          required={required}
          type={type}
          data-testid="input-field"
          {...inputProps}
        />

        {append}
      </StyledInputWrapper>

      {errorMessage && <InputError>{errorMessage}</InputError>}
    </Flex>
  );
};
