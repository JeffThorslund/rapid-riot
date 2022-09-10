export interface Festival {
  title: string;
  coordinates: Coordinate;
  date: Date;
}

export interface Coordinate {
  lat: number;
  lng: number;
}
