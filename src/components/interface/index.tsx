import { MapRef, useMap } from "react-map-gl";
import React, { Dispatch, SetStateAction, useState } from "react";
import { MapElement } from "../map";
import { FestivalCards, SearchAndFilter } from "../cards";
import { useViewState } from "./_utils/useViewState";
import { useSelectionManagement } from "./_utils/useSelectionManagement";
import { ResponsiveContainer } from "./ResponsiveContainer";
import { useFestivalData } from "./_utils/useFestivalData";
import Fuse from "fuse.js";
import {
  Countries,
  Festival,
  Provinces,
  RawFestival,
  States,
} from "../../types";

export const FestivalInterface = () => {
  const { data: rawFestivals, isLoading: isDataLoading } = useFestivalData();
  const [viewState, setViewState] = useViewState();
  const selectionManagement = useSelectionManagement();
  const { festivals, searchQuery, setSearchQuery } = useFilterAndSearch(
    rawFestivals || []
  );

  return (
    <ResponsiveContainer
      map={
        <MapElement
          festivals={festivals}
          viewState={viewState}
          setViewState={setViewState}
          selectionManagement={selectionManagement}
        />
      }
      cards={
        <FestivalCards
          festivals={festivals}
          selectionManagement={selectionManagement}
          isDataFetching={isDataLoading}
          searchBar={
            <SearchAndFilter
              searchQuery={searchQuery}
              setSearchQuery={setSearchQuery}
            />
          }
        />
      }
    />
  );
};

const useFilterAndSearch = (
  festivals: RawFestival[]
): {
  searchQuery: string;
  setSearchQuery: Dispatch<SetStateAction<string>>;
  festivals: Festival[];
} => {
  const mapRef = useMap();

  const [searchQuery, setSearchQuery] = useState("");

  const visibleFestivals = festivals
    .filter((festival) => {
      return mapRef.default
        ? isMarkerWithinMapBounds(festival, mapRef.default)
        : true;
    })
    .sort((a, b) => sortByApproval(a.approved, b.approved));

  const fuse = new Fuse(visibleFestivals || [], {
    keys: ["title", "city"],
    threshold: 0.6,
  });

  const searchedFestivals =
    searchQuery === ""
      ? visibleFestivals
      : fuse.search(searchQuery).map(({ item }) => item);

  return {
    searchQuery,
    setSearchQuery,
    festivals: searchedFestivals.map(shaper),
  };
};

export const isMarkerWithinMapBounds = (
  festival: RawFestival,
  mapRef: MapRef
) => {
  return mapRef.getMap().getBounds().contains({
    lat: festival.lat,
    lng: festival.lng,
  });
};

export const sortByTitle = (a: string, b: string) => a.localeCompare(b);

export const sortByApproval = (a: boolean, b: boolean) => Number(a) - Number(b);

export const shaper = (festival: RawFestival): Festival => ({
  id: festival.id.toString(),
  title: festival.title,
  link: festival.link,
  location: {
    coordinates: { lat: festival.lat, lng: festival.lng },
    country: festival.country as Countries,
    state: festival.state as States | Provinces,
    city: festival.city,
  },
  approved: festival.approved,
  ref: React.createRef<HTMLDivElement>(),
});
