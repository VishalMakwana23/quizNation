import { javascript } from "./javascript";
import { reactJS } from "./reactJS";
import { nodeJS } from "./nodeJS";
import { nextJS } from "./nextJS";
import { gameOfThrones } from "./got";
import { harryPotter } from "./harryPotter";
import { Marvels } from "./marvels";
import { MoneyHeist } from "./money-heist";

export type QuizOption = {
  question: string;
  options: string[];
  answer: string;
};

export type Quiz = {
  title: string;
  slug: string;
  category: "series" | "sports" | "music" | "general" | "coding";
  thumbnail: string;
  quiz: QuizOption[];
};

export const quizzes = [
  javascript,
  reactJS,
  nodeJS,
  nextJS,
  gameOfThrones,
  harryPotter,
  Marvels,
  MoneyHeist,
];
