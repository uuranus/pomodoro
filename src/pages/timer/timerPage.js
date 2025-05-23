import { useEffect, useState } from "react";
import { Headline } from "../../components/headline.js";
import { ThemeBox } from "../../components/ThemeBox.js";
import { TimeLine } from "../../components/timeline.js";
import * as S from "./styles.js";
import {
  desktopMinWidth,
  isReverse,
  reverseThemeKey,
} from "../../styles/theme.js";
import { getMinuteString, getModeMinutes } from "../../util/time.js";
import { useTimer } from "../timerContext.js";
import { useThemeColor } from "../../styles/themeContext.js";

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

  const { currentThemeColor, setCurrentThemeColor } = useThemeColor();

  const { timerSetting } = useTimer();

  const [restTimeSeconds, setRestTimeSeconds] = useState(
    getModeMinutes(mode[currentMode], timerSetting) * 60
  );

  useEffect(() => {
    if (currentMode === mode.length) {
      setCurrentThemeColor(reverseThemeKey(currentThemeColor));
      onPomodoroEnd();
      return;
    }

    const newRestTime = getModeMinutes(mode[currentMode], timerSetting);

    setRestTimeSeconds(newRestTime * 60);

    if (mode[currentMode] === "Focus") {
      if (isReverse(currentThemeColor)) {
        setCurrentThemeColor(reverseThemeKey(currentThemeColor));
      }
    } else {
      if (!isReverse(currentThemeColor)) {
        setCurrentThemeColor(reverseThemeKey(currentThemeColor));
      }
    }
  }, [currentMode]);

  useEffect(() => {
    const updateTimer = setInterval(() => {
      setRestTimeSeconds((r) => {
        if (r === 1) {
          clearInterval(updateTimer);
          setCurrentMode((prev) => prev + 1);
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
            <Headline key="TimeLine">TimeLine</Headline>
            <S.TimeLineContent>
              {mode.map((m, index) => (
                <TimeLine
                  text={m}
                  minutes={getModeMinutes(m, timerSetting)}
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
        <Headline key="Timer">Pomodoro Timer</Headline>
        <S.TimerContent>
          <S.TimerText>{getMinuteString(restTimeSeconds)}</S.TimerText>
          <S.ModeText>{mode[currentMode]}</S.ModeText>
        </S.TimerContent>
      </S.TimerBox>

      <S.TimeLineBox>
        <Headline key="TimeLine">TimeLine</Headline>
        <S.TimeLineContent>
          {mode.map((m, index) => (
            <TimeLine
              text={m}
              minutes={getModeMinutes(m, timerSetting)}
              isActive={index === currentMode}
            />
          ))}
        </S.TimeLineContent>
      </S.TimeLineBox>
      <ThemeBox />
    </S.Container>
  );
};
