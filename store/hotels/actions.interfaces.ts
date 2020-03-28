import { actionTypes } from './actions';

export interface GetHotels {
  type: actionTypes.GET_HOTELS;
}

export interface GetHotelsSuccess {
  type: actionTypes.GET_HOTELS_SUCCESS;
  data: Array<object>;
}

export interface GetHotelsFail {
  type: actionTypes.GET_HOTELS_FAIL;
  error: Error;
}
