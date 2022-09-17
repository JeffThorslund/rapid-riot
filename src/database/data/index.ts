import { Countries, Festival, Provinces, States } from "../../types";

export const dataProvider = (): Festival[] => {
  return festivals;
};

export const festivals: Festival[] = [
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
  {
    title: "CKS Paddlefest",
    link: "https://www.ckspaddlefest.com/",
    location: {
      coordinates: { lat: 38.84141963731193, lng: -106.1335165960764 },
      country: Countries["United States"],
      state: States["Colorado"],
      city: "Buena Vista",
    },
  },
  {
    title: "Neilson Race",
    link: "http://www.neilsonrace.com/",
    location: {
      coordinates: { lat: 47.01317003300906, lng: -71.86005269804816 },
      country: Countries["Canada"],
      state: Provinces["Quebec"],
      city: "St-Raymond",
    },
  },
  {
    title: "Slave River Paddlefest",
    link: "http://slaveriverpaddlefest.ca/",
    location: {
      coordinates: { lat: 60.00864926883446, lng: -111.89294640281693 },
      country: Countries["Canada"],
      state: Provinces["Northwest Territories"],
      city: "Fort Smith",
    },
  },
  {
    title: "MTL Eau Vive",
    link: "https://www.mtleauvive.com/",
    location: {
      coordinates: { lat: 45.43114705359564, lng: -73.63271958505882 },
      country: Countries["Canada"],
      state: Provinces["Quebec"],
      city: "LaSalle",
    },
  },
  {
    title: "Clearwater Kayak Festival",
    link: "https://www.facebook.com/ClearwaterKayakFestival",
    location: {
      coordinates: { lat: 51.65244128891197, lng: -120.03780989265616 },
      country: Countries["Canada"],
      state: Provinces["British Columbia"],
      city: "Clearwater",
    },
  },
  {
    title: "Le Festival d'Eau-Vive de la Haute-Gatineau",
    link: "https://www.gatineau.org/",
    location: {
      coordinates: { lat: 46.37640581417643, lng: -75.97820738093729 },
      country: Countries["Canada"],
      state: Provinces["Quebec"],
      city: "Maniwaki",
    },
  },
  {
    title: "Palmer River Fest",
    link: "https://paddlerco-op.ca/palmer-river-fest/",
    location: {
      coordinates: { lat: 45.31717913168621, lng: -77.5166670326042 },
      country: Countries["Canada"],
      state: Provinces["Ontario"],
      city: "Palmer Rapids",
    },
  },
  {
    title: "Bigfork Whitewater Festival",
    link: "http://www.bigforkwhitewaterfestival.com/",
    location: {
      coordinates: { lat: 48.0710941003058, lng: -114.08450200310365 },
      country: Countries["United States"],
      state: States["Montana"],
      city: "Bigfork",
    },
  },
  {
    title: "Noli Fest",
    link: "https://www.facebook.com/Nolifest",
    location: {
      coordinates: { lat: 36.14624104643202, lng: -82.41280505667505 },
      country: Countries["United States"],
      state: States["Tennessee"],
      city: "Erwin",
    },
  },
  {
    title: "Gallatin Whitewater Festival",
    link: "https://www.facebook.com/gallatinwhitewaterfestival/",
    location: {
      coordinates: { lat: 45.59162499647529, lng: -111.19931830005015 },
      country: Countries["United States"],
      state: States["Montana"],
      city: "Gallatin Gateway",
    },
  },
  {
    title: "Gorefest",
    link: "https://www.facebook.com/gorecanyonfest/",
    location: {
      coordinates: { lat: 39.99558785939352, lng: -106.50739466064411 },
      country: Countries["United States"],
      state: States["Colorado"],
      city: "Kremmling",
    },
  },
  {
    title: "Stonycreek Rendezvous",
    link: "https://benscreekcanoeclub.com/rendezvous/",
    location: {
      coordinates: { lat: 40.31987050323589, lng: -78.91869759718351 },
      country: Countries["United States"],
      state: States["Pennsylvania"],
      city: "Johnstown",
    },
  },
];

