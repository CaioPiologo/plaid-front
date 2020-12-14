import React, { useCallback, useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import { Button } from '@material-ui/core';
import { useDispatch, useSelector } from 'react-redux';
import { usePlaidLink } from 'react-plaid-link';

import CircularProgress from '@material-ui/core/CircularProgress';

import useStyles from './styles';
import { accessRequest } from '../../store/auth/actions';
import { getStorage } from '../../utils/storage';

const Login = () => {
  const classes = useStyles();
  const dispatch = useDispatch();
  const history = useHistory();
  const auth = useSelector((state) => state.auth);

  const onSuccess = useCallback((token, metadata) => {
    console.log('onSuccess', token, metadata);
    dispatch(accessRequest(token));
  }, []);

  const onEvent = useCallback(
    (eventName, metadata) => console.log('onEvent', eventName, metadata),
    []
  );

  const onExit = useCallback(
    (err, metadata) => console.log('onExit', err, metadata),
    []
  );

  const config = {
    token: auth.hasLink && getStorage('linkToken'),
    onSuccess,
    onEvent,
    onExit,
  };

  const { open, ready, error } = usePlaidLink(config);

  const authEffect = () => {
    if (auth.isAuthenticated === true) {
      history.push('/');
    }
  };

  useEffect(authEffect, [auth.isAuthenticated]);

  return (
    <Button
      className={classes.root}
      variant="contained"
      color="primary"
      type="submit"
      fullWidth
      data-testid="button-login"
      disabled={!ready || error || !auth.hasLink}
      onClick={open}
    >
      {auth.hasLink ? 'Connect with Plaid!' : <CircularProgress />}
    </Button>
  );
};

export default Login;
