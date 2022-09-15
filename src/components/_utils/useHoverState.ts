import { Dispatch, SetStateAction, useState } from "react";
import { HoveredIndexState } from "../../types";

export const useHoverState = () => {
  const [hoveredIndex, setHoveredIndex] =
    useState<HoveredIndexState>(undefined);

  return createMethods(hoveredIndex, setHoveredIndex);
};

const createMethods = (
  hoveredIndex: HoveredIndexState,
  setHoveredIndex: Dispatch<SetStateAction<HoveredIndexState>>
) => ({
  reset: () => setHoveredIndex(undefined),
  set: (index: number) => setHoveredIndex(index),
  isHovered: (index: number) => index === hoveredIndex,
});

export type HoverStateMethods = ReturnType<typeof createMethods>;
