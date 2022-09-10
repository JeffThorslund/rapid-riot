type Constraint = [number, number];

export const getRandomCoordinate = (
  latitudeConstraints: Constraint,
  longitudeConstraints: Constraint
) => {
  return {
    lat: getRandomNumberConstrained(latitudeConstraints),
    lng: getRandomNumberConstrained(longitudeConstraints),
  };
};

const getRandomNumberConstrained = (constraint: Constraint) => {
  const [max, min] = constraint;

  return Math.random() * (max - min) + min;
};
