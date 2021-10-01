import { Link } from "react-router-dom";

const Landing = () => (
  <>
    <header className="landing-header">
      <h1 className="landing-header__title heading-1">
        Easy
        <span className="landing-header__title--purple">FPL</span>
        <span className="landing-header__title--black">.</span>
      </h1>
    </header>

    <section className="landing-content">
      <p className="landing-content__text-description">
        A tool made to help you easily and quickly pick the best performing
        players based on the stats you’re interested in.
      </p>
      <div className="feature-cards">
        <div className="feature-card">
          <header className="feature-card__title">
            <h2 className="heading-2">Compare</h2>
          </header>
          <p className="feature-card__text-content">
            Compare players based on statistics you choose. See how two players
            compare.
          </p>
        </div>

        <div className="feature-card">
          <header className="feature-card__title">
            <h2 className="heading-2">Pick</h2>
          </header>
          <p className="feature-card__text-content">
            Use the picker tool to quickly find the best player for your team in
            each position
          </p>
        </div>

        <div className="feature-card">
          <header className="feature-card__title">
            <h2 className="heading-2">Save</h2>
          </header>
          <p className="feature-card__text-content">
            Register to save players to your team to keep track of your picks.
          </p>
          <Link to="/Login" role="button" className="btn btn--register">
            Register
          </Link>
        </div>
      </div>
      <div className="start-cta">
        <Link to="/Home" role="button" className="btn btn--start">
          Get Started &rarr;
        </Link>
      </div>
    </section>
  </>
);

export default Landing;
