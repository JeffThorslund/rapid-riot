import { Festival } from "../../types";
import { Box } from "grommet";
import React from "react";
import { createSemiTransparentBackgroundImage } from "./_utils/createSemiTransparentBackgroundImage";

interface Props {
  festival: Festival;
  onMouseEnter: () => void;
  onMouseLeave: () => void;
  isCardHovered: boolean;
}

export const FestivalCard = (props: Props) => {
  const standardStyle = {
    background: createSemiTransparentBackgroundImage(
      "http://placekitten.com/200/300",
      "rgba(255,255,255,0.8)"
    ),
  };

  const hoveredStyle = {
    background: "light-2",
  };

  return (
    <Box
      {...(props.isCardHovered ? hoveredStyle : standardStyle)}
      border={{ color: "brand", size: "small" }}
      round={"small"}
      pad={"small"}
      onMouseEnter={props.onMouseEnter}
      onMouseLeave={props.onMouseLeave}
    >
      <div>{props.festival.title}</div>
      <div>{props.festival.date.toDateString()}</div>
      <div>{props.festival.link}</div>
    </Box>
  );
};
