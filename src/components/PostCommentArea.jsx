/* eslint-disable react/prop-types */
import { useEffect, useState } from "react"
import { useSelector } from "react-redux"
import { FETCH_ALL_POST_COMMENTS } from "../Redux/Actions/ADD_EXPERIENCE"
import { useDispatch } from "react-redux"

const PostCommentArea = function(props) {
    const [commentText, setCommentText] = useState("")
    const [postComments, setPostComments] = useState([])
    const interoStoreCommenti = useSelector(state => state.postCommentsArray.allComments)
    const dispatch = useDispatch()

    useEffect(() => {
        const filteredComments = interoStoreCommenti.filter(commento => commento.elementId === props.post._id)
        setPostComments(filteredComments)
    }, [interoStoreCommenti, props.post._id]) 

    function handleChangeTextInput(e) {
        setCommentText(e.target.value)
    }
    
    const fetchAllPostComments = async function(){
        try{
          const result = await fetch(
            `https://striveschool-api.herokuapp.com/api/comments/`,
            {
                headers: {
                    'Content-Type': 'application/json',
                    'Authorization': "Bearer " + sessionStorage.getItem("accessToken")
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

    async function handleSubmit(e) {
        e.preventDefault()
        const commentData = {
            comment: commentText,
            rate: 1,
            elementId: props.post._id
        }

        try {
            const response = await fetch('https://striveschool-api.herokuapp.com/api/comments/', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                    'Authorization': "Bearer " + sessionStorage.getItem("accessToken")
                },
                body: JSON.stringify(commentData),
            });

            if (!response.ok) {
                throw new Error("Errore nella fetch post")
            }

            const data = await response.json()
            console.log('Commento inviato con successo:', data)
            setPostComments(prevComments => [...prevComments, { ...commentData, _id: data._id }])
            setCommentText("")
            await fetchAllPostComments()
        } catch (error) {
            console.error('Errore invio del commento:', error)
        }
    }

    return (
        <>
            <div>
                <form style={{ width: "100%" }} onSubmit={handleSubmit}>
                    <input
                        style={{ width: "50%", fontSize: "0.7rem", border: "1px solid lightgrey" }}
                        className="rounded-pill p-0 px-2 m-1 mx-4"
                        type="text"
                        placeholder="Commenta.."
                        value={commentText}
                        onChange={handleChangeTextInput}
                    />
                </form>
            </div>
            <ul>
                {postComments.map((commento) => (
                    <li key={commento._id}><span>{commento.author}</span>: <span>{commento.comment}</span></li>
                ))}
            </ul>
        </>
    )
}

export default PostCommentArea
