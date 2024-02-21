import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import React from 'react'
import ModaleAggiungiEsperienza from "./ModaleAggiungiEsperienza";


function formatISODate(isoString) {
  const date = new Date(isoString);
  const day = date.getDate().toString().padStart(2, '0');
  const month = (date.getMonth() + 1).toString().padStart(2, '0')
  const year = date.getFullYear();
  return `${day} ${month} ${year}`; 
}

const Experience = () => {

  const storeEsperienze = useSelector(state => state.experience.experiences)
  const [esperienze, setEsperienze] = useState(storeEsperienze)
  const [visibilitàModaleAddEsperienza, setVisibilitàModaleAddEsperienza] = useState(false)

  const handleAddEsperienza = (e) => {
    e.preventDefault();
    console.log("show");
    setVisibilitàModaleAddEsperienza(true);
  };
  
  const handleChiudiAddEsperienza = () => {
    setVisibilitàModaleAddEsperienza(false);
  };
  


  return (
    <>
<div style={{border:"1px solid #D2D2D2"}} className="container border-1 rounded-3 d-flex flex-column bg-white my-2 p-3">
  <div className="d-flex align-items-center justify-content-between">
    <h5 className="p-1">Esperienza</h5>
    <i className="bi bi-plus-circle" style={{fontSize:"2rem"}}
    onClick={handleAddEsperienza}
    ></i>
  </div>
  {esperienze.map((esperienza,index) => (
    <div key={index} className="d-flex align-items-center ">
<div className="d-flex justify-content-start align-items-center jobLine p-2">
<i className="bi bi-briefcase-fill p-2" style={{fontSize:"2.5rem"}}></i>
<div className="d-flex flex-column align-items-start">

      <p className="m-0">{esperienza.role}</p>
      <p className="m-0" style={{fontSize:"0.75rem", color:"grey" }} >{esperienza.company}</p>
      <p className="m-0" style={{fontSize:"0.6rem", color:"grey" }} >{esperienza.description} - {esperienza.area}</p>
      {esperienza.endDate? 
            <p className="m-0" style={{fontSize:"0.6rem", color:"grey" }} >{formatISODate(esperienza.startDate)} - {formatISODate(esperienza.endDate)}</p>
            :
<p className="m-0" style={{fontSize:"0.6rem", color:"grey" }} >{formatISODate(esperienza.startDate)} - attualmente assunto</p>

}
</div>
</div>
    </div>
  ))}

</div>
<ModaleAggiungiEsperienza 
  visibilitàModaleAddEsperienza={visibilitàModaleAddEsperienza} 
  setVisibilitàModaleAddEsperienza={setVisibilitàModaleAddEsperienza} 
  onClose={handleChiudiAddEsperienza} 
/>
  </>
  )

}

export default Experience;
