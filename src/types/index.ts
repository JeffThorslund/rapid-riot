import { Countries, Provinces, States, GeoOption } from "./geo";
import React from "react";
import { definitions } from "./supabase";

export interface Position {
  top: number;
  bottom: number;
  left: number;
  right: number;
}

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

export interface Festival {
  id: string;
  title: RawFestival["title"];
  link: RawFestival["link"];
  location: Location;
  approved: RawFestival["approved"];
  ref: React.RefObject<HTMLDivElement>;
}

// festival
export type RawFestival = definitions["festivals"];
export type RawFestivalLite = Omit<
  RawFestival,
  "id" | "created_at" | "lat" | "lng" | "approved"
>;

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
