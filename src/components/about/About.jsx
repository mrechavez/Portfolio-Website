import React from 'react'
import './about.css'
import Coding2 from '../../assets/coding2.jpg'
import {BsController} from 'react-icons/bs'
import {MdOutlineDirectionsBike} from 'react-icons/md'
import {FaDog} from 'react-icons/fa'

const About = () => {
  return (
    <section id='about'>
      <h5>Get To Know</h5>
      <h2>About Me</h2>

      <div className="container about_container">
        <div className="about_me">
            <div className="about_me-image">
              <img src={Coding2} alt="About Image" />
            </div>
        </div>

        <div className="about_content">
          <div className="about_cards">
            <article className='about_card'>
                <BsController className='about_icon' />
                <h5>Gamer</h5>
                <small>Likes Video Games</small>
            </article>

            <article className='about_card'>
                <MdOutlineDirectionsBike className='about_icon' />
                <h5>Adventurer</h5>
                <small>Likes Bike Rides</small>
            </article>

            <article className='about_card'>
                <FaDog className='about_icon' />
                <h5>Dog Person</h5>
                <small>Likes Dogs</small>
            </article>
          </div>

          <p>
            Write description here.
          </p>

          <a href="#contact" className='btn btn-primary'>Let's Talk</a>
        </div>
      </div>
    </section>
  )
}

export default About