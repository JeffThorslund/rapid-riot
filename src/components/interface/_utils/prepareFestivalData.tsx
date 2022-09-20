import { MapRef } from "react-map-gl";
import { Festival, RefFestival } from "../../../types";
import React from "react";

export const prepareFestivalData = (
  mapRef: MapRef | undefined,
  festivals: Festival[]
): RefFestival[] => {
  if (!mapRef) return [];

  return festivals
    .filter(isMarkerWithinMapBounds(mapRef))
    .sort((a, b) => sortByTitle(a.title, b.title))
    .map(appendRefToFestival);
};

export const isMarkerWithinMapBounds =
  (mapRef: MapRef) => (festival: Festival) =>
    mapRef.getMap().getBounds().contains({
      lat: festival.location.coordinates.lat,
      lng: festival.location.coordinates.lng,
    });

export const sortByTitle = (a: string, b: string) => a.localeCompare(b);

export const appendRefToFestival = (festival: Festival) => ({
  ...festival,
  ref: React.createRef<HTMLDivElement>(),
});
