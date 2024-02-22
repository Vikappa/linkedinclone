import { useSelector } from "react-redux"
import AddPost from './AddPost.jsx'
import PostCommentArea from './PostCommentArea.jsx'

function formatDate(date) {
    const d = new Date(date),
      day = "" + d.getDate(),
      month = "" + (d.getMonth() + 1),
      year = d.getFullYear();

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
}

export default AllUserPosts