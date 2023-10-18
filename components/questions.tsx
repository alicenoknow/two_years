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
    questionText: "Gdy nie widzę mojej dziewczyny dłużej niż tydzień, to bardzo za nią tęsknię i nie mogę przestać o niej myśleć.",
    answers: [
      {
        text: "zdecydowanie tak",
        imageOrGifUrl: "",
      },
      {
        text: "raczej tak",
        imageOrGifUrl: "",
      },
      {
        text: "raczej nie",
        imageOrGifUrl: "",
      },
      {
        text: "zdecydowanie nie",
        imageOrGifUrl: "",
      },
    ],
    correctAnswerIdx: 0,
  },
  {
    questionText: "Które miasto bardziej Ci się podoba?",
    answers: [
      {
        text: "Tychy",
        imageOrGifUrl: "/images/tychy.jpg",
      },
      {
        text: "Tarnów",
        imageOrGifUrl: "/images/tarnow.jpg",
      },
    ],
    correctAnswerIdx: 0,
  },
  {
    questionText: "Wymarzone zwierzątko to ...",
    answers: [
      {
        text: "piesek",
        imageOrGifUrl: "/images/doggo.jpg",
      },
      {
        text: "kotek",
        imageOrGifUrl: "/images/kitty.jpg",
      },
    ],
    correctAnswerIdx: 1,
  },
  {
    questionImage: "/images/argue.jpeg",
    questionText: "Czy jest coś co denerwuje Cię w Twoim partnerze/partnerce?",
    answers: [
      {
        text: "zupełnie nic, jest idealny/a",
        imageOrGifUrl: "",
      },
      {
        text: "znalazłoby się parę rzeczy",
        imageOrGifUrl: "",
      },
      {
        text: "całkiem sporo",
        imageOrGifUrl: "",
      },
    ],
    correctAnswerIdx: 0,
  },
  {
    questionImage: "/images/work.jpg",
    questionText: "Czy denerwuje Cię kiedy Twój partner/partnerka przeszkadza Ci w pracy i prosi o konsultacje wiadomości email?",
    answers: [
      {
        text: "ani trochę, uwielbiam gdy to robi",
        imageOrGifUrl: "",
      },
      {
        text: "wolałbym, żeby tego nie robił/a",
        imageOrGifUrl: "",
      }
    ],
    correctAnswerIdx: 0,
  },
  {
    questionText: "Czy uważasz, że piesek może na łóżko?",
    answers: [
      {
        text: "taak",
        imageOrGifUrl: "/images/bed.jpg",
      },
      {
        text: "niee :cc",
        imageOrGifUrl: "/images/sad_dog.jpg",
      },
    ],
    correctAnswerIdx: 0,
  },
  {
    questionImage: "/images/hands.jpg",
    questionText: "Jaki jest wasz love language?",
    answers: [
      {
        text: "wyrażenia afirmatywne",
      },
      {
        text: "dotyk",
      },
      {
        text: "kotki na ig",
      },
      {
      text: "prezenty",
    },
    ],
    correctAnswerIdx: 2,
  },
  {
    questionText: "Jak wygląda wasza relacja?",
    answers: [
      {
        text: "❤",
        imageOrGifUrl: "/love.gif",
      },
      {
        text: "🤬",
        imageOrGifUrl: "/fight.gif",
      },
    ],
    correctAnswerIdx: 0,
  },
];
