import { Countries, Provinces, States, GeoOption } from "./geo";
import React from "react";
import { DirectionType } from "grommet/utils";

export interface Festival {
  title: string;
  location: Location;
  link: string;
}

export interface RefFestival extends Festival {
  ref: React.RefObject<HTMLDivElement>;
}

export type Dims = { height: string; width: string };

export type SettingsPack = {
  direction: DirectionType;
  map: Dims;
  cards: Dims;
};

export interface Location {
  coordinates: Coordinate;
  city: string;
  state: States | Provinces; // state or province
  country: Countries;
}

export interface Coordinate {
  lat: number;
  lng: number;
}

export interface Position {
  top: number;
  bottom: number;
  left: number;
  right: number;
}

// Database Types
export interface DataRowBase {
  id: number;
  created_at: string;
}

export interface NewFestivalSubmission {
  title: string;
  link: string;
  country: string;
  state: string;
  city: string;
}

export interface NewFestival extends NewFestivalSubmission, DataRowBase {}

export interface NewReportSubmission {
  report: string;
}

export interface NewReport extends NewReportSubmission, DataRowBase {}

export { States, Countries, Provinces };

export type { GeoOption };
