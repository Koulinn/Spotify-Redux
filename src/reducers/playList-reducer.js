const playList = {
    
}

export const playListsReducer = ( state = playList, action) =>{
    switch (action.type){
        case 'CREATE_PLAYLIST':
            console.log('Inside CREATE_PLAYLIST')
            return {
                ...state,
                [action.payload] : []
            }
        default : {
            console.log('inside default playListsReducer')
            return state
        }

    }
}

