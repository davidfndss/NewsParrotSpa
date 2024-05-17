import { CommentStyled } from "./CommentStyled.jsx"
import { useContext } from "react"
import { UserContext } from "../../Context/UserContext.jsx"

function Comment( props ) {
  // Get the info of the logged user
  const { loggedUserInfo } = useContext(UserContext)
  // Get the info of the author of the comment
  const user = JSON.parse(props.user)

  const deleteComment = () => {
    props.deleteComment(props.commentId); // Pass commentId to deleteComment function in News component from ReadNews.jsx
  };
  
  return (
    <CommentStyled>
      <img src={user.avatar}></img>
      <div>
        <h4>{user.name} <span>- @{user.username}</span></h4>
        <p>{props.comment}</p>
      </div>
      {/* Only render the delete button if the logged user is the author of the comment */}
      { user.id == loggedUserInfo.id ? <button className="deleteCommentBtn" onClick={deleteComment}>
        <i className="bi bi-trash-fill"></i>
      </button> : null }
    </CommentStyled>
  )
}

export { Comment }