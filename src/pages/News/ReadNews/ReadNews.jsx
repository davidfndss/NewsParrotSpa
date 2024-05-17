import { Main, AuthorInfo, NewsInfo, NewsFooter, CommentsSection, AddCommentArticle } from "./ReadNewsStyled.jsx"
import { useParams, useNavigate } from "react-router-dom" 
import { getNewsByIdService } from "../../../services/newsServices.js"
import { useState, useEffect, useContext } from "react"
import { UserContext } from "../../../Context/UserContext.jsx"
import { LoadingSection } from "../../../components/LoadingSection/LoadingSection.jsx"
import { likeNewsService, addCommentService, deleteCommentService } from "../../../services/newsServices.js"
import { useForm } from "react-hook-form"
import { Comment } from "../../../components/Comment/Comment.jsx"
import { Dropdown } from "../../../components/Dropdown/Dropdown.jsx"
import { Img } from "../../../components/Img/Img.jsx"

const News = () => {
  const { loggedUserInfo } = useContext(UserContext)
  const { id } = useParams()
  const navigate = useNavigate()
  const [ news, setNews ] = useState()
  const [ commentsList, setCommentsList ] = useState()
  const [ likedPost, setLikedPost ] = useState()
  const [ loading, setLoading ] = useState(false)
  const [ numberOfLikes, setNumberOfLikes ] = useState()
  const { register, handleSubmit, formState: {errors} } = useForm()

  const checkLike = (array) => {
    const foundLikeOnPost = array.find(obj => loggedUserInfo.username === obj.username)
    if ( !foundLikeOnPost ) {
      return setLikedPost(false)
    }
    return setLikedPost(true)
  }

  const getNewsById = async () => {
    try {
      const response = await getNewsByIdService(id)
      setNews(response.data.news)
      setCommentsList(response.data.news.comments)
      checkLike(response.data.news.likes)
      setNumberOfLikes(response.data.news.likes.length)
    } catch (err) {
      console.error(err.message)
    } finally {
      setLoading(false)
    }
  }
  

  useEffect( () => {
    // Verify if the user is logged before the API requests
    if (loggedUserInfo.username) {
      setLoading(true)
      getNewsById()
    } else {
      // If the user isnt logged, send him to the sign-in page
      navigate("/signin")
    }
  }, []) 

  const updateNews = () => {
    navigate(`/news/update/${news._id}`)
  }
  
  const deleteNews = () => {
    navigate(`/news/delete/${news._id}`)
  }

  const likeNews = async () => {
    try {
      await likeNewsService(news._id)
    } catch (err) {
      console.error(err.message)
    } 
  }

  // Add a comment
  const addComment = async (data) => {
    const id = news._id
    try {
      await addCommentService(data, id)
      await getNewsById()
    } catch (err) {
      console.error(err.message)
    } 
    setTimeout(() => {window.scrollTo(0, document.body.scrollHeight)}, 100)
  }

  // Delete a comment
  const deleteComment = async (commentId) => {
    try {
      // Call deleteCommentService
      await deleteCommentService(news._id, commentId);
      // Filter out the deleted comment from commentsList
      const updatedCommentsList = commentsList.filter(comment => comment.commentId !== commentId);
      // Update the state with the updated commentsList
      setCommentsList(updatedCommentsList);
    } catch (err) {
      console.error(err.message);
    }
  };

  if(loading) {
    return ( 
      <LoadingSection>
        <l-ring-2
        size="35"
        stroke="5"
        stroke-length="0.25"
        bg-opacity="0.1"
        speed="0.8"
        color="black" 
        ></l-ring-2> 
      </LoadingSection>
    )
  } else {
    if(news) {
      return (
        <Main>
          { 
            loggedUserInfo.id == news.user._id && 
              <Dropdown updateBtnEvent={updateNews} deleteBtnOn="true" deleteBtnEvent={deleteNews} />
          }
          
          <h1>{news.title}</h1>
          <Img id="banner" src={news.banner}></Img>
          <p>{news.text}</p>
              
          <NewsFooter>
            <AuthorInfo>
              <Img src={news.user.avatar}></Img>
              <div>
                <span>Autor: <strong>{news.user.name}</strong></span>
                <span>@{news.user.username}</span>
              </div>
            </AuthorInfo>
            <NewsInfo>
              <span>Notícia enviada em: {news.date.slice(0, 10)}</span>
              <button id="likes" onClick={() => {
                likeNews()
                if (likedPost === true) {
                  setNumberOfLikes(prevValue => prevValue - 1)
                } else {
                  setNumberOfLikes(prevValue => prevValue + 1)
                }
                setLikedPost(!likedPost)
              }}> 
                  {
                    likedPost 
                    ? <span id="likes">
                        {numberOfLikes} <i className="bi bi-heart-fill"></i>
                      </span> 
                    : <span id="likes">
                        {numberOfLikes} <i className="bi bi-heart"></i>
                      </span> 
                  }
              </button>

            </NewsInfo>
          </NewsFooter>
          <CommentsSection>
            <span id="numberOfComments">{news.comments.length} Comentários</span>
            <AddCommentArticle>
              <Img id="userAvatar" src={loggedUserInfo.avatar}></Img>
              <form onSubmit={handleSubmit(addComment)}>
                <input {...register("comment")} placeholder="Participe da discussão..." id="addCommentInput"></input>
                <button type="submit"><i className="bi bi-chat-dots-fill"></i></button>
              </form>
            </AddCommentArticle>
            {
              commentsList.map((comment) => {
                return <Comment key={comment.commentId} commentId={comment.commentId} comment={comment.comment} user={comment.user} newsId={news._id} deleteComment={deleteComment} />
              })
            }
          </CommentsSection>
        </Main>
      )
    } 
  }
}

export { News }