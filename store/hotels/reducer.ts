import { actionTypes, Action } from './actions';
import { State } from '../../interfaces';

export const initialState: any = {
  entities: [],
  isLoading: false,
  isLoaded: false,
  error: null,
};

const reducer = (state = initialState, action: Action): State => {
  switch (action.type) {
    case actionTypes.GET_HOTELS:
      return {
        ...state,
        isLoading: true,
      };

    case actionTypes.GET_HOTELS_SUCCESS:
      return {
        ...state,
        entities: action.data,
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
