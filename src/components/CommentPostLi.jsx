/* eslint-disable react/prop-types */
import { useState } from "react"

function formatDate(date) {
    const d = new Date(date),
      day = "" + d.getDate(),
      month = "" + (d.getMonth() + 1),
      year = d.getFullYear();

    return [year, month.padStart(2, "0"), day.padStart(2, "0")].join(" ");
  }
function CommentPostLi(props){

    const[commentObg, setCommentObg] = useState(props.comment) 

return(
    <li className="d-flex align-items-center p-0 gap-1 m-1 liComment">
        <span className="commentDate p-0 m-0">
        {formatDate(commentObg.updatedAt?commentObg.updatedAt:commentObg.createdAt)}
        </span>
        <span className="commentAuthor">
            {commentObg.author}: 
        </span>
<span className="commentText">
{commentObg.comment} 
</span>

        <i style={{color:"grey", fontSize:"0.8rem"}} className="optionCommentIcon ms-auto bi bi-pencil me-1"></i>
        <i style={{color:"grey", fontSize:"0.8rem"}} className="optionCommentIcon bi bi-trash3 mx-1"></i>
    </li>
)

}

export default CommentPostLi