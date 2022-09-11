import { getRandomTitles } from "./titles";
import { getRandomDate } from "./date";
import { getRandomCoordinate } from "./coordinates";
import { getRandomId } from "./id";
import { getRandomLink } from "./link";

export const randomGenerator = {
  titles: getRandomTitles,
  date: getRandomDate,
  coordinate: getRandomCoordinate,
  id: getRandomId,
  link: getRandomLink,
};
