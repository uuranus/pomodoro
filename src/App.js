import "./App.css";
import React, { useState, useEffect } from "react";
import styled, { ThemeProvider } from "styled-components";
import { theme, ThemeColor } from "./styles/theme.js";
import { labelSmall } from "./styles/typography.js";

// import Timer from "./timer/Timer";
// import Phases from "./timer/phases/Phases";
// import TimerForm from "./form/Form";
// import ThemeChangeCircle from "./components/ThemeChangeCircle";
// import { theme, ThemeColor } from "./styles/Theme";

function App() {
  const [currentThemeColor, setCurrentThemeColor] = useState(ThemeColor.BLACK);

  const handleThemeColorChange = (newThemeColor) => {
    setCurrentThemeColor(newThemeColor);
  };

  // const modes = ["Focus", "Rest", "Focus", "Rest", "Focus", "Rest", "Focus", "Long Rest"];
  // const [timeSettings, setTimeSettings] = useState([
  //   { label: "Focus", value: 10, unit: "min" },
  //   { label: "Rest", value: 5, unit: "min" },
  //   { label: "Long Rest", value: 15, unit: "min" },
  // ]);

  // const [currentMode, setCurrentMode] = useState(0);

  // const [isTimerRunning, setIsTimerRunning] = useState(false);

  // const handleTimerEnd = () => {
  //   setCurrentMode((prevMode) => {
  //     if (prevMode + 1 < modes.length) {
  //       return prevMode + 1;
  //     } else {
  //       console.log("Timer started with settings:", timeSettings[0]);
  //       setIsTimerRunning(false);
  //       return 0;
  //     }
  //   });
  // };

  // const startTimer = (timeSettings) => {
  //   setTimeSettings(timeSettings);
  //   setIsTimerRunning(true);
  // };

  return (
    <ThemeProvider theme={theme[currentThemeColor]}>
      <MainContainer>
        <MainFrame>
          <SubMainFrame></SubMainFrame>
        </MainFrame>
        <Footer>@uuranus_dev</Footer>
      </MainContainer>

      {/* <Body>
        <ColorContainer>
          <ThemeChangeCircle currentTheme={currentThemeColor} themeColorList={themeColorList} onThemeColorChange={handleThemeColorChange} />
        </ColorContainer>

        <PomodoroContainer>
          <TitleLine >Pomodoro</TitleLine>
          <Title>Pomodoro</Title>
          <Frame>
            <ThinFrame>
              {isTimerRunning ? (
                <TimerContainer>
                  <Timer
                    mode={modes[currentMode]}
                    initialSeconds={timeSettings.find((setting) => setting.label === modes[currentMode])?.value * 60 ?? 0}
                    onTimerEnd={handleTimerEnd}
                  />
                  <Phases phases={modes} mode={currentMode} />
                </TimerContainer>
              ) : (
                <TimerForm preTimeSettings={timeSettings} onStartTimer={startTimer} />
              )}
            </ThinFrame>
          </Frame>

        </PomodoroContainer>

        <Footer>
          @uuranus_dev
        </Footer> */}
      {/* </Body> */}
    </ThemeProvider>
  );
}

export default App;

const MainContainer = styled.div`
  height: 100%;
  padding: 16px;
  box-sizing: border-box;
  background-color: pink;
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
`;

// const Body = styled.div`
//   width: calc(100vw - var(--scrollbar-width));
//   height: 100vh;
//   display: flex;
//   flex-direction: column;
//   align-items: center;
//   justify-content: center;
//   background-color: ${({ theme }) => theme.background};
// `;

// const ColorContainer = styled.div`
//   width: ${({ theme }) => {
//     const horizontalMargin = parseInt(
//       theme.spacing.screenHorizontalMargin.desktop,
//       10
//     );
//     return `calc(100% - ${horizontalMargin * 2}px)`;
//   }};
//   height: 30px;
//   margin: ${({ theme }) => {
//     const horizontalMargin = parseInt(
//       theme.spacing.screenHorizontalMargin.desktop,
//       10
//     );
//     const verticalMargin = parseInt(
//       theme.spacing.screenVerticalMargin.desktop,
//       10
//     );
//     return `${verticalMargin}px ${horizontalMargin}px 0px ${horizontalMargin}px`;
//   }};
//   display: flex;
//   justify-content: flex-end;

//   @media (max-width: 1135px) {
//     width: ${({ theme }) => {
//       const horizontalMargin = parseInt(
//         theme.spacing.screenHorizontalMargin.tablet,
//         10
//       );
//       return `calc(100% - ${horizontalMargin * 2}px)`;
//     }};
//     margin: ${({ theme }) => {
//       const horizontalMargin = parseInt(
//         theme.spacing.screenHorizontalMargin.tablet,
//         10
//       );
//       const verticalMargin = parseInt(
//         theme.spacing.screenVerticalMargin.tablet,
//         10
//       );
//       return `${verticalMargin}px ${horizontalMargin}px 0px ${horizontalMargin}px`;
//     }};
//   }

