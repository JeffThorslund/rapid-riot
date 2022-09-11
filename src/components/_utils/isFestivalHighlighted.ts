import { HoveredMarkerState } from "../../types";

export const isFestivalHighlighted = (
  festivalId: string,
  hoveredFestivalId: HoveredMarkerState
) => {
  return festivalId === hoveredFestivalId;
};
