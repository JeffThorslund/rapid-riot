import { isAdminMode } from "../../_utils/isAdminMode";
import { brand, neutral, statusError } from "../../_utils/colors";
import Color from "color";

export const getColor = (
  baseColor: string,
  isHovered: boolean,
  isSelected: boolean,
  isApproved: boolean
): string => {
  if (isSelected) return Color(neutral).hex();
  if (isHovered) return Color(brand).darken(0.3).hex();
  if (isAdminMode && !isApproved) return Color(statusError).lighten(0.3).hex();
  return baseColor;
};
