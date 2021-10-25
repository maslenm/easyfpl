import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { toggleMenu } from "../actions/MenuAction";
import MobileNav from "./MobileNav";

const Header = () => {
  const menu = useSelector((state) => state.menuOpen);
  const dispatch = useDispatch();

  return (
    <header className={!menu ? "header" : "Nav"}>
      <h1 className="header__title heading-1--no-line">
        Easy
        <span className="header__title--purple">FPL</span>
        <span className={!menu ? "header__title--span" : "header__title--nav"}>
          Player Manager Tool
        </span>
      </h1>

      {!menu ? (
        <Link to="/login" role="button" className="btn btn--login-register">
          Log in / Register
        </Link>
      ) : null}

      <div
        className={!menu ? "nav-btn" : "nav-btn nav-btn--menuOpen"}
        onClick={() => dispatch(toggleMenu())}
      >
        <div
          className={
            !menu
              ? "nav-btn__burger"
              : "nav-btn__burger nav-btn__burger--menuOpen"
          }
        ></div>
      </div>
      <nav className={!menu ? "mobile-nav-hidden" : "mobile-nav"}>
        <MobileNav />
      </nav>
    </header>
  );
};

export default Header;
