"use client";

import React, { useState } from "react";
import { useRouter } from "next/navigation";

import { Answer, ImageWithLoading, Oops } from ".";
import { QUESTIONS_CONFIG } from "./questions";

const IMAGE_SIZE = 300;

const Question = ({ num }: { num: number }) => {
  const router = useRouter();
  const [selectedAnswer, setSelectedAnswer] = useState<number | undefined>();

  if (num < 1 || num > QUESTIONS_CONFIG.length) {
    return <Oops />;
  }

  const question = QUESTIONS_CONFIG[num - 1];
  const { questionText, questionImage, answers, correctAnswerIdx } = question;

  if (correctAnswerIdx >= answers.length) {
    return <Oops />;
  }

  const onClick = (idx: number) => {
    setSelectedAnswer(idx);
    if (idx === correctAnswerIdx) {
      if (num === QUESTIONS_CONFIG.length) {
        router.push(`/result`);
      } else {
        router.push(`/question/${num + 1}`);
      }
    }
  };

  const shouldBeToggled = (idx: number) =>
    selectedAnswer === idx && selectedAnswer !== correctAnswerIdx;

  return (
    <div className="px-12">
      <div className="flex items-center font-extrabold justify-center text-2xl py-6 md:text-3xl md:py-12">
        {`Pytanko ${num}:`}
      </div>
      <div className="flex items-center justify-center md:text-xl py-4">
        {questionText}
      </div>
      <div className="flex items-center justify-center md:text-xl py-4 blur-load">
        {questionImage &&
          <ImageWithLoading imgUrl={questionImage} />}
      </div>
      <div className="flex flex-row items-center justify-center">
        {answers.map((answer, idx) => (
          <Answer
            key={idx}
            text={answer.text}
            imageOrGifUrl={answer.imageOrGifUrl}
            shouldToggle={shouldBeToggled(idx)}
            onClick={() => onClick(idx)}
          />
        ))}
      </div>
    </div>
  );
};

export default Question;