/**
 * [
 *   {
 *     "title": "King of the Rogue",
 *     "link": "https://www.goldhillwhitewater.org/king-of-the-rogue",
 *     "location": {
 *       "coordinates": {},
 *       "state": "OR",
 *       "city": ""
 *     }
 *   },
 *   {
 *     "title": "Kicking Horse Paddle Fest",
 *     "link": "https://www.facebook.com/kickinghorsepaddlefestival/",
 *     "location": {
 *       "coordinates": {},
 *       "state": "BC",
 *       "city": ""
 *     }
 *   },
 *   {
 *     "title": "Coosa River Festival",
 *     "link": "https://www.facebook.com/coosariverwhitewaterfestival/",
 *     "location": {
 *       "coordinates": {},
 *       "state": "AL",
 *       "city": ""
 *     }
 *   },
 *   {
 *     "title": "Upper Wind Whitewater Festival",
 *     "link": "https://www.facebook.com/UpperWindFestival/",
 *     "location": {
 *       "coordinates": {},
 *       "state": "WA",
 *       "city": ""
 *     }
 *   },
 *   {
 *     "title": "Ridgway River Festival",
 *     "link": "https://ridgwayriverfest.org/",
 *     "location": {
 *       "coordinates": {},
 *       "state": "CO",
 *       "city": ""
 *     }
 *   },
 *   {
 *     "title": "Slalom 7 Soeurs",
 *     "link": "https://slalom7soeurs.com/en/",
 *     "location": {
 *       "coordinates": {},
 *       "state": "QC",
 *       "city": ""
 *     }
 *   },
 *
 *   {
 *     "title": "Big Water Blowout",
 *     "link": "https://www.facebook.com/bwbrf/",
 *     "location": {
 *       "coordinates": {},
 *       "state": "ID",
 *       "city": ""
 *     }
 *   },
 *
 *   {
 *     "title": "Down River Rendezvous",
 *     "link": "https://www.downriverequip.com/blog_detail.cfm?blogId=64",
 *     "location": {
 *       "coordinates": {},
 *       "state": "CO",
 *       "city": ""
 *     }
 *   },
 *   {
 *     "title": "Cuyahoga Falls Kayak Race",
 *     "link": "https://www.cfkayakrace.com/",
 *     "location": {
 *       "coordinates": {},
 *       "state": "OH",
 *       "city": ""
 *     }
 *   },
 *   {
 *     "title": "NW Creeking Comp",
 *     "link": "https://www.northwestcreekingcomp.com/",
 *     "location": {
 *       "coordinates": {},
 *       "state": "WA",
 *       "city": ""
 *     }
 *   },
 *   {
 *     "title": "FIBArk",
 *     "link": "http://www.fibark.com/",
 *     "location": {
 *       "coordinates": {},
 *       "state": "CO",
 *       "city": ""
 *     }
 *   },
 *   {
 *     "title": "Spring Moose Fest",
 *     "link": "https://www.facebook.com/MooseRiverFestival/",
 *     "location": {
 *       "coordinates": {},
 *       "state": "NY",
 *       "city": ""
 *     }
 *   },
 *   {
 *     "title": "Tuck Fest",
 *     "link": "https://tuckfest.usnwc.org/",
 *     "location": {
 *       "coordinates": {},
 *       "state": "NC",
 *       "city": ""
 *     }
 *   },
 *   {
 *     "title": "Missouri Whitewater Championships",
 *     "link": "https://missouriwhitewater.org/competition/mwc/",
 *     "location": {
 *       "coordinates": {},
 *       "state": "MO",
 *       "city": ""
 *     }
 *   },
 *   {
 *     "title": "French Broad River Festival",
 *     "link": "http://www.frenchbroadriverfestival.com/",
 *     "location": {
 *       "coordinates": {},
 *       "state": "NC",
 *       "city": ""
 *     }
 *   },
 *   {
 *     "title": "White Salmon River Festival",
 *     "link": "https://www.facebook.com/WhiteSalmonRiverFest/",
 *     "location": {
 *       "coordinates": {},
 *       "state": "WA",
 *       "city": ""
 *     }
 *   },
 *
 *   {
 *     "title": "Deerfield Festival",
 *     "link": "https://www.americanwhitewater.org/content/Wiki/aw:events_deerfield",
 *     "location": {
 *       "coordinates": {},
 *       "state": "MA",
 *       "city": ""
 *     }
 *   },
 *   {
 *     "title": "Reno River Festival",
 *     "link": "https://renoriverfestival.com/the-cause/",
 *     "location": {
 *       "coordinates": {},
 *       "state": "NV",
 *       "city": ""
 *     }
 *   },
 *   {
 *     "title": "Jordan River Festival",
 *     "link": "http://paddlerevelstoke.ca/jordan-river-festival",
 *     "location": {
 *       "coordinates": {},
 *       "state": "BC",
 *       "city": ""
 *     }
 *   },
 *   {
 *     "title": "South Fork Film Fest",
 *     "link": "https://sites.google.com/view/southforkfilmfest",
 *     "location": {
 *       "coordinates": {},
 *       "state": "CA",
 *       "city": ""
 *     }
 *   },
 *
 *   {
 *     "title": "Pink Water Challenge",
 *     "link": "https://pink-water.ca/en/challenge-pink-water-2019",
 *     "location": {
 *       "coordinates": {},
 *       "state": "QC",
 *       "city": ""
 *     }
 *   },
 *   {
 *     "title": "Wild West River Fest",
 *     "link": "http://wildwestpaddleclub.org/cody-wild-west-river-fest/",
 *     "location": {
 *       "coordinates": {},
 *       "state": "WY",
 *       "city": ""
 *     }
 *   },
 *   {
 *     "title": "South Platte River Festival",
 *     "link": "https://www.thegreenwayfoundation.org/citizens4theriver.html",
 *     "location": {
 *       "coordinates": {},
 *       "state": "CO",
 *       "city": ""
 *     }
 *   },
 *   {
 *     "title": "Beaver River Rendezvous - KoNY",
 *     "link": "http://beaverriverrendezvous.com/",
 *     "location": {
 *       "coordinates": {},
 *       "state": "NY",
 *       "city": ""
 *     }
 *   },
 *
 *   {
 *     "title": "OKC Whitwater Festival",
 *     "link": "https://www.riversportokc.org/events/oklahoma-city-whitewater-festival/",
 *     "location": {
 *       "coordinates": {},
 *       "state": "OK",
 *       "city": ""
 *     }
 *   },
 *
 *
 *
 *   {
 *     "title": "Sixmile Creek Whitewater Fest",
 *     "link": "https://www.facebook.com/events/476261719496433/",
 *     "location": {
 *       "coordinates": {},
 *       "state": "AK",
 *       "city": ""
 *     }
 *   },
 *   {
 *     "title": "Unlikely Paddlefest",
 *     "link": "https://www.facebook.com/groups/380071755490155",
 *     "location": {
 *       "coordinates": {},
 *       "state": "BC",
 *       "city": "137 4 Ave N, Williams Lake, BC V2G 2C8, Canada"
 *     }
 *   }
 * ]
 */
