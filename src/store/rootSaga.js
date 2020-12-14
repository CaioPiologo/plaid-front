import { all, fork } from 'redux-saga/effects';

import authSagas from './auth/sagas';
import transactionSagas from './transactions/sagas';

export default function* rootSaga() {
  return yield all([fork(authSagas), fork(transactionSagas)]);
}
