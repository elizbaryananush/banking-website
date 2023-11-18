import React from 'react'
import securitycss from '../css/security.scss'
import Hero from '../Components/Security/Hero'
import Protect from '../Components/Security/Protect'
import Questions from '../Components/Home/Questions'

function Security() {
  return (
    <div className='Security'>
      <Hero />
      <Protect />
      <Questions />
    </div>
  )
}

export default Security