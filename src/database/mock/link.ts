export const getRandomLink = () => {
  const secondLevelDomain = createSecondLevelDomain();

  return appendSubdomainAndTopLevelDomain(secondLevelDomain);
};

export const createSecondLevelDomain = () => {
  return (Math.random() + 1).toString(36).substring(7);
};

export const appendSubdomainAndTopLevelDomain = (
  secondLevelDomain: string
): string => {
  const subdomain = "www";
  const topLevelDomain = "com";

  return subdomain + "." + secondLevelDomain + "." + topLevelDomain;
};
