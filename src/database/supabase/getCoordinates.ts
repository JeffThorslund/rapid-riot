import {
  Coordinate,
  Countries,
  MaxboxQueryResponse,
  Provinces,
  States,
} from "../../types";

export type LocationParams = string[];

export const getCoordinates = async (
  city: string,
  region: States | Provinces,
  country: Countries
): Promise<Coordinate> => {
  const requestURL = buildRequestURL(city, region, country);
  const data = await fetchData(requestURL);
  return extractCoordinates(data as MaxboxQueryResponse);
};

export const buildRequestURL = (
  city: string,
  region: States | Provinces,
  country: Countries
): string => {
  const baseURL = "https://api.mapbox.com/geocoding/v5/mapbox.places/";
  const encodedParams = getEncodedParams(city, region, country);
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

export const getEncodedParams = (
  city: string,
  region: States | Provinces,
  country: Countries
): string => {
  return encodeURIComponent([city, region, country].join(", ")).concat(".json");
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
