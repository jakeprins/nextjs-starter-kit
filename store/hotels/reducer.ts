import { actionTypes, Action } from './actions';
import { HotelInterface } from './interfaces';

export interface HotelStateInterface {
  entities: HotelInterface[];
  isLoading: boolean;
  isLoaded: boolean;
  error: string;
}

export const initialState: any = {
  entities: [],
  isLoading: false,
  isLoaded: false,
  error: null,
};

const reducer = (state = initialState, action: Action): HotelStateInterface => {
  switch (action.type) {
    case actionTypes.GET_HOTELS:
      return {
        ...state,
        isLoading: true,
      };

    case actionTypes.GET_HOTELS_SUCCESS:
      return {
        ...state,
        entities: action.entities,
        isLoading: false,
      };

    case actionTypes.GET_HOTELS_FAIL:
      return {
        ...state,
        error: 'test',
        isLoading: false,
      };

    default:
      return state;
  }
};

export default reducer;
