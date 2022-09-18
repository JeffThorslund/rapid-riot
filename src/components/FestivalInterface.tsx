import { getFestivalData } from "../database";
import { useMap } from "react-map-gl";
import React, { useEffect, useState } from "react";
import { Box } from "grommet";
import { MapElement } from "./map";
import { FestivalCards } from "./cards";
import { useViewState } from "./_utils/useViewState";
import { Festival } from "../types";
import { prepareFestivalData } from "./_utils/prepareFestivalData";
import { useSelectionManagement } from "./_utils/useSelectionManagement";

export const FestivalInterface = () => {
  const mapRef = useMap();
  const [viewState, setViewState] = useViewState();
  const [festivals, setFestivals] = useState<Festival[]>([]);
  const selectionManagement = useSelectionManagement();

  useEffect(() => {
    const festivals = getFestivalData();
    setFestivals(festivals);
  }, []);

  const sortedFilteredFestivals = prepareFestivalData(
    mapRef.default,
    festivals
  );

  return (
    <Box direction="row" height={"100%"}>
      <Box width={"60%"}>
        <MapElement
          festivals={sortedFilteredFestivals}
          viewState={viewState}
          setViewState={setViewState}
          selectionManagement={selectionManagement}
        />
      </Box>
      <Box width={"40%"}>
        <FestivalCards
          festivals={sortedFilteredFestivals}
          selectionManagement={selectionManagement}
        />
      </Box>
    </Box>
  );
};
