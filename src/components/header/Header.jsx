import React from 'react'
import './header.css'
import CTA from './CTA'
import Coding1 from '../../assets/coding1.jpg'
import HeaderSocials from './HeaderSocials'

const Header = () => {
  return (
    <header>
      <div className="container header_container">
        <h5>Hello I'm</h5>
        <h1>Miles Echavez</h1>
        <h5 className="text-light">Frontend Developer</h5>
        <CTA />
        <HeaderSocials />

        <div className="coding1">
          <img src={Coding1} alt="picture of code" />
        </div>

        <a href="#contact" className='scroll_down'>Scroll Down</a>
      </div>
    </header>
  )
}

export default Header