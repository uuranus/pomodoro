import styled from "styled-components";
import { desktopMinWidth, tabletMinWidth, ThemeColor } from "../styles/theme";
import { Headline } from "./headline";
import { bodyLarge } from "../styles/typography";
import { useThemeColor } from "../App";
import { useCallback } from "react";
import React from "react";

export const ThemeBox = () => {
  const { currentThemeColor, setCurrentThemeColor } = useThemeColor();

  const changeTheme = useCallback((color) => {
    if (currentThemeColor === color) return;

    setCurrentThemeColor(color);
  }, []);

  // console.log(`isCurrentTheme ${currentThemeColor === ThemeColor.BLACK}`);

  return (
    <Container>
      <Headline>Theme</Headline>
      <ThemeColorWrapper>
        <Text
          isCurrentTheme={currentThemeColor === ThemeColor.BLACK}
          onClick={() => changeTheme(ThemeColor.BLACK)}
        >
          Black
        </Text>
        <Text
          isCurrentTheme={currentThemeColor === ThemeColor.RED}
          onClick={() => changeTheme(ThemeColor.RED)}
        >
          Red
        </Text>
        <Text
          isCurrentTheme={currentThemeColor === ThemeColor.GREEN}
          onClick={() => changeTheme(ThemeColor.GREEN)}
        >
          Green
        </Text>
        <Text
          isCurrentTheme={currentThemeColor === ThemeColor.YELLOW}
          onClick={() => changeTheme(ThemeColor.YELLOW)}
        >
          Yellow
        </Text>
        <Text
          isCurrentTheme={currentThemeColor === ThemeColor.BLUE}
          onClick={() => changeTheme(ThemeColor.BLUE)}
        >
          Blue
        </Text>
      </ThemeColorWrapper>
    </Container>
  );
};

const Container = styled.div`
  display: flex;
  flex-direction: column;
  gap: 16px;

  @media (min-width: ${tabletMinWidth}) {
    gap: 24px;
  }

  @media (min-width: ${desktopMinWidth}) {
    gap: 36px;
  }
`;

const ThemeColorWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const Text = styled(bodyLarge)`
  cursor: pointer;
  color: ${({ isCurrentTheme, theme }) =>
    isCurrentTheme ? theme.onBackground : theme.scale30};
`;
