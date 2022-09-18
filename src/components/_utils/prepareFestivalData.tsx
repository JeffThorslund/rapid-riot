import { MapRef } from "react-map-gl";
import { Festival, RefFestival } from "../../types";
import React from "react";

export const prepareFestivalData = (
  mapRef: MapRef | undefined,
  festivals: Festival[]
): RefFestival[] => {
  if (!mapRef) return [];

  return filterOutOfBoundsMarkers(festivals, mapRef);
};

const filterOutOfBoundsMarkers = (festivals: Festival[], mapRef: MapRef) =>
  festivals
    // don't show festivals out of bounds
    .filter((f) =>
      mapRef.getMap().getBounds().contains({
        lat: f.location.coordinates.lat,
        lng: f.location.coordinates.lng,
      })
    )
    // append a ref to each festival for scrolling
    .map((f) => ({
      ...f,
      ref: React.createRef<HTMLDivElement>(),
    }))
    // sort festivals alphabetically
    .sort((a, b) => a.title.localeCompare(b.title));
