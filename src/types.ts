export interface Festival {
  title: string;
  address: string;
  coordinates: Coordinate;
  link: string;
  id: string;
}

export interface Coordinate {
  lat: number;
  lng: number;
}

export type HoveredMarkerState = string | undefined;
