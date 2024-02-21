import { useEffect, useState } from "react"
import { useSelector } from "react-redux"

function formatDate(date) {
    const d = new Date(date),
      day = "" + d.getDate(),
      month = "" + (d.getMonth() + 1),
      year = d.getFullYear();

    return [year, month.padStart(2, "0"), day.padStart(2, "0")].join(" ");
  }

function AllUserPosts(){

    const interoStore = useSelector(state => state.arrayAllPosts.arrayPosts)

    useEffect(() => {
        console.log(interoStore.slice(-25))
    }, [])

    return(
        <div>
            {interoStore.slice(-25).map((post, index) => (
                <div key={index} style={{border:"1px solid lightgrey"}} className="d-flex flex-column bg-white rounded rounded-2 m-1 my-2 p-2">
<div className="d-flex align-items-center">
<img src={post.user.image} style={{}} className="m-2" height={"40px"} alt="Post Author Img"/>
<div className="d-flex align-items-baseline gap-1">                    
                    <h6>{post.user.name}</h6>
                    <p style={{fontSize:"0.65rem", color:"grey"}} className="p-0">    alle   {formatDate(post.createdAt)}</p>
                    </div>
</div>

                    <p>{post.text}</p>
                </div> 
            ))}
        </div>
    )
}

export default AllUserPosts
