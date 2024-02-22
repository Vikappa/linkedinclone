/* eslint-disable react/prop-types */
import { useState, useEffect } from "react";



function CommentPostLi(props){
    const [formattedDate, setFormattedDate] = useState(formatDate(props.comment.createdAt));

    useEffect(() => {
        // Questo effetto viene eseguito ogni volta che `createdAt` o `updatedAt` cambiano.
        // Assicurati che la logica qui gestisca correttamente il caso in cui `updatedAt` potrebbe non essere definito.
        const dateToFormat = props.comment.updatedAt ? props.comment.updatedAt : props.comment.createdAt;
        setFormattedDate(formatDate(dateToFormat));
      }, [props.comment.createdAt, props.comment.updatedAt]); // Dipendenze dell'effetto
    

    const[commentObg, setCommentObg] = useState(props.comment) 
    
    function formatDate(date) {
        if (!date || isNaN(Date.parse(date))) {
            // Se la data non è valida, restituisce un placeholder o una stringa vuota
            return "Data non disponibile";
        }
    
        const d = new Date(date),
            day = "" + d.getDate(),
            month = "" + (d.getMonth() + 1),
            year = d.getFullYear();
    
        return [year, month.padStart(2, "0"), day.padStart(2, "0")].join("-");
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
    
              <i style={{ color: "grey", fontSize: "0.8rem" }} className="optionCommentIcon ms-auto bi bi-pencil me-1"></i>
              <i style={{ color: "grey", fontSize: "0.8rem" }} className="optionCommentIcon bi bi-trash3 mx-1"></i>
            </li>
          ) : (
            ""
          )}
        </>
      );
    

}

export default CommentPostLi