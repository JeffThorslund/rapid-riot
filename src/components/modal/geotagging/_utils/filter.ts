import MapboxGeocoder from "@mapbox/mapbox-gl-geocoder";
import { Countries, Provinces, States } from "../../../../types";

export const filter = (
  result: MapboxGeocoder.Result,
  selectedCountry: Countries,
  selectedRegion: States | Provinces
) => {
  if (result.place_type.includes("country")) return false;
  let countryOfResult;
  let regionOfResult;

  console.log(result);

  result.context.forEach((context) => {
    if (context.id.split(".")[0] === "region") {
      countryOfResult = context.short_code.split("-")[0];
      regionOfResult = context.short_code.split("-")[1];
    }
  });

  if (countryOfResult !== selectedCountry) return false;
  if (regionOfResult !== selectedRegion) return false;

  return true;
};
