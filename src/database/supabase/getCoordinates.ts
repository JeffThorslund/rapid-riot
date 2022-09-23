import { Coordinate, MaxboxQueryResponse } from "../../types";

export type LocationParams = string[];

export const getCoordinates = async (
  params: LocationParams
): Promise<Coordinate> => {
  const requestURL = buildRequestURL(params);
  const data = await fetchData(requestURL);
  return extractCoordinates(data as MaxboxQueryResponse);
};

export const buildRequestURL = (params: LocationParams): string => {
  const baseURL = "https://api.mapbox.com/geocoding/v5/mapbox.places/";
  const encodedParams = getEncodedParams(params);
  const url = new URL(encodedParams, baseURL);

  const searchParams = {
    limit: "1",
    proximity: "ip",
    types: "place",
    access_token: process.env.REACT_APP_MAPBOX_ACCESS_TOKEN || "",
  };

  Object.entries(searchParams).forEach(([key, val]) => {
    url.searchParams.set(key, val);
  });

  return url.toString();
};

export const getEncodedParams = (params: LocationParams): string => {
  return encodeURIComponent(params.join(" ")).concat(".json");
};

export const fetchData = (url: string): Promise<MaxboxQueryResponse> => {
  return fetch(url).then((data) => data.json());
};

export const extractCoordinates = (data: MaxboxQueryResponse) => {
  try {
    const [lng, lat] = data.features[0].center;
    return { lat, lng };
  } catch {
    return { lat: 0, lng: 0 };
  }
};
