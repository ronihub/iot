import stockholm from "../images/stockholm.jpg";
import washington from "../images/washington.jpg";
import warszawa from "../images/warszawa.jpg";
import johannesburg from "../images/johannesburg.jpg";
import { snow, sparkles, star } from "ionicons/icons";

interface ILocation {
  place: string;
  long: string;
  lat: string;
  img: any;
  url: string;
}

export const locations: ILocation[] = [
  {
    place: "Stockholm, Sweden",
    url: "stockholm",
    long: "18.063240",
    lat: "59.334591",
    img: stockholm,
  },
  {
    place: "Washington DC, USA",
    url: "washington",
    long: "-120.740135",
    lat: "47.751076",
    img: washington,
  },
  {
    place: "Warszawa, Poland",
    url: "warszawa",
    long: "21.017532",
    lat: "52.237049",
    img: warszawa,
  },
  {
    place: "Johannesburg, South Africa",
    url: "johannesburg",
    long: "28.034088",
    lat: "-26.195246",
    img: johannesburg,
  },
];

interface IInfoCard {
  title: string;
  icon: any;
}

export const infoCards: IInfoCard[] = [
  {
    title: "AQI",
    icon: star,
  },
  {
    title: "PM 10",
    icon: snow,
  },
  {
    title: "PM 2.5",
    icon: sparkles,
  },
];
