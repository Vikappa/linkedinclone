/* eslint-disable react/prop-types */
import { useState, useEffect } from "react"
import { FETCH_ALL_POST_COMMENTS } from "../Redux/Actions/ADD_EXPERIENCE"
import { useDispatch } from "react-redux"



function CommentPostLi(props){
const dispatch = useDispatch()

    const [formattedDate, setFormattedDate] = useState(formatDate(props.comment.createdAt))

    useEffect(() => {
        const dateToFormat = props.comment.updatedAt ? props.comment.updatedAt : props.comment.createdAt
        setFormattedDate(formatDate(dateToFormat))
      }, [props.comment.createdAt, props.comment.updatedAt])
    

    
    function formatDate(date) {
        if (!date || isNaN(Date.parse(date))) {
            return "Carico data.."
        }
    
        const d = new Date(date),
            day = "" + d.getDate(),
            month = "" + (d.getMonth() + 1),
            year = d.getFullYear();
    
        return [year, month.padStart(2, "0"), day.padStart(2, "0")].join("-")
    }

    function handleEditComment(e){
        e.preventDefault()

        
    }

    function handleDeleteComment(e){
        e.preventDefault();
    
        const deleteComment = async function(){
            try {
                const response = await fetch(`https://striveschool-api.herokuapp.com/api/comments/` + props.comment._id, {
                    method: 'DELETE',
                    headers: {
                        'Content-Type': 'application/json',
                        Authorization: "Bearer " + sessionStorage.getItem("accessToken")
                    },
                })
    
                if (!response.ok) {
                    throw new Error('FALLITA FETCH DELETE');
                }
                console.log('COMMENTO CANCELLATO')
                const fetchAllPostComments = async function(){
                    try{
                      const result = await fetch(
                        `https://striveschool-api.herokuapp.com/api/comments/`,
                        {
                            headers: {
                                'Content-Type': 'application/json',
                                Authorization: "Bearer " + sessionStorage.getItem("accessToken")
                            },
                        }
                      )
                      if(!result.ok){
                        throw new Error("Errore GET COMMENTI")
                      }
                      const resultFetchCommentiPost = await result.json()
                      dispatch({
                        type: FETCH_ALL_POST_COMMENTS,
                        payload: resultFetchCommentiPost,
                      })
                    } catch (error) {
                      console.log(error)
                    }
                  }
                  fetchAllPostComments()
    
            } catch (error) {
                console.error('Error:', error);
            }
        }
    
        deleteComment()
    }
    

    return (
        <>
          {props.comment ? (
            <li className="d-flex align-items-center p-0 gap-1 m-1 liComment">
              <span className="commentDate p-0 m-0">
                {formattedDate}
              </span>
              <span className="commentAuthor">
                {props.comment.author}:
              </span>
              <span className="commentText">
                {props.comment.comment}
              </span>
    
              <i
              onClick={handleEditComment} 
              style={{ color: "grey", fontSize: "0.8rem" }} className="optionCommentIcon ms-auto bi bi-pencil me-1"></i>
              <i
              onClick={handleDeleteComment}
              style={{ color: "grey", fontSize: "0.8rem" }} className="optionCommentIcon bi bi-trash3 mx-1"></i>
            </li>
          ) : (
            ""
          )}
        </>
      );
    

}

export default CommentPostLi