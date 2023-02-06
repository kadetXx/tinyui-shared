import React, { useCallback } from "react";
import {
  StyledHeader,
  StyledExternalLink,
  StyledLogout,
} from "./Header.styles";
import { Text, Flex, Avatar } from "../../components";
import { Link } from "react-router-dom";

export type HeaderProps = React.ComponentProps<typeof StyledHeader> & {
  profile?: {
    avatarUrl?: string;
    profileUrl?: string;
    username?: string;
    onLogout: () => void;
  };
};

export const Header = React.forwardRef<HTMLDivElement, HeaderProps>(
  ({ profile, ...props }, ref) => {
    const handleUrl = useCallback(() => {
      return {
        href: profile?.profileUrl?.replace(window.location.origin, "") ?? "/",
        sameOrigin: profile?.profileUrl?.includes(window.location.origin),
        sameLocation: profile?.profileUrl === window.location.pathname,
      };
    }, [profile]);

    return (
      <StyledHeader ref={ref} {...props}>
        <Flex justify="space-between" align="center">
          <Text variant="h1" size="$xl">
            AdpTest
          </Text>

          {!!profile && (
            <Flex align="center" gap="1rem">
              {handleUrl().sameOrigin ? (
                <Link
                  rel="noreferrer noopener"
                  to={handleUrl().sameLocation ? "" : handleUrl().href}
                >
                  <Avatar
                    size="small"
                    title={profile.username || "ADP User"}
                    src={profile.avatarUrl}
                  />
                </Link>
              ) : (
                <StyledExternalLink
                  rel="noreferrer noopener"
                  href={handleUrl().sameLocation ? "#0" : handleUrl().href}
                  target={handleUrl().sameOrigin ? "_self" : "_blank"}
                >
                  <Avatar
                    size="small"
                    title={profile.username || "ADP User"}
                    src={profile.avatarUrl}
                  />
                </StyledExternalLink>
              )}

              <StyledLogout variant="ghost" onClick={profile.onLogout}>
                Logout
              </StyledLogout>
            </Flex>
          )}
        </Flex>
      </StyledHeader>
    );
  }
);

export default Header;
