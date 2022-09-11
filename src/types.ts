export interface Festival {
  title: string;
  coordinates: Coordinate;
  date: Date;
  link: string;
  id: string;
}

export interface Coordinate {
  lat: number;
  lng: number;
}

export type HoveredMarkerState = string | undefined;
