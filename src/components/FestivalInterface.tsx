import { getMockData } from "../database/mock";
import { useMap } from "react-map-gl";
import React, { useEffect, useState } from "react";
import { Box } from "grommet";
import { MapElement } from "./map";
import { FestivalCards } from "./list";
import { useViewState } from "./_utils/useViewState";
import { Festival } from "../types";
import { prepareFestivalData } from "./_utils/prepareFestivalData";
import { useHoverState } from "./_utils/useHoverState";

export const FestivalInterface = () => {
  const mapRef = useMap();
  const [viewState, setViewState] = useViewState();
  const [festivals, setFestivals] = useState<Festival[]>([]);
  const hoverStateMethods = useHoverState();

  useEffect(() => {
    const festivals = getMockData();
    setFestivals(festivals);
  }, []);

  const sortedFilteredFestivals = prepareFestivalData(
    mapRef.default,
    festivals
  );

  return (
    <Box direction="row" height={"100%"} background={"light-5"}>
      <Box width={"40%"}>
        <MapElement
          festivals={sortedFilteredFestivals}
          viewState={viewState}
          setViewState={setViewState}
          hoverStateMethods={hoverStateMethods}
        />
      </Box>
      <Box width={"60%"} overflow={"scroll"}>
        <FestivalCards
          festivals={sortedFilteredFestivals}
          hoverStateMethods={hoverStateMethods}
        />
      </Box>
    </Box>
  );
};
