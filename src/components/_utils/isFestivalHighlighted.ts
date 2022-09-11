import { HoveredMarkerState } from "../../types";

export const isFestivalHighlighted = (
  festivalId: string,
  hoveredFestivalId: HoveredMarkerState
) => festivalId === hoveredFestivalId;
