import React from 'react'
import "../styles/CTA.css"

import { useNavigate } from "react-router-dom";



const CTA = () => {

    const navigate =useNavigate()

    const handleContact=()=>{
        navigate('/contact')
    }
    const handleCall=()=>{
        window.location.href = 'tel:+971556449916';
    }

  return (
    <div>
        <div className="CTA cta-top d-flex flex-column justify-content-start align-items-start gap-4">
     <div> <b> <u> Schedule a free consultation</u> </b></div>
     <div className="d-flex  justify-content-center column-gap-2">
     <button className="btn btn-primary cntct" onClick={handleContact}>Contact Us</button>
     <button className="btn btn-success call" onClick={handleCall}>Call:+971556449916</button>
     </div>
     </div>
    </div>
  )
}

export default CTA