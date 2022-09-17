import { MapRef } from "react-map-gl";
import { Festival } from "../../types";

export const prepareFestivalData = (
  mapRef: MapRef | undefined,
  festivals: Festival[]
) => {
  if (!mapRef) return festivals;

  return filterOutOfBoundsMarkers(festivals, mapRef);
};

const filterOutOfBoundsMarkers = (festivals: Festival[], mapRef: MapRef) =>
  festivals
    .filter((f) =>
      mapRef.getMap().getBounds().contains({
        lat: f.location.coordinates.lat,
        lng: f.location.coordinates.lng,
      })
    )
    .sort((a, b) => a.title.localeCompare(b.title));
