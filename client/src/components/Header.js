import { Link } from "react-router-dom";

const Header = () => (
  <header className="header">
    <h1 className="header__title">
      EasyFPL<span>Player Manager Tool</span>
    </h1>

    <Link to="/Login" role="button" className="btn btn--login-register">
      Log in / Register
    </Link>

    <div className="nav-btn">
      <div className="nav-btn__burger"></div>
    </div>
  </header>
);

export default Header;
