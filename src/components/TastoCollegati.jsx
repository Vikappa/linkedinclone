/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import { useEffect, useState } from "react"
import { Button } from "react-bootstrap"
import { useDispatch, useSelector } from "react-redux"
import { AddToNetworkAction, trashThis } from "../Redux/Actions/ADD_TO_NETWORK"

const TastoCollegati = function(props) {
  const [userID, setUserID] = useState(props.user._id)
  const friendList = useSelector((state) => state.networking.users)
  const [siamoGiàAmici, settaSiamoGiàAmici] = useState(false)
  const dispatch = useDispatch()

  const addFriend = function(e){
    e.preventDefault()
    settaSiamoGiàAmici(true)
    dispatch(AddToNetworkAction(props.user))
  }

  const removeFriend = function(e){
    e.preventDefault()
    settaSiamoGiàAmici(false)
    dispatch(trashThis(props.user))
  }

  useEffect(() => {
    const verificaAmicizia = friendList.some(friend => friend._id === userID)
    settaSiamoGiàAmici(verificaAmicizia)
  }, [userID, friendList])

  return (
    <Button
      onClick={siamoGiàAmici ? removeFriend : addFriend}
      variant={siamoGiàAmici ? "secondary" : "outline-dark"}
      className="d-flex align-items-center justify-content-center rounded-pill tastoCollegatiDinamico"
      style={{ overflow: 'hidden' }}> 
      {siamoGiàAmici ? (
        <>
          <i style={{ color: "white" }} className="bi bi-person-dash-fill me-1"><span> Rimuovi</span></i>
        </>
      ) : (
        <>
          <i className="bi bi-person-plus-fill me-1 connetti-icon"></i>
          <span>Connetiti</span>
        </>
      )}
    </Button>
  )
  
}

export default TastoCollegati
