import styled from "styled-components";

export const Container = styled.div`
  background: ${(props) => props.theme.card};
  border-radius: 15px;
  overflow: hidden;
  display: flex;
  flex-direction: column;
  height: 290px;
  &:hover .thumbnail {
    transform: scale(1.2);
  }
`;
export const ImageContainer = styled.div`
  width: 100%;
  height: 200px;
  border-radius: 15px;
  overflow: hidden;

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    transition: 0.7s;
  }
`;
export const CategoryIcon = styled.img`
  width: 50px;
  height: 50px;
  border-radius: 50%;
  object-fit: cover;
  position: absolute;
  top: -25px;
  border: 1px solid ${(props) => props.theme.white};
`;
export const TitleContainer = styled.div`
  flex: 1;
  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;
  padding: 0 10px;
  position: relative;
  p {
    font-size: 15px;
    font-weight: 500;
  }
`;
