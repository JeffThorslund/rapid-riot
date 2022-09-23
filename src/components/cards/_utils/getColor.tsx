import { isAdminMode } from "../../_utils/isAdminMode";

export const getColor = (
  baseColor: string,
  isHovered: boolean,
  isSelected: boolean,
  isApproved: boolean
): string => {
  if (isSelected) return "#A2423D";
  if (isHovered) return "#3D138D";
  if (isAdminMode && !isApproved) return "#ff5555";
  return baseColor;
};
