export const setMusicToPlay = (payload)=>({
    type: 'SET_MUSIC_TO_PLAY',
    payload: payload
})

export const pauseMusic =(payload)=>({
    type: 'PAUSE_MUSIC',
    payload: payload
})

export const playMusic =(payload)=>({
    type: 'PLAY_MUSIC',
    payload: payload
})