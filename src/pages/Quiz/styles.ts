import styled from "styled-components";
type ContainerProps = {
  bgUrl: string;
};

export const Container = styled.main<ContainerProps>`
  width: 100%;
  min-height: 100vh;
  background: linear-gradient(
      0deg,
      rgba(1, 1, 9, 0.9) 20%,
      rgba(50, 227, 175, 0.5) 100%
    ),
    url(${(props) => props.bgUrl}) no-repeat center;
  background-size: cover;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const QuestionBox = styled.div`
  background: rgba(38, 40, 58, 0.4);
  backdrop-filter: blur(10px);
  padding: 20px;
  width: 100%;
  max-width: 800px;
  border-radius: 30px;
`;

export const QuizDetails = styled.header`
  display: flex;
  align-items: center;
  justify-content: space-between;
  p {
    color: ${(props) => props.theme.green};
    font-weight: 500;
  }
  h1 {
    font-size: 25px;
    font-weight: 500;
    display: flex;
    align-items: center;
    gap: 10px;

    a {
      background: ${(props) => props.theme.green};
      width: 30px;
      height: 30px;
      border-radius: 50%;
      display: flex;
      align-items: center;
      justify-content: center;
      padding-bottom: 3px;
      padding-left: 1px;
      font-size: 20px;
    }
  }
`;

export const QuizOptionsGrid = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 20px;

  @media (max-width: 800px) {
    grid-template-columns: 1fr;
  }
`;

export const QuestionText = styled.h2`
  margin: 50px 0;
  text-align: center;
  font-size: 32px;

  @media (max-width: 500px) {
    font-size: 25px;
  }
`;

export const FinishedContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 50px;
  margin-top: 50px;

  h2 {
    font-size: 45px;
    text-transform: uppercase;
    text-align: center;
    color: ${(props) => props.theme.green};
  }

  a {
    text-decoration: underline;
    transition: 0.4s;

    &:hover {
      color: ${(props) => props.theme.green};
    }
  }
`;
