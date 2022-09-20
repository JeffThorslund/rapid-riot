import { Festival } from "../types";
import { dataProvider } from "./data";

export const getFestivalData = (): Festival[] => {
  return dataProvider();
};
