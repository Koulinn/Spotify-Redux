import {applyMiddleware, createStore, combineReducers,compose} from "redux";
import { playerReducer } from "../reducers";
//import reducer Geury
// import reducer Rafa
import thunk from "redux-thunk";
import musicsReducer from "../reducers/LoadMusicReducer";
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__

export const initialState ={
    musics:{
        
        loading:true,
        error:false,
    }
}

export const groupedReducers = combineReducers({
    playerReducer: playerReducer
  

     ,musics:musicsReducer
})


// tomas also need
const configureStore = createStore(
    groupedReducers,
    initialState,
    process.env.REACT_APP_DEVELOPMENT? composeEnhancers(applyMiddleware(thunk)):compose(applyMiddleware(thunk))
)
export default configureStore