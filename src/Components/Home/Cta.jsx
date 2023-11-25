import React, { useEffect, useRef } from 'react'
import img from '../../assets/Abstract Design (1).png'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

function Cta() {
    const text = useRef()

    useEffect(() => {
        gsap.from(text.current, {
            opacity: -3,
            duration: 1,
            ease: 'power4.out',
            scrollTrigger: {
              trigger: text.current,
              start: 'top center', 
              end: 'bottom center', 
              toggleActions: 'play none none none', 
            },
          });
    } , [])
    return (
        <div ref={text} className='Cta'>
            <img src={img} alt="" />
            <div className="text">
                <h1>Start your financial journey with <span>YourBank today!</span></h1>
                <p>Lorem ipsum dolor sit amet consectetur. Blandit odio semper risus pellentesque elit. Pellentesque eget ut imperdiet nulla penatibus. Nascetur viverra arcu sed amet cursus purus.</p>
            </div>
            <button>Open Account</button>
        </div>
    )
}

export default Cta