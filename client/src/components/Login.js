import { Link } from "react-router-dom";

const Login = () => (
  <>
    <header className="login-header">
      <h1 className="login-header__title heading-1">Login / Register</h1>
    </header>

    <section className="login-content">
      <div className="login-content__register-info">
        <p className="text-register">
          <b>Log</b> in or <b>Register</b> an account to access the <b>Team</b>{" "}
          feature
        </p>
      </div>

      <form className="login-register-form">
        <input
          type="text"
          id="email"
          name="email"
          value=""
          placeholder="Email"
          className="login-register-form__input"
        ></input>
        <input
          type="text"
          id="password"
          name="password"
          value=""
          placeholder="Passsword"
          className="login-register-form__input"
        ></input>
        <Link to="#" role="button" className="btn btn--form-login">
          Login
        </Link>
        <Link to="#" role="button" className="btn btn--form-register">
          Register
        </Link>
      </form>

      <Link to="#" role="link" className="login-helper-link">
        Can't Log in?
      </Link>
    </section>
  </>
);

export default Login;
