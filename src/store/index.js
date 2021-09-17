import { createStore, combineReducers } from "redux";
import { playerReducer } from "../reducers";
//import reducer Geury
import { playListsReducer } from "../reducers/playList-reducer";
// import reducer Tomas
// import Thunk Tomas



export const groupedReducers = combineReducers({
    playerReducer: playerReducer,
    // create a likeReducer - Geury
    playLists: playListsReducer
    // loadMusicReducer - Tomas
})


// tomas also need
const configureStore = createStore(
    groupedReducers,
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
)

export default configureStore