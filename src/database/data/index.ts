import { Countries, Festival, Provinces, States } from "../../types";

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
  {
    title: "North Fork Championships",
    link: "http://northforkchampionship.com/",
    location: {
      coordinates: { lat: 44.11560073788811, lng: -115.9708269394663 },
      country: Countries["United States"],
      state: States["Idaho"],
      city: "Crouch",
    },
  },
  {
    title: "BaileyFest",
    link: "https://www.facebook.com/BaileyFest-737418089730702/",
    location: {
      coordinates: { lat: 39.40739674859621, lng: -105.47874831211327 },
      country: Countries["United States"],
      state: States["Colorado"],
      city: "Bailey",
    },
  },
  {
    title: "Upper Clackamus Whitewater Festival",
    link: "https://www.facebook.com/ucwwf/",
    location: {
      coordinates: { lat: 45.40772831582221, lng: -122.567425264854 },
      country: Countries["United States"],
      state: States["Oregon"],
      city: "Clackamas",
    },
  },
  {
    title: "Ocoee River Championships",
    link: "https://www.ocoeeriverchampionships.com/",
    location: {
      coordinates: { lat: 35.067079169993995, lng: -84.46155267179614 },
      country: Countries["United States"],
      state: States["Tennessee"],
      city: "Ducktown",
    },
  },
  {
    title: "Pesh Fest",
    link: "https://www.facebook.com/kosirswhitewaterrafting",
    location: {
      coordinates: { lat: 45.38762024792218, lng: -88.3033849733652 },
      country: Countries["United States"],
      state: States["Wisconsin"],
      city: "Athelstane",
    },
  },
  {
    title: "Pinball Race",
    link: "https://www.facebook.com/events/472589174400300",
    location: {
      coordinates: { lat: 50.06387730149285, lng: -123.0992100997494 },
      country: Countries["Canada"],
      state: Provinces["British Columbia"],
      city: "Whistler",
    },
  },
];
