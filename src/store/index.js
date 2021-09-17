import {applyMiddleware, createStore, combineReducers,compose} from "redux";
import { playerReducer } from "../reducers";
import thunk from "redux-thunk";
import musicsReducer from "../reducers/LoadMusicReducer";
import { playListsReducer } from "../reducers/playList-reducer";
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__


export const initialState ={
    musics:{
        
        loading:true,
        error:false,
    }
}

export const groupedReducers = combineReducers({
        musics:musicsReducer,
        playerReducer: playerReducer,
        playLists: playListsReducer
    })


// tomas also need
const configureStore = createStore(
    groupedReducers,
    initialState,
    process.env.REACT_APP_DEVELOPMENT? composeEnhancers(applyMiddleware(thunk)):compose(applyMiddleware(thunk))
)
export default configureStore