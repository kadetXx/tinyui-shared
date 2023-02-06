import { styled } from "../../stitches";
import { Button } from "../../components/button";

export const StyledHeader = styled("header", {
  backgroundColor: "transparent",
  position: "fixed",
  top: 0,
  left: 0,
  right: 0,
  padding: "1rem $container",
  zIndex: "$level2",
});

export const StyledExternalLink = styled("a", {
  cursor: "pointer",
  color: "inherit",
  textDecoration: "none",
});

export const StyledLogout = styled(Button, {
  fontWeight: 'bold',
  
  "&:hover": {
    color: "$danger",
  },
});
