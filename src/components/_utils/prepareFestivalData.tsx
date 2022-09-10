import { MapRef } from "react-map-gl";
import { Festival } from "../../types";

export const prepareFestivalData = (
  mapRef: MapRef | undefined,
  festivals: Festival[]
) => {
  if (!isMapMounted(mapRef)) {
    return festivals;
  }

  return getAndSortVisibleFestivalMarkers(festivals, mapRef as MapRef);
};

const isMapMounted = (mapRef: MapRef | undefined) => {
  return !!mapRef;
};

const getAndSortVisibleFestivalMarkers = (
  festivals: Festival[],
  mapRef: MapRef
) =>
  festivals
    .filter((f) =>
      mapRef
        .getMap()
        .getBounds()
        .contains({ lat: f.coordinates.lat, lng: f.coordinates.lng })
    )
    .sort((a, b) => +b.date - +a.date);
