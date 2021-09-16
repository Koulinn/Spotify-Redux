import { createStore, combineReducers } from "redux";
import { playerReducer } from "../reducers";




export const groupedReducers = combineReducers({
    playerReducer: playerReducer
})


const configureStore = createStore(
    groupedReducers,
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
)

export default configureStore