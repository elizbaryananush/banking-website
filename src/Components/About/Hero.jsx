import React from 'react'
import aboutcss from '../../css/about.scss'
import image from '../../assets/Image (1).png'
import design from '../../assets/Abstract Design (1).png'

function Hero() {
    return (
        <div className='Hero'>
            <img className='image1' src={image} alt="" />
            <div className="textCont">
                <h1>Where Banking Meets <span>Excellence!</span></h1>
                <p>At YourBank, we believe that banking should be more than just transactions. It should be an experience that empowers individuals and businesses to thrive and reach their financial goals. As a trusted financial institution, we are committed to delivering exceptional banking services that go beyond expectations. With a focus on innovation, personalized solutions, and unwavering integrity, we strive to provide the best banking experience for our valued customers. Join us on this exciting journey and discover a new level of banking excellence.</p>
            </div>
            <img className='image' src={image} alt="" />
            <img className='design' src={design} alt="" />
        </div>
    )
}

export default Hero