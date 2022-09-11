import { getMockData } from "../database/mock";
import { useMap } from "react-map-gl";
import React, { useEffect, useState } from "react";
import { Box } from "grommet";
import { MapElement } from "./map";
import { List } from "./list";
import { useViewState } from "./_utils/useViewState";
import { Festival, HoveredMarkerState } from "../types";
import { prepareFestivalData } from "./_utils/prepareFestivalData";

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

  const sortedFilteredFestivals = prepareFestivalData(
    mapRef.default,
    festivals
  );

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
    </Box>
  );
};
