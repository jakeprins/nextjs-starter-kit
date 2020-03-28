import { call, put, takeLatest } from 'redux-saga/effects';
import fetch from 'isomorphic-unfetch';

import { actionTypes, getHotelsSuccess, getHotelsFail } from './actions';
import { SagaIterator } from 'redux-saga';

function* getHotelsSaga(): SagaIterator {
  try {
    const res = yield call(fetch, 'https://jsonplaceholder.typicode.com/users');
    const data = yield res.json();
    yield put(getHotelsSuccess(data));
  } catch (err) {
    yield put(getHotelsFail(err));
  }
}

function* hotelsSaga(): SagaIterator {
  yield takeLatest(actionTypes.GET_HOTELS, getHotelsSaga);
}

export default hotelsSaga;
