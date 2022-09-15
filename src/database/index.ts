import { Festival } from "../types";
import { dataProvider } from "./data";
import { mockDataProvider } from "./mock";

export const getFestivalData = (): Festival[] => {
  if (process.env.NODE_ENV === "production") {
    return dataProvider();
  }

  return mockDataProvider();
};
