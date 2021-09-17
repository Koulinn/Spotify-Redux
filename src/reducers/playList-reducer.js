const playList = {

}

export const playListsReducer = (state = playList, action) => {
    switch (action.type) {
        case 'CREATE_PLAYLIST':
            console.log('Inside CREATE_PLAYLIST')
            return {
                ...state,
                [action.payload]: [],
                isNewPlayList: true
            }

        case 'IS_NOT_NEW_PLAYLIST':
            console.log('Inside CREATE_PLAYLIST')
            return {
                ...state,
                isNewPlayList: false
            }
        default: {
            console.log('inside default playListsReducer')
            return state
        }

    }
}

