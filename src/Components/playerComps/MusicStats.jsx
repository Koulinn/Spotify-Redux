import React from 'react'

function MusicStats({currentMusic}) {
    return (
            <div className="footer-music-stats d-flex align-items-center">
                <div className="footer-album-cover">
                <img className="img-fluid" src={currentMusic ? currentMusic.album.cover_small :"https://i.scdn.co/image/ab67616d00004851b3994c94dfb241923664bb4d"} height="56" alt=""/>
                </div>
                <div className="footer-album-text">
                    <div className="footer-music-name pl-2">
                        <p className="m-0 text-truncate">
                        {currentMusic.title? currentMusic.title : 'Sweet Dreams (Are Made of This) - Remastered'}
                        </p>
                        <span className="mod-font-size-small text-truncate">
                        <a>{currentMusic ? currentMusic.artist.name :'Eurythmichs'}</a>
                        
                        </span>
                    </div>
                </div>

            <div className="footer-album-icons d-flex justify-content-end align-items-center ml-3">
                <div className="icon-target-area">
                    <svg role="img" height="16" width="16" viewBox="0 0 16 16">
                    <path d="M13.764 2.727a4.057 4.057 0 00-5.488-.253.558.558 0 01-.31.112.531.531 0 01-.311-.112 4.054 4.054 0 00-5.487.253A4.05 4.05 0 00.974 5.61c0 1.089.424 2.113 1.168 2.855l4.462 5.223a1.791 1.791 0 002.726 0l4.435-5.195A4.052 4.052 0 0014.96 5.61a4.057 4.057 0 00-1.196-2.883zm-.722 5.098L8.58 13.048c-.307.36-.921.36-1.228 0L2.864 7.797a3.072 3.072 0 01-.905-2.187c0-.826.321-1.603.905-2.187a3.091 3.091 0 012.191-.913 3.05 3.05 0 011.957.709c.041.036.408.351.954.351.531 0 .906-.31.94-.34a3.075 3.075 0 014.161.192 3.1 3.1 0 01-.025 4.403z">
                    </path>
                    </svg>
                </div>
                <div className="icon-target-area ml-2">
                    <svg width="16" height="16" xmlns="http://www.w3.org/2000/svg">
                    <g fill="currentColor" fillRule="evenodd">
                        <path d="M1 3v9h14V3H1zm0-1h14a1 1 0 0 1 1 1v10a1 1 0 0 1-1 1H1a1 1 0 0 1-1-1V3a1 1 0 0 1 1-1z" fillRule="nonzero"></path>
                        <path d="M10 8h4v3h-4z"></path>
                    </g>
                    </svg>
                </div>
            </div>
        </div>
    )
}

export default MusicStats
