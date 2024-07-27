export const setRatingColor = (rating: number): string => {
  let className = "rating";

  if (rating >= 8.5) {
    className += " excellent";
  } else if (rating >= 7.0) {
    className += " high";
  } else if (rating >= 6.0) {
    className += " medium";
  } else {
    className += " low";
  }

  return className;
};