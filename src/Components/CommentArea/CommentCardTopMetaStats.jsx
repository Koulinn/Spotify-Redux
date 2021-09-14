import React from 'react'
import CommentMenu from './CommentMenu'
function CommentCardTopMetaStats(props) {
    return (
        <div className="CommentCardTopMetaStats-Wrapper d-flex justify-content-between align-items-center">
            <div className="UserInfo-Wrapper d-flex justify-content-center align-items-center">
                <div className="Avatar-Wrapper">
                    <img src="https://i.pravatar.cc/64" alt=''></img>
    
                </div>
                <div className="Username-Wrapper">
                    <span>Martha</span>
                </div>
                {!props.isTextArea && <div className="PublishedDate-Wrapper">
                    <span>05/11/2021</span>
                </div>}
            </div>

            <div className="CardMenu-Wrapper">
                <CommentMenu></CommentMenu>

            </div>
            
        </div>
    )
}

export default CommentCardTopMetaStats
