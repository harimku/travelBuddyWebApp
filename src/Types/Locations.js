import centralPark from '../assets/locations/central-park.png'
import empireStateBuilding from '../assets/locations/empire-state-building.png'
import statueOfLiberty from '../assets/locations/statue-of-liberty.png'
import goldenGatePark from '../assets/locations/Golden-gate-park.png'
import koreaTown from '../assets/locations/koreatown.png'


export const locations = [
  {
    id: 1,
    title: 'Koreatown (LA)',
    image: koreaTown,
    location: 'Los Angeles',
    tag: "LA"
  },
  {
    id: 2,
    title: 'Empire State Building',
    image: empireStateBuilding,
    location: 'New York',
    tag: "NYC"
  },
  {
    id: 3,
    title: 'Statue of Liberty',
    image: statueOfLiberty,
    location: 'New York',
    tag: "NYC"
  },
  {
    id: 4,
    title: 'Central Park',
    image: centralPark,
    location: 'New York',
    tag: "NYC"
  },
  {
    id: 5,
    title: 'Golden Gate Park',
    image: goldenGatePark,
    location: 'San Francisco',
    tag: "SF"
  }
];