export const getMinuteString = (seconds) => {
  let minute = Math.floor(seconds / 60);
  let second = seconds % 60;

  const paddedMinute = String(minute).padStart(2, "0");
  const paddedSecond = String(second).padStart(2, "0");

  return `${paddedMinute}:${paddedSecond}`;
};

export const getModeMinutes = (mode, timerSetting) => {
  if (mode === "Focus") return timerSetting.focus;
  if (mode === "Break") return timerSetting.break;
  return timerSetting.longBreak;
};

export const getModeName = (mode) => {
  if (mode === "Focus") return "focus";
  if (mode === "Break") return "break";
  return 'longBreak';
};
