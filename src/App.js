import './App.css';
import React, { useState, useEffect } from "react";

import styled from "styled-components";

import Timer from './Timer';
import Phases from './Phases';
import TimerForm from './Form';

function App() {

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
  );
}

export default App;

const PomodoroContainer = styled.div`
  width: calc(100vw - var(--scrollbar-width));
  height: 100vh;
  background-color: #f9f9f9;
  display: flex;
  justify-content: center;

  @media (max-width: 775px) {
    height: auto;
  }
`;

const TitleLine = styled.h1`
  width: calc(100% - 80px);
  font-size: 96px;
  font-weight: 400;
  font-family: Playfair Display, serif;
  text-align: center;
  position: absolute;
  top: 0px;
  margin: 20px 40px 20px 40px;
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
    background-color: #f9f9f9;
    top: 0px;
    left: 0px;
    width: 100%;
    height: 50%;
    border-bottom: 12px solid black;
    z-index: 2;
  }

  &::after {
    content: "";
    position: absolute;
    background-color: #f9f9f9;
    width: calc(100% - 24px - 20px);
    height: calc(50% + 12px + 10px); 
    top: 0px;
    left: calc(12px + 10px);
    border-bottom: 1px solid black;
    z-index: 1;
  }
`;

const Title = styled.h1`
  font-size: 96px;
  font-weight: normal;
  font-family: Playfair Display, serif;
  display: inline-block;
  background-color: #f9f9f9;
  position: absolute;
  top: 0px;
  padding: 20px;
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
  height: calc(100% - 80px);
  border: 12px solid black;
  margin: 40px 40px 20px 40px;
`;

const ThinFrame = styled.div`
  width: auto;
  height: calc(100% - 20px);
  margin: 10px;
  border: 1px solid black;
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