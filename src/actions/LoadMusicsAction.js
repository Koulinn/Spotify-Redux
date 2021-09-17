
export const fillMusicsAction = (query)=>{
    return async(dispatch,getState)=>{
        try {
            let response = await fetch(`${process.env.REACT_APP_DEEZER_ENDPOINT_SEARCH}?q=${query}`,{
                "method": "GET",
                "headers": {
                    "x-rapidapi-host": `${process.env.REACT_APP_DEEZER_HOST}`,
                    "x-rapidapi-key": `${process.env.REACT_APP_DEEZER_KEY}`
                }
            })
            if(response.ok){
                let data = await response.json()
                console.log('fetch response',data)
                
                    dispatch({
                        type: 'FILL_MUSICS',
                        payload: {musics:data.data.slice(0, 7),sectionName:query}
                         })
                    dispatch({
                        type: 'FILL_MUSICS_LOADING',
                        payload: false,
                         })
                    dispatch({
                    type: 'FILL_MUSIC_ERROR',
                    payload: false,
                    })
                    
            }else{
                    console.log('error: something went wrong during fetching')
                    dispatch({
                        type: 'FILL_MUSICS_LOADING',
                        payload: false,
                        })
                    dispatch({
                    type: 'FILL_MUSIC_ERROR',
                    payload:true,
                    })
                }
        } catch (error) {
                    console.log(error)
                    dispatch({
                        type: 'FILL_MUSICS_LOADING',
                        payload: false,
                        })
                    dispatch({
                    type: 'FILL_MUSIC_ERROR',
                    payload: true,
                    })
                }
    }
}