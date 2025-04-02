import styled from "styled-components";
import { bodyLarge } from "../styles/typography";

export const TimeLine = ({ text, minutes, isActive }) => {
  return (
    <Container>
      <Text>{text}</Text>
      <ConntectingLine />
      <MinuteText>{minutes} min</MinuteText>
    </Container>
  );
};

const Container = styled.div`
  display: flex;
  gap: 8px;
  justify-content: center;
  align-items: flex-end;
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
`;
