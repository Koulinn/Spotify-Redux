const playerState = {
    player: {
        current: false,
        paused: true,
        playlist: [],
    }

}

export const playerReducer = (state = playerState, action) => {

    const dispatchTable = {
        SET_MUSIC_TO_PLAY: function () {
            const objToReturn = {
                ...state,
                player: {
                    ...state.player,
                    current: action.payload,
                    paused: false
                }

            }
            return objToReturn
        }
    }


    if (dispatchTable.hasOwnProperty(action.type)) {
        return dispatchTable[action.type]()
    }
    // return state
    switch (action.type) {
        // case 'SET_MUSIC_TO_PLAY':
        // return {
        //     ...state,
        //     player: {
        //         ...state.player,
        //         current: action.payload,
        //         paused: false
        //     }
        // }

        case 'PAUSE_MUSIC':
            return {
                ...state,
                player: {
                    ...state.player,
                    paused: true
                }
            }
        case 'PLAY_MUSIC':
            return {
                ...state,
                player: {
                    ...state.player,
                    paused: false
                }
            }
        default: {
            console.log('inside default mainReducer')
            return state
        }

    }
}

