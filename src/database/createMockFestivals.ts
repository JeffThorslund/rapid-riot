import { titles } from "./mockData";
import { getRandomTitles } from "./mock/titles";
import { getRandomCoordinate } from "./mock/coordinates";
import { getRandomDate } from "./mock/date";

export const createMockFestivals = (numberOfElements: number) => {
  const randomNames = getRandomTitles(titles, numberOfElements);

  return randomNames.map((title) => {
    return {
      title: title,
      coordinates: getRandomCoordinate([30, 50], [-120, -80]),
      date: getRandomDate(new Date(2012, 0, 1), new Date()),
    };
  });
};
