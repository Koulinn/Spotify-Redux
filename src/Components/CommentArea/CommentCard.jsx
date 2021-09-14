import React from 'react'
import CommentCardBottomStats from './CommentCardBottomStats'
import CommentCardTopMetaStats from './CommentCardTopMetaStats'
import CommentDisplayArea from './CommentDisplayArea'
import CommentMenuOpen from './CommentMenuOpen'


function CommentCard() {
    return (
        <div className="card-Wrapper d-flex flex-column position-relative">
            <CommentCardTopMetaStats></CommentCardTopMetaStats>
            <CommentDisplayArea></CommentDisplayArea>
            <CommentCardBottomStats></CommentCardBottomStats>
            <CommentMenuOpen></CommentMenuOpen>
            
        </div>
    )
}

export default CommentCard
