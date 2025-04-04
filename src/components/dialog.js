import { createPortal } from "react-dom";
import styled from "styled-components";
import { headlineMedium } from "../styles/typography";
import { useState } from "react";
import minus from "../../public/minus.png";
import plus from "../../public/plus.png";

export const Dialog = ({ mode, minute, onDismiss }) => {
  const [currentMinute, setCurrentMode] = useState(minute);

  console.log("dialog!!", minute);
  return createPortal(
    <DialogOverlay onClick={() => onDismiss(currentMinute)}>
      <Container>
        <MainFrame>
          <ThinFrame>
            <Title>{mode}</Title>
            <NumberPicker>
              <VolumeButton>
                <img src={minus} alt="minus" />
              </VolumeButton>
              <NumberPickerText>{currentMinute}</NumberPickerText>

              <VolumeButton>
                <img src="/public/plus.png" alt="plus" />
              </VolumeButton>
            </NumberPicker>
          </ThinFrame>
        </MainFrame>
      </Container>
    </DialogOverlay>,
    document.body
  );
};

const DialogOverlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: rgba(0, 0, 0, 0.3);
  z-index: 9999;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Container = styled.div`
  width: 300px;
  height: fit-content;
  background-color: ${({ theme }) => theme.background};
  padding: 8px;
`;

const MainFrame = styled.div`
  border: 4px solid ${({ theme }) => theme.onBackground};
`;

const ThinFrame = styled.div`
  margin: 2px;
  padding: 24px;
  border: 1px solid ${({ theme }) => theme.onBackground};
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const Title = styled(headlineMedium)`
  margin-bottom: 4px;
`;

const NumberPicker = styled.div`
  padding-top: 8px;
  border-top: 1px dashed ${({ theme }) => theme.onBackground};
  display: flex;
  gap: 32px;
`;

const VolumeButton = styled.div`
  background-color: ${({ theme }) => theme.surface};
  border-radius: 50%;
  width: 30px;
  height: 30px;
`;
const NumberPickerText = styled(headlineMedium)`
  color: ${({ theme }) => theme.onBackground};
`;
