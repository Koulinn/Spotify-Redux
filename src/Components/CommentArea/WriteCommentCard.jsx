import React from 'react'
import WriteCommentArea from './WriteCommentArea'
import CommentCardTopMetaStats from './CommentCardTopMetaStats'
import PublishCommentBtn from './PublishCommentBtn'
import CommentMenuOpen from './CommentMenuOpen'

function WriteCommentCard() {
    return (
        <div className="card-Wrapper d-flex flex-column position-relative">
        <CommentCardTopMetaStats isTextArea={true}></CommentCardTopMetaStats>
        <WriteCommentArea></WriteCommentArea>
        <PublishCommentBtn></PublishCommentBtn>
        <CommentMenuOpen></CommentMenuOpen>
       
        
    </div>
    )
}

export default WriteCommentCard
