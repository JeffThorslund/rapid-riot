import { Dispatch, SetStateAction, useState } from "react";

type ActiveState<T> = T | undefined;

type SetActiveState<T> = Dispatch<SetStateAction<ActiveState<T>>>;

interface ActiveStateMethods<T> {
  set: SetActiveState<T>;
  reset: () => void;
  isActive: (index: T) => boolean;
  value: ActiveState<T>;
}

export type ActiveIndexStateMethods = ActiveStateMethods<number>;

export type ActiveIdStateMethods = ActiveStateMethods<string>;

export const useActiveIndexState = <T>(): ActiveStateMethods<T> => {
  const [activeIndex, setActiveIndex] = useState<ActiveState<T>>(undefined);

  return {
    value: activeIndex,
    set: setActiveIndex,
    reset: () => setActiveIndex(undefined),
    isActive: (index: T) => index === activeIndex,
  };
};
