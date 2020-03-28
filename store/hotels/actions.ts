import * as actionIs from './actions.interfaces';

export enum actionTypes {
  GET_HOTELS = 'GET_HOTELS',
  GET_HOTELS_SUCCESS = 'GET_HOTELS_SUCCESS',
  GET_HOTELS_FAIL = 'GET_HOTELS_FAIL',
}

export type Action = actionIs.GetHotels | actionIs.GetHotelsSuccess | actionIs.GetHotelsFail;

export function getHotels(): actionIs.GetHotels {
  return { type: actionTypes.GET_HOTELS };
}

export function getHotelsSuccess(data: { name: string }[]): actionIs.GetHotelsSuccess {
  return {
    type: actionTypes.GET_HOTELS_SUCCESS,
    data,
  };
}

export function getHotelsFail(error: Error): actionIs.GetHotelsFail {
  return {
    type: actionTypes.GET_HOTELS_FAIL,
    error,
  };
}
