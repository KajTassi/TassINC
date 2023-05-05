import Image from "next/image";
import Container from "./container";
import heroImg from "../public/img/hero.png";
import Faq from "./faq";

const Hero = () => {
  return (
    <>
      <Container className="flex flex-wrap ">
        <div className="flex items-center w-full lg:w-1/2">
          <div className="max-w-2xl mb-8">
            <h1 className="text-4xl font-bold leading-snug tracking-tight text-gray-800 lg:text-4xl lg:leading-tight xl:text-6xl xl:leading-tight dark:text-white">
              Tassi Inc: <br/>
              Volkswagen Auto Repair
            </h1>
            <p className="py-5 text-xl leading-normal text-gray-500 lg:text-xl xl:text-2xl dark:text-gray-300">
              We are a bay area based, Volkswagen auto repair, specializing in service, maintenance and repair for all VW models regardless of their year. We are
              centrally located in Colma, inbetween Daly City and South San Francisco. In addition to repairs, we are also happy to provide and order
              parts for your vehicle.
            </p>

            <div className="flex flex-col items-start space-y-3 sm:space-x-4 sm:space-y-0 sm:items-center sm:flex-row">
              <a
                href="https://www.google.com/maps?q=55+Reiner+St,+Colma,+CA+94014&oe=utf-8&client=firefox-a&ie=UTF8&hq&hnear=55+Reiner+St,+Daly+City,+San+Mateo,+California+94014&gl=us&ei=QfnNS-vYLYOksgO8iPWuDg&ved=0CAcQ8gEwAA&z=16"
                target="_blank"
                rel="noopener"
                className="px-8 py-4 text-lg font-medium text-center text-white bg-indigo-600 rounded-md ">
                Get Directions
              </a>
              <span>
                  <Faq />
              </span>
            </div>
          </div>
        </div>
        <div className="flex items-center justify-center w-full lg:w-1/2">
          <div className="">
            <Image
              src={heroImg}
              width="616"
              height="617"
              className={"object-cover"}
              alt="Hero Illustration"
              loading="eager"
              placeholder="blur"
            />
          </div>
        </div>
      </Container>
      <Container>
        <div className="flex flex-col justify-center">
          <div className="text-xl text-center text-gray-700 dark:text-white">
            Trusted since <span className="text-indigo-600">1990</span>{" "}
            by customers all over the Bay Area
          </div>

          
          </div>
        
      </Container>
    </>
  );
}

const faqdata = [
  {
    question: "Store Hours",
    answer: "Tuesday-Friday: Open 8:30am-5:30pm.",
    answer2: "Saturday: Open 9:00am-5pm.",
    answer3: "Sunday-Monday: Closed.",
  },
]

export default Hero;