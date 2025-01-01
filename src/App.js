import './App.css';
import React, { useState, useEffect } from "react";
import styled, { ThemeProvider } from "styled-components";

import Timer from './Timer';
import Phases from './Phases';
import TimerForm from './Form';
import ThemeChangeCircle from './Theme';

const themeColorList = [
  { name: "blackLine", background: "#f9f9f9", primary: "#000000" },
  { name: "redLine", background: "#f9f9f9", primary: "#8C5456" },
  { name: "greenLine", background: "#f9f9f9", primary: "#57715A" },
  { name: "yellowLine", background: "#f9f9f9", primary: "#C9A038" },
  { name: "blueLine", background: "#f9f9f9", primary: "#5170A6" },
  { name: "blackBack", background: "#000000", primary: "#ffffff" },
  { name: "redBack", background: "#8C5456", primary: "#ffffff" },
  { name: "greenBack", background: "#57715A", primary: "#ffffff" },
  { name: "yellowBack", background: "#C9A038", primary: "#ffffff" },
  { name: "blueBack", background: "#5170A6", primary: "#ffffff" },
];

const theme = {
  spacing: {
    small: "8px",
    medium: "16px",
    large: "24px",
  },
  fontFamily: "Arial, sans-serif",
};

function App() {
  
  const [currentThemeColor, setCurrentThemeColor] = useState(
    themeColorList[0] // 기본 테마 색상
  );

  const combinedTheme = { ...theme, ...currentThemeColor };

   const handleThemeColorChange = (newThemeColor) => {
    setCurrentThemeColor(newThemeColor); // 새로운 색상 업데이트
  };

  const modes = ["Focus", "Rest", "Focus", "Rest", "Focus", "Rest", "Focus", "Long Rest"];
  const [timeSettings, setTimeSettings] = useState([
    { label: "Focus", value: 10, unit: "min" },
    { label: "Rest", value: 5, unit: "min" },
    { label: "Long Rest", value: 15, unit: "min" },
  ]);

  const [currentMode, setCurrentMode] = useState(0);

  const [isTimerRunning, setIsTimerRunning] = useState(false);

  const handleTimerEnd = () => {
    setCurrentMode((prevMode) => {
      if (prevMode + 1 < modes.length) {
        return prevMode + 1; // 다음 모드로 전환
      } else {
        console.log("Timer started with settings:", timeSettings[0]);
        // 타이머 로직 시작
        setIsTimerRunning(false);
        return 0; // 처음으로 돌아가거나 특정 종료 동작을 수행
      }
    });
  };

  const startTimer = (timeSettings) => {
    setTimeSettings(timeSettings); // 새로운 시간 설정 저장
    setIsTimerRunning(true); // 타이머 실행 상태로 변경
  };

  return (

    <ThemeProvider theme = {combinedTheme}>
    <Body>
      <ColorContainer>
        <ThemeChangeCircle currentTheme = {currentThemeColor} themeColorList = {themeColorList} onThemeColorChange = {handleThemeColorChange}/>
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
                  initialSeconds={timeSettings.find((setting) => setting.label === modes[currentMode])?.value ?? 0}
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
      </Footer>
    </Body>
    </ThemeProvider>

  );
}

export default App;

const Body = styled.div`
  width: calc(100vw - var(--scrollbar-width));
  height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background-color: ${(props) => props.theme.background};
`;

const ColorContainer = styled.div`
  width: calc(100% - 80px);
  height: 30px;
  margin: 12px 40px 12px 40px;
  display: flex;
  justify-content: flex-end;
`;


const PomodoroContainer = styled.div`
  width: 100%;
  background-color: ${(props) => props.theme.background};
  display: flex;
  flex: 1;
  justify-content: center;
  position: relative;

  @media (max-width: 775px) {
    height: auto;
  }
`;

const Footer = styled.div`
  width: calc(100% - 80px);
  height: 50px;
  margin: 12px 40px 12px 40px;
  display: flex;
  justify-content: flex-end;
  align-items: center;
  font-size: 12px;
  color:  ${(props) => props.theme.primary};
  opacity: 0.6;
`;

const TitleLine = styled.h1`
  width: calc(100% - 80px);
  font-size: 96px;
  font-weight: 400;
  font-family: Playfair Display, serif;
  text-align: center;
  position: absolute;
  top: 0px;
  margin: 0px 40px 0px 40px;
  z-index: 2;

  @media (max-width: 1135px) {
    font-size: 64px;
  }

  @media (max-width: 775px) {
    font-size: 32px;
  }

  &::before {
    content: "";
    position: absolute;
    background-color: ${(props) => props.theme.background};
    top: 0px;
    left: 0px;
    width: 100%;
    height: 50%;
    border-bottom: 12px solid  ${(props) => props.theme.primary};
    z-index: 2;
  }

  &::after {
    content: "";
    position: absolute;
    background-color: ${(props) => props.theme.background};
    width: calc(100% - 24px - 20px);
    height: calc(50% + 12px + 10px); 
    top: 0px;
    left: calc(12px + 10px);
    border-bottom: 1px solid  ${(props) => props.theme.primary};
    z-index: 1;
  }
`;

const Title = styled.h1`
  color:  ${(props) => props.theme.primary};
  font-size: 96px;
  font-weight: normal;
  font-family: Playfair Display, serif;
  display: inline-block;
  background-color: ${(props) => props.theme.background};
  position: absolute;
  top: 0px;
  padding: 0px 20px 0px 20px;
  margin: 0px 20px 0px 20px;
  z-index: 3;

  @media (max-width: 1135px) {
    font-size: 64px;
  }

  @media (max-width: 775px) {
    font-size: 32px;
  }
`;

const Frame = styled.div`
  width: calc(100% - 80px - 24px);
  height: 100%;
  border: 12px solid ${(props) => props.theme.primary};
  margin: 0px 40px 0px 40px;
`;

const ThinFrame = styled.div`
  width: auto;
  height: calc(100% - 20px);
  margin: 10px;
  border: 1px solid ${(props) => props.theme.primary};
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`;

const TimerContainer = styled.div`
  width: 100%;
  height: 100%;
  margin: 40px 56px 40px 56px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
`;
