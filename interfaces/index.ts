import { Store } from 'redux';
import { Task } from 'redux-saga';
import { NextPageContext } from 'next';
import { HotelStateInterface } from '../store/hotels/reducer';

export interface WithSagaTaskStore extends Store {
  sagaTask?: Task;
}

export interface WithReduxNextPageContext extends NextPageContext {
  store: WithSagaTaskStore; // Added with react-redux Provider in _app.tsx
}

// TODO add hotelState interface
export interface State {
  hotels: HotelStateInterface;
}
