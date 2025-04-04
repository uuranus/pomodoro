import { Button } from "../../components/button.js";
import { Headline } from "../../components/headline.js";
import { ThemeBox } from "../../components/ThemeBox.js";
import { TimeLine } from "../../components/timeline.js";
import { useTimerSetting } from "../../util/time.js";
import { useTimer } from "../timerContext";
import * as S from "./styles.js";

export const FormPage = ({ onStart }) => {
  const { timerSetting } = useTimer();

  const { getModeMinutes } = useTimerSetting();

  const mode = ["Focus", "Break", "Long Break"];

  return (
    <S.Container>
      <S.TimerBox>
        <Headline>Pomodoro Timer</Headline>
        <S.TimeLineContent>
          {mode.map((m) => (
            <TimeLine text={m} minutes={getModeMinutes(m)} />
          ))}
        </S.TimeLineContent>
      </S.TimerBox>
      <ThemeBox />
      <Button>Start Timer</Button>
    </S.Container>
  );
};
