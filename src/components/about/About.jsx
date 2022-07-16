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
                <h5>Foodie</h5>
                <small>Likes Lobster Rolls</small>
            </article>

            <article className='about_card'>
                <MdOutlineDirectionsBike className='about_icon' />
                <h5>Adventurer</h5>
                <small>Likes Bike Rides</small>
            </article>

            <article className='about_card'>
                <FaDog className='about_icon' />
                <h5>Doggie</h5>
                <small>Loves Dogs</small>
            </article>
          </div>

          <p>
            I graduated from Quinnipiac University after completing my Bachelor's of Health Science and eventually joined Codecademy where I learned the ins and outs of web development.
          </p>
          <p>
            As a frontend developer, I enjoy bridging the gap between writing code and engineering a design layout by combining my technical knowledge with my eye for design to produce a beautiful website. My objectives are to build applications that are accesible and scalable while providing engaging user experiences. 
          </p>
          
          <a href="#contact" className='btn btn-primary'>Let's Talk</a>
        </div>
      </div>
    </section>
  )
}

export default About