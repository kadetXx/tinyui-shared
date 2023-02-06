import React from "react";
import { StyledFlex } from "./Flex.styles";
import type { CSS } from "../../stitches";

export type FlexProps = React.ComponentProps<typeof StyledFlex> & {
  gap?: CSS["gap"];
  gapX?: CSS["gap"];
  gapY?: CSS["gap"];
  wrap?: CSS["flexWrap"];
  grow?: CSS["flexGrow"];
  direction?: CSS["flexDirection"];
  justify?: CSS["justifyContent"];
  align?: CSS["alignItems"];
  alignSelf?: CSS["alignSelf"];
  css?: CSS;
  as?: keyof JSX.IntrinsicElements;
};

export const Flex = React.forwardRef<HTMLDivElement, FlexProps>(
  (
    {
      children,
      wrap,
      gap,
      gapX,
      gapY,
      alignSelf,
      direction,
      justify,
      align,
      grow,
      as,
      css,
      ...props
    },
    ref
  ) => {
    return (
      <StyledFlex
        as={as}
        ref={ref}
        css={{
          gap,
          alignSelf,
          flexWrap: wrap,
          columnGap: gapX,
          rowGap: gapY,
          flexDirection: direction,
          justifyContent: justify,
          alignItems: align,
          flexGrow: grow,
          ...css,
        }}
        {...props}
      >
        {children}
      </StyledFlex>
    );
  }
);
