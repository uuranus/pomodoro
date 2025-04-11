import { useEffect, useRef, useState } from "react";
import { Button } from "../../components/button.js";
import { Headline } from "../../components/headline.js";
import { ThemeBox } from "../../components/ThemeBox.js";
import { TimeLine } from "../../components/timeline.js";
import { getModeMinutes, getModeName } from "../../util/time.js";
import { useTimer } from "../timerContext";
import * as S from "./styles.js";
import { Dialog } from "../../components/dialog.js";

const mode = ["Focus", "Break", "Long Break"];

export const FormPage = ({ onStart }) => {
  const { timerSetting, setTimerSetting } = useTimer();

  const [showDialog, setShowDialog] = useState(false);
  const currentMode = useRef(null);

  useEffect(() => {
    console.log("timerSetting", timerSetting);
  }, [timerSetting]);

  return (
    <S.Container>
      <S.TimerBox>
        <Headline>Pomodoro Timer</Headline>
        <S.TimeLineContent>
          {mode.map((m) => (
            <TimeLine
              text={m}
              minutes={getModeMinutes(m, timerSetting)}
              onClick={() => {
                currentMode.current = m;
                setShowDialog(true);
              }}
            />
          ))}
        </S.TimeLineContent>
      </S.TimerBox>
      <ThemeBox />
      <Button onClick={onStart}>Start Timer</Button>
      {showDialog && (
        <Dialog
          mode={currentMode.current}
          minutes={getModeMinutes(currentMode.current, timerSetting)}
          onDismiss={(newMinute) => {
            console.log(newMinute);
            setTimerSetting((prev) => ({
              ...prev,
              [getModeName(currentMode.current)]: newMinute,
            }));
            setShowDialog(false);
          }}
        />
      )}
    </S.Container>
  );
};
