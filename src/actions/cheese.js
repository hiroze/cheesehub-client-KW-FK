const API_BASE_URL = "https://peaceful-cliffs-10458.herokuapp.com/api/cheeses";

export const FETCH_CHEEESES_REQUEST = "FETCH_CHEESES_REQUEST";
export const fetchCheesesRequest = () => ({
  type: FETCH_CHEEESES_REQUEST
});

export const FETCH_CHEEESES_SUCCESS = "FETCH_CHEESES_SUCCESS";
export const fetchCheesesSuccess = (cheese) => ({
  type: FETCH_CHEEESES_SUCCESS,
  cheese
});

export const FETCH_CHEEESES_ERROR = "FETCH_CHEESES_ERROR";
export const fetchCheesesError = (error) => ({
  type: FETCH_CHEEESES_ERROR,
  error
});

export const fetchCheeses = () => {
  return dispatch => {
    fetch(`${API_BASE_URL}`)
      .then(res => res.json())
      .then(cheese => dispatch(fetchCheesesSuccess(cheese)))
      .catch(err => fetchCheesesError(err));
  };
};
