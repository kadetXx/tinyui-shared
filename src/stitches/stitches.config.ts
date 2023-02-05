// stitches.config.ts
import type * as Stitches from "@stitches/react";
import { createStitches } from "@stitches/react";
export type { VariantProps } from "@stitches/react";

export const {
  styled,
  css,
  globalCss,
  keyframes,
  getCssText,
  theme,
  createTheme,
  config,
} = createStitches({
  theme: {
    colors: {
      primary: "#0B243F",
      secondary: "#077F7F",
      grey: "#96A1AC",
      darkgrey: "#495057",
      lightgrey: "#FAFAFA",
      black: "#000000",
      white: "#FFFFFF",
      border: "#E3E6EA",
      danger: "#DA3D2A",
    },
    fontSizes: {
      xs: "0.75rem",
      sm: "0.875rem",
      base: "1rem",
      lg: "1.125rem",
      xl: "1.25rem",
      xxl: "1.5rem",
      "3xl": "1.875rem",
      "4xl": "2.25rem",
    },
    lineHeights: {
      xs: "1rem",
      sm: "1.25rem",
      base: "1.5rem",
      lg: "1.75rem",
      xl: "1.75rem",
      xxl: "2rem",
      "3xl": "2.25rem",
      "4xl": "2.5rem",
    },
    fonts: {
      default: `Avenir, Helvetica, Arial, sans-serif`,
    },
    space: {
      container: "5%",
    },
    zIndices: {
      level1: 10,
      level2: 20,
    },
  },
  media: {
    mobile: "(max-width: 640px)",
    tablet: "(max-width: 768px)",
    desktop: "(max-width: 1024px)",
  },
});

export type CSS = Stitches.CSS<typeof config>;

export const globalStyles = globalCss({
  "*, *::before, *::after": {
    margin: 0,
    padding: 0,
    boxSizing: "inherit",
  },

  html: {
    outline: "none",
    overflow: "hidden",
    boxSizing: "border-box",
    scrollBehavior: "smooth",
    textDecoration: "none",
    textRendering: "optimizelegibility",
    "-webkit-font-smoothing": "antialiased",
    "-moz-osx-font-smoothing": "grayscale",
  },

  body: {
    overflow: "hidden",
    fontFamily: theme.fonts.default,
  },

  a: {
    color: "inherit",
    textDecoration: "none",

    "&:hover": {
      color: theme.colors.secondary,
    },
  },
});
