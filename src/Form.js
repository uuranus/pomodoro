import React, { useState } from "react";
import styled from "styled-components";

export default function TimerForm({ preTimeSettings, onStartTimer}) {
  const [timeSettings, setTimeSettings] = useState([...preTimeSettings]);

  const handleInputChange = (index, newValue) => {
    const updatedSettings = timeSettings.map((time, i) =>
      i === index ? { ...time, value: newValue } : time
    );
    setTimeSettings(updatedSettings);
  };

  const handleButton = () => {
    onStartTimer(timeSettings);
  };

  return (
    <FormContainer>
      <TimeTable>
        {timeSettings.map((time, index) => (
          <React.Fragment key={index}>
            <TimeRow>
              <TimeLabel>{time.label}</TimeLabel>
              <TimeValue>
                <TimeInput
                  type = "number"
                  value = {time.value}
                  max = {999}
                  size = {3}
                  onChange={(e) => {
                    const newValue = e.target.value;
                    if (newValue.length <= 3) { // 최대 3자리까지 허용
                      handleInputChange(index, parseInt(newValue, 10) || 0);
                    }
                  }}
                />
                <TimeUnit>{time.unit}</TimeUnit>
              </TimeValue>
            </TimeRow>
            {index < timeSettings.length && <Separator />}
          </React.Fragment>
        ))}
      </TimeTable>
      <ButtonFrame>
        <StartButton onClick = {handleButton}>Start Timer</StartButton>
      </ButtonFrame>
    </FormContainer>
  );
}

const FormContainer = styled.div`
  width: 40%;
  margin: 120px 40px 120px 40px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  @media (max-width: 1135px) {
    width: 60%;
  }

  @media (max-width: 775px) {
    width: 80%;
  }
`;

const TimeTable = styled.div`
  flex: 1;
  width: 100%;
`;

const TimeRow = styled.div`
  display: flex;
  width: 100%;
  justify-content: space-between;
  align-items: center;
  padding: 10px 0;
`;

const TimeLabel = styled.span`
  font-size: 36px;
  font-weight: 400;
  font-family: Playfair Display, serif;

  @media (max-width: 1135px) {
    font-size: 32px;
  }

  @media (max-width: 775px) {
    font-size: 24px;
  }
`;

const TimeValue = styled.div`
  display: flex;  
  align-items: center;
  justify-content: flex-end;
  gap: 15px;

`;

const TimeInput = styled.input`
  display: inline-block;
  text-align: end;
  width: 4ch; 
  font-size: 48px;
  font-weight: 500;
  font-family: Lora Display, serif;
  border: none;
  background: none;
  appearance: textfield; 
  -moz-appearance: none;
  -webkit-appearance: none;

  @media (max-width: 1135px) {
    font-size: 40px;
  }

  @media (max-width: 775px) {
    font-size: 32px;
  }

  &:focus {
    outline: none;
    appearance: textfield;
    -moz-appearance: textfield;
    -webkit-appearance: textfield;
    margin: 0px;
  }

  &:hover {
    outline: none;
    appearance: textfield;
    -moz-appearance: textfield;
    -webkit-appearance: textfield;
  }
`;

const TimeUnit = styled.span`
  font-size: 36px;
  font-weight: 400;
  font-family: Playfair Display, serif;

  @media (max-width: 1135px) {
    font-size: 32px;
  }

  @media (max-width: 775px) {
    font-size: 24px;
  }

`;

const Separator = styled.hr`
  border: none;
  border-top: 1px solid black;
  margin: 0;
`;

const ButtonFrame = styled.div`
    display: inline-block; 
    border: 6px solid black;
    padding: 4px;
    margin-top: 60px;
`;

const StartButton = styled.button`
  padding: 10px 20px;
  border: 1px solid black;
  background-color: #fff;
  font-size: 32px;
  font-family: Playfair Display, serif;
  cursor: pointer;
  transition: background-color 0.3s, color 0.3s;

  @media (max-width: 1135px) {
    font-size: 32px;
  }

  @media (max-width: 775px) {
    font-size: 24px;
  }

  &:hover {
    background-color: black;
    color: white;
  }
`;
