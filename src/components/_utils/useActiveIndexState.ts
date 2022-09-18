import { Dispatch, SetStateAction, useState } from "react";
import { ActiveIndexState } from "../../types";

export const useActiveIndexState = () => {
  const [activeIndex, setActiveIndex] = useState<ActiveIndexState>(undefined);

  return createMethods(activeIndex, setActiveIndex);
};

const createMethods = (
  activeIndex: ActiveIndexState,
  setActiveIndex: Dispatch<SetStateAction<ActiveIndexState>>
) => ({
  value: activeIndex,
  set: setActiveIndex,
  reset: () => setActiveIndex(undefined),
  isActive: (index: number) => index === activeIndex,
});

export type ActiveIndexStateMethods = ReturnType<typeof createMethods>;
