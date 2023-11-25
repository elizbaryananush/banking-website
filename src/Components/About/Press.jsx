import React, { useEffect, useRef, useState } from 'react'
import img1 from '../../assets/about1.png'
import img2 from '../../assets/about2.png'
import img3 from '../../assets/about3.png'
import img4 from '../../assets/about4.png'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

function Press() {
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
                translateX: '-100px',
                opacity: 0,
                duration: 1,
                ease: 'power4.out',
                scrollTrigger: {
                    trigger: itemRefs[0].current,
                    start: 'top center',
                    end: 'bottom center',
                    markers: true,
                    toggleActions: 'play none none none',
                },
            });

            gsap.from(itemRefs[1].current, {
                translateX: '-100px',
                opacity: 0,
                duration: 1,
                ease: 'power4.out',
                delay : 0.5 ,
                scrollTrigger: {
                    trigger: itemRefs[1].current,
                    start: 'top center',
                    end: 'bottom center',
                    markers: true,
                    toggleActions: 'play none none none',
                },
            });

            gsap.from(itemRefs[2].current, {
                translateX: '-100px',
                opacity: 0,
                duration: 1,
                ease: 'power4.out',
                scrollTrigger: {
                    trigger: itemRefs[1].current,
                    start: 'top center',
                    end: 'bottom center',
                    markers: true,
                    toggleActions: 'play none none none',
                },
            });

            gsap.from(itemRefs[3].current, {
                translateX: '-100px',
                opacity: 0,
                duration: 1,
                delay : 0.5 ,
                ease: 'power4.out',
                scrollTrigger: {
                    trigger: itemRefs[0].current,
                    start: 'top center',
                    end: 'bottom center',
                    markers: true,
                    toggleActions: 'play none none none',
                },
            });
        }

    }, [])

    return (
        <div className='Press'>
            <div ref={text} className="heading">
                <h1>Press Releases</h1>
                <p>Stay updated with the latest happenings and exciting developments at YourBank through our press releases.</p>
            </div>
            <div className="bottom">
                <div ref={itemRefs[0]} className="item">
                    <img src={img1} alt="" />
                    <div className="text">
                        <h4>YourBank Launches New Rewards Program to Enhance Customer Loyalty and Satisfaction</h4>
                        <div className="info">
                            <div className="el">Location: India</div>
                            <div className="el">Date: 06/11/2024</div>
                        </div>
                        <p>YourBank is pleased to announce the introduction of our new Rewards Program, aimed at rewarding our loyal customers and enhancing their banking experience. The program offers exclusive benefits, discounts, and personalized offers tailored to individual customer preferences. With this initiative, YourBank reaffirms its commitment to delivering exceptional value and building lasting relationships with our valued customers.</p>
                    </div>
                </div>
                <div ref={itemRefs[1]} className="item">
                    <img src={img2} alt="" />
                    <div className="text">
                        <h4>YourBank Expands Branch Network with Opening of New Location in Chennai</h4>
                        <div className="info">
                            <div className="el">Location: India</div>
                            <div className="el">Date: 12/11/2024</div>
                        </div>
                        <p>YourBank is excited to announce the grand opening of our newest branch in [City]. This expansion is a testament to our continued commitment to serving our customers and providing them with convenient access to our comprehensive range of banking services. The new branch will feature state-of-the-art facilities, a team of dedicated professionals, and a personalized approach to banking, further strengthening our presence in the local community.</p>
                    </div>
                </div>
                <div ref={itemRefs[2]} className="item">
                    <img src={img3} alt="" />
                    <div className="text">

                        <h4>YourBank Partners with Local Nonprofit to Support Financial Education Initiatives</h4>
                        <div className="info">
                            <div className="el">Location: India</div>
                            <div className="el">Date: 24/12/2024</div>
                        </div>
                        <p>YourBank is excited to unveil our new Sustainable Banking Initiative, demonstrating our commitment to environmental responsibility. This initiative includes a range of sustainable banking products and services, such as green loans, eco-friendly investment options, and paperless banking solutions. By incorporating sustainable practices into our operations, we aim to contribute to a greener future while providing innovative banking solutions to our customers.</p>
                    </div>
                </div>
                <div ref={itemRefs[3]} className="item">
                    <img src={img4} alt="" />
                    <div className="text">
                        <h4>YourBank Launches Sustainable Banking Initiative to Promote Environmental Responsibility</h4>
                        <div className="info">
                            <div className="el">Location: India</div>
                            <div className="el">Date: 28/12/2024</div>
                        </div>
                        <p>YourBank is excited to unveil our new Sustainable Banking Initiative, demonstrating our commitment to environmental responsibility. This initiative includes a range of sustainable banking products and services, such as green loans, eco-friendly investment options, and paperless banking solutions. By incorporating sustainable practices into our operations, we aim to contribute to a greener future while providing innovative banking solutions to our customers.</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Press