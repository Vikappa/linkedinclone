import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import AddPost from "./AddPost.jsx";
import { Button } from "react-bootstrap";
import { FaPen } from "react-icons/fa";
import { FaTrashAlt } from "react-icons/fa";
import DeletePost from "./DeletePost.jsx";
function formatDate(date) {
  const d = new Date(date),
    day = "" + d.getDate(),
    month = "" + (d.getMonth() + 1),
    year = d.getFullYear();

  return [year, month.padStart(2, "0"), day.padStart(2, "0")].join(" ");
}

function AllUserPosts() {
  const [showDeleteModalPost, setShowDeleteModalPost] = useState(false);
  const [deletePostId, setDeletePostId] = useState(null);
  const handleDeleteClick = (PostId) => {
    setDeletePostId(PostId);
    setShowDeleteModalPost(true);
  };
  const handleDeleteModalClosePost = () => {
    setShowDeleteModalPost(false);
  };

  const interoStore = useSelector((state) => state.arrayAllPosts.arrayPosts);
  const currentUser = useSelector((state) => state.currentUser.currentUser);

  const idPost = useSelector((state) => state.arrayAllPosts.arrayPosts._id);
  const idUser = useSelector((state) => state.currentUser.currentUser._id);
  console.log("mio id USER", idUser);
  useEffect(() => {
    console.log(interoStore.slice(-25));
  }, []);

  return (
    <div>
      {interoStore ? (
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
                {idUser && post.user._id === idUser && (
                  <div className="d-flex justify-content-end">
                    <Button
                      style={{ width: "40px", height: "40px" }}
                      variant="light"
                      // onClick={() => handleEditClick(esperienza)}
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
        "Caricamento"
      )}
    </div>
  );
}

export default AllUserPosts;
