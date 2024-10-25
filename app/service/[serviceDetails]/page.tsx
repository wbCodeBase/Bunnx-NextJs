"use client"

import React, { useState } from "react";


const steps = [
  {
    label: "Select campaign settings",
    description: `For each ad campaign that you create, you can control how much
              you're willing to spend on clicks and conversions, which networks
              and geographical locations you want your ads to show on, and more.`,
  },
  {
    label: "Create an ad group",
    description:
      "An ad group contains one or more ads which target a shared set of keywords.",
  },
  {
    label: "Create an ad",
    description: `Try out different ad text to see what brings in the most customers,
              and learn how to enhance your ads using features like ad extensions.
              If you run into any problems with your ads, find out how to tell if
              they're running and how to resolve approval issues.`,
  },
];

export default function RouteDetails({ params }) {
  const [activeStep, setActiveStep] = useState(0);
  const { serviceDetails } = params;

  console.log(serviceDetails);


  return (
    <>

      <div className="container mx-auto px-4 max-w-screen-lg lg:px-6 xl:max-w-screen-xl" style={{ border: "2px solid black" }}>


        Hey


      </div>

    </>
  );
}

