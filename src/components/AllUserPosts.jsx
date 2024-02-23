import { useState } from "react"
import { useSelector } from "react-redux"
import AddPost from "./AddPost.jsx"
import { Button, Spinner } from "react-bootstrap"
import { FaPen } from "react-icons/fa"
import { FaTrashAlt } from "react-icons/fa"
import DeletePost from "./DeletePost.jsx"
import PutPost from "./PutPost.jsx"
import { useDispatch } from "react-redux"
import { FETCH_ALL_POSTS } from "../Redux/Actions/ADD_EXPERIENCE.js"
import PostCommentArea from "./PostCommentArea.jsx"
import { Link } from "react-router-dom"

function formatDate(date) {
  const d = new Date(date),
    day = "" + d.getDate(),
    month = "" + (d.getMonth() + 1),
    year = d.getFullYear()

  return [year, month.padStart(2, "0"), day.padStart(2, "0")].join(" ")
}

function AllUserPosts() {
  const dispatch = useDispatch()
  const [showDeleteModalPost, setShowDeleteModalPost] = useState(false)
  const [deletePostId, setDeletePostId] = useState(null)
  const handleDeleteClick = (PostId) => {
    setDeletePostId(PostId)
    setShowDeleteModalPost(true)
  }
  const handleDeleteModalClosePost = () => {
    setShowDeleteModalPost(false)
  }

  const [postToEdit, setPostToEdit] = useState(null)
  const [visibilitàModaleEditPost, setVisibilitàModaleEditPost] =
    useState(false);
  const handleEditClickPost = (post) => {
    setPostToEdit(post);
    console.log("PUT DI POST ID", post._id);
    setVisibilitàModaleEditPost(true);
  };
  const interoStore = useSelector((state) => state.arrayAllPosts.arrayPosts)
  const currentUser = useSelector((state) => state.currentUser.currentUser)
  
  const handleChiudiEditPost = () => {
    const fetchPostEdit = async () => {
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
          throw new Error("Errore durante il recupero dei post");
        }

        const data = await res.json();

        dispatch({
          type: FETCH_ALL_POSTS,
          payload: data,
        });
      } catch (error) {
        console.log("Errore durante il recupero dei post", error);
      }
    };

    if (currentUser && currentUser._id) {
      fetchPostEdit();
    }
    setVisibilitàModaleEditPost(false);
  };

  return (
    <div>
      {interoStore && currentUser ? (
        <>
          <AddPost />
          {interoStore
            .slice(-25)
            .reverse()
            .map((post, index) => (
              <div
                key={index}
                style={{ border: "1px solid lightgrey" }}
                className="d-flex flex-column bg-white rounded rounded-2 m-1 my-2 p-2 sizePostDiv"
              >
                <div className="d-flex align-items-center">
                  <img
                    src={post.user.image}
                    className="m-2 border rounded-circle"
                    height={"48px"}
                    width={"48px"}
                    alt="Post Author Img"
                  />
                  <div className="d-flex flex-column justify-content-start">
                    <div className="d-flex align-items-baseline gap-1">
                      <Link to={`/profile/${post.user._id}`} style={{textDecoration:"none", color:"black"}}>
                      <h6 className="m-0">{post.user.name}</h6>
                      </Link>
                      <p
                        style={{ fontSize: "0.65rem", color: "grey" }}
                        className=" m-0 p-0"
                      >
                        alle {formatDate(post.createdAt)}
                      </p>
                    </div>
                    <div className="d-flex gap-1 align-item-center ">
                      <p style={{ fontSize: "0.7rem", color: "grey" }}>
                        {post.user.title} |
                      </p>
                      <p style={{ fontSize: "0.7rem", color: "grey" }}>
                        {" "}
                        {post.user.area}
                      </p>
                    </div>
                  </div>
                </div>
                <p style={{color:"black"}} className="p-2 px-4">{post.text}</p>
                <img
                  src={post.image}
                  alt=""
                  className="rounded postImg"
                  style={{ width: "35%" }}
                />
                <PostCommentArea post={post} />
                {currentUser._id && post.user._id === currentUser._id && (
                  <div className="d-flex justify-content-end">
  <Button
    style={{
      padding:"0",
      width: "30px", 
      height: "30px",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      transition: "transform 0.2s ease-in-out",
      borderRadius: "50%",
    }}
    variant="light"
    onMouseEnter={(e) => e.currentTarget.style.transform = "scale(1.1)"} 
    onMouseLeave={(e) => e.currentTarget.style.transform = "scale(1)"} 
    onClick={() => handleEditClickPost(post)}
    className="d-flex align-items-center justify-content-center me-1 shadow-sm"
  >
    <FaPen />
  </Button>
  <Button
    style={{
      padding:"0",
      width: "30px",
      height: "30px",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      transition: "transform 0.2s ease-in-out",
      borderRadius: "50%",
    }}
    variant="danger"
    onMouseEnter={(e) => e.currentTarget.style.transform = "scale(1.1)"} 
    onMouseLeave={(e) => e.currentTarget.style.transform = "scale(1)"} 
    onClick={() => handleDeleteClick(post._id)}
    className="d-flex align-items-center justify-content-center shadow-sm" 
  >
    <FaTrashAlt />
  </Button>
</div>

                )}
                {showDeleteModalPost && deletePostId === post._id && (
                  <DeletePost
                    postId={deletePostId}
                    onClose={handleDeleteModalClosePost}
                  />
                )}
              </div>
            ))}
        </>
      ) : (
        <Spinner variant="warning" animation="border" />
      )}
      {postToEdit ? (
        <PutPost
          post={postToEdit}
          visibilitàModaleEditPost={visibilitàModaleEditPost}
          setVisibilitàModaleEditPost={setVisibilitàModaleEditPost}
          onClose={handleChiudiEditPost}
        />
      ) : (
        ""
      )}
    </div>
  );
}

export default AllUserPosts;
