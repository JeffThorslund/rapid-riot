import { Festival } from "../../types";
import { Box, Text } from "grommet";
import React from "react";
import { LocationText } from "./LocationText";
import { LinkText } from "./LinkText";

interface Props {
  festival: Festival;
  onMouseEnter: () => void;
  onMouseLeave: () => void;
  onClick: () => void;
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
      onClick={props.onClick}
      elevation={props.isCardHovered ? "medium" : "small"}
      style={{
        transform: props.isCardHovered ? "translateY(-3px)" : "none",
        transition: "all ease 0.2s",
        cursor: "pointer",
      }}
    >
      <Text size={"medium"} color={textColor}>
        {props.festival.title}
      </Text>
      <LocationText location={props.festival.location} color={textColor} />
      <LinkText color={textColor} link={props.festival.link} />
    </Box>
  );
};
