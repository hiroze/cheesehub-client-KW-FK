const API_BASE_URL = '/api';

export const FETCH_CHEEESES_REQUEST = 'FETCH_CHEESES_REQUEST'
export const fetchCheesesRequest = () => ({
  type: FETCH_CHEEESES_REQUEST
  
});

export const FETCH_CHEEESES_SUCCESS = 'FETCH_CHEESES_SUCCESS'
export const fetchCheesesSuccess = () => ({
  type: FETCH_CHEEESES_SUCCESS,
  cheese
});

export const FETCH_CHEEESES_ERROR= 'FETCH_CHEESES_ERROR'
export const fetchCheesesError = () => ({
  type: FETCH_CHEEESES_ERROR,
  error
});

export const fetchCheeses = () => {
  return dispatch => {
    fetch(`${API_BASE_URL}`/cheeses)
    .then(res => res.json())
    .then(data => dispatch(fetchCheesesSuccess(data)))
    .catch(err => fetchCheeseError(err))
  }
}