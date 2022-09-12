export const getCardStyle = (isHovered: boolean) => {
  const baseStyle = { cursor: "pointer", transition: "all ease 0.2s" };

  if (!isHovered) {
    return {
      ...baseStyle,
      boxShadow: "0px 3px 5px 0px rgba(0, 0, 0, 0.3)",
      transform: "none",
    };
  }

  return {
    ...baseStyle,
    boxShadow: "0px 5px 10px 1px rgba(0, 0, 0, 0.2)",
    transform: "translateY(-3px)",
  };
};