//   @media (max-width: 775px) {
//     width: ${({ theme }) => {
//       const horizontalMargin = parseInt(
//         theme.spacing.screenHorizontalMargin.mobile,
//         10
//       );
//       return `calc(100% - ${horizontalMargin * 2}px)`;
//     }};
//     margin: ${({ theme }) => {
//       const horizontalMargin = parseInt(
//         theme.spacing.screenHorizontalMargin.mobile,
//         10
//       );
//       const verticalMargin = parseInt(
//         theme.spacing.screenVerticalMargin.mobile,
//         10
//       );
//       return `${verticalMargin}px ${horizontalMargin}px 0px ${horizontalMargin}px`;
//     }};
//   }
// `;

// const PomodoroContainer = styled.div`
//   width: 100%;
//   background-color: ${(theme) => theme.background};
//   display: flex;
//   flex: 1;
//   justify-content: center;
//   position: relative;

//   @media (max-width: 775px) {
//     height: auto;
//   }
// `;

// const Footer = styled.div`
//   width: ${({ theme }) => {
//     const horizontalMargin = parseInt(
//       theme.spacing.screenHorizontalMargin.desktop,
//       10
//     );
//     return `calc(100% - ${horizontalMargin * 2}px)`;
//   }};
//   height: 50px;
//   margin: ${({ theme }) => {
//     const horizontalMargin = parseInt(
//       theme.spacing.screenHorizontalMargin.desktop,
//       10
//     );
//     const verticalMargin = parseInt(
//       theme.spacing.screenVerticalMargin.desktop,
//       10
//     );
//     return `0px ${horizontalMargin}px ${verticalMargin}px ${horizontalMargin}px`;
//   }};

//   display: flex;
//   justify-content: flex-end;
//   align-items: center;
//   font-size: 12px;
//   color: ${({ theme }) => theme.primary};
//   opacity: 0.6;

//   @media (max-width: 1135px) {
//     width: ${({ theme }) => {
//       const horizontalMargin = parseInt(
//         theme.spacing.screenHorizontalMargin.tablet,
//         10
//       );
//       return `calc(100% - ${horizontalMargin * 2}px)`;
//     }};
//     margin: ${({ theme }) => {
//       const horizontalMargin = parseInt(
//         theme.spacing.screenHorizontalMargin.tablet,
//         10
//       );
//       const verticalMargin = parseInt(
//         theme.spacing.screenVerticalMargin.tablet,
//         10
//       );
//       return `0px ${horizontalMargin}px ${verticalMargin}px ${horizontalMargin}px`;
//     }};
//   }

//   @media (max-width: 775px) {
//     width: ${({ theme }) => {
//       const horizontalMargin = parseInt(
//         theme.spacing.screenHorizontalMargin.mobile,
//         10
//       );
//       return `calc(100% - ${horizontalMargin * 2}px)`;
//     }};
//     margin: ${({ theme }) => {
//       const horizontalMargin = parseInt(
//         theme.spacing.screenHorizontalMargin.mobile,
//         10
//       );
//       const verticalMargin = parseInt(
//         theme.spacing.screenVerticalMargin.mobile,
//         10
//       );
//       return `0px ${horizontalMargin}px ${verticalMargin}px ${horizontalMargin}px`;
//     }};
//   }
// `;

// const TitleLine = styled.h1`
//   width: ${({ theme }) => {
//     const horizontalMargin = parseInt(
//       theme.spacing.screenHorizontalMargin.desktop,
//       10
//     );
//     return `calc(100% - ${horizontalMargin * 2}px)`;
//   }};
//   font-size: ${({ theme }) => theme.typography.headlineLarge.desktop.fontSize};
//   font-weight: ${({ theme }) =>
//     theme.typography.headlineLarge.desktop.fontWeight};
//   font-family: ${({ theme }) => theme.typography.fontFamily.primary};
//   text-align: center;
//   position: absolute;
//   top: 0px;
//   margin: ${({ theme }) => {
//     const horizontalMargin = parseInt(
//       theme.spacing.screenHorizontalMargin.mobile,
//       10
//     );
//     return `0px ${horizontalMargin}px 0px ${horizontalMargin}px`;
//   }};
//   z-index: 2;

//   @media (max-width: 1135px) {
//     width: ${({ theme }) => {
//       const horizontalMargin = parseInt(
//         theme.spacing.screenHorizontalMargin.tablet,
//         10
//       );
//       return `calc(100% - ${horizontalMargin * 2}px)`;
//     }};
//     font-size: ${({ theme }) => theme.typography.headlineLarge.tablet.fontSize};
//   }

//   @media (max-width: 775px) {
//     width: ${({ theme }) => {
//       const horizontalMargin = parseInt(
//         theme.spacing.screenHorizontalMargin.mobile,
//         10
//       );
//       return `calc(100% - ${horizontalMargin * 2}px )`;
//     }};
//     font-size: ${({ theme }) => theme.typography.headlineLarge.mobile.fontSize};
//   }

