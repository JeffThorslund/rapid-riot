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
];

/**
 * [
 *   {
 *     "title": "Gauley Fest",
 *     "link": "https://www.americanwhitewater.org/content/Wiki/aw:events_gauley",
 *     "location": {
 *       "coordinates": {},
 *       "state": "WV",
 *       "city": "Unnamed Road, Summersville, WV 26651, USA"
 *     }
 *   },
 *   {
 *     "title": "Dolores River Festival",
 *     "link": "https://www.doloresriverfestival.org/",
 *     "location": {
 *       "coordinates": {},
 *       "state": "CO",
 *       "city": ""
 *     }
 *   },
 *   {
 *     "title": "Winni River Days",
 *     "link": "http://millcitypark.com/events/2019winniriverdays",
 *     "location": {
 *       "coordinates": {},
 *       "state": "NH",
 *       "city": ""
 *     }
 *   },
 *   {
 *     "title": "Cheat River Festival",
 *     "link": "http://cheatfest.org/",
 *     "location": {
 *       "coordinates": {},
 *       "state": "WV",
 *       "city": ""
 *     }
 *   },
 *   {
 *     "title": "Mack Fest",
 *     "link": "https://www.kwpclub.ca/mackfest/mackfestdetails/",
 *     "location": {
 *       "coordinates": {},
 *       "state": "ON",
 *       "city": ""
 *     }
 *   },
 *   {
 *     "title": "Lochsa River Madness",
 *     "link": "https://www.facebook.com/LochsaRiverMadness2013/",
 *     "location": {
 *       "coordinates": {},
 *       "state": "ID",
 *       "city": ""
 *     }
 *   },
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
 *     "title": "Russell Fork Rendezvous",
 *     "link": "http://www.russellforkrendezvous.com/",
 *     "location": {
 *       "coordinates": {},
 *       "state": "VA",
 *       "city": ""
 *     }
 *   },
 *   {
 *     "title": "Moose River Festival",
 *     "link": "https://www.facebook.com/MooseRiverFestival/",
 *     "location": {
 *       "coordinates": {},
 *       "state": "NY",
 *       "city": ""
 *     }
 *   },
 *   {
 *     "title": "Wet willy festival",
 *     "link": "Https://www.Jeffsucks420.com",
 *     "location": {
 *       "coordinates": {},
 *       "state": "MT",
 *       "city": "Unnamed Road, Broadus, MT 59317, USA"
 *     }
 *   },
 *   {
 *     "title": "Willamette Val Film Fest",
 *     "link": "no info 2019",
 *     "location": {
 *       "coordinates": {},
 *       "state": "OR",
 *       "city": ""
 *     }
 *   },
 *   {
 *     "title": "North Fork Championships",
 *     "link": "http://northforkchampionship.com/",
 *     "location": {
 *       "coordinates": {},
 *       "state": "ID",
 *       "city": ""
 *     }
 *   },
 *   {
 *     "title": "Bailey Fest",
 *     "link": "https://coloradowhitewater.org/event-2997355",
 *     "location": {
 *       "coordinates": {},
 *       "state": "CO",
 *       "city": ""
 *     }
 *   },
 *   {
 *     "title": "Upper Clackamas Festival",
 *     "link": "http://upperclackamasfestival.org/",
 *     "location": {
 *       "coordinates": {},
 *       "state": "OR",
 *       "city": ""
 *     }
 *   },
 *   {
 *     "title": "Ocoee River Championship",
 *     "link": "http://www.ocoeeriverchampionships.com/",
 *     "location": {
 *       "coordinates": {},
 *       "state": "TN",
 *       "city": ""
 *     }
 *   },
 *   {
 *     "title": "Peshtigo Fest",
 *     "link": "https://www.kosirs.com/",
 *     "location": {
 *       "coordinates": {},
 *       "state": "WI",
 *       "city": ""
 *     }
 *   },
 *   {
 *     "title": "CKS Paddlefest",
 *     "link": "https://www.ckspaddlefest.com/",
 *     "location": {
 *       "coordinates": {},
 *       "state": "CO",
 *       "city": ""
 *     }
 *   },
 *   {
 *     "title": "Nelson Race",
 *     "link": "https://www.facebook.com/events/2125753470811027/2126005337452507/?notif_t=plan_mall_activity&notif_id=1550606661841236",
 *     "location": {
 *       "coordinates": {},
 *       "state": "QC",
 *       "city": ""
 *     }
 *   },
 *   {
 *     "title": "Slave River Paddlefest",
 *     "link": "http://slaveriverpaddlefest.ca/",
 *     "location": {
 *       "coordinates": {},
 *       "state": "NT",
 *       "city": ""
 *     }
 *   },
 *   {
 *     "title": "Montreal EauVive",
 *     "link": "https://www.mtleauvive.com/",
 *     "location": {
 *       "coordinates": {},
 *       "state": "QC",
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
 *   {
 *     "title": "Gorefest",
 *     "link": "https://www.facebook.com/gorecanyonfest/",
 *     "location": {
 *       "coordinates": {},
 *       "state": "CO",
 *       "city": ""
 *     }
 *   },
 *   {
 *     "title": "Big Water Blowout",
 *     "link": "https://www.facebook.com/bwbrf/",
 *     "location": {
 *       "coordinates": {},
 *       "state": "ID",
 *       "city": ""
 *     }
 *   },
 *   {
 *     "title": "Gallatin Whitewater Festival",
 *     "link": "https://www.facebook.com/gallatinwhitewaterfestival/",
 *     "location": {
 *       "coordinates": {},
 *       "state": "MT",
 *       "city": ""
 *     }
 *   },
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
 *   {
 *     "title": "Le Festival d'eau-vive de la Haute-Gatineau",
 *     "link": "https://www.gatineau.org/",
 *     "location": {
 *       "coordinates": {},
 *       "state": "QC",
 *       "city": ""
 *     }
 *   },
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
 *   {
 *     "title": "Noli Fest",
 *     "link": "https://www.facebook.com/Nolifest",
 *     "location": {
 *       "coordinates": {},
 *       "state": "TN",
 *       "city": ""
 *     }
 *   },
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
 *   {
 *     "title": "Palmer River Fest",
 *     "link": "https://paddlerco-op.ca/palmer-river-fest/",
 *     "location": {
 *       "coordinates": {},
 *       "state": "ON",
 *       "city": ""
 *     }
 *   },
 *   {
 *     "title": "OKC Whitwater Festival",
 *     "link": "https://www.riversportokc.org/events/oklahoma-city-whitewater-festival/",
 *     "location": {
 *       "coordinates": {},
 *       "state": "OK",
 *       "city": ""
 *     }
 *   },
 *   {
 *     "title": "Stonycreek Rendezvous",
 *     "link": "https://benscreekcanoeclub.com/rendezvous/",
 *     "location": {
 *       "coordinates": {},
 *       "state": "PA",
 *       "city": ""
 *     }
 *   },
 *   {
 *     "title": "Bigfork Whitewater Festival",
 *     "link": "http://www.bigforkwhitewaterfestival.com/",
 *     "location": {
 *       "coordinates": {},
 *       "state": "MT",
 *       "city": ""
 *     }
 *   },
 *   {
 *     "title": "Clearwater Kayak Festival",
 *     "link": "https://www.facebook.com/ClearwaterKayakFestival",
 *     "location": {
 *       "coordinates": {},
 *       "state": "BC",
 *       "city": "113 Dunn Lake Rd, Clearwater, BC V0E 1N2, Canada"
 *     }
 *   },
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
