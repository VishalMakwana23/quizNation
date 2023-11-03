import { Quiz } from ".";

export const nodeJS: Quiz = {
  title: "Node JS",
  slug: "node-js",
  category: "coding",
  thumbnail: "node.jpg",
  quiz: [
    {
      question: "What is Node.js?",
      options: [
        "A programming language",
        "A web server",
        "A database management system",
        "A front-end framework",
      ],
      answer: "A web server",
    },
    {
      question: "Which of the following is an advantage of using Node.js?",
      options: [
        "It is a statically typed language",
        "It is a compiled language",
        "It has a large standard library",
        "It has a non-blocking I/O model",
      ],
      answer: "It has a non-blocking I/O model",
    },
    {
      question: "What is NPM?",
      options: [
        "Node.js Package Manager",
        "Node.js Programming Module",
        "Node.js Programming Methodology",
        "Node.js Programming Manifest",
      ],
      answer: "Node.js Package Manager",
    },
    {
      question: "Which of the following is a built-in module in Node.js?",
      options: ["assert", "mysql", "redis", "mongoose"],
      answer: "assert",
    },
    {
      question:
        "Which of the following is used to handle HTTP requests in Node.js?",
      options: ["express", "koa", "hapi", "connect"],
      answer: "express",
    },
    {
      question:
        "Which of the following is used to create a new HTTP server in Node.js?",
      options: [
        "http.createServer()",
        "http.createServer",
        "http.newServer()",
        "http.newServer",
      ],
      answer: "http.createServer()",
    },
    {
      question:
        "Which of the following is used to read user input from the command line in Node.js?",
      options: [
        "console.log()",
        "console.read()",
        "process.stdin",
        "process.stdout",
      ],
      answer: "process.stdin",
    },
    {
      question:
        "Which of the following is used to write output to the command line in Node.js?",
      options: [
        "console.read()",
        "console.write()",
        "process.stdin",
        "console.log()",
      ],
      answer: "console.log()",
    },
    {
      question:
        "Which of the following is used to handle file operations in Node.js?",
      options: ["fs", "path", "url", "querystring"],
      answer: "fs",
    },
    {
      question:
        "Which of the following is used to send HTTP requests in Node.js?",
      options: ["http.request()", "http.get()", "http.send()", "http.fetch()"],
      answer: "http.request()",
    },
    {
      question: "Which of the following is used to parse JSON data in Node.js?",
      options: [
        "JSON.stringify()",
        "JSON.parse()",
        "JSON.encode()",
        "JSON.decode()",
      ],
      answer: "JSON.parse()",
    },
    {
      question:
        "Which of the following is used to create a child process in Node.js?",
      options: [
        "child_process.fork()",
        "child_process.spawn()",
        "child_process.exec()",
        "child_process.execFile()",
      ],
      answer: "child_process.fork()",
    },
    {
      question:
        "Which of the following is used to manage asynchronous operations in Node.js?",
      options: ["callbacks", "promises", "async/await", "all of the above"],
      answer: "all of the above",
    },
    {
      question: "Which of the following is used to handle errors in Node.js?",
      options: ["try/catch", "throw", "assert", "all of the above"],
      answer: "all of the above",
    },
    {
      question:
        "Which of the following is used to generate random numbers in Node.js?",
      options: [
        "Math.random()",
        "random()",
        "random.int()",
        "Math.random.int()",
      ],
      answer: "Math.random()",
    },
    {
      question: "Which of the following is used to generate UUIDs in Node.js?",
      options: ["uuid()", "uuidv1()", "uuidv4()", "all of the above"],
      answer: "all of the above",
    },
    {
      question: "Which of the following is used to encrypt data in Node.js?",
      options: [
        "crypto.createCipher()",
        "crypto.encrypt()",
        "crypto.hash()",
        "crypto.encode()",
      ],
      answer: "crypto.createCipher()",
    },
    {
      question: "Which of the following is used to decrypt data in Node.js?",
      options: [
        "crypto.createDecipher()",
        "crypto.decrypt()",
        "crypto.hash()",
        "crypto.encode()",
      ],
      answer: "crypto.createDecipher()",
    },
    {
      question:
        "Which of the following is used to generate secure passwords in Node.js?",
      options: ["bcrypt", "md5", "sha256", "all of the above"],
      answer: "bcrypt",
    },
    {
      question:
        "Which of the following is used to manipulate dates and times in Node.js?",
      options: ["moment.js", "date.js", "time.js", "datetime.js"],
      answer: "moment.js",
    },
  ],
};
