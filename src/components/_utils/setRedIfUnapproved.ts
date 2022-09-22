export const setRedIfUnapproved = (
  color: string,
  isApproved: boolean
): string => (!isApproved ? "#ff5555" : color);
