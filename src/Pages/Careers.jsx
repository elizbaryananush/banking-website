import React from 'react'
import careerscss from '../css/careers.scss'
import Hero from '../Components/Careers/Hero'
import Values from '../Components/Careers/Values'
import Benefits from '../Components/Careers/Benefits'
import Job from '../Components/Careers/Job'
import Questions from '../Components/Home/Questions'
import Cta from '../Components/Careers/Cta'

function Careers() {
    return (
        <div className='Careers'>
            <Hero />
            <Values />
            <Benefits />
            <Job />
            <Questions />
            <Cta />
        </div>
    )
}

export default Careers