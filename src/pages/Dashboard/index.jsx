import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {
  Accordion,
  AccordionSummary,
  AccordionDetails,
  Typography,
} from '@material-ui/core';
import ExpandMoreRounded from '@material-ui/icons/ExpandMoreRounded';

import { getTransactions } from '../../store/transactions/actions';
import TransactionTable from '../../components/TransactionsTable';
import useStyles from './styles';

const Dashboard = () => {
  const [isExpanded, setIsExpanded] = useState(false);
  const { transactionsData } = useSelector((state) => state.transactions);
  const classes = useStyles();
  const dispatch = useDispatch();

  const hasTransactions = transactionsData.length !== 0;

  const handleChange = () => {
    if (hasTransactions) {
      setIsExpanded(!isExpanded);
    }
  };

  const initialEffect = () => {
    dispatch(getTransactions());
  };

  useEffect(initialEffect, []);

  return (
    <Accordion
      className={classes.root}
      expanded={isExpanded}
      onChange={handleChange}
    >
      <AccordionSummary
        className={classes.summary}
        expandIcon={<ExpandMoreRounded className={classes.icon} />}
      >
        <Typography variant="h5">Transactions</Typography>
      </AccordionSummary>
      <AccordionDetails>
        <TransactionTable items={transactionsData} />
      </AccordionDetails>
    </Accordion>
  );
};

export default Dashboard;
