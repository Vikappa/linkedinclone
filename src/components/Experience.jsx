import { useEffect, useState } from "react";
import { useSelector } from "react-redux";

const Experience = () => {

  const storeEsperienze = useSelector(state => state.experience.experiences[0])

  const [arrayEsperienze, setArrayEsperienze] = useState([])

  useEffect(() => {
    setArrayEsperienze(storeEsperienze)

console.log(arrayEsperienze)
  }, [storeEsperienze])
  


  return (
<></>
  )

}

export default Experience;
