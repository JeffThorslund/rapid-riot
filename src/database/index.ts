import { Festival } from "../types";
import { dataProvider } from "./data";

export const getFestivalData = (): Festival[] => {
  if (process.env.NODE_ENV === "production") {
    return dataProvider();
  }

  return dataProvider();
};
