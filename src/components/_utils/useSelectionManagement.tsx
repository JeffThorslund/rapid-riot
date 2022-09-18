import {
  ActiveIndexStateMethods,
  useActiveIndexState,
} from "./useActiveIndexState";

export interface UseSelectionManagement {
  select: ActiveIndexStateMethods;
  hover: ActiveIndexStateMethods;
}

export const useSelectionManagement = (): UseSelectionManagement => {
  return {
    select: useActiveIndexState(),
    hover: useActiveIndexState(),
  };
};
