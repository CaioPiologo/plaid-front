import { call, put, all, takeLatest } from 'redux-saga/effects';

import AuthServices from '../../services/auth';
import AuthTypes from './types';
import {
  setStorage,
  setSessionStorage,
  getStorage,
  clearStorage,
} from '../../utils/storage';

export function* login(action) {
  // try {
  //   const linkRes = yield call(AuthServices.getLinkToken);
  //   const { data } = linkRes;
  //   setSessionStorage('linkToken', data.link_token)
  //   const handler = window.Plaid.create({
  //     token: data.link_token,
  //     onSuccess: (public_token) => {
  //       AuthServices.getAccessToken(
  //         {
  //           public_token: public_token
  //         }
  //       ).then(async res => {
  //         console.log(res);
  //         const { data } = res;
  //         setSessionStorage('accessLink', data.access_token)
  //         await put({ type: AuthTypes.ACCESS_REQUEST, payload: data.access_token })
  //       });
  //     }
  //   });
  //   yield handler.open();
  // } catch (error) {
  //   yield put({ type: AuthTypes.LOGIN_FAILURE });
  // }
}

export function* getLinkToken(action) {
  try {
    const token = getStorage('linkToken');
    if (token) {
      const accessToken = getStorage('accessToken');
      accessToken
        ? yield put({ type: AuthTypes.AUTHORIZE })
        : yield put({ type: AuthTypes.GET_LINK_SUCCESS });
    } else {
      const linkRes = yield call(AuthServices.getLinkToken);
      const { data } = linkRes;
      setSessionStorage('linkToken', data.link_token);
      yield put({ type: AuthTypes.GET_LINK_SUCCESS });
    }
  } catch (error) {
    yield put({ type: AuthTypes.LOGIN_FAILURE });
  }
}

export function* accessToken(action) {
  try {
    const token = getStorage('accessToken');
    if (token) {
      yield put({ type: AuthTypes.AUTHORIZE });
    } else {
      const accessToken = action.payload;
      setSessionStorage('accessToken', accessToken);
      yield call(AuthServices.setAccessToken, { public_token: accessToken });
      yield put({ type: AuthTypes.AUTHORIZE });
    }
  } catch (error) {
    yield put({ type: AuthTypes.LOGIN_FAILURE });
  }
}

export default function* authSagas() {
  yield all([
    takeLatest(AuthTypes.GET_LINK_TOKEN, getLinkToken),
    takeLatest(AuthTypes.LOGIN_REQUEST, login),
    takeLatest(AuthTypes.ACCESS_REQUEST, accessToken),
  ]);
}
