import React, { Suspense, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import LoadingAnimation from '../components/LoadingAnimation';
import { linkRequest } from '../store/auth/actions';

import PrivateRoute from './PrivateRoute';

const Login = React.lazy(() => import('../pages/Login'));
const Dashboard = React.lazy(() => import('../pages/Dashboard'));

const AppRoutes = () => {
  const auth = useSelector((state) => state.auth);
  const dispatch = useDispatch();

  const linkConnect = () => {
    dispatch(linkRequest());
  };

  useEffect(linkConnect, []);

  return (
    <Router>
      <Suspense fallback={<LoadingAnimation />}>
        <Switch>
          <Route exact path="/login" component={Login} />
          <PrivateRoute
            exact
            path="/"
            component={Dashboard}
            isAuthenticated={auth.isAuthenticated}
          />
        </Switch>
      </Suspense>
    </Router>
  );
};

export default AppRoutes;
