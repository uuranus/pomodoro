import './App.css';
import React, { useState, useEffect, useRef } from "react";

import styled from "styled-components";

import Timer from './Timer';
import Phases from './Phases';

function App() {

  const modes = ["Focus", "Rest", "Focus", "Rest", "Focus", "Rest"];
  const times = [25,10,25,10,25,10,25,40];

  const [currentMode, setCurrentMode] = useState(0);

  const [dimensions, setDimensions] = useState({
    width: window.innerWidth, // 화면 너비
    height: window.innerHeight, // 화면 높이
  });

  const handleTimerEnd = () => {
    setCurrentMode(m => m+1); // 모드 전환
  };

  const updateDimensions = () => {
    const width =
      window.innerWidth - (window.innerWidth - document.documentElement.clientWidth) - 80;
    const height =
     window.innerHeight -
      (window.innerHeight - document.documentElement.clientHeight) - 40;

    setDimensions({
      width: width,
      height: height,
    });
  };

  // 컴포넌트 마운트 시 이벤트 리스너 등록
  useEffect(() => {

    updateDimensions();

    window.addEventListener("resize", updateDimensions); // 화면 크기 변경 시 실행

    return () => {
      window.removeEventListener("resize", updateDimensions); // 리스너 제거
    };

  });
  
  return (
    <PomodoroContainer width = {dimensions.width} height={dimensions.height}>
      <TitleLine width = {dimensions.width} >Pomodoro</TitleLine>
      <Title width = {dimensions.width}>Pomodoro</Title>
      <Frame width = {dimensions.width} height = {dimensions.height} >
        <ThinFrame>  
          <Timer mode = {modes[currentMode]} initialSeconds={times[currentMode] } onTimerEnd = {handleTimerEnd}/>
          <Phases mode = {currentMode}/>
        </ThinFrame>
      </Frame>
    </PomodoroContainer>
  );
}

export default App;

const PomodoroContainer = styled.div`
  width: ${(props) => props.width}px;
  height: ${(props) => props.height}px;
  margin: 20px 40px 20px 40px;
  background-color: #f9f9f9;
  display: flex;
  justify-content: center;
`;

const TitleLine = styled.h1`
  width: ${(props) => props.width}px;
  font-size: 96px;
  font-weight: 400;
  font-family: Playfair Display, serif;
  color: #f9f9f9;
  text-align: center;
  position: absolute;
  top: 0px;
  margin: 20px 40px 20px 40px;
  z-index: 2;

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
    left: 22px;
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
  margin: 20px;
  padding: 0px 20px 0px 20px;
  z-index: 3;
`;

const Frame = styled.div`
  width: ${(props) => props.width}px;
  height: ${(props) => props.height - 40}px;
  border: 12px solid black;
  margin: 20px 0px 20px 0px;
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
