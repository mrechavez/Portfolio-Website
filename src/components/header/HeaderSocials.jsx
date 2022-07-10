import React from 'react'
import {BsLinkedin} from 'react-icons/bs'
import {FaGithub} from 'react-icons/fa'
import {BsTwitter} from 'react-icons/bs'

const HeaderSocials = () => {
  return (
    <div className='header_socials'>
        <a href="https://www.linkedin.com/in/mrechavez.com" target="_blank"><BsLinkedin/></a>
        <a href="https://github.com/mrechavez" target="_blank"><FaGithub/></a>
        <a href="https://twitter.com/MilesEchavez" target="_blank"><BsTwitter/></a>
    </div>
  )
}

export default HeaderSocials