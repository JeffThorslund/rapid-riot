export const getColor = (
  baseColor: string,
  isHovered: boolean,
  isSelected: boolean
): string => {
  if (isSelected) return "#A2423D";
  if (isHovered) return "#3D138D";
  return baseColor;
};
