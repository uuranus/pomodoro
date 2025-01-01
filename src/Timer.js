import React, { useState, useEffect, useRef } from "react";

import styled from "styled-components";

function Timer({ mode, initialSeconds, onTimerEnd }) {
  const [count, setCount] = useState(initialSeconds);
  const [isInitialized, setIsInitialized] = useState(false);

  const formatTime = (seconds) => {
    const minutes = Math.floor(seconds / 60);
    const secs = seconds % 60;
    return `${String(minutes).padStart(2, "0")}:${String(secs).padStart(2, "0")}`;
  };

  const handleTimer = () => {
    if (!isInitialized) return;

    onTimerEnd();
  };

  useEffect(() => {
    setCount(initialSeconds);
    setIsInitialized(true);
  }, [initialSeconds, isInitialized]);

  useEffect(() => {
    const updateTimer = setInterval(() => {
      setCount(c => {
        if (c <= 0) {
          clearInterval(updateTimer);
          handleTimer();
          return 0;
        }
        else {
          return c - 1;
        }
      });
    }, 1000);

    return () => {
      clearInterval(updateTimer);
    };
  }, [initialSeconds, isInitialized]);

  return (
    <TimeCountContainer>
      <CurrentMode>{mode} Time</CurrentMode>
      <TimeCount>{formatTime(count)}</TimeCount>
    </TimeCountContainer>

  );
};

export default Timer;

const TimeCountContainer = styled.div`
  flex: 2;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-end;

  @media (max-width: 775px) {
    flex: 1;
  }
`;

const CurrentMode = styled.div`
  font-size: 48px;
  color:  ${(props) => props.theme.primary};;
  font-family: Playfair Display, serif;
  margin-bottom: 10px;
  display: flex;
  justify-content: flex-end;
  align-items: flex-end;
  z-index: 5;

  @media (max-width: 775px) {
    font-size: 32px;
  }
`;

const TimeCount = styled.div`
  color:  ${(props) => props.theme.primary};
  font-size: 128px;
  font-weight: 500;
  font-variant-numeric: tabular-nums;
  font-family: Lora , serif;
  border-top: 1px solid ${(props) => props.theme.primary};;
  text-align: baseline;


  @media (max-width: 775px) {
    font-size: 80px;
  }
`;

