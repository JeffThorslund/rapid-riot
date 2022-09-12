import { MapRef } from "react-map-gl";
import { Festival } from "../../types";

export const prepareFestivalData = (
  mapRef: MapRef | undefined,
  festivals: Festival[]
) => {
  if (!mapRef) {
    return festivals;
  }
  return getAndSortVisibleFestivalMarkers(festivals, mapRef);
};

const getAndSortVisibleFestivalMarkers = (
  festivals: Festival[],
  mapRef: MapRef
) =>
  festivals.filter((f) =>
    mapRef
      .getMap()
      .getBounds()
      .contains({ lat: f.coordinates.lat, lng: f.coordinates.lng })
  );
