import {
  ActiveIdStateMethods,
  useActiveIndexState,
} from "../../_utils/useActiveIndexState";
import { useSmallScreenDetection } from "./useSmallScreenDetection";
import { disableStateSetter } from "./disableStateSetter";

export interface UseSelectionManagementMethods {
  select: ActiveIdStateMethods;
  hover: ActiveIdStateMethods;
}

export const useSelectionManagement = (): UseSelectionManagementMethods => {
  const isScreenSmall = useSmallScreenDetection();

  const hoverMethods = useActiveIndexState<string>();

  // if screen is small, disable hover setting interactions for better UX
  if (isScreenSmall) {
    disableStateSetter(hoverMethods);
  }

  return {
    select: useActiveIndexState<string>(),
    hover: hoverMethods,
  };
};
