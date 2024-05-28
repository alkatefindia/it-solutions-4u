import React from 'react'
import { Link } from 'react-router-dom'
import Logo from '../images/logo_black.png';


const Navbar2 = () => {
  return (
    <div className='Navbar2-home'>
      
      <nav class="navbar navbar-expand-lg navbar-home">
          <div class="nav-item-parent">
            <Link class="navbar-brand" to='/'>
              <img src={Logo} className='main-logo' alt="Logo" />

            </Link>
            <button class="navbar-toggler bg-white navbar-toggler-home" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
              <span class="navbar-toggler-icon"></span>
            </button>
            <div class="collapse navbar-collapse ms-5 " id="navbarNav">
              <ul class="navbar-nav navbar-nav-home ">
                <li class="nav-item nav-item-home ">
                  <Link class="nav-link nav-link-home text-black" aria-current="page" to='/'>Home</Link>
                </li>
                <li class="nav-item">
                  <Link class="nav-link nav-link-home text-black" to='/about'>About</Link>
                </li>
                <li class="nav-item">
                  <Link class="nav-link nav-link-home text-black" to='/services'>Services</Link>
                </li>
                <li class="nav-item">
                  <Link class="nav-link nav-link-home text-black" to='/products'>Products</Link>
                </li>
                <li class="nav-item">
                  <Link class="nav-link nav-link-home text-black" to='/blogs'>Blog</Link>
                </li>
                <li class="nav-item  ">
                  <Link class="nav-link nav-contact-li nav-link-home text-black pe-5" to='/contact'>Contact Us</Link>
                </li>

                <button className='btn btn-outline nav-contact rounded-5'>
                  <Link class="nav-link nav-link-home" to='/contact'>Contact Us</Link>
                </button>
              </ul>
            </div>
          </div>
        </nav>

    </div>
  )
}

export default Navbar2
