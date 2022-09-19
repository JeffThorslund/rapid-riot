import { useMap } from "react-map-gl";
import React from "react";
import { MapElement } from "../map";
import { FestivalCards } from "../cards";
import { useViewState } from "./_utils/useViewState";
import { prepareFestivalData } from "./_utils/prepareFestivalData";
import { useSelectionManagement } from "./_utils/useSelectionManagement";
import { ResponsiveContainer } from "./ResponsiveContainer";
import { useFestivalData } from "./_utils/useFestivalData";

export const FestivalInterface = () => {
  const festivals = useFestivalData();
  const mapRef = useMap();
  const [viewState, setViewState] = useViewState();
  const selectionManagement = useSelectionManagement();

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
