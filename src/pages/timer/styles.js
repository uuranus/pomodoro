import styled from "styled-components";
import { desktopMinWidth, tabletMinWidth } from "../../styles/theme";
import { displayMedium, mono_displayLarge } from "../../styles/typography";

export const Container = styled.div`
  padding: 32px;
`;

export const TimerBox = styled.div``;

export const TimerContent = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin: 48px;
`;

export const TimerText = styled(mono_displayLarge)`
  color: ${({ theme }) => theme.onBackground};
  border-bottom: 1px dashed ${({ theme }) => theme.onBackground};
`;

export const ModeText = styled(displayMedium)`
  color: ${({ theme }) => theme.onBackground};
`;

export const TimeLineBox = styled.div`
  flex: 1;
`;

export const TimeLineContent = styled.div`
  margin: 16px 32px 32px 32px;
  display: flex;
  flex-direction: column;
  gap: 32px;

  @media (min-width: ${tabletMinWidth}) {
    margin: 24px 72px 48px 72px;
  }

  @media (min-width: ${desktopMinWidth}) {
    margin: 24px 112px 0px 112px;
  }
`;

export const DesktopContainer = styled.div`
  height: 100%;
  width: 100%;
  box-sizing: border-box;
  padding: 72px 96px 72px 96px;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const DesktopColumnBox = styled.div`
  height: fit-content;
  width: 100%;
  display: flex;
  align-items: stretch;
  gap: 36px;
`;

export const DesktopLeftColumn = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;

export const DesktopRightColumn = styled.div`
  flex: 1.5;
`;
