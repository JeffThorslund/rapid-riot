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
    .sort(sortByTitle)
    .map(appendRefToFestival);
};

const isMarkerWithinMapBounds = (mapRef: MapRef) => (festival: Festival) =>
  mapRef.getMap().getBounds().contains({
    lat: festival.location.coordinates.lat,
    lng: festival.location.coordinates.lng,
  });

const sortByTitle = (a: Festival, b: Festival) =>
  a.title.localeCompare(b.title);

const appendRefToFestival = (festival: Festival) => ({
  ...festival,
  ref: React.createRef<HTMLDivElement>(),
});
