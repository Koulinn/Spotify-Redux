import React from 'react'
import {withRouter} from 'react-router-dom'
import { useState, useEffect } from 'react'
import TrackMusic from './SharedComp/TrackMusic'
import useScrollPosition from '@react-hook/window-scroll'

function TrackHeader(props) {
    const [trackList, setTrackList] = useState([])
    const [currentAlbum, setAlbum] = useState([])
    const scrollY = useScrollPosition(60)

useEffect(()=>getDataFromAPI() ,[props.currentAlbumID])
    const getDataFromAPI = async () => {
        try {
            let response = await fetch(`https://deezerdevs-deezer.p.rapidapi.com/album/` + props.currentAlbumID, {
                method:'GET',
                headers: {
                    "x-rapidapi-key": "7936e2646fmsheda4961f0b64102p1feadcjsn42edaa043d62",
                    "x-rapidapi-host": "deezerdevs-deezer.p.rapidapi.com",
                }
            })
            if(response.ok){
                let dataRequested = await response.json()
                setAlbum(dataRequested)
                setTrackList(dataRequested.tracks.data)         
            }
        } catch (e) {
            return e
        }
    }



    return (
        <section id="trackTable" className="row d-flex flex-column mx-0  mt-3 py-0 mb-5">
                <div className="container-fluid p-0 m-0">
                    <div id="tableHeader"  className={scrollY < 550 ?"row justify-content-between p-0 px-4 m-0" : "row justify-content-between p-0 px-4 m-0 gradientBG" }>
                        <div className="trackNumber d-flex justify-content-center align-items-center"><span>#
                        </span></div>
                        <div className="col-md-5 col-8 trackName d-flex align-items-center"><span>TITLE</span></div>
                        <div className="col trackAlbum d-none d-md-flex justify-content-center align-items-center">
                            <span>ALBUM</span>
                        </div>
                        <div className="col trackDateAdded d-none d-lg-flex justify-content-center align-items-center">
                            <span>Rank</span>
                        </div>
                        <div className="col trackDuration d-flex justify-content-center align-items-center">
                            <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                                <path d="M7.999 3H6.999V7V8H7.999H9.999V7H7.999V3ZM7.5 0C3.358 0 0 3.358 0 7.5C0 11.642 3.358 15 7.5 15C11.642 15 15 11.642 15 7.5C15 3.358 11.642 0 7.5 0ZM7.5 14C3.916 14 1 11.084 1 7.5C1 3.916 3.916 1 7.5 1C11.084 1 14 3.916 14 7.5C14 11.084 11.084 14 7.5 14Z" fill="currentColor"></path>
                            </svg>
                        </div>
                    </div>
                    
                    {trackList.map( (track, i ) => <TrackMusic key={i} index={i} track={track} album={currentAlbum}></TrackMusic>)}
               
                </div>
            </section>
    )
}

export default withRouter(TrackHeader)
