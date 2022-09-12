import { getFestivalData } from "../database";
import { useMap } from "react-map-gl";
import React, { useEffect, useState } from "react";
import { Box } from "grommet";
import { MapElement } from "./map";
import { FestivalCards } from "./festivalCards";
import { useViewState } from "./_utils/useViewState";
import { Festival } from "../types";
import { prepareFestivalData } from "./_utils/prepareFestivalData";
import { useHoverState } from "./_utils/useHoverState";
import { mockDataProvider } from "../database/mock";
import { dataProvider } from "../database/data";

export const FestivalInterface = () => {
  const mapRef = useMap();
  const [viewState, setViewState] = useViewState();
  const [festivals, setFestivals] = useState<Festival[]>([]);
  const hoverStateMethods = useHoverState();

  useEffect(() => {
    const festivals = getFestivalData(mockDataProvider);
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
          hoverStateMethods={hoverStateMethods}
        />
      </Box>
      <Box width={"55%"} overflow={"auto"} background={"background"}>
        <FestivalCards
          festivals={sortedFilteredFestivals}
          hoverStateMethods={hoverStateMethods}
        />
      </Box>
    </Box>
  );
};
