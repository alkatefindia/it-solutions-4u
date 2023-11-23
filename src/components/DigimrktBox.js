import React from 'react';
import '../styles/DigimrktBox.css'
import { Link } from 'react-router-dom';

function DigimrktBox({digititle,dididesc,digiimg,link}) {
    return (
        <Link to={link} >
        <div className='digi-mrkt-bottom-card'>
            <img src={digiimg} alt='err' />
            <h3>{digititle}</h3>
            <p>{dididesc}</p>
        </div>
        </Link>
    )
}

export default DigimrktBox