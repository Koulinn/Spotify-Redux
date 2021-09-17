import { createStore, combineReducers } from "redux";
import { playerReducer } from "../reducers";
import { likeReducer } from "../reducers/likeReducer";

export const groupedReducers = combineReducers({
  playerReducer: playerReducer,
  likeReducer: likeReducer,
});

const configureStore = createStore(
  groupedReducers,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

export default configureStore;
