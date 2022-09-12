import { Text } from "grommet";
import React from "react";

interface LinkTextProps {
  color: string;
  link: string;
}

export const LinkText = (props: LinkTextProps) => {
  return (
    <Text
      size={"small"}
      style={{ textOverflow: "ellipsis", overflow: "hidden" }}
      color={props.color}
    >
      {props.link}
    </Text>
  );
};
