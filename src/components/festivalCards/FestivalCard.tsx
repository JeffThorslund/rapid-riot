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
  const textColor = "#2D1E2F";
  const cardColor = "card";

  return (
    <Box
      // border={{
      //   color: props.isCardHovered ? "dark" : cardColor,
      //   size: "medium",
      // }}
      background={cardColor}
      round={"small"}
      pad={"small"}
      onMouseEnter={props.onMouseEnter}
      onMouseLeave={props.onMouseLeave}
      justify={"center"}
      style={{
        cursor: "pointer",
        transition: "all ease 0.2s",
        ...(props.isCardHovered
          ? {
              boxShadow: "0px 5px 10px 1px rgba(0, 0, 0, 0.2)",
              transform: "translateY(-3px)",
            }
          : {
              boxShadow: "0px 3px 5px 0px rgba(0, 0, 0, 0.3)",
              transform: "none",
            }),
      }}
    >
      <Text size={"medium"} color={textColor}>
        {props.festival.title}
      </Text>
      <LocationText location={props.festival.location} color={textColor} />
      <Text
        size={"small"}
        style={{ textOverflow: "ellipsis", overflow: "hidden" }}
        color={textColor}
      >
        {props.festival.link}
      </Text>
    </Box>
  );
};
