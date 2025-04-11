import styled from "styled-components";
import { bodyLarge, titleSmall } from "../styles/typography";

export const TimeLine = ({ text, minutes, isActive, onClick }) => {
  const clickable = typeof onClick === 'function';

  return (
    <Container onClick={onClick}>
      {isActive ? (
        <>
          <ActiveText>{text}</ActiveText>
          <ActiveConntectingLine />
          <ActiveMinuteText>{minutes} min</ActiveMinuteText>
        </>
      ) : (
        <>
          <Text>{text}</Text>
          <ConntectingLine />
          <MinuteText isClickable = {clickable}>{minutes} min</MinuteText>
        </>
      )}
    </Container>
  );
};

const Container = styled.div`
  display: flex;
  gap: 8px;
  justify-content: center;
  align-items: flex-end;
`;

const ActiveText = styled(titleSmall)`
  color: ${({ theme }) => theme.onBackground};
`;

const ActiveConntectingLine = styled.div`
  flex: 1;
  border-bottom: 2px dashed ${({ theme }) => theme.onBackground};
`;

const ActiveMinuteText = styled(titleSmall)`
  color: ${({ theme }) => theme.onBackground};
`;

const Text = styled(bodyLarge)`
  color: ${({ theme }) => theme.onBackground};
`;

const ConntectingLine = styled.div`
  flex: 1;
  border-bottom: 1px dashed ${({ theme }) => theme.onBackground};
`;

const MinuteText = styled(bodyLarge)`
  color: ${({ theme }) => theme.onBackground};
  cursor: ${({ isClickable }) => (isClickable ? 'pointer' : 'default')};
`;
