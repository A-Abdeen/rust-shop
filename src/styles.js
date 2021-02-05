import styled, { createGlobalStyle } from "styled-components";
import { Link, NavLink } from "react-router-dom";

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
export const DetailWrapper = styled.div`
  display: block;
  margin-left: auto;
  margin-right: auto;
  width: 80%;

  img {
    width: 40%;
    float: left;
  }

  p {
    vertical-align: middle;
  }
`;
export const BackButton = styled.button`
  font-size: 1em;
  margin: 1.25em;
  padding: 0.25em 1em;
  border-radius: 2px;
  background-color: ${(props) => props.theme.mainColor};
  color: ${(props) => props.theme.backgroundColor};
`;
export const DeleteButtonStyle = styled.button`
  font-size: 1em;
  margin: 1.25em;
  padding: 0.25em 1em;
  border-radius: 2px;
  background-color: ${(props) => props.theme.rust};
  color: #f3ebe4;
`;
export const Logo = styled(Link)`
  padding: 0.75em;

  img {
    width: 8rem;
  }
`;
export const NavStyled = styled.nav`
  background-color: ${(props) => props.theme.backgroundColor};
`;
export const NavYard = styled(NavLink)`
  padding: 0.25em 1em;
  color: ___CSS_0___;

  &.active {
    color: ___CSS_1___;
    background-color: ${(props) => props.theme.mainColor};
  }
`;
