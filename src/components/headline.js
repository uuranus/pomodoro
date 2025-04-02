import styled from "styled-components";
import { headlineMedium } from "../styles/typography";

export const Headline = ({ children }) => {
  return (
    <Container>
      <Text>{children}</Text>
    </Container>
  );
};

const Container = styled.div`
  width: 100%;
  background-color: ${({ theme }) => theme.surface};
  padding: 8px 0px 8px 0px;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Text = styled(headlineMedium)`
  color: ${({ theme }) => theme.onSurface};
`;
