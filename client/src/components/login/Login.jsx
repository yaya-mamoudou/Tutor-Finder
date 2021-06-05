import React, { useState, useContext, useEffect } from "react";
import AuthContext from "../../context/auth/AuthContext";
import { Link } from "react-router-dom";
function Login(props) {
  const authContext = useContext(AuthContext);
  const { login, isAuthenticated, store } = authContext;

  useEffect(() => {
    if (isAuthenticated) {
      props.history.push("/mainapp");
    }
  }, [isAuthenticated, props.history]);

  const [user, setUser] = useState({
    email: "",
    password: "",
  });

  const {
    email,
    password,

    status,
  } = user;

  const onChange = (e) => setUser({ ...user, [e.target.name]: e.target.value });

  const onSubmit = (e) => {
    e.preventDefault();
    // store(user);

    login({ email, password });
  };
  return (
    <div>
      <h3>
        Account <span>Login</span>
      </h3>
      <form onSubmit={onSubmit}>
        <div>
          <label htmlFor="email">Email Address</label>
          <br />

          <input
            id="email"
            type="email"
            name="email"
            value={email}
            onChange={onChange}
            required
            className="mb-3"
          />
        </div>
        <div>
          <label htmlFor="password">Password</label>
          <br />

          <input
            id="password"
            type="password"
            name="password"
            value={password}
            onChange={onChange}
            required
            minLength="6"
            className="mb-3"
          />
        </div>
        <input type="submit" value="Login" />
      </form>
      Dont Have an account ? <Link to="/register">Register</Link>
    </div>
  );
}

export default Login;
