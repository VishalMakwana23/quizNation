import { Quiz } from ".";

export const nextJS: Quiz = {
  title: "Next JS",
  slug: "next-js",
  category: "coding",
  thumbnail: "next.jpg",
  quiz: [
    {
      question: "The next.js is based upon ____?",
      options: ["JavaScript", "Python", "React", "Java"],
      answer: "React",
    },
    {
      question: "How many types of pre-rendering are supported by Next.js?",
      options: ["1", "2", "3", "4"],
      answer: "2",
    },
    {
      question:
        "Which of the following command is used to start the development server in Next.js?",
      options: ["Start dev", "Start server", "npm run dev", "npm start sever"],
      answer: "npm run dev",
    },
    {
      question: "Which of the following are the middlewares in Next.js?",
      options: ["Req.cookies", "Req.query", "Req.body", "All of the above"],
      answer: "All of the above",
    },
    {
      question:
        "To add an image to your application which of the following component you will import?",
      options: ["Next/image", "Image", "Img", "Next/img"],
      answer: "Next/image",
    },
    {
      question: "A ____is a function that creates URLs for images.",
      options: ["Loader", "Src", "Preloader", "Next_img"],
      answer: "Loader",
    },
    {
      question:
        "____Includes built-in automated self-hosting for any font file.",
      options: ["@next/font", "@font", "@next_font", "none of above"],
      answer: "@next/font",
    },
    {
      question:
        "Client-side transitions between routes can be enabled via the ____ component.",
      options: ["Static route", "Link", "Loader", "Unit"],
      answer: "Link",
    },
    {
      question:
        "NEXT.JS has a ____for starting, building, and exporting applications.",
      options: ["Components", "Functions", "Commands", "CLI"],
      answer: "CLI",
    },
    {
      question:
        "Which of the following commands starts the application in production mode?",
      options: ["Start", "Npx start", "Npm start", "Next start"],
      answer: "Next start",
    },
    {
      question:
        "Which of the following command will quickly build a new Next.js application?",
      options: [
        "npx create-next-app@latest",
        "yarn create next-app",
        "pnpm create next-app",
        "All of the above",
      ],
      answer: "All of the above",
    },
    {
      question: "Which of the following companies uses Next.js?",
      options: ["Tik ToK", "Nike", "Netflix Jobs", "All of the above"],
      answer: "All of the above",
    },
  ],
};
