import styled from "styled-components";
import { headlineMedium } from "../styles/typography";

export const Button = ({ children , onClick}) => {
  return (
    <MainFrame onClick = {onClick}>
      <ThinFrame>
        <Text>{children}</Text>
      </ThinFrame>
    </MainFrame>
  );
};

const MainFrame = styled.div`
  border: 4px solid ${({ theme }) => theme.onBackground};
  cursor: pointer;
`;

const ThinFrame = styled.div`
  margin: 2px;
  padding: 4px;
  border: 1px solid ${({ theme }) => theme.onBackground};
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Text = styled(headlineMedium)`
    color: ${({theme}) => theme.onBackground};
`;