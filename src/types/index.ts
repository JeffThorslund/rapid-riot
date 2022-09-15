import { States, Countries, Provinces } from "./geo";

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

export type HoveredIndexState = number | undefined;

export { States, Countries, Provinces };
