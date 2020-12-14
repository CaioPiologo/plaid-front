import React from 'react';
import CircularProgress from '@material-ui/core/CircularProgress';

import useStyles from './styles';

const LoaderAnimation = () => {
  const classes = useStyles();
  return <CircularProgress className={classes.root} />;
};

export default React.memo(LoaderAnimation);
