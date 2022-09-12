import { States, Country, Provinces } from "./geo";

export interface Festival {
  title: string;
  location: Location;
  link: string;
  id: FestivalId;
}

export interface Location {
  coordinates: Coordinate;
  city: string;
  state: States | Provinces; // state or province
  country: Country;
  zipCode: string; // zip or postal code
}

export interface Coordinate {
  lat: number;
  lng: number;
}

export type FestivalId = string;

export type HoveredMarkerState = FestivalId | undefined;

export { States, Country, Provinces };
