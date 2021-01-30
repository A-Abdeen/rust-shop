import styled, { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
body {
  color: ${(props) => props.theme.mainColor};
  background-color: ${(props) => props.theme.backgroundColor}
}
`;

export const Title = styled.h1`
  text-align: center;
`;

export const Description = styled.h4`
  text-align: center;
`;

export const ShopImage = styled.img`
  display: block;
  margin: auto;
  width: 60%;
`;

export const YardWrapper = styled.div`
  display: flex;
  text-align: center;
  align-items: center;
  justify-content: center;
`;

export const CarWrapper = styled.div`
  margin: 20px;
  img {
    height: 250px;
    display: flex;
  }

  ,
  p {
    text-align: center;
    &.car-price {
      color: ${(props) => props.theme.rust};
    }
  }
`;

export const ThemeButton = styled.button`
  font-size: 1em;
  margin: 1.25em;
  padding: 0.25em 1em;
  border-radius: 3px;
  background-color: ${(props) => props.theme.mainColor};
  color: ${(props) => props.theme.backgroundColor};
`;
export const SearchBarStyled = styled.input`
  padding: 0.5rem;
  margin: 1rem auto;
  display: block;
  width: 40%;
`;
