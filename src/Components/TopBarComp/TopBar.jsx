import React from 'react'
import { useEffect, useState } from 'react'
import useScrollPosition from '@react-hook/window-scroll'
import Search from './Search'
import SearchInput from './SearchInput'
import {withRouter} from 'react-router'

function TopBar(props) {
    const scrollY = useScrollPosition(60)
    const [clicked, isClicked] = useState(false)


     
    return (
      <header id="topBar" className={scrollY < 120 ? 'row d-flex w-100 p-0 m-0 fixPosSticky' : 'row d-flex w-100 p-0 m-0 gradientBG fixPosSticky' }>
      <div className="col-12 p-4 m-0 d-flex justify-content-between align-items-center">
        <div id="topBarReturn" className="d-flex justify-content-between align-items-center">
          <button type="button">
            <div className="previousArrow">
              <svg role="img" focusable="false" height="22" width="22" viewBox="0 0 24 24"
                className="Svg-sc-1usfroi-0 kcaoHR _6fe5d5efc9b4a07d5c424071ac7cdacb-scss">
                <polyline points="16 4 7 12 16 20" fill="none" stroke="#181818"></polyline>
              </svg>
            </div>
          </button>
          {props.location.pathname === "/search" && <SearchInput setSearchValue={props.setSearchValue}></SearchInput>}
        </div>

        <div id="memberMenu" className="d-flex align-items-center">
          <button className="btn-upgrade mr-3"> Upgrade</button>
          <div className="dropdown ml-3 d-flex align-items-center" onClick={()=>isClicked(!clicked)}>
            <figure id="avatarIMG" className="m-0 mr-2">
              <img aria-hidden="false" height="28" draggable="false" loading="eager"
                src="https://platform-lookaside.fbsbx.com/platform/profilepic/?asid=416657282057430&amp;height=300&amp;width=300&amp;ext=1626675419&amp;hash=AeSvuPnz4PtFnG8QN7w"
                alt="Rafael Lima" />
            </figure>
            <button className="btn dropdown-toggle py-1" type="button" id="dropdownMenu2" data-toggle="dropdown"
              aria-haspopup="true" aria-expanded="false">
              Rafa
            </button>

            <div className={clicked ? "dropdown-menu dropdown-menu-left m-0 p-0 show" : "dropdown-menu dropdown-menu-left m-0 p-0"} aria-labelledby="dropdownMenu2">
              <button className="dropdown-item d-flex justify-content-between" type="button">
                Account
                <svg role="img" height="16" width="16" viewBox="0 0 16 16" className="ml-5 mr-2">
                  <path fillRule="evenodd"
                    d="M15 7V1H9v1h4.29L7.11 8.18l.71.71L14 2.71V7h1zM1 15h12V9h-1v5H2V4h5V3H1v12z"
                    clipRule="evenodd"></path>
                </svg>
              </button>
              <button className="dropdown-item" type="button">Profile</button>
              <button className="dropdown-item d-flex justify-content-between" type="button">
                Upgrade to Premium
                <svg role="img" height="16" width="16" viewBox="0 0 16 16" className="ml-5 mr-2">
                  <path fillRule="evenodd"
                    d="M15 7V1H9v1h4.29L7.11 8.18l.71.71L14 2.71V7h1zM1 15h12V9h-1v5H2V4h5V3H1v12z"
                    clipRule="evenodd"></path>
                </svg>
              </button>
              <button className="dropdown-item" type="button">Log out</button>

            </div>
          </div>
        </div>
      </div>
    </header>
  )
}

export default withRouter(TopBar)
