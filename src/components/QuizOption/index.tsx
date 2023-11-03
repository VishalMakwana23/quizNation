import { Container } from "./styles";

type QuizOptionProps = {
  value: string;
  variation?: "correct" | "wrong" | "default";
  onClick: () => void;
  disabled: boolean;
};

export const QuizOption = ({
  value,
  variation = "default",
  onClick,
  disabled,
}: QuizOptionProps) => {
  return (
    <Container disabled={disabled} onClick={onClick} variation={variation}>
      {value}
    </Container>
  );
};
