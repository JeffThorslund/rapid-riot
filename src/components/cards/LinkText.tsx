import { Text } from "grommet";
import React from "react";

interface LinkTextProps {
  link: string;
}

export const LinkText = (props: LinkTextProps) => {
  return (
    <Text
      size={"small"}
      style={{ textOverflow: "ellipsis", overflow: "hidden" }}
    >
      {props.link}
    </Text>
  );
};
