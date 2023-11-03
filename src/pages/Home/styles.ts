import styled from "styled-components";

export const Container = styled.main``;
export const TitleContainer = styled.div`
  text-align: center;
  margin-top: 30px;
  margin-bottom: 50px;

  h2 {
    font-weight: 500;
    opacity: 0.8;
  }

  span {
    color: ${(props) => props.theme.green};
  }
`;
export const QuizGrid = styled.section`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(264px, 1fr));
  gap: 20px;
  padding-bottom: 100px !important;
`;
