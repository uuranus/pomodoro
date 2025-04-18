import "./App.css";
import React, { useState } from "react";
import styled, { ThemeProvider } from "styled-components";
import { reverseTheme, theme, ThemeColor } from "./styles/theme.js";
import { labelSmall } from "./styles/typography.js";
import { TimerPage } from "./pages/timer/timerPage.js";
import { FormPage } from "./pages/form/formPage.js";
import { ThemeContext } from "./styles/themeContext.js";
import { defaultTimerSettings, TimerContext } from "./pages/timerContext.js";

function App() {
  const [currentThemeColor, setCurrentThemeColor] = useState(ThemeColor.BLACK);

  const [isTimerRunning, setIsTimerRunning] = useState(false);

  const [currentTimerSetting, setTimerSetting] = useState(defaultTimerSettings);

  const getTheme = (key) => {
    const isReverse = key.includes("reverse");
    const themeKey = key.replace("_reverse", "");

    return isReverse ? reverseTheme[themeKey] : theme[themeKey];
  };

  return (
    <ThemeContext.Provider value={{ currentThemeColor, setCurrentThemeColor }}>
      <TimerContext.Provider
        value={{ timerSetting: currentTimerSetting, setTimerSetting }}
      >
        <ThemeProvider theme={getTheme(currentThemeColor)}>
          <MainContainer>
            <MainFrame>
              <SubMainFrame>
                {isTimerRunning ? (
                  <TimerPage onPomodoroEnd={() => setIsTimerRunning(false)} />
                ) : (
                  <FormPage onStart={() => setIsTimerRunning(true)} />
                )}
              </SubMainFrame>
            </MainFrame>
            <Footer>@uuranus_dev</Footer>
          </MainContainer>
        </ThemeProvider>
      </TimerContext.Provider>
    </ThemeContext.Provider>
  );
}

export default App;

const MainContainer = styled.div`
  min-height: 100%;
  padding: 16px;
  background-color: ${({ theme }) => theme.background};
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
  gap: 12px;
`;

const MainFrame = styled.div`
  flex: 1;
  border: 8px solid ${({ theme }) => theme.primary};
  display: flex;
`;

const SubMainFrame = styled.div`
  flex: 1;
  margin: 3px;
  border: 1px solid ${({ theme }) => theme.primary};
`;

const Footer = styled(labelSmall)`
  display: flex;
  justify-content: flex-end;
  color: ${({ theme }) => theme.onBackground};
`;
