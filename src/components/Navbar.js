import React from "react";

// Styling
import { ThemeButton, Logo, NavStyled, NavYard } from "../styles.js";
import lightLogo from "../LightLogo.png";
import darkLogo from "../DarkLogo.png";

const NavBar = (props) => {
  return (
    <NavStyled className="navbar navbar-expand">
      <Logo className="navbar-brand" to="/">
        <img
          src={props.currentTheme === "light" ? lightLogo : darkLogo}
          alt="logo"
        />
      </Logo>
      <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
        <div className="navbar-nav ml-auto">
          <NavYard className="nav-item nav" to="/cars">
            Car Yard
          </NavYard>
          <ThemeButton className="nav-item" onClick={props.toggleTheme}>
            {props.buttonText()}
          </ThemeButton>
        </div>
      </div>
    </NavStyled>
  );
};

export default NavBar;
