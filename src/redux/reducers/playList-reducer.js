const playList = {

}

export const playListsReducer = (state = playList, action) => {
    switch (action.type) {
        case 'CREATE_PLAYLIST':
            return {
                ...state,
                [action.payload]: [],
                isNewPlayList: true
            }

        case 'IS_NOT_NEW_PLAYLIST':
            return {
                ...state,
                isNewPlayList: false
            }
        case 'ADD_TO_PLAYLIST':
            return {
                ...state,                                               
                [action.payload.playListName]: [...state[action.payload.playListName], action.payload.newMusic],
                isNewPlayList: true
            }
        default: {
            return state
        }

    }
}

