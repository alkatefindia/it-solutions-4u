import React from 'react'
import "../styles/PortfolioBox.css"

const PortfolioBox = ({ imageSrc, serviceContent, boxRottitle }) => {
  return (
    <div>
          <div className="portfolio-container container">
      <div className="portfolio-box">
      <div className="portfolio-title">{boxRottitle}</div>
        <div className="portfolio-img">
          <img className='portfolio-box-container-img' src={imageSrc} alt="err" />
        </div>
        <div className="back">
          <p>{serviceContent}</p>
        </div>
      </div>
    </div>
    </div>
  )
}

export default PortfolioBox