import React from "react"
import Heading from "../../Common/Heading/Heading"
import "./Hero.css"
import { Link, useNavigate } from "react-router-dom"

const Hero = () => {
  return (
    <>
      <section className='hero'>
        <div className='container'>
          <div className='row'>
                      <Heading subtitle='WELCOME TO ACTRAINING' title='Best Online Training Expertise' />
                      <p>Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts.</p>
                     
            <Link to='/about'><div className='button'>
              <button className='primary-btn'>
                GET STARTED <i className='fa fa-long-arrow-alt-right'></i>
              </button>
              <button>
                ENROLL NOW<i className='fa fa-long-arrow-alt-right'></i>
              </button>
              
            </div></Link>
          </div>
        </div>
      </section>
      <div className='margin'></div>
    </>
  )
}

export default Hero
