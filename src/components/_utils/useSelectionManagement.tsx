import {
  ActiveIndexStateMethods,
  useActiveIndexState,
} from "./useActiveIndexState";

export interface UseSelectionManagementMethods {
  select: ActiveIndexStateMethods;
  hover: ActiveIndexStateMethods;
}

export const useSelectionManagement = (): UseSelectionManagementMethods => {
  return {
    select: useActiveIndexState<number>(),
    hover: useActiveIndexState<number>(),
  };
};
