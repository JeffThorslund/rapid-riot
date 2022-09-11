import { Festival } from "../../types";
import { HoverStateMethods } from "../_utils/useHoverState";
import { Box } from "grommet";
import React from "react";
import { createSemiTransparentBackgroundImage } from "./_utils/createSemiTransparentBackgroundImage";

interface Props {
  festival: Festival;
  hoverStateMethods: HoverStateMethods;
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
      {...(props.hoverStateMethods.isHovered(props.festival.id)
        ? hoveredStyle
        : standardStyle)}
      border={{ color: "brand", size: "small" }}
      round={"small"}
      pad={"small"}
      onMouseEnter={() => props.hoverStateMethods.set(props.festival.id)}
      onMouseLeave={() => props.hoverStateMethods.reset()}
    >
      <div>{props.festival.title}</div>
      <div>{props.festival.date.toDateString()}</div>
      <div>{props.festival.link}</div>
    </Box>
  );
};
