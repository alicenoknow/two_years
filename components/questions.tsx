interface Question {
  questionText: string;
  answers: ReadonlyArray<{
    text: string;
    imageOrGifUrl?: string;
  }>;
  correctAnswerIdx: number;
  questionImage?: string;
}

export const QUESTIONS_CONFIG: ReadonlyArray<Question> = [
  {
    questionImage: "/images/sad_man.png",
    questionText: "lol",
    answers: [
      {
        text: "rizz",
        imageOrGifUrl: "",
      },
      {
        text: "rel",
        imageOrGifUrl: "",
      },
      {
        text: "ez",
        imageOrGifUrl: "",
      },
    ],
    correctAnswerIdx: 0,
  }
];
