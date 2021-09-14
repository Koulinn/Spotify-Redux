import React from 'react'

function CommentCardBottomStats() {
    return (
        <div className="commentCardBottomStats-Wrapper d-flex align-items-center">
            <div className="like-Wrapper d-flex align-items-center">
                <div className="like-Icon-Wrapper">
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-heart-fill" viewBox="0 0 16 16">
                        <path fillRule="evenodd" d="M8 1.314C12.438-3.248 23.534 4.735 8 15-7.534 4.736 3.562-3.248 8 1.314z" />
                    </svg>
                </div>
                <div className="like-amount-Wrapper">
                    <span>
                        5
                    </span>
                </div>
            </div>
            <div className="like-answer-inlink-btn-Wrapper">
                <span className="like-answer-inlink-btn">
                    Answer
                </span>
            </div>


        </div>
    )
}

export default CommentCardBottomStats
