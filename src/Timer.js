import React, { useState, useEffect, useRef } from "react";

import styled from "styled-components";

function Timer({ mode, initialSeconds, onTimerEnd }) {
  const [count, setCount] = useState(initialSeconds);
  const [isInitialized, setIsInitialized] = useState(false); // 초기화 상태 관리

  const formatTime = (seconds) => {
    const minutes = Math.floor(seconds / 60);
    const secs = seconds % 60;
    return `${String(minutes).padStart(2, "0")}:${String(secs).padStart(2, "0")}`;
  };

  const handleTimer = () => {
    if (!isInitialized) return; // 초기화되지 않았다면 호출 방지
    
    onTimerEnd(); // Notify parent that timer has ended
  };
  
  useEffect(() => {
    setCount(initialSeconds); // `initialSeconds`가 변경될 때 `count`를 초기화
    setIsInitialized(true); // 초기화 완료 표시
  }, [initialSeconds, isInitialized]);

  useEffect(() => {
    const updateTimer = setInterval(() => {
    setCount(c => {
      if(c <= 0) {
        clearInterval(updateTimer); 
        handleTimer();
        return 0;
      }
      else {
        return c-1; 
      }
    });
    }, 1000);

    return () => {
      clearInterval(updateTimer);
    };
  }, [initialSeconds, isInitialized]);

  return (
    <React.Fragment>
      <CurrentMode>{mode} Time</CurrentMode>
      <TimeCount>{formatTime(count)}</TimeCount>
    </React.Fragment>
  );
};

export default Timer;

const CurrentMode = styled.div`
  font-size: 48px;
  color: black;
  font-family: Playfair Display, serif;
  margin-bottom: 10px;
  flex: 1;
  display: flex;
  justify-content: flex-end;
  align-items: flex-end;
  z-index: 5;
`;

const TimeCount = styled.div`
  font-size: 128px;
  font-weight: 500;
  font-variant-numeric: tabular-nums;
  font-style: italic;
  font-family: Lora , serif;
  border-top: 1px solid black;
  flex: 1;
`;