import {FETCH_CHEEESES_REQUEST,
  fetchCheesesRequest, 
  FETCH_CHEEESES_SUCCESS,
  fetchCheesesSuccess, 
  FETCH_CHEEESES_ERROR, fetchCheesesError
} from './actions/cheese'

const initialState = {
  cheeses: [],
  loading: false,
  error: null
}

//logic

export const cheeseReducer = (state = initialState, action) {
  //loading
  if (action.type === FETCH_CHEEESES_REQUEST) {
    return Object.assign({}, state, {
      cheeses: [],
      loading: true,
      error: null
    }) 
  }
  else if (action.type === FETCH_CHEEESES_SUCCESS) {
    return Object.assign({}, state, {
      cheeses: [action.cheeses],
      loading: false,
      error: null
    }) 

  }
  else if (action.type === FETCH_CHEEESES_ERROR) {
    return Object.assign({}, state, {
      cheeses: [action.cheeses],
      loading: false,
      error: action.err
    }) 

  }
  return state;
  
} 

