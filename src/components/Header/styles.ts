import styled from "styled-components";

export const Container = styled.header`
  display: flex;
  align-items: center;
  justify-content: space-between;
  height: 80px;
  h1 {
    color: ${(props) => props.theme.green};
  }
  input {
    background: ${(props) => props.theme.input};
    border: 1px solid ${(props) => props.theme.input};
    padding: 10px 1rem;
    width: 300px;
    border-radius: 5px;
    color: ${(props) => props.theme.white};
    transition: 0.4s;

    &:focus {
      outline: none;
      border: 1px solid ${(props) => props.theme.green};
    }
  }

  @media (max-width: 500px) {
    flex-direction: column;
    justify-content: center;
    height: auto;
    gap: 20px;
    padding-top: 20px;
  }
`;
