import React from 'react'
import { withRouter } from 'react-router'
import { useState, useEffect } from 'react'





function AlbumCover(props) {
    const [currentAlbum, setCurrentAlbum] = useState(false)

    useEffect(()=>
        getDataFromAPI(props.currentAlbumID)
    ,[props.currentAlbumID])

    // useEffect(()=>
    //    {getDataFromAPI(props.currentAlbumID)
    //     // console.log(currentAlbum)
    // }
    // ,[])


    const getDataFromAPI = async (query) => {
        try {
            let response = await fetch(`https://striveschool-api.herokuapp.com/api/deezer/album/` + query)
            
            if(response.ok){
                let dataRequested = await response.json()
                setCurrentAlbum(dataRequested)
                console.log(dataRequested, 'inside dataRequested AlbumCover')
                props.getTrackList(dataRequested.tracklist)
            }
        } catch (e) {
            return e
        }
    }
    
    return (
        
        <section id="albumCover" className="row d-flex flex-column mt-3 py-0 px-4 m-0">
            {/* {console.log(currentAlbum, 'AlbumCover<<<<<<<<<<<<<<<<<<<<<<<<<<')} */}
            {currentAlbum ? (
               
            <div className=" col-12 jumbotron jumbotron-fluid bg-transparent p-0">
                <div className="container d-flex p-0 m-0">
                    <div className="d-inline-block album-img">
                        <img src={currentAlbum.cover_xl} alt=""/>
                                </div>
                        <div className="d-flex flex-column justify-content-end ml-4">
                           <div className="pb-3">
                                <span className="seeMore">{currentAlbum.genres.data.length !== 0 ? currentAlbum.genres.data[0].name : ''} </span>
                                <h1 className="m-0">{currentAlbum.title}</h1>
                           </div>
                            <div className="albumStats">
                                <p className="mb-2">{currentAlbum.artist.name}</p>
                                <div className="d-flex">
                                    <p className="mb-0">
                                        <span><a>Spotify</a></span>
                                        <span> .</span>
                                        <span> {currentAlbum.fans} fans</span>
                                        <span> .</span>
                                        <span> {currentAlbum.nb_tracks} songs</span>
                                        
                                        <span id="albumTotalDur"> {(currentAlbum.duration/60).toFixed()} min</span>
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            ) : <h2>Not found</h2>}
        </section>
    )
}

export default withRouter(AlbumCover)
