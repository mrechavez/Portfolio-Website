import React from 'react'
import './skills.css'
import {BsPatchCheckFill} from 'react-icons/bs'

const Skills = () => {
  return (
    <section id='skills'>
      <h5>My Skills</h5>
      <h2>The Tools I Use</h2>

      <div className="container skills_container">
        <div className="skills_frontend">
          <h3>Frontend Development</h3>
          <div className="skills_content">
            <article className='skills_details'>
              <BsPatchCheckFill />
              <h4>HTML</h4>
            </article>

            <article className='skills_details'>
              <BsPatchCheckFill />
              <h4>CSS</h4>
            </article>

            <article className='skills_details'>
              <BsPatchCheckFill />
              <h4>JavaScript</h4>
            </article>

            <article className='skills_details'>
              <BsPatchCheckFill />
              <h4>Bootstrap</h4>
            </article>

            <article className='skills_details'>
              <BsPatchCheckFill />
              <h4>React</h4>
            </article>

            <article className='skills_details'>
              <BsPatchCheckFill />
              <h4>Git/Github</h4>
            </article>
          </div>
        </div>

      </div>
    </section>
  )
}

export default Skills