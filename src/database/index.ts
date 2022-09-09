import { Festival } from "../types";
import { titles } from "./mockData";

export const getFestivals = (): Festival[] => {
  return makeMockData(40);
};

const makeMockData = (numberOfElements: number) => {
  const randomNames = getRandomTitles(titles, numberOfElements);

  return randomNames.map((title) => {
    return {
      title: title,
      coordinates: getRandomCoordinate([30, 50], [-120, -80]),
    };
  });
};

function getRandomTitles(arr: string[], n: number) {
  const result = new Array(n);
  let len = arr.length;
  const taken = new Array(len);
  if (n > len)
    throw new RangeError("getRandom: more elements taken than available");
  while (n--) {
    const x = Math.floor(Math.random() * len);
    result[n] = arr[x in taken ? taken[x] : x];
    taken[x] = --len in taken ? taken[len] : len;
  }
  return result;
}

type Constraint = [number, number];

const getRandomCoordinate = (
  latitudeConstraints: Constraint,
  longitudeConstraints: Constraint
) => {
  return {
    lat: getRandomNumberConstrained(latitudeConstraints),
    lng: getRandomNumberConstrained(longitudeConstraints),
  };
};

const getRandomNumberConstrained = (constraint: Constraint) => {
  const [max, min] = constraint;

  return Math.random() * (max - min) + min;
};
