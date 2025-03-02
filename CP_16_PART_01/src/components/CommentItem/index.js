import {formatDistanceToNow} from 'date-fns'
import './index.css'

const CommentItem = props => {
  const {commentDetails, toggleLike, deleteComment} = props
  const {id, name, comment, date, isLiked, initialClassName} = commentDetails

  const likeImgUrl = isLiked
    ? 'https://assets.ccbp.in/frontend/react-js/comments-app/liked-img.png'
    : 'https://assets.ccbp.in/frontend/react-js/comments-app/like-img.png'

  const likeBtnClassName = isLiked ? 'button liked' : 'button'

  const onClickLike = () => {
    toggleLike(id)
  }

  const onClickDelete = () => {
    deleteComment(id)
  }

  return (
    <li className={`comment-item ${initialClassName}`}>
      <div className="comment-header">
        <p className="initial">{name[0]}</p>
        <p className="name">{name}</p>
        <p className="date">{formatDistanceToNow(date)} ago</p>
      </div>
      <p className="comment">{comment}</p>
      <div className="comment-footer">
        <button
          type="button"
          className={likeBtnClassName}
          onClick={onClickLike}
        >
          <img src={likeImgUrl} alt="like" className="like-img" />
        </button>
        <button
          type="button"
          className="button delete-button"
          onClick={onClickDelete}
          data-testid="delete"
        >
          <img
            src="https://assets.ccbp.in/frontend/react-js/comments-app/delete-img.png"
            alt="delete"
          />
        </button>
      </div>
    </li>
  )
}

export default CommentItem
