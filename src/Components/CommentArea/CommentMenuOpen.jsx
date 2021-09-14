import React from 'react'

function CommentMenuOpen() {
    return (
        <div class="OpenMenu-Outter-Wrapper position-absolute">
            <div className="OpenMenu-InnerWrapper position-relative">
                <div className="MenuTriangle">
                    <svg xmlns="http://www.w3.org/2000/svg" width="22" height="21" viewBox="0 0 22 21" fill="none">
                        <g filter="url(#filter0_dd)">
                            <path d="M13 4L19.9282 16.16H6.0718L13 4Z" fill="#F9F9F9" />
                        </g>
                        <defs>
                            <filter id="filter0_dd" x="0.0703125" y="0" width="21.8564" height="20.16" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
                                <feFlood floodOpacity="0" result="BackgroundImageFix" />
                                <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" />
                                <feOffset dx="-2" dy="-1" />
                                <feGaussianBlur stdDeviation="1" />
                                <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.15 0" />
                                <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow" />
                                <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" />
                                <feOffset dx="-2" />
                                <feGaussianBlur stdDeviation="2" />
                                <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0" />
                                <feBlend mode="normal" in2="effect1_dropShadow" result="effect2_dropShadow" />
                                <feBlend mode="normal" in="SourceGraphic" in2="effect2_dropShadow" result="shape" />
                            </filter>
                        </defs>
                    </svg>
                </div>
                <div className="MenuOptions">
                    <ul>
                        <li><span>Delete comment</span></li>
                        <li><span>Edit comment</span></li>
                        <hr />
                        <li className="d-flex align-items-center justify-content-center">
                            <div className="menuClose-btn">
                                <span>
                                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" className="bi bi-x" viewBox="0 0 16 16">
                                        <path d="M4.646 4.646a.5.5 0 0 1 .708 0L8 7.293l2.646-2.647a.5.5 0 0 1 .708.708L8.707 8l2.647 2.646a.5.5 0 0 1-.708.708L8 8.707l-2.646 2.647a.5.5 0 0 1-.708-.708L7.293 8 4.646 5.354a.5.5 0 0 1 0-.708z" />
                                    </svg>
                                </span>
                                <span>Close</span>
                            </div>

                        </li>
                    </ul>
                </div>
            </div>

        </div>
    )
}

export default CommentMenuOpen
