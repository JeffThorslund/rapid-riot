import { Location } from "../../types";
import { Text } from "grommet";
import React from "react";

export interface LocationTextProps {
  location: Location;
  color: string;
}

export const LocationText = (props: LocationTextProps) => {
  const { city, state, country } = props.location;

  return (
    <Text
      size={"small"}
      color={props.color}
    >{`${city}, ${state}, ${country}`}</Text>
  );
};
