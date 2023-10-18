interface Question {
  questionText: string;
  answers: ReadonlyArray<{
    text: string;
    imageOrGifUrl?: string;
  }>;
  correctAnswerIdx: number;
}

export const QUESTIONS_CONFIG: ReadonlyArray<Question> = [
  {
    questionText: "Sample question text",
    answers: [
      {
        text: "Answer 1",
      },
      {
        text: "Answer 2",
      },
    ],
    correctAnswerIdx: 1,
  },
  {
    questionText: "Sample question text 2",
    answers: [
      {
        text: "",
        imageOrGifUrl: "/love.gif",
      },
      {
        text: "",
        imageOrGifUrl: "/fight.gif",
      },
    ],
    correctAnswerIdx: 0,
  },
  {
    questionText: "Sample question text 3",
    answers: [
      {
        text: "",
        imageOrGifUrl: "",
      },
      {
        text: "",
        imageOrGifUrl: "",
      },
    ],
    correctAnswerIdx: 1,
  },
];
