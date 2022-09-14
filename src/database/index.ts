import { Festival } from "../types";
import { mockDataProvider } from "./mock";
import { dataProvider } from "./data";

export const getFestivalData = (): Festival[] => {
  if (process.env.NODE_ENV === "production") {
    return dataProvider();
  }

  return mockDataProvider();
};
