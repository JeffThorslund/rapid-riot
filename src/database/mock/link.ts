export const getRandomLink = () =>
  "www." + (Math.random() + 1).toString(36).substring(7) + ".com";
