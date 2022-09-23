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

// mapbox response
export interface MaxboxQueryResponse {
  type: string;
  query: string[];
  features: Feature[];
  attribution: string;
}

interface Feature {
  id: string;
  type: string;
  place_type: string[];
  relevance: number;
  properties: Properties;
  text: string;
  place_name: string;
  bbox: number[];
  center: number[];
  geometry: Geometry;
  context: Context[];
}

interface Context {
  id: string;
  wikidata: string;
  text: string;
  short_code?: string;
}

interface Geometry {
  type: string;
  coordinates: number[];
}

interface Properties {
  wikidata: string;
}

export { States, Countries, Provinces };

export type { GeoOption };
