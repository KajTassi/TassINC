import React from "react";
import Container from "./container";

const Cta = () => {
  return (
    <Container>
      <div className="flex flex-wrap items-center justify-between w-full max-w-4xl gap-5 mx-auto text-white bg-blue-600 px-7 py-7 lg:px-12 lg:py-12 lg:flex-nowrap rounded-xl">
        <div className="flex-grow text-center lg:text-left">
          <h2 className="text-2xl font-medium lg:text-3xl mb-8">
            Contact us through our chat icon, or use the information below.
          </h2>
          <p className="mt-2 font-medium text-white text-opacity-90 lg:text-xl">
            Phone: 650-755-1355
          </p>
          <p className="mt-2 font-medium text-white text-opacity-90 lg:text-xl">
            Email: ?
          </p>
          <p className="mt-2 font-medium text-white text-opacity-90 lg:text-xl">
            Address: 55 Reiner St, Daily City
          </p>
          <p className="mt-2 font-medium text-white text-opacity-90 lg:text-xl">
            Google Maps: <a
            href="https://www.google.com/maps?q=55+Reiner+St,+Colma,+CA+94014&oe=utf-8&client=firefox-a&ie=UTF8&hq&hnear=55+Reiner+St,+Daly+City,+San+Mateo,+California+94014&gl=us&ei=QfnNS-vYLYOksgO8iPWuDg&ved=0CAcQ8gEwAA&z=16"
            class="underline ..."
            >click here</a>
          </p>
        </div>
        <div className="flex-shrink-0 w-full text-center lg:w-auto">
        </div>
      </div>
    </Container>
    
  );
}



export default Cta;