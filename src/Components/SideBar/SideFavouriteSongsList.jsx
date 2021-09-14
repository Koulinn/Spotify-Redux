import React from 'react'

function SideFavouriteSongsList() {
    return (
        <div id="savedAlbums" className="d-flex flex-column justify-content-between h-100">
        <div className="d-flex position-relative flex-column">
          <div id="scrolling-menu" className="d-flex flex-column">
            <div className="scroll">
              <ul className="p-0">
                <li className="d-flex align-items-center justify-content-between pl-4">
                  Music
                  <span className="scrolling-svg">
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
                      <path
                        d="M10.119 16.064c2.293-.53 4.427-.994 3.394-2.946-3.147-5.941-.835-9.118 2.488-9.118 3.388 0 5.643 3.299 2.488 9.119-1.065 1.964 1.149 2.427 3.393 2.946 1.985.458 2.118 1.428 2.118 3.107l-.003.828h-1.329c0-2.089.083-2.367-1.226-2.669-1.901-.438-3.695-.852-4.351-2.304-.239-.53-.395-1.402.226-2.543 1.372-2.532 1.719-4.726.949-6.017-.902-1.517-3.617-1.509-4.512-.022-.768 1.273-.426 3.479.936 6.05.607 1.146.447 2.016.206 2.543-.66 1.445-2.472 1.863-4.39 2.305-1.252.29-1.172.588-1.172 2.657h-1.331c0-2.196-.176-3.406 2.116-3.936zm-10.117 3.936h1.329c0-1.918-.186-1.385 1.824-1.973 1.014-.295 1.91-.723 2.316-1.612.212-.463.355-1.22-.162-2.197-.952-1.798-1.219-3.374-.712-4.215.547-.909 2.27-.908 2.819.015.935 1.567-.793 3.982-1.02 4.982h1.396c.44-1 1.206-2.208 1.206-3.9 0-2.01-1.312-3.1-2.998-3.1-2.493 0-4.227 2.383-1.866 6.839.774 1.464-.826 1.812-2.545 2.209-1.49.345-1.589 1.072-1.589 2.334l.002.618z" />
                    </svg>
                  </span>
                </li>
              </ul>
            </div>

          </div>
        </div>
        <div id="download-app" className="d-flex align-items-center py-2 px-4">
          <div className="icon">
            <svg role="img" height="24" width="24" viewBox="0 0 24 24">
              <path d="M11.5 0C5.149 0 0 5.148 0 11.5 0 17.851 5.149 23 11.5 23S23 17.851 23 
              11.5C23 5.148 17.851 0 11.5 0zm0 22C5.71 22 1 17.29 1 11.5S5.71 1 11.5 1
              22 5.71 22 11.5 17.29 22 11.5 22zm.499-6.842V5h-1v10.149l-3.418-3.975-.758.652
                4.678 5.44 4.694-5.439-.757-.653-3.439 3.984z">
              </path>
            </svg>
          </div>
          <div className="pl-2">
            <span>Install App</span>
          </div>
        </div>
      </div>
    )
}

export default SideFavouriteSongsList
