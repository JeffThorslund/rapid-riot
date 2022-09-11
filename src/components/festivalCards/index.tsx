import React from "react";
import { Box, Grid } from "grommet";
import { Festival } from "../../types";
import { HoverStateMethods } from "../_utils/useHoverState";
import { FestivalCard } from "./FestivalCard";

interface Props {
  festivals: Festival[];
  hoverStateMethods: HoverStateMethods;
}

export const FestivalCards = (props: Props) => {
  return (
    <Box>
      <Grid
        columns={{
          count: 2,
          size: "auto",
        }}
        gap={"small"}
        pad={"small"}
      >
        {props.festivals.map((festival) => (
          <FestivalCard
            key={festival.title}
            festival={festival}
            onMouseEnter={() => props.hoverStateMethods.set(festival.id)}
            onMouseLeave={() => props.hoverStateMethods.reset()}
            isCardHovered={props.hoverStateMethods.isHovered(festival.id)}
          />
        ))}
      </Grid>
    </Box>
  );
};
