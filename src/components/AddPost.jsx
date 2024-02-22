import { useState } from "react"
import { useSelector, useDispatch } from "react-redux"
import { FETCH_ALL_POSTS } from "../Redux/Actions/ADD_EXPERIENCE"

const AddPost = function () {
    const dispatch = useDispatch()
    const currentUser = useSelector(state => state.currentUser.currentUser)
    const [postText, setPostText] = useState("")
    function handleChangeTextInput(e) {
        setPostText(e.target.value)
    }

    async function handleSubmit(e) {
        e.preventDefault();
        setPostText('')

        const postData = {
            text: postText,
        };
    
        try {
            const response = await fetch('https://striveschool-api.herokuapp.com/api/posts/', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                    'Authorization': "Bearer " + sessionStorage.getItem("accessToken")
                },
                body: JSON.stringify(postData),
            });

            if (!response.ok) {
                throw new Error("Errore nella fetch post")
            }

            const data = await response.json()
            console.log('Post inviato con successo:', data)

            await fetchAllPosts()
        } catch (error) {
            console.error('Errore invio del post:', error)
        }
    }
    
    async function fetchAllPosts() {
        try {
            const res = await fetch(
                `https://striveschool-api.herokuapp.com/api/posts`,
                {
                    headers: {
                        Authorization: `Bearer ${sessionStorage.getItem("accessToken")}`,
                    },
                }
            );
            if (!res.ok) {
                throw new Error("Errore nel fetch dei post")
            }
            const posts = await res.json();
            dispatch({
                type: FETCH_ALL_POSTS,
                payload: posts,
            });
        } catch (error) {
            console.log(error)
        }
    }

    return (
        <>
            {currentUser ? (
                <div className="d-flex bg-white rounded rounded-2 m-1 align-items-center p-3 pb-5 gap-2" style={{border:"1px solid lightgrey"}} >
                    <img src={currentUser.image} alt="User" height={"36px"}/>
                    <form style={{width:"100%"}} onSubmit={handleSubmit}>
                        <input
                            style={{width:"100%"}}
                            className="rounded-pill p-2"
                            type="text"
                            placeholder="Avvia una nuova conversazione"
                            value={postText}
                            onChange={handleChangeTextInput}
                        />
                    </form>
                </div>
            ) : ""}
        </>
    )
}

export default AddPost
