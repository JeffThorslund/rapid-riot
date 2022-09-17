import { Location } from "../../types";
import { Text } from "grommet";
import React from "react";

export interface LocationTextProps {
  location: Location;
}

export const LocationText = (props: LocationTextProps) => {
  const { city, state, country } = props.location;

  return <Text size={"small"}>{`${city}, ${state}, ${country}`}</Text>;
};
