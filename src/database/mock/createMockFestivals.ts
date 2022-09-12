import { titles } from "../mockData";
import { randomGenerator as randomGen } from "./randomGenerator";

export const createMockFestivals = (numberOfElements: number) => {
  const randomNames = randomGen.titles(titles, numberOfElements);

  return randomNames.map((title) => {
    return {
      id: randomGen.id(),
      title,
      coordinates: randomGen.coordinate([30, 50], [-120, -80]),
      date: randomGen.date(new Date(2012, 0, 1), new Date()),
      link: randomGen.link(),
    };
  });
};
