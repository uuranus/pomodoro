import { createContext, useContext } from "react";

export const defaultTimerSettings = {
  focus: 25,
  break: 5,
  longBreak: 40,
};

export const TimerContext = createContext({
  timerSetting: defaultTimerSettings,
  setTimerSetting: (newSetting) => {},
});

export const useTimer = () => useContext(TimerContext);
