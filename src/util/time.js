import { useCallback } from "react";
import { useTimer } from "../pages/timerContext";

export const getMinuteString = (seconds) => {
  let minute = Math.floor(seconds / 60);
  let second = seconds % 60;

  const paddedMinute = String(minute).padStart(2, "0");
  const paddedSecond = String(second).padStart(2, "0");

  return `${paddedMinute}:${paddedSecond}`;
};

export const useTimerSetting = () => {
  const { timerSetting } = useTimer();

  const getModeMinutes = useCallback(
    (mode) => {
      if (mode === "Focus") return timerSetting.focus;
      if (mode === "Break") return timerSetting.break;
      return timerSetting.longBreak;
    },
    [timerSetting]
  );

  return { getModeMinutes };
};
