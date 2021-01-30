import styled, { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
body {
  color: ${(props) => props.theme.mainColor};
  background-color: ${(props) => props.theme.backgroundColor}
}
`;

const Title = styled.h1`
  text-align: center;
`;

const Description = styled.h4`
  text-align: center;
`;

const ShopImage = styled.img`
  display: block;
  margin: auto;
  width: 60%;
`;

const YardWrapper = styled.div`
  display: flex;
  text-align: center;
  align-items: center;
  justify-content: center;
`;

const CarWrapper = styled.div`
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

export { GlobalStyle, Title, Description, ShopImage, YardWrapper, CarWrapper };
