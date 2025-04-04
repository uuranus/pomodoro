import styled from "styled-components";
import { desktopMinWidth, tabletMinWidth } from "../../styles/theme";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  gap: 32px;
  padding: 32px;

  @media (min-width: ${tabletMinWidth}) {
    padding: 64px 20% 64px 20%;
    gap: 48px;
  }

  @media (min-width: ${desktopMinWidth}) {
    padding: 72px 20% 64px 20%;
    gap: 64px;
  }
`;

export const TimerBox = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
`;

export const TimeLineContent = styled.div`
  display: flex;
  flex-direction: column;
  gap: 32px;
  margin: 16px 40px 0px 40px;

  @media (min-width: ${tabletMinWidth}) {
    margin: 24px 72px 0px 72px;
  }

  @media (min-width: ${desktopMinWidth}) {
    margin: 24px 112px 0px 112px;
  }
`;
