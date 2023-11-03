import { Quiz } from ".";

export const reactJS: Quiz = {
  title: "React JS",
  slug: "react-js",
  category: "coding",
  thumbnail: "react.jpg",
  quiz: [
    {
      question: "What is React JS?",
      options: [
        "A JavaScript framework for building mobile applications",
        "A JavaScript library for building user interfaces",
        "A video streaming service",
        "An object-oriented programming language",
      ],
      answer: "A JavaScript library for building user interfaces",
    },
    {
      question: "What is Virtual DOM in React?",
      options: [
        "An in-memory representation of the tree of user interface elements",
        "A tool for debugging React applications",
        "An optimization plugin to increase rendering speed",
        "An external library that must be imported to use React",
      ],
      answer:
        "An in-memory representation of the tree of user interface elements",
    },

    {
      question: "What is the difference between state and props in React?",
      options: [
        "State is used to store immutable data while props is used for mutable data",
        "State is used for mutable data while props is used for storing immutable data",
        "State and props are the same thing",
        "There is no difference between state and props in React",
      ],
      answer:
        "State is used for mutable data while props is used for storing immutable data",
    },
    {
      question: "What is the useState hook in React?",
      options: [
        "A function that allows you to use local state in functional components",
        "A feature that allows you to render components directly on the server",
        "A plugin to create animations in React",
        "A tool to test application performance",
      ],
      answer:
        "A function that allows you to use local state in functional components",
    },
    {
      question:
        "What is the difference between functional components and class components in React?",
      options: [
        "Functional components are more efficient in terms of performance than class components",
        "Class components are easier to write than functional components",
        "Functional components are only used for simple components",
        "Class components are only used for complex components",
      ],
      answer:
        "Functional components are more efficient in terms of performance than class components",
    },

    {
      question: "What is the difference between React and React Native?",
      options: [
        "React is for web development, while React Native is for mobile development",
        "React is for mobile development, while React Native is for web development",
        "There is no difference, both are used for web and mobile development",
        "React is for desktop application development, while React Native is for game development",
      ],
      answer:
        "React is for web development, while React Native is for mobile development",
    },
    {
      question: "What is JSX?",
      options: [
        "A JavaScript extension that allows you to write HTML within JavaScript code",
        "A CSS preprocessor for styling React components",
        "An NPM package for creating routes in React applications",
        "A programming language used for developing React applications",
      ],
      answer:
        "A JavaScript extension that allows you to write HTML within JavaScript code",
    },
    {
      question: "What is a state in React?",
      options: [
        "An immutable property that must be passed to child components",
        "A function that takes as arguments the properties of a component and returns a new element",
        "A property of a component that can be changed and that causes an update to the DOM",
        "A global object that can be accessed by all application components",
      ],
      answer:
        "A property of a component that can be changed and that causes an update to the DOM",
    },
    {
      question: "What is a prop in React?",
      options: [
        "A function that takes as arguments the properties of a component and returns a new element",
        "An immutable property that must be passed to child components",
        "A property of a component that can be changed and that causes an update to the DOM",
        "A global object that can be accessed by all application components",
      ],
      answer: "An immutable property that must be passed to child components",
    },
    {
      question:
        "What is the difference between a function and a component class in React?",
      options: [
        "Component functions are more performant than component classes",
        "Component classes allow the use of state and lifecycle methods, while component functions do not",
        "Component functions are easier to write than component classes",
        "Component classes allow the use of props, while component functions do not",
      ],
      answer:
        "Component classes allow the use of state and lifecycle methods, while component functions do not",
    },
    {
      question: "Which command is used to create a new project in React?",
      options: [
        "npx create-react-app",
        "npm start",
        "npm install react",
        "create-react-app",
      ],
      answer: "npx create-react-app",
    },
    {
      question: "What is a prop in React?",
      options: [
        "A function that returns a React component",
        "An object that contains information about the state of the component",
        "An object that contains information about the parent component's props",
        "A property of a React component",
      ],
      answer: "A property of a React component",
    },
    {
      question: "Which hook is used to add state to a component in React?",
      options: ["useEffect", "useState", "useContext", "useReducer"],
      answer: "useState",
    },
    {
      question: "What is a callback in React?",
      options: [
        "A function that is passed as a prop to a child component",
        "A function that is executed before rendering the component",
        "A function that is executed after the component is assembled",
        "A function that is executed when an event occurs in the component",
      ],
      answer: "A function that is passed as a prop to a child component",
    },
    {
      question: "What is virtual DOM in React?",
      options: [
        "An optimized version of the real DOM",
        "A tool for performance testing",
        "A tool for accessibility testing",
        "A set of additional libraries for React",
      ],
      answer: "An optimized version of the real DOM",
    },

    {
      question: "Which hook is used to perform side effects in React?",
      options: ["useContext", "useReducer", "useEffect", "useCallback"],
      answer: "useEffect",
    },
    {
      question: "What is the state of a component in React?",
      options: [
        "Component Properties",
        "Component functions",
        "The internal values ​​of the component",
        "Component rendering information",
      ],
      answer: "The internal values ​​of the component",
    },
    {
      question: "What is the main function of React?",
      options: [
        "Create user interfaces",
        "Create server-side applications",
        "Create databases",
        "Create APIs",
      ],
      answer: "Create user interfaces",
    },

    {
      question: "What is the correct way to define a component in React?",
      options: [
        "As a class or as a function",
        "Like a string",
        "Like an object",
        "Like a number",
      ],
      answer: "As a class or as a function",
    },
    {
      question: "What is the correct way to update state in React?",
      options: [
        "Using the setState() method",
        "Using the updateState() method",
        "Using the changeState() method",
        "Using the state() method",
      ],
      answer: "Using the setState() method",
    },
    {
      question: "What is the lifecycle of a component in React?",
      options: [
        "A sequence of events that occur during the creation, update, and destruction of a component",
        "A sequence of methods that manipulate the state of the component",
        "A sequence of methods that manipulate the component's props",
        "A sequence of events that occur during the creation and destruction of a component",
      ],
      answer:
        "A sequence of events that occur during the creation, update, and destruction of a component",
    },
    {
      question: "What is ReactDOM in React?",
      options: [
        "Library for DOM manipulation",
        "Library for Virtual DOM manipulation",
        "JavaScript Framework",
        "Programming language",
      ],
      answer: "Library for DOM manipulation",
    },
    {
      question: "What is useEffect in React?",
      options: [
        "Hook to deal with side effects",
        "Hook to handle the state of a component",
        "Hook to handle a component's props",
        "Hook to handle the lifecycle of a component",
      ],
      answer: "Hook to deal with side effects",
    },
  ],
};
