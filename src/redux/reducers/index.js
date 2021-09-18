const playerState = {
    player: {
        current: 'musicCurrent.mp3',
        paused: true,
        playlist: [],
    }

}

export const playerReducer = ( state = playerState, action) =>{
    switch (action.type){
        case 'SET_MUSIC_TO_PLAY':
            console.log('Inside SET_MUSIC_TO_PLAY')
            return {
                ...state,
                player:{
                    ...state.player,
                    current: action.payload,
                    paused: false
                }
            }
        default : {
            console.log('inside default mainReducer')
            return state
        }

    }
}

