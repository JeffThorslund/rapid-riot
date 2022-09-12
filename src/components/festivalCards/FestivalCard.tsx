import { Festival } from "../../types";
import { Box, Text } from "grommet";
import React from "react";

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
      <Text size={"small"}>{props.festival.link}</Text>
    </Box>
  );
};
