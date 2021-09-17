export const createPlayList = (payload)=>({
    type: 'CREATE_PLAYLIST',
    payload: payload
})

export const removeNewPlayListAlert = (payload)=>({
    type: 'IS_NOT_NEW_PLAYLIST',
})