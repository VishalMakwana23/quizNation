import styled, { css } from "styled-components";

type ContainerProps = {
  variation?: "correct" | "wrong" | "default";
};

export const Container = styled.button<ContainerProps>`
  background: ${(props) => props.theme.card};
  color: ${(props) => props.theme.white};
  padding: 20px 16px;
  font-size: 22px;
  font-weight: 500;
  border: 3px solid ${(props) => props.theme.cardHover};
  border-radius: 5px;
  transition: 0.4s;

  &:hover {
    background: ${(props) => props.theme.cardHover};
  }

  ${(props) =>
    props.variation === "correct" &&
    css`
      background: ${props.theme.green};
      border-color: ${props.theme.green};

      &:hover {
        background: ${(props) => props.theme.green};
      }
    `}

  ${(props) =>
    props.variation === "wrong" &&
    css`
      background: ${props.theme.red};
      border-color: ${props.theme.red};

      &:hover {
        background: ${(props) => props.theme.red};
      }
    `}

    @media (max-width: 500px) {
    font-size: 18px;
  }
`;
