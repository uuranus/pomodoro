import { useEffect, useState } from "react";
import { Headline } from "../../components/headline.js";
import { ThemeBox } from "../../components/ThemeBox.js";
import { TimeLine } from "../../components/timeline.js";
import * as S from "./styles.js";
import { desktopMinWidth } from "../../styles/theme.js";

const useWindowWidth = () => {
  const [width, setWidth] = useState(window.innerWidth);
  useEffect(() => {
    const handleResize = () => setWidth(window.innerWidth);
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);
  return width;
};

export const TimerPage = () => {
  const width = useWindowWidth();
  const isDesktop = width >= desktopMinWidth.replace("px", "");

  console.log(
    `iSDekstop ${isDesktop} ${width} ${desktopMinWidth.replace("px", "")}`
  );

  return !isDesktop ? (
    <S.Container>
      <S.TimerBox>
        <Headline>Pomodoro Timer</Headline>
        <S.TimerContent>
          <S.TimerText>16:35</S.TimerText>
          {/* <S.Divider/> */}
          <S.ModeText>Focus</S.ModeText>
        </S.TimerContent>
      </S.TimerBox>

      <S.TimeLineBox>
        <Headline>TimeLine</Headline>
        <S.TimeLineContent>
          <TimeLine text="Focus" minutes={25} />

          <TimeLine text="Break" minutes={5} />

          <TimeLine text="Focus" minutes={25} />

          <TimeLine text="Break" minutes={5} />

          <TimeLine text="Focus" minutes={25} />

          <TimeLine text="Break" minutes={5} />

          <TimeLine text="Focus" minutes={25} />

          <TimeLine text="Long Break" minutes={40} />
        </S.TimeLineContent>
      </S.TimeLineBox>
      <ThemeBox />
    </S.Container>
  ) : (
    <S.DesktopContainer>
      <S.DesktopColumnBox>
        <S.DesktopLeftColumn>
          <S.TimerBox>
            <Headline>Pomodoro Timer</Headline>
            <S.TimerContent>
              <S.TimerText>16:35</S.TimerText>
              <S.ModeText>Focus</S.ModeText>
            </S.TimerContent>
          </S.TimerBox>
          <ThemeBox />
        </S.DesktopLeftColumn>
        <S.DesktopRightColumn>
          <S.TimeLineBox>
            <Headline>TimeLine</Headline>
            <S.TimeLineContent>
              <TimeLine text="Focus" minutes={25} />

              <TimeLine text="Break" minutes={5} />

              <TimeLine text="Focus" minutes={25} />

              <TimeLine text="Break" minutes={5} />

              <TimeLine text="Focus" minutes={25} />

              <TimeLine text="Break" minutes={5} />

              <TimeLine text="Focus" minutes={25} />

              <TimeLine text="Long Break" minutes={40} />
            </S.TimeLineContent>
          </S.TimeLineBox>
        </S.DesktopRightColumn>
      </S.DesktopColumnBox>
    </S.DesktopContainer>
  );
};
