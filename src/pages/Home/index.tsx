import { useState } from "react";
import { Header } from "../../components/Header";
import { QuizCard } from "../../components/QuizCard";
import { quizzes } from "../../constants/quizzes";
import { Container, QuizGrid, TitleContainer } from "./styles";

export const Home = () => {
  const [search, setSearch] = useState("");

  const filteredQuizzes = quizzes.filter((quiz) => {
    return quiz.title.toLowerCase().includes(search.toLowerCase());
  });

  return (
    <Container>
      <Header search={search} setSearch={setSearch} />
      <TitleContainer>
        <h1>
          Choose one<span> Quiz</span>
        </h1>
        <h2>And test your knowledge while having fun learning</h2>
      </TitleContainer>
      <QuizGrid className="container">
        {filteredQuizzes.map((quiz) => (
          <QuizCard quiz={quiz} key={quiz.slug} />
        ))}
      </QuizGrid>
    </Container>
  );
};
