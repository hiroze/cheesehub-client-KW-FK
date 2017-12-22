import {
  FETCH_CHEEESES_REQUEST,
  FETCH_CHEEESES_SUCCESS,
  FETCH_CHEEESES_ERROR
} from "../actions/cheese";

const initialState = {
  cheeses: [],
  loading: false,
  error: null
};

export const cheeseReducer = (state = initialState, action) => {
  if (action.type === FETCH_CHEEESES_REQUEST) {
    return Object.assign({}, state, {
      cheeses: [],
      loading: true,
      error: null
    });
  } else if (action.type === FETCH_CHEEESES_SUCCESS) {
    return Object.assign({}, state, {
      cheeses: [action.cheeses],
      loading: false,
      error: null
    });
  } else if (action.type === FETCH_CHEEESES_ERROR) {
    return Object.assign({}, state, {
      cheeses: [action.cheeses],
      loading: false,
      error: action.err
    });
  }
  return state;
};
