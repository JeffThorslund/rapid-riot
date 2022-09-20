import { dataProvider } from "./index";

export const logJSON = () => {
  const festivals = dataProvider();

  const mappedFestivals = festivals.map((f) => {
    return {
      title: f.title,
      link: f.link,
      lat: f.location.coordinates.lat,
      lng: f.location.coordinates.lng,
      country: f.location.country,
      state: f.location.state,
      city: f.location.city,
    };
  });

  console.log(JSON.stringify(mappedFestivals));
};
