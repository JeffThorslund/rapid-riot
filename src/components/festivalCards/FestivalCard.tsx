import { Festival } from "../../types";
import { Box, Text } from "grommet";
import React from "react";
import { LocationText } from "./LocationText";

interface Props {
  festival: Festival;
  onMouseEnter: () => void;
  onMouseLeave: () => void;
  isCardHovered: boolean;
}

export const FestivalCard = (props: Props) => {
  return (
    <Box
      border={{ color: "brand", size: "small" }}
      round={"small"}
      pad={"small"}
      onMouseEnter={props.onMouseEnter}
      onMouseLeave={props.onMouseLeave}
      justify={"center"}
    >
      <Text size={"medium"}>{props.festival.title}</Text>
      <LocationText location={props.festival.location} />
      <Text
        size={"small"}
        style={{ textOverflow: "ellipsis", overflow: "hidden" }}
      >
        {props.festival.link}
      </Text>
    </Box>
  );
};
