/* eslint-disable react/prop-types */
const ProgressBarCompletamento=(props)=>{
    return(
    <div style={{backgroundColor:"lightgrey", maxWidth:"96%"}} className="p-0 m-0 mb-3 mx-2 rounded-pill d-flex align-items-center wrapperProgressBarCompletamento">
    <div className="p-0 m-0 rounded-pill" style={{backgroundColor:"#56687A", width:`${props.percentualeCompletamentoProfilo}%`, minHeight:"8px"}}> </div>
    </div>
    )
}

export default ProgressBarCompletamento
