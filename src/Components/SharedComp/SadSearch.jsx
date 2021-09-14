import React from 'react'

function SadSearch() {
    return (
        <div className="d-flex align-items-center ml-2 py-3">
           <div>
                <svg xmlns="http://www.w3.org/2000/svg" width="64" height="64" viewBox="0 0 404 404" fill="none">
                    <path d="M185.167 319.833C259.541 319.833 319.833 259.541 319.833 185.167C319.833 110.792 259.541 50.5 185.167 50.5C110.792 50.5 50.5 110.792 50.5 185.167C50.5 259.541 110.792 319.833 185.167 319.833Z" stroke="white" stroke-width="20" stroke-linecap="round" stroke-linejoin="round" />
                    <path d="M353.5 353.5L280.275 280.275" stroke="white" strokeWidth="20" strokeLinecap="round" strokeLinejoin="round" />
                    <circle cx="137" cy="152" r="20" fill="#C4C4C4" />
                    <circle cx="233" cy="152" r="20" fill="#C4C4C4" />
                    <path d="M112 122C112 122 126.789 112 137.5 112C148.211 112 163 122 163 122" stroke="#C4C4C4" strokeWidth="6" />
                    <path d="M208 122C208 122 222.789 112 233.5 112C244.211 112 259 122 259 122" stroke="#C4C4C4" strokeWidth="6" />
                    <path d="M106 239.5C106 239.5 150.657 209 183 209C215.343 209 260 239.5 260 239.5" stroke="#C4C4C4" strokeWidth="11" />
                    <path d="M112 122C112 122 126.789 112 137.5 112C148.211 112 163 122 163 122" stroke="#C4C4C4" strokeWidth="6" />
                </svg>
           </div>
           <p className="ml-2 mb-0 align-self-center text-light">Sorry :( we didn't find anything</p>

        </div>
    )
}

export default SadSearch
