export const createSemiTransparentBackgroundImage = (
  url: string,
  rgbaColor: string
) => {
  return `linear-gradient(${rgbaColor}, ${rgbaColor}), url(${url})`;
};
