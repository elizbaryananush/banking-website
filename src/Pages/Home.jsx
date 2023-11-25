import React, { useState } from 'react'
import vector from '../assets/Group.png'
import Hero from '../Components/Home/Hero'
import Products from '../Components/Home/Products'
import Cases from '../Components/Home/Cases'
import Features from '../Components/Home/Features'
import Questions from '../Components/Home/Questions'
import Testimonials from '../Components/Home/Testimonials'
import Cta from '../Components/Home/Cta'
import Homecss from '../css/home.scss'


function Home({size}) {
  // const Sizetosent = size
  return (
    <div className='Home'>
      <img className='vector' style={{ position: 'absolute' }} src={vector} alt="" />
      <Hero size={size} />
      <Products size={size}/>
      <Cases size={size} />
      <Features size={size} />
      <Questions size={size} />
      <Testimonials size={size} />
      <Cta/>
    </div>
  )
}

export default Home