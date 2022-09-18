import { SettingsPack } from "../../../types";

export const getResponsiveSettings = (size: string): SettingsPack => {
  if (size === "small") {
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
