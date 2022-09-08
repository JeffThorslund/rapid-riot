interface Marker {
  coordinates: [number, number];
}

export const getMarkers = (): Marker[] => {
  return [{ coordinates: [-74.006, 40.7128] }];
};
