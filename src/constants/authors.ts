import { StaticImageData } from "next/image";
import AndyHeadshot from "../../public/andy.webp";
import MattHeadshot from "../../public/matt.webp";

export type authorType = {
  name: string;
  title: string;
  image: {
    data: StaticImageData;
    alt: string;
  };
};

const Matt = {
  name: "Matthew Kulukundis",
  title: "CEO, BrontoSource",
  image: {
    data: MattHeadshot,
    alt: "Headshot of Matt, CEO & co-founder",
  },
};
const Andy = {
  name: "Dr. Andrew Soffer",
  title: "CTO, BrontoSource",
  image: {
    data: AndyHeadshot,
    alt: "Headshot of Andy, CTO & co-founder",
  },
};

export const authors = { Matt, Andy };
