import React from "react";
import { Box, Grid } from "grommet";
import { Festival } from "../../types";
import { HoverStateMethods } from "../_utils/useHoverState";
import { FestivalCard } from "./FestivalCard";

interface Props {
  festivals: Festival[];
  hoverStateMethods: HoverStateMethods;
}

export const List = (props: Props) => {
  return (
    <Box pad={"small"}>
      <Grid
        columns={{
          count: 2,
          size: "auto",
        }}
        gap={"small"}
      >
        {props.festivals.map((festival) => (
          <FestivalCard
            key={festival.title}
            festival={festival}
            hoverStateMethods={props.hoverStateMethods}
          />
        ))}
      </Grid>
    </Box>
  );
};
