import { isSizeSmall } from "./isSizeSmall";
import { DirectionType } from "grommet/utils";

type Dims = { height: string; width: string };

type SettingsPack = {
  direction: DirectionType;
  map: Dims;
  cards: Dims;
};

export const getResponsiveSettings = (size: string): SettingsPack => {
  if (isSizeSmall(size)) {
    return {
      direction: "column",
      map: { height: "60%", width: "auto" },
      cards: { height: "40%", width: "auto" },
    };
  }

  return {
    direction: "row",
    map: { height: "auto", width: "60%" },
    cards: { height: "auto", width: "40%" },
  };
};
