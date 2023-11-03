import { Quiz } from "../../constants/quizzes";
import {
  CategoryIcon,
  Container,
  ImageContainer,
  TitleContainer,
} from "./styles";

import { Link } from "react-router-dom";

type QuizCardProps = {
  quiz: Quiz;
};
export const QuizCard = ({ quiz }: QuizCardProps) => {
  return (
    <Link to={`/quiz/${quiz.slug}`}>
      <Container>
        <ImageContainer>
          <img
            className="thumbnail"
            src={`/thumbnails/${quiz.thumbnail}`}
            alt=""
          />
        </ImageContainer>
        <TitleContainer>
          <CategoryIcon src={`/categories/${quiz.category}.png`} />
          <p>{quiz.title}</p>
        </TitleContainer>
      </Container>
    </Link>
  );
};
