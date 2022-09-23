import {
  buildRequestURL,
  extractCoordinates,
  fetchData,
  getCoordinates,
  getEncodedParams,
} from "./getCoordinates";
import { Countries, Provinces } from "../../types";

test("get coordinates", async () => {
  const coords = await getCoordinates(
    "Ottawa",
    Provinces.Ontario,
    Countries.Canada
  );

  expect(coords).toEqual({
    lat: 45.421143,
    lng: -75.690057,
  });
});

test("encode params", () => {
  expect(getEncodedParams("Ottawa", Provinces.Ontario, Countries.Canada)).toBe(
    "Ottawa%2C%20ON%2C%20CA.json"
  );
});

test("build request url", () => {
  expect(buildRequestURL("Ottawa", Provinces.Ontario, Countries.Canada)).toBe(
    `https://api.mapbox.com/geocoding/v5/mapbox.places/Ottawa%2C%20ON%2C%20CA.json?limit=1&proximity=ip&types=place&access_token=${process.env.REACT_APP_MAPBOX_ACCESS_TOKEN}`
  );
});

test("test fetch", async () => {
  const data = await fetchData(
    `https://api.mapbox.com/geocoding/v5/mapbox.places/Smither%2C%20British%20Columbia%2C%20Canada.json?limit=1&proximity=ip&types=place&access_token=${process.env.REACT_APP_MAPBOX_ACCESS_TOKEN}`
  );
  expect(data).toBeTruthy();
});

const resp = {
  type: "FeatureCollection",
  query: ["smither", "british", "columbia", "canada"],
  features: [
    {
      id: "place.73517095",
      type: "Feature",
      place_type: ["place"],
      relevance: 0.978836,
      properties: { wikidata: "Q1009247" },
      text: "Smithers",
      place_name: "Smithers, British Columbia, Canada",
      bbox: [-127.199099287, 54.745831119, -127.12591412, 54.836263801],
      center: [-127.176099, 54.779207],
      geometry: { type: "Point", coordinates: [-127.176099, 54.779207] },
      context: [
        {
          id: "district.1246759",
          wikidata: "Q2095384",
          text: "Regional District of Bulkley-Nechako",
        },
        {
          id: "region.18997647345322020",
          short_code: "CA-BC",
          wikidata: "Q1973",
          text: "British Columbia",
        },
        {
          id: "country.2057072853587150",
          wikidata: "Q16",
          short_code: "ca",
          text: "Canada",
        },
      ],
    },
  ],
  attribution:
    "NOTICE: © 2022 Mapbox and its suppliers. All rights reserved. Use of this data is subject to the Mapbox Terms of Service (https://www.mapbox.com/about/maps/). This response and the information it contains may not be retained. POI(s) provided by Foursquare.",
};

test("extract coords", () => {
  expect(extractCoordinates(resp)).toStrictEqual({
    lat: 54.779207,
    lng: -127.176099,
  });
});
