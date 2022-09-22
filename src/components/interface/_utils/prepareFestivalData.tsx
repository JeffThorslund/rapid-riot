import { MapRef } from "react-map-gl";
import {
  Countries,
  Festival,
  Provinces,
  RawFestival,
  RefFestival,
  States,
} from "../../../types";
import React from "react";

export const prepareFestivalData = (
  mapRef: MapRef | undefined,
  festivals: RawFestival[]
): RefFestival[] => {
  if (!mapRef) return [];

  return festivals
    .filter(isMarkerWithinMapBounds(mapRef))
    .sort((a, b) => sortByTitle(a.title, b.title))
    .sort((a, b) => sortByApproval(a.approved, b.approved))
    .map(shaper);
};

export const isMarkerWithinMapBounds =
  (mapRef: MapRef) => (festival: RawFestival) =>
    mapRef.getMap().getBounds().contains({
      lat: festival.lat,
      lng: festival.lng,
    });

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
