import { all, AllEffect } from 'redux-saga/effects';

import hotelsSaga from './store/hotels/sagas';
import { SagaIterator } from 'redux-saga';

export default function* rootSaga(): Generator<AllEffect<SagaIterator>> {
  yield all([hotelsSaga()]);
}
