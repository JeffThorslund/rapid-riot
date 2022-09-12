import { Festival } from "../types";

export const getFestivalData = (dataProvider: () => Festival[]): Festival[] =>
  dataProvider();
