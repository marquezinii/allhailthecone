export const site = {
  name: "All Hail the Cone",
  url: "https://allhailthecone.com",
  repo: "https://github.com/marquezinii/allhailthecone",
  discord: "https://discord.gg/9VyUNRk7N",
  kofi: "https://ko-fi.com/allhailthecone",
  description:
    "A cosmic bureaucracy held together by tea, bread, potassium, and an extraordinary faith in a traffic cone.",
};

export const characters = [
  {
    id: "the-king",
    name: "The King",
    role: "The calmest monarch in the multiverse",
    department: "Higher Ground",
    quote: "Good Tea. Better Decisions.",
    summary:
      "Capybara, astronaut, monarch, explorer and diplomat. His true name does not appear in official records.",
    position: "50% 26%",
    zoom: 1.8,
    image: "the-first-observance",
    detail:
      "He led the First Expeditions through the newly stabilized Gates and helped civilizations meet without immediately going to war. How he became king remains unrecorded and rarely questioned.",
  },
  {
    id: "the-sacred-cone",
    name: "The Sacred Cone",
    role: "The source of Guidance",
    department: "The Sanctuary",
    quote: "No statement has been issued.",
    summary:
      "An ordinary-looking traffic cone at the centre of an event that connected worlds. It guides. It does not explain.",
    position: "52% 73%",
    zoom: 3,
    image: "the-first-observance",
    detail:
      "It affects Gates, reacts to certain stars, appears impossible to destroy and returns incompatible readings to different sensors. Its origin and final purpose remain deliberately unresolved.",
  },
  {
    id: "the-coo",
    name: "The COO",
    role: "Chief Operations Officer",
    department: "Bread Operations",
    quote: "Bread Builds Worlds.",
    summary:
      "A pigeon with a precise suit, a briefcase and responsibility for the logistics that keep Higher Ground fed.",
    position: "91% 43%",
    zoom: 3,
    image: "the-first-observance",
    detail:
      "He directs transport, supply chains, trade, strategic reserves, portal routes and resource distribution. He is extremely competent and has almost no tolerance for logistical delay.",
  },
  {
    id: "the-banana",
    name: "The Banana",
    role: "Director of technological infrastructure",
    department: "The Potassium Division",
    quote: "Potassium Fuels Progress.",
    summary:
      "A sentient banana responsible for computing, communications, energy, automation, AI and portal systems.",
    position: "10% 41%",
    zoom: 3,
    image: "the-first-observance",
    detail:
      "The Banana holds a seat on the council of Higher Ground. The Division regularly clashes with Bread Operations over priorities and schedules; together, they work remarkably well.",
  },
  {
    id: "the-keepers",
    name: "The Keepers",
    role: "Robotic attendants of the Cone",
    department: "The Sanctuary",
    quote: "Direction confirmed.",
    summary:
      "Small maintenance robots who gathered around the Cone after The Ascension without any known instruction to do so.",
    position: "29% 89%",
    zoom: 3,
    image: "the-first-observance",
    detail:
      "They maintain The Sanctuary, analyse energy, manage lighting and security, preserve artefacts and perform ceremonies. Whether they possess faith or obey an ancient protocol is unknown.",
  },
  {
    id: "the-maestro",
    name: "The Maestro",
    role: "Conductor between worlds",
    department: "The Resonance",
    quote: "Music Unites Worlds.",
    summary:
      "An octopus who directs festivals and a cultural network carrying music, art and news through the Gates.",
    position: "13% 15%",
    zoom: 1.7,
    image: "an-ordinary-afternoon",
    detail:
      "The Maestro moves between electronic decks, orchestras and ceremonial transmissions. The Resonance gives distant civilizations a way to hear one another across unstable routes.",
  },
] as const;

export const territories = [
  {
    id: "first-ground",
    name: "The First Ground",
    kind: "Sanctuary region",
    text: "The home of The Sanctuary and the Sacred Cone: a centre for pilgrimage, observation, science and ceremony.",
  },
  {
    id: "crown-city",
    name: "Crown City",
    kind: "Administrative capital",
    text: "The councils and institutions of Higher Ground coordinate a civilization whose borders are routes rather than lines.",
  },
  {
    id: "floating-realms",
    name: "The Floating Realms",
    kind: "Inhabited island worlds",
    text: "Floating homes, markets and cities linked by bridges, vessels and Gates beneath skies that do not always agree.",
  },
  {
    id: "deep-cities",
    name: "The Deep Cities",
    kind: "Ocean civilizations",
    text: "Civilizations built within immense oceans. Their governments, histories and relationship with the surface remain open.",
  },
  {
    id: "outer-routes",
    name: "The Outer Routes",
    kind: "Exploration network",
    text: "Surveyed paths into space and across dimensions. Stable Gates and working beacons remain strongly recommended.",
  },
  {
    id: "silent-worlds",
    name: "The Silent Worlds",
    kind: "Abandoned planets",
    text: "Empty cities and intact structures wait on planets whose inhabitants and histories have not yet been found.",
  },
  {
    id: "far-ground",
    name: "The Far Ground",
    kind: "Uncharted reality",
    text: "Beyond the maintained network, unknown Gates open and a signal insists that Higher Ground exists elsewhere.",
  },
] as const;

export const fragments = [
  {
    id: "C-002",
    text: "For several seconds, civilizations across multiple worlds observed the same golden star above the Cone.",
    source: "The Ascension record",
    status: "Canon",
  },
  {
    id: "C-003",
    text: "The Cone provides direction, not answers.",
    source: "The Guidance",
    status: "Canon",
  },
  {
    id: "C-012",
    text: "HIGHER GROUND EXISTS.",
    source: "A signal beyond the known universe",
    status: "Canon",
  },
];
