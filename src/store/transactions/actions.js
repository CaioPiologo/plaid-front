import TransactionTypes from './types';

export const getTransactions = () => ({
  type: TransactionTypes.GET_TRANSACTIONS,
});
