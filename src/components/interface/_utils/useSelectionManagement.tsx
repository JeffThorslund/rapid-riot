import {
  ActiveIdStateMethods,
  useActiveIndexState,
} from "../../_utils/useActiveIndexState";

export interface UseSelectionManagementMethods {
  select: ActiveIdStateMethods;
  hover: ActiveIdStateMethods;
}

export const useSelectionManagement = (): UseSelectionManagementMethods => {
  return {
    select: useActiveIndexState<string>(),
    hover: useActiveIndexState<string>(),
  };
};
