import { Countries, Provinces, States, GeoOption } from "./geo";

export interface Festival {
  title: string;
  location: Location;
  link: string;
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
