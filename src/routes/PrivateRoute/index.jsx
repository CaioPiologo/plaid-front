import React from 'react';
import { Route, Redirect } from 'react-router-dom';

const PrivateRoute = (props) => {
  const { exact, path, component, isAuthenticated } = props;
  if (!isAuthenticated) {
    return <Redirect to="/login" />;
  }

  return <Route exact={exact} path={path} component={component} />;
};

PrivateRoute.defaultProps = {
  exact: false,
};

export default PrivateRoute;
