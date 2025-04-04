import {  useEffect, useState } from "react";
import { Headline } from "../../components/headline.js";
import { ThemeBox } from "../../components/ThemeBox.js";
import { TimeLine } from "../../components/timeline.js";
import * as S from "./styles.js";
import { desktopMinWidth } from "../../styles/theme.js";
import { getMinuteString, useTimerSetting } from "../../util/time.js";

const useWindowWidth = () => {
  const [width, setWidth] = useState(window.innerWidth);
  useEffect(() => {
    const handleResize = () => setWidth(window.innerWidth);
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);
  return width;
};

const mode = [
  "Focus",
  "Break",
  "Focus",
  "Break",
  "Focus",
  "Break",
  "Focus",
  "Long Break",
];

export const TimerPage = ({ onPomodoroEnd }) => {
  const width = useWindowWidth();
  const isDesktop = width >= desktopMinWidth.replace("px", "");

  const [currentMode, setCurrentMode] = useState(0);

  const { getModeMinutes } = useTimerSetting();

  const [restTimeSeconds, setRestTimeSeconds] = useState(
    getModeMinutes(mode[currentMode])
  );

  useEffect(() => {
    if (currentMode === mode.length) {
      onPomodoroEnd();
      return;
    }

    const newRestTime = getModeMinutes(mode[currentMode]);

    setRestTimeSeconds(newRestTime);
  }, [currentMode]);

  useEffect(() => {
    const updateTimer = setInterval(() => {
      setRestTimeSeconds((r) => {
        if (r === 1) {
          clearInterval(updateTimer);
          setCurrentMode(currentMode + 1);
          return 0;
        } else {
          return r - 1;
        }
      });
    }, 1000);

    return () => {
      clearInterval(updateTimer);
    };
  }, [currentMode, restTimeSeconds]);

  return isDesktop ? (
    <S.DesktopContainer>
      <S.DesktopColumnBox>
        <S.DesktopLeftColumn>
          <S.TimerBox>
            <Headline>Pomodoro Timer</Headline>
            <S.TimerContent>
              <S.TimerText>{getMinuteString(restTimeSeconds)}</S.TimerText>
              <S.ModeText>{mode[currentMode]}</S.ModeText>
            </S.TimerContent>
          </S.TimerBox>
          <ThemeBox />
        </S.DesktopLeftColumn>
        <S.DesktopRightColumn>
          <S.TimeLineBox>
            <Headline>TimeLine</Headline>
            <S.TimeLineContent>
              {mode.map((m, index) => (
                <TimeLine
                  text={m}
                  minutes={getModeMinutes(m)}
                  isActive={index === currentMode}
                />
              ))}
            </S.TimeLineContent>
          </S.TimeLineBox>
        </S.DesktopRightColumn>
      </S.DesktopColumnBox>
    </S.DesktopContainer>
  ) : (
    <S.Container>
      <S.TimerBox>
        <Headline>Pomodoro Timer</Headline>
        <S.TimerContent>
          <S.TimerText>{getMinuteString(restTimeSeconds)}</S.TimerText>
          <S.ModeText>{mode[currentMode]}</S.ModeText>
        </S.TimerContent>
      </S.TimerBox>

      <S.TimeLineBox>
        <Headline>TimeLine</Headline>
        <S.TimeLineContent>
          {mode.map((m, index) => (
            <TimeLine
              text={m}
              minutes={getModeMinutes(m)}
              isActive={index === currentMode}
            />
          ))}
        </S.TimeLineContent>
      </S.TimeLineBox>
      <ThemeBox />
    </S.Container>
  );
};
