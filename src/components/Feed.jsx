import { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import { Link, useParams } from "react-router-dom";
import PostCommentArea from "./PostCommentArea.jsx"

function formatDate(date) {
    const d = new Date(date),
      day = "" + d.getDate(),
      month = "" + (d.getMonth() + 1),
      year = d.getFullYear()
  
    return [year, month.padStart(2, "0"), day.padStart(2, "0")].join(" ")
  }

const Feed = function(){

    const { userId } = useParams()
    const interoStore = useSelector((state) => state.arrayAllPosts.arrayPosts)
    const [arrayFocusedUser, setArrayFocusedUser] = useState([])
    const [arrayCurrentUser, setArrayCurrentUser] = useState([])
    const idCurrentUser = useSelector((state) => state.currentUser.currentUser._id)

    useEffect(() => {
        if (userId && interoStore) {
            const filteredPosts = interoStore.filter(obj => obj.user._id === userId)
            setArrayFocusedUser(filteredPosts);
        }
    }, [userId, interoStore])

    useEffect(() => {
        if (idCurrentUser && interoStore) {
            const userPosts = interoStore.filter(obj => obj.user._id === idCurrentUser)
            setArrayCurrentUser(userPosts)
        }
    }, [idCurrentUser, interoStore])



    return (
        <div className="bg-white rounded-2 my-2 p-2" style={{border:"1px solid lightgrey"}}>
            <h3 className="p-2">Feed:</h3>
          {arrayFocusedUser && userId ? (
            <>
              {arrayFocusedUser.reverse()
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
                  </div>
                ))}
            </>
          ) : (

            arrayCurrentUser.reverse()
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
                            {post.user.area}
                          </p>
                        </div>
                      </div>
                    </div>
                    <p  style={{color:"black"}} className="p-2 px-4">{post.text}</p>
                    <img
                      src={post.image}
                      alt=""
                      className="rounded postImg"
                      style={{ width: "35%" }}
                    />
                    <PostCommentArea post={post}/>
                  </div>
                ))

          )}

        </div>
      );
}

export default Feed