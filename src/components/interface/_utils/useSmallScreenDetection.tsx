import { useContext } from "react";
import { ResponsiveContext } from "grommet";
import { isSizeSmall } from "./isSizeSmall";

export const useSmallScreenDetection = () => {
  const size = useContext(ResponsiveContext);
  return isSizeSmall(size);
};
