import design from '../../assets/Abstract Design2.png'
import image1 from '../../assets/coins.png'
import image2 from '../../assets/achq.png'
import React, { useEffect, useRef, useState } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

function Mision() {
    const section1 = useRef()
    const section2 = useRef()
    const text = useRef()
    const [size, setSize] = useState(window.innerWidth);

    useEffect(() => {
        const handleResize = () => {
            setSize(window.innerWidth);
        };

        window.addEventListener('resize', handleResize);

        return () => {
            window.removeEventListener('resize', handleResize);
        };
    }, []);


    useEffect(() => {

        if (size > 450) {
            gsap.from(text.current, {
                translateX: '-500px',
                opacity: 0,
                duration: 1,
                ease: 'power4.out',
                scrollTrigger: {
                    trigger: text.current,
                    start: 'top center',
                    end: 'bottom center',
                    toggleActions: 'play none none none',
                },
            });

            gsap.from(section1.current, {
                translateX: '-500px',
                opacity: 0,
                duration: 1,
                ease: 'power4.out',
                scrollTrigger: {
                    trigger: section1.current,
                    start: 'top center',
                    end: 'bottom center',
                    toggleActions: 'play none none none',
                },
            });

            gsap.from(section2.current, {
                translateX: '500px',
                opacity: 0,
                duration: 1,
                ease: 'power4.out',
                scrollTrigger: {
                    trigger: section1.current,
                    start: 'top center',
                    end: 'bottom center',
                    toggleActions: 'play none none none',
                },
            });
        }

    }, [])
    return (
        <div className='Mision'>
            <div ref={text} className="heading">
                <h1>Mission & Vision</h1>
                <p>We envision being a leading force in the industry, driven by innovation, integrity, and inclusivity, creating a brighter financial future for individuals and businesses while maintaining a strong commitment to customer satisfaction and community development</p>
            </div>
            <div className="bottom">
                <div ref={section1} className="horiz">
                    <div className="imgDiv">
                        <img className='design' src={design} alt="" />
                        <img className='image' src={image1} alt="" />
                    </div>
                    <div className="text">
                        <h4>Mission</h4>
                        <p>At YourBank, our mission is to empower our customers to achieve financial success. We are dedicated to delivering innovative banking solutions that cater to their unique needs. Through personalized services, expert guidance, and cutting-edge technology, we aim to build strong, lasting relationships with our customers. Our mission is to be their trusted partner, helping them navigate their financial journey and realize their dreams.</p>
                    </div>
                </div>
                <div ref={section2} className="horiz">
                    <div className="text text1">
                        <h4>Vision</h4>
                        <p>Our vision at YourBank is to redefine banking by creating a seamless and personalized experience for our customers. We envision a future where banking is accessible, transparent, and tailored to individual preferences. Through continuous innovation and collaboration, we strive to be at the forefront of the industry, setting new standards for customer-centric banking. Our vision is to be the preferred financial institution, known for our unwavering commitment to excellence, trust, and customer satisfaction.</p>
                    </div>
                    <div className="imgDiv">
                        <img className='design' src={design} alt="" />
                        <img className='image' src={image2} alt="" />
                    </div>
                    <div className="text text2">
                        <h4>Vision</h4>
                        <p>Our vision at YourBank is to redefine banking by creating a seamless and personalized experience for our customers. We envision a future where banking is accessible, transparent, and tailored to individual preferences. Through continuous innovation and collaboration, we strive to be at the forefront of the industry, setting new standards for customer-centric banking. Our vision is to be the preferred financial institution, known for our unwavering commitment to excellence, trust, and customer satisfaction.</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Mision