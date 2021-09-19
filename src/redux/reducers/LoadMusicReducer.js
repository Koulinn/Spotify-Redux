import { initialState } from "../store";

const musicsReducer = (state=initialState.musics,action)=>{
    switch(action.type){
        case "FILL_MUSICS":
            return{
                ...state,
              [action.payload.sectionName]:action.payload.musics
            }
        case "FILL_MUSICS_LOADING":
            return{
                ...state,
                loading:action.payload
            }
        case "FILL_MUSICS_ERROR":
            return{
                ...state,
                error:action.payload
            }
            default:
                return state      
    }
}

export default musicsReducer