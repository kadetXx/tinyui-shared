import React from "react";
import { StyledText } from "./Text.styles";
import type { CSS } from "../../stitches";

export enum TEXVARIANTS {
  h1 = "h1",
  h2 = "h2",
  h3 = "h3",
  h4 = "h4",
  h5 = "h5",
  body1 = "p",
  body2 = "p",
  small = "small",
}

export type TextProps = React.ComponentProps<typeof StyledText> & {
  size?: CSS["fontSize"];
  weight?: CSS["fontWeight"];
  align?: CSS["textAlign"];
  color?: CSS["color"];
  fontStyle?: CSS["fontStyle"];
  lineheight?: CSS["lineHeight"];
  decoration?: CSS["textDecoration"];
  variant?: keyof typeof TEXVARIANTS;
};

export const Text = React.forwardRef<HTMLElement, TextProps>(
  (
    {
      size,
      align,
      weight,
      lineheight,
      decoration,
      fontStyle,
      color = "$primary",
      variant = "body1",
      children,
      ...props
    },
    ref
  ) => {
    const sizeMap: { [id: string]: CSS["fontSize"] } = {
      h1: "$4xl",
      h2: "$3xl",
      h3: "$xxl",
      h4: "$xl",
      h5: "$lg",
      body1: "$base",
      body2: "$sm",
      small: "$xs",
    };

    return (
      <StyledText
        as={TEXVARIANTS[variant]}
        ref={ref}
        css={{
          textAlign: align,
          color: color,
          textDecoration: decoration,
          fontStyle: fontStyle,
          fontWeight: weight,
          fontSize: size ?? sizeMap[variant],
          lineHeight: lineheight ?? sizeMap[variant],
        }}
        {...props}
      >
        {children}
      </StyledText>
    );
  }
);
