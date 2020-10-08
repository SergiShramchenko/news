import { GET_NEWS } from './types';

const initialState = {
  data: [],
};

export default (state = initialState, action) => {
  switch (action.type) {
    case GET_NEWS: {
      return {
        ...state,
        data: action.payload,
      };
    }

    default:
      return state;
  }
};
