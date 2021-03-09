import React from "react";

// Styling
import { ThemeButton, Logo, NavStyled, NavYard } from "../styles.js";
import lightLogo from "../LightLogo.png";
import darkLogo from "../DarkLogo.png";
import { useSelector } from "react-redux";

const NavBar = (props) => {
  const user = useSelector((state) => state.auths.user);

  // use ternary operator below to determine user state ( the question mark ? and colon : )
  // cleaner way would be to determine true or false by using &&

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
          {user && (
            <>
              <NavYard className="nav-item nav" to="/manufacturers">
                Manufacturers Yard
              </NavYard>
              <NavYard className="nav-item nav" to="/cars">
                Car Yard
              </NavYard>
            </>
          )}
          {user ? (
            <NavYard className="nav-item nav" to="/sigout">
              Hey, {user.username}! Sign out?
            </NavYard>
          ) : (
            <>
              <NavYard className="nav-item nav" to="/signup">
                Sign Up
              </NavYard>
              <NavYard className="nav-item nav" to="/signin">
                Sign In
              </NavYard>
            </>
          )}
          <ThemeButton className="nav-item" onClick={props.toggleTheme}>
            {props.buttonText()}
          </ThemeButton>
        </div>
      </div>
    </NavStyled>
  );
};

export default NavBar;
