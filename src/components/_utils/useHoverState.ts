import { Dispatch, SetStateAction, useState } from "react";
import { HoveredMarkerState } from "../../types";

export const useHoverState = () => {
  const [hoveredMarker, setHoveredMarker] =
    useState<HoveredMarkerState>(undefined);

  return createMethods(hoveredMarker, setHoveredMarker);
};

const createMethods = (
  hoveredMarker: HoveredMarkerState,
  setHoveredMarker: Dispatch<SetStateAction<HoveredMarkerState>>
) => ({
  reset: () => setHoveredMarker(undefined),
  set: (id: string) => setHoveredMarker(id),
  isHovered: (festivalId: string) => {
    return festivalId === hoveredMarker;
  },
});

export type HoverStateMethods = ReturnType<typeof createMethods>;
