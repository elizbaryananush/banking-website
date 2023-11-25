import React, { useEffect, useRef, useState } from 'react'
import design from '../../assets/Abstract Design (1).png'
import image from '../../assets/Image.png'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

function Hero() {
    const text = useRef()
    const imgref = useRef()
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
                duration: 1,
                ease: 'power4.out',
                scrollTrigger: {
                    trigger: text.current,
                    start: 'top center',
                    end: 'bottom center',
                    toggleActions: 'play none none none',
                },
            });

            gsap.from(imgref.current, {
                translateX: '500px',
                // opacity: 0,
                duration: 1,
                ease: 'power4.out',
                scrollTrigger: {
                    trigger: imgref.current,
                    start: 'top center',
                    end: 'bottom center',
                    toggleActions: 'play none none none',
                },
            });
        }

    }, [])
    return (
        <div className='Hero'>
            <img className='image1' src={image} alt="" />
            <div ref={text} className="textCont">
                <h1>Welcome to <span>YourBank</span> Careers!</h1>
                <p>Join our team and embark on a rewarding journey in the banking industry. At YourBank, we are committed to fostering a culture of excellence and providing opportunities for professional growth. With a focus on innovation, customer service, and integrity, we strive to make a positive impact in the lives of our customers and communities. Join us today and be a part of our mission to shape the future of banking.</p>
            </div>
            <img ref={imgref} className='image' src={image} alt="" />
            <img className='design' src={design} alt="" />
        </div>
    )
}

export default Hero