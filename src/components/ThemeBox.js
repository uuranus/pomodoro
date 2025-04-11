import styled from "styled-components";
import {
  desktopMinWidth,
  getThemeKey,
  isReverse,
  tabletMinWidth,
  ThemeColor,
} from "../styles/theme";
import { Headline } from "./headline";
import { bodyLarge } from "../styles/typography";
import { useCallback } from "react";
import React from "react";
import { useThemeColor } from "../styles/themeContext";

export const ThemeBox = () => {
  const { currentThemeColor, setCurrentThemeColor } = useThemeColor();

  const changeTheme = useCallback(
    (color) => {
      if (getThemeKey(currentThemeColor) === color) return;

      const newThemeKey = isReverse(currentThemeColor)
        ? `${color}_reverse`
        : color;

      setCurrentThemeColor(newThemeKey);
    },
    [currentThemeColor]
  );

  return (
    <Container>
      <Headline>Theme</Headline>
      <ThemeColorWrapper>
        <Text
          isCurrentTheme={getThemeKey(currentThemeColor) === ThemeColor.BLACK}
          onClick={() => changeTheme(ThemeColor.BLACK)}
        >
          Black
        </Text>
        <Text
          isCurrentTheme={getThemeKey(currentThemeColor) === ThemeColor.RED}
          onClick={() => changeTheme(ThemeColor.RED)}
        >
          Red
        </Text>
        <Text
          isCurrentTheme={getThemeKey(currentThemeColor) === ThemeColor.GREEN}
          onClick={() => changeTheme(ThemeColor.GREEN)}
        >
          Green
        </Text>
        <Text
          isCurrentTheme={getThemeKey(currentThemeColor) === ThemeColor.YELLOW}
          onClick={() => changeTheme(ThemeColor.YELLOW)}
        >
          Yellow
        </Text>
        <Text
          isCurrentTheme={getThemeKey(currentThemeColor) === ThemeColor.BLUE}
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
