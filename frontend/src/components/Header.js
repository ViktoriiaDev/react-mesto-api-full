import React from "react";
import headerLogo from "../images/logo.svg";
import { useLocation, Link, useHistory } from "react-router-dom";
import CurrentUserContext from "../contexts/CurrentUserContext.js";

const urls = {
  "/sign-in": "/sign-up",
  "/sign-up": "/sign-in",
  "/": "/",
};

const linkText = {
  "/sign-in": "Регистрация",
  "/sign-up": "Войти",
};

const Header = ({email}) => {
  const { push } = useHistory()
  const { pathname } = useLocation();
  const handleLogout = () => {
    localStorage.removeItem('jwt');
    push('/sign-in');
  }
  const additionalLink =
    urls[pathname] && urls[pathname] === "/" ? (
      <>{email}<span className="header__logout" onClick={handleLogout}>Выйти</span></>
    ) : (
      <Link className="header__add-link" to={urls[pathname]}>
        {linkText[pathname]}
      </Link>
    );

  return (
    <header className="header">
      <img className="header__logo" alt="Логотип" href="#" src={headerLogo} />
      {additionalLink}
    </header>
  );
};

export default Header;
