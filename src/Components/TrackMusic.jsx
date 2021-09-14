import React from 'react'

function TrackMusic() {
    return (
        <div class="row justify-content-between p-0 py-3 px-4 m-0 trackStats">
            <div class="trackNumber d-flex justify-content-center align-items-center">
                <span class=" d-flex align-items-center justify-content-center modTranslate">1</span>
            </div>
            <div class="col-md-5 col-8 trackName d-flex align-items-center">
                <img src="https://cdns-images.dzcdn.net/images/cover/cf7e11f061d3354af9339e9a7a86d1f1/250x250-000000-80-0-0.jpg" alt=""/>
                <div class="d-flex flex-column pl-3 tableMusicTitle ">
                    <p class="text-truncate m-0 p-0">Bingo</p>
                    <span class="mod-font-size-small mod-text-colorFadedWhite m-0 p-0">Myd</span>
                </div>
            </div>
            <div class="col trackAlbum d-none d-md-flex justify-content-center align-items-center mod-font-size-small mod-text-colorFadedWhite">
                All Inclusive</div>
            <div class="col trackDateAdded d-none d-lg-flex justify-content-center align-items-center mod-font-size-small mod-text-colorFadedWhite">
                433757</div>
            <div class="col p-0 trackDuration d-flex justify-content-center align-items-center  mod-font-size-small mod-text-colorFadedWhite">
                <span>223</span>
            </div>
        </div>
    )
}

export default TrackMusic
