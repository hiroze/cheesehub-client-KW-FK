import { createStore, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import { cheeseReducer } from "./reducers/cheese";
import { connect } from "react-redux";

export default createStore(
  cheeseReducer, 
  applyMiddleware(thunk)
);
