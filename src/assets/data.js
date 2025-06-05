//data imports

//carousel images
//import img1 from "./saav-carousel-1.jpg";
import img1_1 from "./crj-700.jpg";
import img1_2 from "./saav-q400-tail.jpg";

//staff pfp
import img2 from "./josiah-dennis-pfp.jpeg";
import img3 from "./lufthansa1-pfp.jpeg";



//fleet
import img4 from "./a330-fleet.jpg";
import img5 from "./saav-a350.jpeg";
import img6 from "./saav-a346.jpg";
import img7 from "./saav-a320.jpeg";
import img8 from "./saav-a319.jpeg";
import img9 from "./saav-b742.jpg";
import img10 from "./saav-b738.jpeg";
import img11 from "./saav-dash8.jpg";
import img12 from "./saav-crj700.jpg";
import img13 from "./saav-crj-200.jpg";


//ranks
import img14 from "./trainee__rank.jpg";
import img15 from "./fo__rank.jpg";
import img16 from "./senior__pilot_rank.jpg";
import img17 from "./captain__rank.jpg";



export const homeHeader = [
  {
    id: "1",
    title: "Welcome to South African Virtual",
    description:
      "We are a prominent virtual airline within the Infinite Flight community. Dedicated to replicating the real-world operations of South African Airways, Our VA offers a highly professional and immersive flying experience in the IF skies.",
  },
];

export const homeCarousel = [
  //carouselhome
  {
    id: "2",
    image: img4,
    category: "carousel",
    alt: "carouselImage",
  },

  {
    id: "3",
    image: img1_1,
    category: "carousel",
    alt: "carouselImage",
  },

  {
    id: "4",
    image: img1_2,
    category: "carousel",
    alt: "carouselImage",
  },
];

export const homeCards = [
  //homeCards
  {
    id: "5",
    title: "Route Database 🧑‍💻",
    description:
      "Our Route Database is specially built to achieve maximum user friendliness and ensure easier navigation during flight briefings.",
  },

  {
    id: "6",
    title: "SAAV Staff 🧑‍✈️",
    description:
      "Our staff are highly trained & experienced in their fields of work and are always ready to help. Feel free to communicate with us at any time through our socials or via IFC.",
  },

  {
    id: "7",
    title: "Ranking System 🌟",
    description:
      "Pilots advance through ranks starting from Trainee all the way upto Senior Pilot by logging flight hours.This encourages progression and realism. Higher ranks will be granted access to more aircraft and events.",
  },
];

export const homeAccordion = [
  {
    id: "8",
    title: "Why Join Us?",
    description:
      "We offer a vast array of destinations & a large fleet of aircraft ranging from the Q-400 to the B747 giving you a wide range of options to choose from.",
    collapseId: "1",
  },

  {
    id: "9",
    title: "Crew Operations🧑‍✈️",
    description:
      "At SA Virtual, our crew operations mirror real-world airline procedures — from flight planning and dispatch to scheduled routes and active ATC participation — offering our pilots an immersive, structured, and rewarding flying experience.",
    collapseId: "2",
  },

  {
    id: "10",
    title: "Application Process📃",
    description:
      "Our application process is seamless & user-friendly to allow for smooth and easy registrations.",
    collapseId: "3",
  },
];


export const applyHeader = [
  {
    id: "11",
    title: "VA Application",
    description:
      "We appreciate your kind interest in applying to join our VA. Please check out the requirements before sending out your applications. If you meet them, feel free to send a PM to our CEO or COO on the Infinite Flight Community server or send us an email in order to be scheduled for a pilot test🧑‍✈️",
  },
];

export const applyRequirements = [
  //applyNow

  {
    id: "12",
    key: "Minimum Age",
    value: "13 Years",
  },

  {
    id: "13",
    key: "IF Grade",
    value: "Grade 2 and above",
  },

  {
    id: "14",
    key: "Conduct",
    value: "Not on IFC Blacklist/Watchlist",
  },

  {
    id: "15",
    key: "IF PRO",
    value: "Valid IF Subscription",
  },
];


export const staffHeader = [
  {
    id: "16",
    title: "About the team",
  },
];

export const staffPage = [
  //staffPage

  {
    id: "17",
    image: img2,
    description:
      "Welcome New Pilots!👋 I am Josiah Dennis, a 14 year old aviator who has been flying in the virual skies for over 3 years. Thank you for having a look at our website and we hope to see you soon.",
    username: "Josiah Dennis",
    role: "- SAAV CEO",
  },

  {
    id: "18",
    image: img3,
    description:
      "On Behalf of the Crew, Welcome to South African Virtual, pilots! Here you can fly a large variety of routes and aircrafts together with other SAAV pilots. Have fun!🛫",
    username: "Lufthansa1",
    role: "- SAAV COO",
  },
];


