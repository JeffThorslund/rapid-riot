import { Text } from "grommet";
import React from "react";

export const LinkRecommendation = (props: {
  primaryText: string;
  primaryTextColor: string;
  secondaryText: string;
}) => (
  <div>
    <Text color={props.primaryTextColor} size={"small"} weight={"bold"}>
      {props.primaryText}
    </Text>
    <Text size={"small"}>: {props.secondaryText}</Text>
  </div>
);
