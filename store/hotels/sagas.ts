import { call, put, takeLatest } from 'redux-saga/effects';
import fetch from 'isomorphic-unfetch';

import { actionTypes, getHotelsSuccess, getHotelsFail } from './actions';
import { SagaIterator } from 'redux-saga';

function* getHotelsSaga(): SagaIterator {
  try {
    const res = yield call(fetch, 'https://k8s.vandervalkonline.com/hotelservice/v1/hotels');
    const response = yield res.json();
    yield put(getHotelsSuccess(response.data));
  } catch (err) {
    yield put(getHotelsFail(err));
  }
}

function* hotelsSaga(): SagaIterator {
  yield takeLatest(actionTypes.GET_HOTELS, getHotelsSaga);
}

export default hotelsSaga;
