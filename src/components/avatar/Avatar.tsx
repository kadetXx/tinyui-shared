import React, { useCallback, useState } from "react";
import { CSS } from "../../stitches";
import { Text } from "../text";
import { StyledAvatar, StyledImg } from "./Avatar.styles";

export type Avatarprops = React.ComponentProps<typeof StyledAvatar> & {
  src?: string;
  alt?: string;
  srcSet?: string;
  title?: string;
  color?: CSS["color"];
  background?: CSS["backgroundColor"];
  icon?: React.ReactNode;
  renderTitle?: React.ReactNode;
  children?: React.ReactNode;
  singleInitial?: boolean;
  onError?: () => void;
};

export const Avatar = React.forwardRef<HTMLSpanElement, Avatarprops>(
  (
    {
      icon,
      src,
      srcSet,
      alt,
      onError,
      size = "default",
      background = "$secondary",
      renderTitle,
      children,
      singleInitial,
      ...props
    },
    ref
  ) => {
    const [fallback, setFallback] = useState<boolean>(false);

    const getInitials = useCallback(() => {
      if (renderTitle) return renderTitle;

      const array = props.title?.split(" ");

      if (!array) return;

      const initials = !array[1]
        ? array[0].slice(0, 1)
        : `${array[0][0]}${array[1][0]}`;

      return initials;
    }, [props.title]);

    return (
      <StyledAvatar
        {...props}
        size={size}
        ref={ref}
        css={{
          backgroundColor: background,
        }}
      >
        {children ? (
          children
        ) : src && !fallback ? (
          <StyledImg
            src={src}
            srcSet={srcSet}
            alt={alt}
            onError={onError ?? (() => setFallback(true))}
            referrerPolicy="no-referrer"
          ></StyledImg>
        ) : icon ? (
          icon
        ) : (
          <Text
            color="$white"
            size={
              size === "default" ? "$lg" : size === "large" ? "$3xl" : "$xs"
            }
          >
            {getInitials()}
          </Text>
        )}
      </StyledAvatar>
    );
  }
);
