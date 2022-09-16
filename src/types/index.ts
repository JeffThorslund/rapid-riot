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

export type ActiveIndexState = number | undefined;

export interface Position {
  top: number;
  bottom: number;
  left: number;
  right: number;
}

export { States, Countries, Provinces };

export type { GeoOption };
