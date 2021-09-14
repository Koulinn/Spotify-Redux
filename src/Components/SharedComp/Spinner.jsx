import React from 'react'

function Spinner() {
    return (
        <svg xmlns="http://www.w3.org/2000/svg" xlink="http://www.w3.org/1999/xlink" style={{margin:"auto", background:"transparent", display:"block"}} width="48px" height="48px" viewBox="0 0 100 100" preserveAspectRatio="xMidYMid">
            <defs><mask id="ldio-62xw1wczvtx-mask"><circle cx="50" cy="50" r="45" fill="#282828"></circle></mask></defs>
            <circle cx="50" cy="50" r="45" fill="#282828"></circle>
            <path d="MNaN NaN ANaN NaN 0 0 1 NaN NaN LNaN NaN LNaN NaN Z" fill="#393939" mask="url(#ldio-62xw1wczvtx-mask)"></path>
            <circle cx="50" cy="50" r="30" stroke="#838687" strokeWidth="7" fill="none"></circle>
            <circle cx="50" cy="50" r="30" stroke="#f3f3f3" strokeWidth="6" strokeLinecap="round" fill="none">
                <animateTransform attributeName="transform" type="rotate" repeatCount="indefinite" dur="2.380952380952381s" keyTimes="0;0.5;1" values="0 50 50;180 50 50;720 50 50"></animateTransform>
                <animate attributeName="stroke-dasharray" repeatCount="indefinite" dur="2.380952380952381s" keyTimes="0;0.5;1" values="18.84955592153876 169.64600329384882;94.2477796076938 94.24777960769377;18.84955592153876 169.64600329384882"></animate>
            </circle>
        </svg>
    )
}

export default Spinner
