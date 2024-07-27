import {
  history, horror, scifi, standup, fantasy,
  drama, mystery, family, comedy, romance,
  music, crime, tvmovie, documentary, action,
  thriller, western, animation, war, adventure
} from "../assets/assets";

const genrePostersArr: { [key: string]: string } = {
  history, horror, scifi, standup, fantasy,
  drama, mystery, family, comedy, romance,
  music, crime, tvmovie, documentary, action,
  thriller, western, animation, war, adventure,
};

export const pickGenrePoster = (genre: string): string => {
  return genrePostersArr[genre.replace("-", "")] || "";
};