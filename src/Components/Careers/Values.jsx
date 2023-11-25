import React, { useEffect, useRef, useState } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

function Values() {
    const text = useRef()
    const itemRefs = [useRef(null), useRef(null), useRef(null), useRef(null)]
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
                translateX: '-100%',
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

            gsap.from(itemRefs[0].current, {
                translateX: '-200px',
                opacity: 0,
                duration: 1,
                ease: 'power4.out',
                scrollTrigger: {
                    trigger: itemRefs[0].current,
                    start: 'top center',
                    end: 'bottom center',
                    toggleActions: 'play none none none',
                },
            });

            gsap.from(itemRefs[1].current, {
                translateX: '-200px',
                opacity: 0,
                duration: 1,
                ease: 'power4.out',
                delay : 0.5 ,
                scrollTrigger: {
                    trigger: itemRefs[0].current,
                    start: 'top center',
                    end: 'bottom center',
                    toggleActions: 'play none none none',
                },
            });

            gsap.from(itemRefs[2].current, {
                translateX: '-200px',
                opacity: 0,
                duration: 1,
                ease: 'power4.out',
                scrollTrigger: {
                    trigger: itemRefs[0].current,
                    start: 'top center',
                    end: 'bottom center',
                    toggleActions: 'play none none none',
                },
            });

            gsap.from(itemRefs[3].current, {
                translateX: '-200px',
                opacity: 0,
                duration: 1,
                delay : 0.5 ,
                ease: 'power4.out',
                scrollTrigger: {
                    trigger: itemRefs[0].current,
                    start: 'top center',
                    end: 'bottom center',
                    toggleActions: 'play none none none',
                },
            });
        }

    }, [])
    return (
        <div className='Values'>
            <div ref={text} className="heading">
                <h1>Our <span>Values</span></h1>
                <p>At YourBank, our values form the foundation of our organization and guide our actions. We believe in upholding the highest standards of integrity, delivering exceptional service, and embracing innovation. These values define our culture and shape the way we work together to achieve our goals.</p>
            </div>
            <div className="bottom">
                <div ref={itemRefs[0]} className="item">
                    <h1>Integrity</h1>
                    <p>We conduct ourselves with utmost honesty, transparency, and ethical behavior. We believe in doing what is right for our customers, colleagues, and stakeholders, even when faced with difficult choices.</p>
                </div>
                <div ref={itemRefs[1]} className="item">
                    <h1>Customer Centricity</h1>
                    <p>Our customers are at the heart of everything we do. We are dedicated to understanding their needs, providing personalized solutions, and delivering exceptional service that exceeds expectations.</p>
                </div>
                <div ref={itemRefs[2]} className="item">
                    <h1>Collaboration</h1>
                    <p>We foster a collaborative and inclusive work environment, where teamwork and diversity are celebrated. By leveraging the unique strengths and perspectives of our employees, we drive innovation and achieve greater success together.</p>
                </div>
                <div ref={itemRefs[3]} className="item">
                    <h1>Innovation</h1>
                    <p>We embrace change and constantly seek innovative solutions to meet the evolving needs of our customers. We encourage our employees to think creatively, challenge conventions, and explore new ideas to drive the future of banking.</p>
                </div>
            </div>
        </div>
    )
}

export default Values