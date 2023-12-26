import React from 'react'
import { useNavigate } from 'react-router-dom'
import "../styles/ItServiceBox.css"

const ItServiceBox = ({title,btn,cname,redirect}) => {
    const navigate = useNavigate()

    const handleLink=()=>{
        navigate(redirect)
    }

  return (
    <div>
            <div className={`services-points ${cname}`}> <h4>{title}</h4> <button className='btn btn-outline-light border-2 ' onClick={handleLink}><b>{btn}</b></button></div>

    </div>
  )
}

export default ItServiceBox