export const SAAVFleet = [
  {
    id: "19",
    aircraft: "Airbus A330-300",
    image: img4,
    range: "11750",
    crzSpeed: "0.86",
    maxAlt: "410",
    capacity: "440",
  },

  {
    id: "20",
    aircraft: "Airbus A350-900",
    image: img5,
    range: "15750",
    crzSpeed: "0.85",
    maxAlt: "430",
    capacity: "440",
  },

  {
    id: "21",
    aircraft: "Airbus A340-600",
    image: img6,
    range: "13000",
    crzSpeed: "0.83",
    maxAlt: "415",
    capacity: "400",
  },

  {
    id: "22",
    aircraft: "Airbus A320",
    image: img7,
    range: "6500",
    crzSpeed: "0.78",
    maxAlt: "390",
    capacity: "180",
  },

  {
    id: "23",
    aircraft: "Airbus A319",
    image: img8,
    range: "6000",
    crzSpeed: "0.78",
    maxAlt: "400",
    capacity: "150",
  },

  {
    id: "24",
    aircraft: "Boeing 747-200",
    image: img9,
    range: "12700",
    crzSpeed: "0.85",
    maxAlt: "450",
    capacity: "550",
  },

  {
    id: "25",
    aircraft: "Boeing 737-800",
    image: img10,
    range: "5800",
    crzSpeed: "0.78",
    maxAlt: "410",
    capacity: "162",
  },

  {
    id: "26",
    aircraft: "Dash 8 Q-400",
    image: img11,
    range: "2000",
    crzSpeed: "0.55",
    maxAlt: "250",
    capacity: "78",
  },

  {
    id: "27",
    aircraft: "CRJ-700",
    image: img12,
    range: "3200",
    crzSpeed: "0.80",
    maxAlt: "410",
    capacity: "75",
  },

  {
    id: "28",
    aircraft: "CRJ-200",
    image: img13,
    range: "3000",
    crzSpeed: "0.74",
    maxAlt: "410",
    capacity: "50",
  },
];

export const routeHeader = [
  {
    id: "29",
    description:
      "We serve many passengers with many different backgrounds out of our two major hubs : O.R. Tambo International Airport & Cape Town International Airport. Our joy is flying, yours is sitting back and relaxing as we bring the comfort to the Virtual world. You can reserve a gate on our discord server without any issues.Thank you for your time and support. Good Day! CEO Signing off😎",
  },
];




export const Ranks = [
  { id: "30", image: "/", alt: "/", title: "/", description: "/" },
  { id: "31", image: "/", alt: "/", title: "/", description: "/" },
  { id: "32", image: "/", alt: "/", title: "/", description: "/" },
  { id: "33", image: "/", alt: "/", title: "/", description: "/" },
  { id: "34", image: "/", alt: "/", title: "/", description: "/" },
];


export const StaffCrewHeader = [
  {
    id: "35",
    title: "Our Staff: ",
    description: 'Of Course we need to give some recognition to the people who make this all possible behind the scenes. We are always grateful for their hard work and dedication👌:',
  }
]

export const StaffCrew = [

  {
    id: "36",
    name: "Dimitrios_TA",
    Rank: "Contracting Officer Rep"
  },

  {
    id: "37",
    name: "Rile",
    Rank: "Chief Financial Officer"
  },

  {
    id: "38",
    name: "SynxChazz",
    Rank: "Chief Marketing Officer"
  },

  {
    id: "39",
    name: "JurassicWorld4Ever",
    Rank: "Event Manager"
  },
  {
    id: "40",
    name: "Cappy",
    Rank: "Human Resource"
  },
  {
    id: "41",
    name: "Uncle_Kofi",
    Rank: "HR Assistant"
  },
  {
    id: "42",
    name: "Aviator1",
    Rank: "Social Media Marketing"
  },
  {
    id: "43",
    name: "Gary_Evans",
    Rank: "Route Manager"
  },

  {
    id: "",
    name: "Action_Jackson",
    Rank: "Flight Supervisor"
  },
  
  {
    id: "44",
    name: "Educate_Learn2",
    Rank: "CEO Aids"
  },
  {
    id: "45",
    name: "ST-ART",
    Rank: "CEO Aids"
  },

]

export const ranksData = [
  {
    id: "46",
    image:img14,
    description: 'Trainee Rank' 
  },

  {
    id: "47",
    image:img15,
    description: 'First Officer' 
  },

  {
    id: "48",
    image:img17,
    description: 'Captain' 
  },

  {
    id: "49",
    image:img16,
    description: 'Senior Pilot' 
  },
]


export const RanksHeader = [
  {
    id: "50",
    title: "SAAV Pilot Ranks"
  }
]



