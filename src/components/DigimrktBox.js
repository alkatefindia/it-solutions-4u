import React from 'react';
import '../styles/DigimrktBox.css'

function DigimrktBox({digititle,dididesc,digiimg}) {
    return (
        <div className='digi-mrkt-bottom-card'>
            <img src={digiimg} alt='err' />
            <h3>{digititle}</h3>
            <p>{dididesc}</p>
        </div>
    )
}

export default DigimrktBox