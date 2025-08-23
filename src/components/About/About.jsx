import React from 'react'
import "./About.css"
import about_1 from "../../assets/about.png"
import play_button from "../../assets/play-icon.png"

const About = ({setPlayState}) => {
  return (
    <div className='about'>
        <div className="about-left">
            <img src = {about_1} className='about-img'/>
            <img src = {play_button} className='play-icon' onClick ={()=>{setPlayState(true)}}/>
        </div>
        <div className="about-right">
            <h3>About University</h3>
            <h2>Nurturing Tomorrow's Leaders Today</h2>
            <p>At Educity university we are dedicated to providing an exceptional educational experience that fosters innovation, critical thinking, and personal growth. With a diverse student body and a wide range of academic programs, we aim to prepare our students for success in an ever-evolving world.</p>
            <p>At Educity university we believe in the power of education to transform lives.</p>
            <p>When you choose Educity university you become part of a welcoming and inclusive community.</p>
            </div>
      
    </div>
  )
}

export default About
