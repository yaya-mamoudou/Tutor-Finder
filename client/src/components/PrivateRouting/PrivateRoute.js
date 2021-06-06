import React, { useContext } from "react";
import { Route, Redirect } from "react-router-dom";
import AuthContext from "../../context/auth/AuthContext";

const PrivateRoute = ({ component: Component, ...rest }) => {
  const authContext = useContext(AuthContext);
  const { isAuthenticated, loading, token } = authContext;
  return (
    <Route
      {...rest}
      render={(props) =>
        !token ? (
          <Redirect from={rest.path} exact to="/login" />
        ) : (
          <Component {...rest} {...props} />
        )
      }
    />
  );
};

export default PrivateRoute;
