import centralPark from "../assets/locations/central-park.png";
import empireStateBuilding from "../assets/locations/empire-state-building.png";
import statueOfLiberty from "../assets/locations/statue-of-liberty.png";
import goldenGatePark from "../assets/locations/Golden-gate-park.png";
import koreaTown from "../assets/locations/koreatown.png";

export const locations = [
  {
    id: 1,
    title: "Koreatown (LA)",
    image: koreaTown,
    location: "Los Angeles",
    tag: "LA",
    rating: 5,
    description:
      "Koreatown's many bars and casual 24/7 dining makes for a buzzing late-night scene. There are Korean BBQ restaurants with tabletop grills, plus karaoke joints, hip speakeasies and flashy clubs, as well as the landmark Wiltern Theatre, an art deco music venue. K-town’s dense mix of historic buildings and contemporary complexes also features traditional spas, bubble tea cafes and specialty grocery stores.",
  },
  {
    id: 2,
    title: "Empire State Building",
    image: empireStateBuilding,
    location: "New York",
    tag: "NYC",
    rating: 5,
    description:
      'The Empire State Building is a 102-story Art Deco skyscraper in Midtown Manhattan, New York City. The building was designed by Shreve, Lamb & Harmon and built from 1930 to 1931. Its name is derived from "Empire State", the nickname of the state of New York.',
  },
  {
    id: 3,
    title: "Statue of Liberty",
    image: statueOfLiberty,
    location: "New York",
    tag: "NYC",
    rating: 4,
    description:
      "The Statue of Liberty is a colossal neoclassical sculpture on Liberty Island in New York Harbor in New York City, in the United States. The copper statue, a gift from the people of France, was designed by French sculptor Frédéric Auguste Bartholdi and its metal framework was built by Gustave Eiffel.",
  },
  {
    id: 4,
    title: "Central Park",
    image: centralPark,
    location: "New York",
    tag: "NYC",
    rating: 3,
    description:
      "Central Park is an urban park in New York City located between the Upper West and Upper East Sides of Manhattan. It is the fifth-largest park in the city, covering 843 acres (341 ha). It is the most visited urban park in the United States, with an estimated 42 million visitors annually as of 2016, and is the most filmed location in the world.",
  },
  {
    id: 5,
    title: "Golden Gate Park",
    image: goldenGatePark,
    location: "San Francisco",
    tag: "SF",
    rating: 5,
    description:
      "Golden Gate Park, located in San Francisco, California, United States, is a large urban park consisting of 1,017 acres of public grounds. It is administered by the San Francisco Recreation & Parks Department, which began in 1871 to oversee the development of Golden Gate Park.",
  },
];
