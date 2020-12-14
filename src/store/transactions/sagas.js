import { call, put, all, takeLatest } from 'redux-saga/effects';

import TransactionServices from '../../services/transaction';
import TransactionTypes from './types';

export function* getTransactions(action) {
  try {
    const res = yield call(TransactionServices.getTransactions);
    yield put({
      type: TransactionTypes.GET_TRANSACTIONS_SUCCESS,
      payload: res.data.transactions,
    });
  } catch (error) {
    yield put({ type: TransactionTypes.GET_TRANSACTIONS_FAILURE });
  }
}

export default function* authSagas() {
  yield all([takeLatest(TransactionTypes.GET_TRANSACTIONS, getTransactions)]);
}
