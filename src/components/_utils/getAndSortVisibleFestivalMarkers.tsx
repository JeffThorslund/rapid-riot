import { Festival } from "../../types";
import { MapRef } from "react-map-gl";

export const getAndSortVisibleFestivalMarkers = (
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
