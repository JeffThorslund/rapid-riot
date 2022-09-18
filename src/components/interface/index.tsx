import { getFestivalData } from "../../database";
import { useMap } from "react-map-gl";
import React, { useEffect, useState } from "react";
import { MapElement } from "../map";
import { FestivalCards } from "../cards";
import { useViewState } from "./_utils/useViewState";
import { Festival } from "../../types";
import { prepareFestivalData } from "./_utils/prepareFestivalData";
import { useSelectionManagement } from "./_utils/useSelectionManagement";
import { ResponsiveContainer } from "./ResponsiveContainer";

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
    <ResponsiveContainer
      map={
        <MapElement
          festivals={sortedFilteredFestivals}
          viewState={viewState}
          setViewState={setViewState}
          selectionManagement={selectionManagement}
        />
      }
      cards={
        <FestivalCards
          festivals={sortedFilteredFestivals}
          selectionManagement={selectionManagement}
        />
      }
    />
  );
};
