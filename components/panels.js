import Image from "next/image";
import React from "react";
import Container from "./container";

import tireChange from "../public/img/tirechange.jpg";
import oilChange2 from "../public/img/oilchange2.jpg";
import tuneUp from "../public/img/tuneup.jpg";

const Panels  = () => {
  return (
    <Container>
      <div className="grid gap-10 lg:grid-cols-2 xl:grid-cols-3">
        <div className="lg:col-span-2 xl:col-auto">
          <div className="flex flex-col justify-between w-full h-full bg-gray-100 px-14 rounded-2xl py-14 dark:bg-trueGray-800">
            <Avatar
              image={oilChange2}
              name="Oil Change"
              title="$160-$220"
            />
            <p className="text-2xl leading-normal ">
              Price will very based on the quality of oil you would like put in the vechile. Generally we recommend .... for models, ..... for older models, and ...... for models.
            </p>
          </div>
        </div>
        <div className="">
          <div className="flex flex-col justify-between w-full h-full bg-gray-100 px-14 rounded-2xl py-14 dark:bg-trueGray-800">
            <Avatar
              image={tireChange}
              name="Brake Replacement"
              title="$___ for break replacement"
            />
            <p className="text-2xl leading-normal ">
              Price varies based on what type of breaks are in the vehicle.
            </p>
          </div>
        </div>
        <div className="">
          <div className="flex flex-col justify-between w-full h-full bg-gray-100 px-14 rounded-2xl py-14 dark:bg-trueGray-800">
            <Avatar
              image={tuneUp}
              name="Engine Tuneup"
              title="$0 to $0"
            />
            <p className="text-2xl leading-normal ">
              Tune up means...
            </p>
          </div>
        </div>
      </div>
    </Container>
  );
}

function Avatar(props) {
  return (
    <div className="flex items-center mt-8 space-x-3">
      <div className="overflow-hidden rounded-full">
        <Image
          src={props.image}
          width="200"
          height="200"
          alt="Avatar"
          placeholder="blur"
        />
      </div>
      <div>
        <div className="text-lg font-medium">{props.name}</div>
        <div className="text-gray-600 dark:text-gray-400">{props.title}</div>
      </div>
    </div>
  );
}

function Mark(props) {
  return (
    <>
      {" "}
      <mark className="text-blue-800 bg-blue-100 rounded-md ring-blue-100 ring-4 dark:ring-blue-900 dark:bg-blue-900 dark:text-blue-200">
        {props.children}
      </mark>{" "}
    </>
  );
}

export default Panels;