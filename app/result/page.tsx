import React from "react";
import Image from "next/image";

import { AnimatedResult, RESULTS_DATA } from "@/components/results";
import { Card } from "@/components";

const IMAGE_SIZE = 300;

const AnimatedElement = (config: AnimatedResult) => {
  const { text, imageOrGifUrl, idx } = config;
  return (
    <div className="p-12 flex flex-row items-center">
     <Card text={text} imageOrGifUrl={imageOrGifUrl} number={idx} />
    </div>
  );
};

const Page = () => {
  return (
    <div className="h-screen overflow-y-scroll no-scrollbar">
      <div className="flex items-center justify-center text-3xl p-8 pt-16">Wynik testu: jesteście dla siebie stworzeni!</div>
      <div className="flex items-center justify-center text-xl p-12">Najedź i sprawdź dlaczego</div>
      {RESULTS_DATA.map((elem, key) => (
        <AnimatedElement key={key} {...elem} />
      ))}
    </div>
  );
};

export default Page;
