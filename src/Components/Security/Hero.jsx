import React from 'react'
import image from '../../assets/securityHero.png'
import design from '../../assets/Abstract Design (1).png'

function Hero() {
    return (
        <div className='Hero'>
            <img className='image2' src={image} alt="" />
            <div className="textCont">
                <h1>Your Security is Our <span>Top Priority</span></h1>
                <p>At YourBank, we understand the importance of keeping your financial information secure. We employ robust security measures and advanced technologies to protect your personal and financial data. Rest assured that when you bank with us, your security is our utmost priority.</p>
            </div>
            <img className='image' src={image} alt="" />
            <img className='design' src={design} alt="" />
        </div>
    )
}

export default Hero