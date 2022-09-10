import React, { Dispatch, SetStateAction } from "react";
import { Box, Grid } from "grommet";
import { Festival, HoveredMarkerState } from "../../types";

interface Props {
  festivals: Festival[];
  hoveredMarker: HoveredMarkerState;
  setHoveredMarker: Dispatch<SetStateAction<HoveredMarkerState>>;
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
            isCardHovered={props.hoveredMarker === festival.title}
            setHoveredMarker={props.setHoveredMarker}
          />
        ))}
      </Grid>
    </Box>
  );
};

interface IFestivalCardProps {
  festival: Festival;
  isCardHovered: boolean;
  setHoveredMarker: Dispatch<SetStateAction<HoveredMarkerState>>;
}
export const FestivalCard = (props: IFestivalCardProps) => {
  return (
    <Box
      background={props.isCardHovered ? "red" : "white"}
      border={{ color: "brand", size: "xsmall" }}
      onMouseEnter={() => props.setHoveredMarker(props.festival.title)}
      onMouseLeave={() => props.setHoveredMarker(undefined)}
    >
      <div>{props.festival.title}</div>
      <div>{props.festival.date.toDateString()}</div>
    </Box>
  );
};
