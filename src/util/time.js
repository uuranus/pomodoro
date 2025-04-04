export const getMinuteString = (seconds) => {
  let minute = Math.floor(seconds / 60);
  let second = seconds % 60;

  const paddedMinute = String(minute).padStart(2, "0");
  const paddedSecond = String(second).padStart(2, "0");

  return `${paddedMinute}:${paddedSecond}`;
};