//   &::before {
//     content: "";
//     position: absolute;
//     background-color: ${({ theme }) => theme.background};
//     top: 0px;
//     left: 0px;
//     width: 100%;
//     height: 50%;
//     border-bottom: ${({ theme }) =>
//       `${theme.border.mainFrame} solid ${theme.primary}`};
//     z-index: 2;
//   }

//   &::after {
//     content: "";
//     position: absolute;
//     background-color: ${({ theme }) => theme.background};
//     width: ${({ theme }) => {
//       const frameSpacing = parseInt(theme.spacing.frameSpacing, 10);
//       const mainFrame = parseInt(theme.border.mainFrame, 10);
//       return `calc(100% - ${mainFrame * 2}px - ${frameSpacing * 2}px)`;
//     }};

//     height: ${({ theme }) => {
//       const mainFrame = parseInt(theme.border.mainFrame, 10);
//       const frameSpacing = parseInt(theme.spacing.frameSpacing, 10);
//       return `calc(50% + ${mainFrame}px + ${frameSpacing}px)`;
//     }};

//     top: 0px;
//     left: ${({ theme }) => {
//       const mainFrame = parseInt(theme.border.mainFrame, 10);
//       const frameSpacing = parseInt(theme.spacing.frameSpacing, 10);
//       return `calc(${mainFrame}px + ${frameSpacing}px)`;
//     }};

//     border-bottom: ${({ theme }) =>
//       `${theme.border.thinFrame} solid ${theme.primary}`};

//     z-index: 1;
//   }
// `;

// const Title = styled.h1`
//   color: ${({ theme }) => theme.primary};
//   font-size: ${({ theme }) => theme.typography.headlineLarge.desktop.fontSize};
//   font-weight: ${({ theme }) =>
//     theme.typography.headlineLarge.desktop.fontWeight};
//   font-family: ${({ theme }) => theme.typography.fontFamily.primary};
//   display: inline - block;
//   background-color: ${({ theme }) => theme.background};
//   position: absolute;
//   top: 0px;
//   padding: 0px 20px 0px 20px;
//   margin: 0px 20px 0px 20px;
//   z-index: 3;

//   @media (max-width: 1135px) {
//     font-size: ${({ theme }) => theme.typography.headlineLarge.tablet.fontSize};
//   }

//   @media (max-width: 775px) {
//     font-size: ${({ theme }) => theme.typography.headlineLarge.mobile.fontSize};
//   }
// `;

// const Frame = styled.div`
//   width: ${({ theme }) => {
//     const horizontalMargin = parseInt(
//       theme.spacing.screenHorizontalMargin.desktop,
//       10
//     );
//     const mainFrame = parseInt(theme.border.mainFrame, 10);
//     return `calc(100% - ${horizontalMargin * 2}px - ${mainFrame * 2}px)`;
//   }};

//   height: 100 %;
//   border: ${({ theme }) => `${theme.border.mainFrame} solid ${theme.primary}`};

//   margin: ${({ theme }) =>
//     `0 ${theme.spacing.screenHorizontalMargin.tablet} 0 ${theme.spacing.screenHorizontalMargin.tablet}`};

//   @media (max-width: 1135px) {
//     width: ${({ theme }) => {
//       const horizontalMargin = parseInt(
//         theme.spacing.screenHorizontalMargin.tablet,
//         10
//       );
//       const mainFrame = parseInt(theme.border.mainFrame, 10);
//       return `calc(100% - ${horizontalMargin * 2}px - ${mainFrame * 2}px)`;
//     }};

//     margin: ${({ theme }) =>
//       `0 ${theme.spacing.screenHorizontalMargin.tablet} 0 ${theme.spacing.screenHorizontalMargin.tablet}`};
//   }

//   @media (max-width: 775px) {
//     width: ${({ theme }) => {
//       const horizontalMargin = parseInt(
//         theme.spacing.screenHorizontalMargin.mobile,
//         10
//       );
//       const mainFrame = parseInt(theme.border.mainFrame, 10);
//       return `calc(100% - ${horizontalMargin * 2}px - ${mainFrame * 2}px)`;
//     }};

//     margin: ${({ theme }) =>
//       `0 ${theme.spacing.screenHorizontalMargin.mobile} 0 ${theme.spacing.screenHorizontalMargin.mobile}`};
//   }
// `;

// const ThinFrame = styled.div`
//   width: auto;
//   height: ${({ theme }) => {
//     const frameSpacing = parseInt(theme.spacing.frameSpacing, 10);
//     return `calc(100% - ${frameSpacing * 2}px)`;
//   }};

//   margin: ${({ theme }) => theme.spacing.frameSpacing};

//   border: ${({ theme }) => `${theme.border.thinFrame} solid ${theme.primary}`};

//   display: flex;
//   justify-content: center;
//   align-items: center;
//   flex-direction: column;
// `;

// const TimerContainer = styled.div`
//   width: 100 %;
//   height: 100 %;
//   margin: 40px 56px 40px 56px;
//   display: flex;
//   flex-direction: column;
//   justify-content: space - between;
//   align-items: center;
// `;
