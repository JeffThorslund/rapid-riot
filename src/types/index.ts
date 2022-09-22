import { Countries, Provinces, States, GeoOption } from "./geo";
import React from "react";
import { DirectionType } from "grommet/utils";
import { definitions } from "./supabase";

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

export interface Festival {
  title: string;
  location: Location;
  link: string;
}

export interface RefFestival extends Festival {
  ref: React.RefObject<HTMLDivElement>;
}

// festival
export type RawFestival = definitions["festivals"];

export interface Festival {
  id: string;
  title: RawFestival["title"];
  link: RawFestival["link"];
  location: Location;
  approved: boolean;
  ref: React.RefObject<HTMLDivElement>;
}

// festival submission
export type RawNewFestival = definitions["new_festivals"];
export type FestivalSubmissionLite = Omit<RawNewFestival, "id" | "created_at">;

//report submission
export type RawNewReport = definitions["new_reports"];
export type ReportSubmissionLite = Omit<RawNewReport, "id" | "created_at">;

//form modal
export enum FormStep {
  Filling,
  Success,
  Failure,
}

export { States, Countries, Provinces };

export type { GeoOption };
