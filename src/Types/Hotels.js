import hotel from "../assets/hotels/hotel.jpg";
import download from "../assets/hotels/download.jpg";
import image from "../assets/hotels/image.jpg";
import images from "../assets/hotels/images.jpg";
import palacehotel from "../assets/hotels/palacehotel.jpg";
import WilliamVale from "../assets/hotels/WilliamVale.jpg";


export const hotels = [
  {
    id: 1,
    title: "Four Seasons Hotel - Los Angeles",
    image: download,
    location: "Los Angeles",
    tag: "LA",
    rating: 4.5,
    description:
      "very clean and lux",
  },
  {
    id: 2,
    title: "Best Hotel in LA",
    image: hotel,
    location: "Los Angeles",
    tag: "LA",
    rating: 4,
    description:
      "",
  },
  {
    id: 3,
    title: "St Regis NYC",
    image: image,
    location: "New York",
    tag: "NYC",
    rating: 4,
    description:
      "",
  },
  {
    id: 4,
    title: "Best Hotel NYC",
    image: images,
    location: "New York",
    tag: "NYC",
    rating: 4,
    description:
      "",
  },
  {
    id: 5,
    title: "Palace Hotel SF",
    image: palacehotel,
    location: "San Francisco",
    tag: "SF",
    rating: 5,
    description:
      "",
  },
  {
    id: 6,
    title: "The William Vale New York",
    image: WilliamVale,
    location: "New York",
    tag: "NYC",
    rating: 5,
    description:
      "",
  },
];
