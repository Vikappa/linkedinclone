import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import AddPost from "./AddPost.jsx";
import { Button, Spinner } from "react-bootstrap";
import { FaPen } from "react-icons/fa";
import { FaTrashAlt } from "react-icons/fa";
import DeletePost from "./DeletePost.jsx";
import PutPost from "./PutPost.jsx";
import { useDispatch } from "react-redux";
import { FETCH_ALL_POSTS } from "../Redux/Actions/ADD_EXPERIENCE.js";
import PostCommentArea from "./PostCommentArea.jsx";

function formatDate(date) {
  const d = new Date(date),
    day = "" + d.getDate(),
    month = "" + (d.getMonth() + 1),
    year = d.getFullYear();

<<<<<<< HEAD
    return [year, month.padStart(2, "0"), day.padStart(2, "0")].join(" ");
  }

function AllUserPosts(){

    const interoStoreDeiPost = useSelector(state => state.arrayAllPosts.arrayPosts)


    return(
        <div>
            {interoStoreDeiPost ? (
                <>
                    <AddPost/>
                    {interoStoreDeiPost.slice(-50).reverse().map((post, index) => (
                        <div key={index} style={{border:"1px solid lightgrey"}} className="d-flex flex-column bg-white rounded rounded-2 m-1 my-2 p-2 sizePostDiv">
                            <div className="d-flex align-items-center">
                                <img src={post.user.image} className="m-2" height={"40px"} alt="Post Author Img"/>
                                <div className="d-flex flex-column justify-content-start">
                                    <div className="d-flex align-items-baseline gap-1">                    
                                        <h6 className="m-0">{post.user.name}</h6>
                                        <p style={{fontSize:"0.65rem", color:"grey"}} className=" m-0 p-0">alle {formatDate(post.createdAt)}</p>
                                    </div>
                                    <div className="d-flex gap-1 align-item-center ">
                                        <p style={{fontSize:"0.7rem", color:"grey"}}>{post.user.title} |</p>
                                        <p style={{fontSize:"0.7rem", color:"grey"}}> {post.user.area}</p>
                                    </div>
                                </div>
                            </div>
                            <p className="p-2 px-4" style={{color:"black"}}>{post.text}</p>
                            <PostCommentArea post={post}/>
                        </div>
                    ))}
                </>
            ) : "Caricamento"}
        </div>
    )
=======
  return [year, month.padStart(2, "0"), day.padStart(2, "0")].join(" ");
>>>>>>> 8454bad2406d33d143a7e9f8947743dbdf03c531
}

function AllUserPosts() {
  const dispatch = useDispatch();
  const [showDeleteModalPost, setShowDeleteModalPost] = useState(false);
  const [deletePostId, setDeletePostId] = useState(null);
  ///
  const handleDeleteClick = (PostId) => {
    setDeletePostId(PostId);
    setShowDeleteModalPost(true);
  };
  const handleDeleteModalClosePost = () => {
    setShowDeleteModalPost(false);
  };

  ///
  const [postToEdit, setPostToEdit] = useState(null);
  const [visibilitàModaleEditPost, setVisibilitàModaleEditPost] =
    useState(false);
  const handleEditClickPost = (post) => {
    // setEditExperience(experience)
    setPostToEdit(post);
    console.log("PUT DI POST ID", post._id);
    setVisibilitàModaleEditPost(true);
  };
  ///
  const interoStore = useSelector((state) => state.arrayAllPosts.arrayPosts);
  const currentUser = useSelector((state) => state.currentUser.currentUser);

  const idPost = useSelector((state) => state.arrayAllPosts.arrayPosts._id);

  // console.log("mio id USER", currentUser._id);
  useEffect(() => {
    console.log(interoStore.slice(-25));
  }, []);

  ///

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
                      <h6 className="m-0">{post.user.name}</h6>
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
                <p className="p-2 px-4">{post.text}</p>
                <img
                  src={post.image}
                  alt=""
                  className="border rounded"
                  style={{ width: "35%" }}
                />{" "}
                <PostCommentArea post={post} />
                {currentUser._id && post.user._id === currentUser._id && (
                  <div className="d-flex justify-content-end">
                    <Button
                      style={{ width: "40px", height: "40px" }}
                      variant="light"
                      onClick={() => handleEditClickPost(post)}
                      className="d-flex align-items-center me-1"
                    >
                      <FaPen />
                    </Button>
                    <Button
                      style={{ width: "40px", height: "40px" }}
                      variant="danger"
                      onClick={() => handleDeleteClick(post._id)}
                      className="d-flex align-items-center"
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
