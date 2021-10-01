import { Link } from "react-router-dom";

const Home = () => (
  <>
    <header className="home-header">
      <h1 className="home-header__title heading-1">Home</h1>
    </header>

    <section className="home-content">
      <div className="home-content__register-info">
        <p className="text-unregistered">
          Create a user account to save your player selections into a team. This
          will help keep track of your official FPL team and transfers.
        </p>

        <Link to="/Login" role="button" className="btn btn--register">
          Register
        </Link>
      </div>

      <ul className="menu">
        <li className="menu__item menu__item--1" value="1">
          <Link to="/PlayerSelector" role="button" className="menu-btn">
            <span className="menu-btn__icon">&copy;</span>
            Player Selector
          </Link>
        </li>
        <li li className="menu__item menu__item--2" value="2">
          <Link to="/Instructions" role="button" className="menu-btn">
            <span className="menu-btn__icon">&copy;</span>
            Instructions
          </Link>
        </li>
      </ul>
    </section>
  </>
);

export default Home;
