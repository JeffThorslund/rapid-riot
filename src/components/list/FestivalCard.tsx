import { Festival } from "../../types";
import { HoverStateMethods } from "../_utils/useHoverState";
import { Box } from "grommet";
import React from "react";

interface Props {
  festival: Festival;
  hoverStateMethods: HoverStateMethods;
}

export const FestivalCard = (props: Props) => {
  return (
    <Box
      background={
        props.hoverStateMethods.isHovered(props.festival.id) ? "red" : "white"
      }
      border={{ color: "brand", size: "small" }}
      round={"small"}
      pad={"small"}
      onMouseEnter={() => props.hoverStateMethods.set(props.festival.id)}
      onMouseLeave={() => props.hoverStateMethods.reset()}
    >
      <div>{props.festival.title}</div>
      <div>{props.festival.date.toDateString()}</div>
    </Box>
  );
};
