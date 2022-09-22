import MapboxGeocoder from "@mapbox/mapbox-gl-geocoder";
import { Countries, Provinces, States } from "../../../../types";

export const filter = (
  result: MapboxGeocoder.Result,
  selectedRegion: States | Provinces
) => {
  // console.log(result);
  //
  // let countryOfResult;
  // let regionOfResult;
  //
  // console.log(result);
  //
  // result.context.forEach((context) => {
  //   const splitContextId = context.id.split(".");
  //   if (splitContextId[0] === "region" || splitContextId[0] === "place") {
  //     countryOfResult = context.short_code.split("-")[0];
  //     regionOfResult = context.short_code.split("-")[1];
  //   }
  // });
  //
  // if (regionOfResult !== selectedRegion) return false;

  return true;
};
