import { getMockData } from "../database/mock";
import { useMap } from "react-map-gl";
import React, { useEffect, useState } from "react";
import { Box } from "grommet";
import { MapElement } from "./map";
import { List } from "./list";
import { getAndSortVisibleFestivalMarkers } from "./_utils/getAndSortVisibleFestivalMarkers";
import { useViewState } from "./_utils/useViewState";
import { Festival, HoveredMarkerState } from "../types";

export const FestivalInterface = () => {
  const mapRef = useMap();
  const [viewState, setViewState] = useViewState();
  const [festivals, setFestivals] = useState<Festival[]>([]);
  const [hoveredMarker, setHoveredMarker] =
    useState<HoveredMarkerState>(undefined);

  useEffect(() => {
    const festivals = getMockData();

    setFestivals(festivals);
  }, []);

  const sortedFilteredFestivals = mapRef.default
    ? getAndSortVisibleFestivalMarkers(festivals, mapRef.default)
    : festivals;

  return (
    <Box direction="row" height={"500px"}>
      <Box width={"50%"}>
        <MapElement
          festivals={sortedFilteredFestivals}
          viewState={viewState}
          setViewState={setViewState}
          hoveredMarker={hoveredMarker}
        />
      </Box>
      <Box width={"50%"}>
        <List
          festivals={sortedFilteredFestivals}
          hoveredMarker={hoveredMarker}
          setHoveredMarker={setHoveredMarker}
        />
      </Box>
      )
    </Box>
  );
};
