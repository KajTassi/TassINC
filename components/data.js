import {
  FaceSmileIcon,
  ChartBarSquareIcon,
  CursorArrowRaysIcon,
  AdjustmentsHorizontalIcon,
  
} from "@heroicons/react/24/solid";

import benefitOneImg from "../public/img/golf.png";
import benefitTwoImg from "../public/img/engine1.jpg";

const benefitOne = {
  title: "Your vehicle's year is just a number, we can get it done",
  desc: "We've been around the block and have a wealth of experience servicing exclusively Volkswagons of any year and model. Your car is in good hands we understand a car does more than just take you to the places you need to go. You take pride in your vehicle, and we take pride in our work.",
  image: benefitOneImg,
  bullets: [
    {
      title: "Maintain your Car's Value",
      desc: "All cars deappreciate, so take the steps to slow it down.",
      icon: <ChartBarSquareIcon />,
    },
    {
      title: "Tell a Friend",
      desc: "Your business and word of mouth are important to us.",
      icon: <CursorArrowRaysIcon />,
    },
  ],
};

const benefitTwo = {
  title: "We perform service, repairs, and long term maintenance",
  desc: "From oil changes, to break checks, to engine diagnostics, we can get it taken care. When one thing in a car beigns to break down, it can put strain on the rest of the vehicle. We want to be able to diagnose those issues with detail and keep your vehicle in top shape.",
  image: benefitTwoImg,
  bullets: [
    {
      title: "Happy Cars have Happy Drivers",
      desc: "Let's expand the lifespan of your car and keep it running great.",
      icon: <FaceSmileIcon />,
    },
    {
      title: "Detailed Diagnostics",
      desc: "We will identify the issues, and give you the options on the best course of action.",
      icon: <AdjustmentsHorizontalIcon />,
    },
  ],
};


export {benefitOne, benefitTwo};
