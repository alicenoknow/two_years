import React from "react";
import Image from "next/image";

import { AnimatedResult, RESULTS_DATA } from "@/components/results";
import { Card, HeartEmoji } from "@/components";

const IMAGE_SIZE = 300;

const AnimatedElement = (config: AnimatedResult) => {
  const { text, imageOrGifUrl, idx } = config;
  return (
    <div className="flex flex-row items-center">
      <Card text={text} imageOrGifUrl={imageOrGifUrl} number={idx} />
    </div>
  );
};

const Page = () => {
  return (
    <div className="h-screen overflow-y-scroll no-scrollbar pb-24">
      <div className="flex items-center justify-center text-3xl p-8 pt-16">
        <HeartEmoji />
        <h1 className="mb-4 font-extrabold text-gray-900 dark:text-white md:text-4xl lg:text-5xl">
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500">
            Wynik testu: jesteście dla siebie stworzeni!
          </span>
        </h1><HeartEmoji /></div>
      <div className="flex items-center justify-center text-xl p-12">Najedź i sprawdź dlaczego 🔍</div>
      {RESULTS_DATA.map((elem, key) => (
        <AnimatedElement key={key} {...elem} />
      ))}
    </div>
  );
};

export default Page;
