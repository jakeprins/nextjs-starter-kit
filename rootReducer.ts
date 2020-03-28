import { combineReducers } from 'redux';

import hotels, { initialState as hotelsInitialState } from './store/hotels/reducer';

export const initialState = {
  hotels: hotelsInitialState,
};

export default combineReducers({
  hotels,
});
