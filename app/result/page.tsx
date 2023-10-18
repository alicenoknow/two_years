import React from "react";
import Image from "next/image";

import { AnimatedResult, RESULTS_DATA } from "@/components/results";

const IMAGE_SIZE = 300;

const AnimatedElement = (config: AnimatedResult) => {
  const { text, imageOrGifUrl } = config;
  return (
    <div className="p-4 flex flex-col items-center">
      {imageOrGifUrl && (
        <Image
          src={imageOrGifUrl}
          priority
          alt="Image or GIF"
          width={IMAGE_SIZE}
          height={IMAGE_SIZE}
        />
      )}
      {text && <div>{text}</div>}
    </div>
  );
};

const Page = () => {
  return (
    <div className="h-screen overflow-y-scroll no-scrollbar">
      {RESULTS_DATA.map((elem, key) => (
        <AnimatedElement key={key} {...elem} />
      ))}
    </div>
  );
};

export default Page;
