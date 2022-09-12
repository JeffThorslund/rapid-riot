import { Festival } from "../../types";
import { Box, Text } from "grommet";
import React from "react";
import { LocationText } from "./LocationText";
import { getCardStyle } from "./_utils/getCardStyle";
import { LinkText } from "./LinkText";

interface Props {
  festival: Festival;
  onMouseEnter: () => void;
  onMouseLeave: () => void;
  isCardHovered: boolean;
}

export const FestivalCard = (props: Props) => {
  const textColor = "dark";
  const cardColor = "card";

  return (
    <Box
      background={cardColor}
      round={"small"}
      pad={"small"}
      margin={"small"}
      onMouseEnter={props.onMouseEnter}
      onMouseLeave={props.onMouseLeave}
      style={getCardStyle(props.isCardHovered)}
    >
      <Text size={"medium"} color={textColor}>
        {props.festival.title}
      </Text>
      <LocationText location={props.festival.location} color={textColor} />
      <LinkText color={textColor} link={props.festival.link} />
    </Box>
  );
};
