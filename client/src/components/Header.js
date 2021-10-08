import { Link } from "react-router-dom";

const Header = () => (
  <header className="header">
    <h1 className="header__title heading-1">
      Easy
      <span className="header__title--purple">FPL</span>
      <span className="header__title--span">Player Manager Tool</span>
    </h1>

    <Link to="/login" role="button" className="btn btn--login-register">
      Log in / Register
    </Link>

    <div className="nav-btn">
      <div className="nav-btn__burger"></div>
    </div>
  </header>
);

export default Header;
