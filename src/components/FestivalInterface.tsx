import { getFestivals } from "../database";
import { useMap } from "react-map-gl";
import React from "react";
import { Box } from "grommet";
import { MapGL } from "./map";
import { List } from "./list";
import { getVisibleFestivalMarkers } from "../getVisibleFestivalMarkers";

export const FestivalInterface = () => {
  const mapRef = useMap();
  const festivals = getFestivals();

  const [viewState, setViewState] = React.useState({
    longitude: -100,
    latitude: 40,
    zoom: 3.5,
  });

  return (
    <Box direction="row" height={"500px"}>
      <Box width={"50%"}>
        <MapGL
          festivals={festivals}
          viewState={viewState}
          setViewState={setViewState}
        />
      </Box>
      {mapRef.default ? (
        <Box width={"50%"}>
          <List
            festivals={getVisibleFestivalMarkers(festivals, mapRef.default)}
          />
        </Box>
      ) : null}
    </Box>
  );
};
