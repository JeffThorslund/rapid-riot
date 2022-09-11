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
    <Box pad={"small"}>
      <Grid
        columns={{
          count: 3,
          size: "auto",
        }}
        gap={"small"}
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
