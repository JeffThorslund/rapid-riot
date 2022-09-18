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
  isCardSelected: boolean;
}

export const getColor = (
  baseColor: string,
  isHovered: boolean,
  isSelected: boolean
): string => {
  if (isHovered) return "#3D138D";
  if (isSelected) return "#02873c";
  return baseColor;
};

export const FestivalCard = (props: Props) => {
  return (
    <Box
      background={getColor(
        "#f2edfc",
        props.isCardHovered,
        props.isCardSelected
      )}
      round={"small"}
      pad={"small"}
      margin={{ horizontal: "xsmall", vertical: "small" }}
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
      <Text size={"medium"}>{props.festival.title}</Text>
      <LocationText location={props.festival.location} />
      <LinkText link={props.festival.link} />
    </Box>
  );
};
