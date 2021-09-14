import React from 'react'

function TrackMusic(props) {
    // console.log(props)
    return (
        <div className="row justify-content-between p-0 py-3 px-4 m-0 trackStats">
            <div className="trackNumber d-flex justify-content-center align-items-center">
                <span className=" d-flex align-items-center justify-content-center modTranslate">{props.index + 1}</span>
            </div>
            <div className="col-md-5 col-8 trackName d-flex align-items-center">
                <img src={props.album.cover_small} alt=""/>
                <div className="d-flex flex-column pl-3 tableMusicTitle ">
                    <p className="text-truncate m-0 p-0">{props.track.title}</p>
                    <span className="mod-font-size-small mod-text-colorFadedWhite m-0 p-0">{props.track.artist.name}</span>
                </div>
            </div>
            <div className="col trackAlbum d-none d-md-flex justify-content-center align-items-center mod-font-size-small mod-text-colorFadedWhite">
                {props.album.title}</div>
            <div className="col trackDateAdded d-none d-lg-flex justify-content-center align-items-center mod-font-size-small mod-text-colorFadedWhite">
                {props.track.rank}</div>
            <div className="col p-0 trackDuration d-flex justify-content-center align-items-center  mod-font-size-small mod-text-colorFadedWhite">
                <span>{((props.track.duration) / 60).toFixed() + ':' +(props.track.duration % 60) }</span>
            </div>
        </div>
    )
}

export default TrackMusic
