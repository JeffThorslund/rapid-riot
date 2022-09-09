import { getFestivals } from "../database";
import { useMap } from "react-map-gl";
import React from "react";
import { Box } from "grommet";
import { MapElement } from "./map";
import { List } from "./list";
import { getVisibleFestivalMarkers } from "./_utils/getVisibleFestivalMarkers";
import { useViewState } from "./_utils/useViewState";

export const FestivalInterface = () => {
  const mapRef = useMap();
  const festivals = getFestivals();
  const [viewState, setViewState] = useViewState();

  return (
    <Box direction="row" height={"500px"}>
      <Box width={"50%"}>
        <MapElement
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
