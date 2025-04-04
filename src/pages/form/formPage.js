import { useRef, useState } from "react";
import { Button } from "../../components/button.js";
import { Headline } from "../../components/headline.js";
import { ThemeBox } from "../../components/ThemeBox.js";
import { TimeLine } from "../../components/timeline.js";
import { useTimerSetting } from "../../util/time.js";
import { useTimer } from "../timerContext";
import * as S from "./styles.js";
import { Dialog } from "../../components/dialog.js";

export const FormPage = ({ onStart }) => {
  const { timerSetting } = useTimer();

  const { getModeMinutes } = useTimerSetting();

  const mode = ["Focus", "Break", "Long Break"];

  const [showDialog, setShowDialog] = useState(false);
  const currentMode = useRef(null);

  return (
    <S.Container>
      <S.TimerBox>
        <Headline>Pomodoro Timer</Headline>
        <S.TimeLineContent>
          {mode.map((m) => (
            <TimeLine
              text={m}
              minutes={getModeMinutes(m)}
              onClick={() => {
                currentMode.current = m;
                setShowDialog(true);
              }}
            />
          ))}
        </S.TimeLineContent>
      </S.TimerBox>
      <ThemeBox />
      <Button>Start Timer</Button>
      {showDialog && (
        <Dialog
          mode={currentMode.current}
          minutes={getModeMinutes(currentMode.current)}
          onDismiss={(newMinute) => {
            // setTimerSetting(newMinute);
            setShowDialog(false);
          }}
        />
      )}
    </S.Container>
  );
};
