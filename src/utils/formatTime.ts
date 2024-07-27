export const formatTime = (mins: number): string => {
  const hours = Math.trunc(mins / 60);
  const minutes = mins % 60;
  return `${hours} ч ${minutes} мин`;
};