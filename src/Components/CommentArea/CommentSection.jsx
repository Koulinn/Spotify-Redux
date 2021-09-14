import React from 'react'
import CommentCard from './CommentCard'
import CommentSectionHeader from './CommentSectionHeader'
import CommentShowMoreInlineBtn from './CommentShowMoreInlineBtn'
import WriteCommentCard from './WriteCommentCard'


function CommentSection() {
    return (
        <div id="Comment-Section" className="d-flex flex-column justify-content-center">
            <CommentSectionHeader></CommentSectionHeader>
            <div className="position-relative">
                <div id="CommentAreaOverlay" className="position-absolute"></div>
                    <CommentCard></CommentCard>
                    <CommentShowMoreInlineBtn></CommentShowMoreInlineBtn>
                    <WriteCommentCard></WriteCommentCard>
            </div>
        </div>
    )
}

export default CommentSection
