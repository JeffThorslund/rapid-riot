import { Festival, Countries, States, Provinces } from "../../types";

export const dataProvider = (): Festival[] => {
  return festivals;
};

export const festivals: Festival[] = [
  // {
  //   title: "Unlikely Paddlefest",
  //   link: "https://www.facebook.com/groups/380071755490155",
  // },
  // {
  //   title: "Nelson Race",
  // },
  {
    title: "Gauley Fest",
    link: "https://www.americanwhitewater.org/content/Wiki/aw:events_gauley",
    location: {
      coordinates: { lat: 38.281916708182, lng: -80.84267523502763 },
      country: Countries["United States"],
      state: States["West Virginia"],
      city: "Summersville",
    },
  },
  {
    title: "Dolores River Festival",
    link: "https://www.doloresriverfest.org/",
    location: {
      coordinates: { lat: 37.47439000943224, lng: -108.49743635090842 },
      country: Countries["United States"],
      state: States.Colorado,
      city: "Dolores",
    },
  },
  // {
  //   title: "Winni River Days",
  // },
  {
    title: "Cheat River Festival",
    link: "https://cheatfest.org/",
    location: {
      coordinates: { lat: 39.49390539602751, lng: -79.64195234306692 },
      country: Countries["United States"],
      state: States["West Virginia"],
      city: "Albright",
    },
  },
  {
    title: "M.A.C.K Fest",
    link: "https://www.facebook.com/groups/MACKfest/",
    location: {
      coordinates: { lat: 44.485429202376935, lng: -77.67995774900632 },
      country: Countries["Canada"],
      state: Provinces["Ontario"],
      city: "Marmora",
    },
  },
  {
    title: "Lochsa River Madness",
    link: "https://www.facebook.com/LochsaRiverMadness2013",
    location: {
      coordinates: { lat: 46.3437417040309, lng: -115.30776818929994 },
      country: Countries["United States"],
      state: States["Idaho"],
      city: "Naz Perce-Clearwater National Forest",
    },
  },
  {
    title: "Russell Fork Rendezvous",
    link: "http://www.russellforkrendezvous.com/schedule/",
    location: {
      coordinates: { lat: 37.21554701901949, lng: -82.29160403901776 },
      country: Countries["United States"],
      state: States["Virginia"],
      city: "Haysi",
    },
  },
  {
    title: "Moose River Festival",
    link: "https://www.facebook.com/MooseRiverFestival/",
    location: {
      coordinates: { lat: 43.711293740934416, lng: -74.97378553916971 },
      country: Countries["United States"],
      state: States["New York"],
      city: "Old Forge",
    },
  },
];
