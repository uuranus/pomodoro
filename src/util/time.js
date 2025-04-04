export const getMinuteString = (seconds) => {
    console.log(`seconds ${seconds}`);

  let minute = Math.floor(seconds / 60);
  let second = seconds % 60;

  const paddedMinute = String(minute).padStart(2, "0");
  const paddedSecond = String(second).padStart(2, "0");

  return `${paddedMinute}:${paddedSecond}`;
};
