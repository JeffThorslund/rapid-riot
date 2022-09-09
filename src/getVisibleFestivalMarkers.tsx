import { Festival } from "./types";
import { MapRef } from "react-map-gl";

export function getVisibleFestivalMarkers(
  festivals: Festival[],
  mapRef: MapRef
) {
  return festivals.filter((f) =>
    mapRef
      .getMap()
      .getBounds()
      .contains({ lat: f.coordinates.lat, lng: f.coordinates.lng })
  );
}
