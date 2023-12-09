import React from 'react';
import '../styles/LogoSlider.css';
import Logo1 from '../images/company-1.png'
import Logo2 from '../images/company-2.png'
import Logo3 from '../images/company-3.png'
import Logo4 from '../images/company-4.png'
import Logo5 from '../images/company-5.png'
import Logo6 from '../images/company-6.png'
import Logo7 from '../images/company-7.png'
import Logo8 from '../images/company-8.png'
import Logo9 from '../images/company-9.png'
import Logo10 from '../images/company-10.png'

const LogoSection = () => {
  return (
    <div className="logo-section">
      <div className='logo-slider'>
      <img className="logo" src={Logo1} alt="Logo 1" />
      <img className="logo" src={Logo2} alt="Logo 2" />
      <img className="logo" src={Logo3} alt="Logo 3" />
      <img className="logo" src={Logo4} alt="Logo 4" />
      <img className="logo" src={Logo5} alt="Logo 5" />
      <img className="logo" src={Logo6} alt="Logo 6" />
      <img className="logo" src={Logo7} alt="Logo 7" />
      <img className="logo" src={Logo8} alt="Logo 8" />
      <img className="logo" src={Logo9} alt="Logo 9" />
      <img className="logo" src={Logo10} alt="Logo 10" />
      </div>
      <div className='logo-slider'>
      <img className="logo" src={Logo1} alt="Logo 1" />
      <img className="logo" src={Logo2} alt="Logo 2" />
      <img className="logo" src={Logo3} alt="Logo 3" />
      <img className="logo" src={Logo4} alt="Logo 4" />
      <img className="logo" src={Logo5} alt="Logo 5" />
      <img className="logo" src={Logo6} alt="Logo 6" />
      <img className="logo" src={Logo7} alt="Logo 7" />
      <img className="logo" src={Logo8} alt="Logo 8" />
      <img className="logo" src={Logo9} alt="Logo 9" />
      <img className="logo" src={Logo10} alt="Logo 10" />
      </div>
    </div>
  );
};

export default LogoSection;