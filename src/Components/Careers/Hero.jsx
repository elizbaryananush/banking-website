import React from 'react'
import design from '../../assets/Abstract Design (1).png'
import image from '../../assets/Image.png'

function Hero() {
    return (
        <div className='Hero'>
            <div className="textCont">
                <h1>Welcome to <span>YourBank</span> Careers!</h1>
                <p>Join our team and embark on a rewarding journey in the banking industry. At YourBank, we are committed to fostering a culture of excellence and providing opportunities for professional growth. With a focus on innovation, customer service, and integrity, we strive to make a positive impact in the lives of our customers and communities. Join us today and be a part of our mission to shape the future of banking.</p>
            </div>
                <img className='image' src={image} alt="" />
            <img className='design' src={design} alt="" />
        </div>
    )
}

export default Hero