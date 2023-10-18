"use client";

import React, { useEffect, useState } from "react";
import Image from "next/image";
import { NiceButton } from ".";

interface AnswerProps {
  text: string;
  shouldToggle: boolean;
  onClick: () => void;
  imageOrGifUrl?: string;
}

const IMAGE_SIZE = 300;

const Answer: React.FC<AnswerProps> = ({
  text,
  imageOrGifUrl,
  shouldToggle,
  onClick,
}) => {
  const [isShaking, setIsShaking] = useState(false);
  const [clickedFlip, updateClicked] = useState(false);

  useEffect(() => {
    if (shouldToggle) {
      setIsShaking(true);

      setTimeout(() => {
        setIsShaking(false);
      }, 1000);
    }
  }, [shouldToggle, clickedFlip]);

  const imageClasses = isShaking ? "shake" : "";

  return (
    <div className={`p-4 flex flex-col items-center ${imageClasses}`}>
      {imageOrGifUrl && (
        <div className="mt-4 p-4">
          <Image
            src={imageOrGifUrl}
            priority
            alt="Image or GIF"
            width={IMAGE_SIZE}
            height={IMAGE_SIZE}
          />
        </div>
      )}
      <NiceButton
        text={text}
        onClick={() => {
          onClick();
          updateClicked(!clickedFlip);
        }}
      />
    </div>
  );
};

export default Answer;
