import React from "react";
import { Box, Grid } from "grommet";
import { Festival } from "../../types";

interface Props {
  festivals: Festival[];
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
          <FestivalCard key={festival.title} festival={festival} />
        ))}
      </Grid>
    </Box>
  );
};

interface IFestivalCardProps {
  festival: Festival;
}
export const FestivalCard = (props: IFestivalCardProps) => {
  return (
    <Box border={{ color: "brand", size: "xsmall" }}>
      {props.festival.title}
    </Box>
  );
};
