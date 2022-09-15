import { getFestivalData } from "../database";
import { useMap } from "react-map-gl";
import React, { useEffect, useState } from "react";
import { Box } from "grommet";
import { MapElement } from "./map";
import { FestivalCards } from "./cards";
import { useViewState } from "./_utils/useViewState";
import { Festival } from "../types";
import { prepareFestivalData } from "./_utils/prepareFestivalData";
import { useActiveIndexState } from "./_utils/useActiveIndexState";

export const FestivalInterface = () => {
  const mapRef = useMap();
  const [viewState, setViewState] = useViewState();
  const [festivals, setFestivals] = useState<Festival[]>([]);
  const festivalHoverState = useActiveIndexState();

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
      <Box width={"45%"}>
        <MapElement
          festivals={sortedFilteredFestivals}
          viewState={viewState}
          setViewState={setViewState}
          hoverStateMethods={festivalHoverState}
        />
      </Box>
      <Box width={"55%"}>
        <FestivalCards
          festivals={sortedFilteredFestivals}
          festivalHoverState={festivalHoverState}
        />
      </Box>
    </Box>
  );
};
