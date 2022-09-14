import { titles } from "./mockTitles";
import { randomGenerator as randomGen } from "./randomGenerator";
import { Countries, Festival, States } from "../../types";

const NUMBER_OF_ELEMENTS = 40;

export const mockDataProvider = (): Festival[] => {
  const randomNames = randomGen.titles(titles, NUMBER_OF_ELEMENTS);

  return randomNames.map((title) => {
    return {
      id: randomGen.id(),
      title,
      location: {
        coordinates: randomGen.coordinate([30, 50], [-120, -80]),
        city: "city",
        state: States.Colorado,
        country: Countries.UnitedStates,
        zipCode: "123456",
      },

      date: randomGen.date(new Date(2012, 0, 1), new Date()),
      link: randomGen.link(),
      address: "fake address",
    };
  });
};
