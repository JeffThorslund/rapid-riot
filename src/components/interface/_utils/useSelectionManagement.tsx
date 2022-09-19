import {
  ActiveIdStateMethods,
  useActiveIndexState,
} from "../../_utils/useActiveIndexState";
import { useSmallScreenDetection } from "./useSmallScreenDetection";

export interface UseSelectionManagementMethods {
  select: ActiveIdStateMethods;
  hover: ActiveIdStateMethods;
}

export const useSelectionManagement = (): UseSelectionManagementMethods => {
  const isScreenSmall = useSmallScreenDetection();

  const hoverMethods = useActiveIndexState<string>();

  // if screen is small, disable hover setting interactions
  if (isScreenSmall) {
    hoverMethods.set = () => undefined;
  }

  return {
    select: useActiveIndexState<string>(),
    hover: hoverMethods,
  };
};
