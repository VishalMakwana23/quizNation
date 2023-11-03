import { Link, useNavigate, useParams } from "react-router-dom";
import { QuizOption } from "../../components/QuizOption";
import {
  Container,
  FinishedContainer,
  QuestionBox,
  QuestionText,
  QuizDetails,
  QuizOptionsGrid,
} from "./styles";
import { useEffect, useMemo, useState } from "react";
import {
  QuizOption as QuizOptionType,
  Quiz as QuizType,
  quizzes,
} from "../../constants/quizzes";
import { AiFillHome } from "react-icons/ai";

export const Quiz = () => {
  const [currentQuiz, setCurrentQuiz] = useState({} as QuizType);
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [currentAttempt, setCurrentAttempt] = useState<string | undefined>(
    undefined
  );
  const [isFinished, setIsFinished] = useState(false);
  const [rightCounter, setRightCounter] = useState(0);

  const { slug } = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    const quiz = quizzes.find((quiz) => {
      return quiz.slug === slug;
    });
    if (!quiz) {
      navigate("/");
      return;
    }
    setCurrentQuiz(quiz);
  }, []);

  function getRandomQuestions(questions: QuizOptionType[]) {
    const shuffledQuestions = questions.sort(() => 0.5 - Math.random());
    return shuffledQuestions.slice(0, 10);
  }

  const currentQuestions = useMemo(() => {
    return getRandomQuestions(currentQuiz?.quiz ?? []);
  }, [currentQuiz]);

  useEffect(() => {
    if (currentAttempt) {
      setTimeout(() => {
        const nextIndex = currentQuestionIndex + 1;
        if (nextIndex >= currentQuestions.length) {
          setIsFinished(true);
          return;
        }
        setCurrentQuestionIndex(nextIndex);
        setCurrentAttempt(undefined);
      }, 3000);
    }
  }, [currentAttempt, currentQuestionIndex]);

  if (!currentQuiz?.slug) return null;

  const currentQuestion = currentQuestions[currentQuestionIndex];
  function handleAttempt(option: string) {
    if (option === currentQuestion.answer) {
      setRightCounter((old) => old + 1);
    }
    setCurrentAttempt(option);
  }

  return (
    <Container bgUrl={`/thumbnails/${currentQuiz.thumbnail}`}>
      <QuestionBox>
        <QuizDetails>
          <h1>
            <Link to="/">
              <AiFillHome />
            </Link>
            {currentQuiz.title}
          </h1>
          <p>
            {currentQuestionIndex + 1}/{currentQuestions.length}
          </p>
        </QuizDetails>
        {isFinished ? (
          <FinishedContainer>
            <h2>
              You scored {rightCounter}/{currentQuestions.length} in this Quiz
            </h2>
            <Link to="/">Return to home screen</Link>
          </FinishedContainer>
        ) : (
          <>
            <QuestionText>{currentQuestion.question}</QuestionText>
            <QuizOptionsGrid>
              {currentQuestion.options.map((option) => (
                <QuizOption
                  disabled={!!currentAttempt}
                  onClick={() => handleAttempt(option)}
                  key={option}
                  value={option}
                  variation={
                    currentAttempt === undefined
                      ? "default"
                      : currentQuestion.answer === option
                      ? "correct"
                      : "wrong"
                  }
                />
              ))}
            </QuizOptionsGrid>
          </>
        )}
      </QuestionBox>
    </Container>
  );
};
