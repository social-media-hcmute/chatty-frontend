import React from 'react'
import PropTypes from 'prop-types'
import ReactionsAndCommentsDisplay from '@components/posts/reactions/reactions-and-comments-display/ReactionsAndCommentsDisplay';
import CommentArea from '../comment-area/CommentArea';

const PostCommentSection = ({post}) => {
  return (
    <div data-testid="comment-section">
        <ReactionsAndCommentsDisplay post={post} />
        <CommentArea post={post} />
    </div>
  )
}

PostCommentSection.propTypes = {
    post: PropTypes.object
}

export default PostCommentSection