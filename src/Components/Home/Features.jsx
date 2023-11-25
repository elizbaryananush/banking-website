import React, { useEffect, useRef, useState } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

function Features() {
    const [category, setCategory] = useState(1)
    const text = useRef()
    const bottom = useRef()
    const left = useRef()
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

            gsap.from(bottom.current, {
                opacity: -3,
                duration: 1,
                ease: 'power4.out',
                scrollTrigger: {
                    trigger: bottom.current,
                    start: 'top 60%',
                    end: 'bottom center',
                    toggleActions: 'play none none none',
                },
            });

            gsap.from(left.current, {
                translateX: '-500px',
                opacity: 0,
                duration: 1,
                ease: 'power4.out',
                scrollTrigger: {
                    trigger: left.current,
                    start: 'top center',
                    end: 'bottom center',
                    toggleActions: 'play none none none',
                },
            });
        }

    }, [])
    return (
        <div className='Features'>
            <div ref={text} className="heading">
                <h1>Our <span>Features</span></h1>
                <p>Experience a host of powerful features at YourBank, including seamless online banking, secure transactions, and personalized financial insights, all designed to enhance your banking experience</p>
            </div>
            <div className="bottom">
                <div ref={left} className="left">
                    <button
                        onClick={() => setCategory(1)}
                        className={category === 1 ? 'category active' : 'category'}
                    >Online Banking</button>
                    <button
                        onClick={() => setCategory(2)}
                        className={category === 2 ? 'category active' : 'category'}
                    >Financial Tools</button>
                    <button
                        onClick={() => setCategory(3)}
                        className={category === 3 ? 'category active' : 'category'}
                    >Customer Support</button>
                </div>
                <div ref={bottom} className="right">
                    <div className="element">
                        <div className="top">
                            <p>24/7 Account Access</p>
                            <svg xmlns="http://www.w3.org/2000/svg" width="25" height="24" viewBox="0 0 25 24" fill="none">
                                <path d="M6.50005 19L19.5 5.99996M19.5 5.99996V18.48M19.5 5.99996H7.02005" stroke="#CAFF33" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                            </svg>
                        </div>
                        <div className="bottom">
                            <p>Enjoy the convenience of accessing your accounts anytime, anywhere through our secure online banking platform. Check balances, transfer funds, and pay bills with ease.</p>
                        </div>
                    </div>
                    <div className="element">
                        <div className="top">
                            <p>Mobile Banking App</p>
                            <svg xmlns="http://www.w3.org/2000/svg" width="25" height="24" viewBox="0 0 25 24" fill="none">
                                <path d="M6.50005 19L19.5 5.99996M19.5 5.99996V18.48M19.5 5.99996H7.02005" stroke="#CAFF33" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                            </svg>
                        </div>
                        <div className="bottom">
                            <p>Stay connected to your finances on the go with our user-friendly mobile banking app. Easily manage your accounts, deposit checks, and make payments from your smartphone or tablet.</p>
                        </div>
                    </div>
                    <div className="element">
                        <div className="top">
                            <p>Secure Transactions</p>
                            <svg xmlns="http://www.w3.org/2000/svg" width="25" height="24" viewBox="0 0 25 24" fill="none">
                                <path d="M6.50005 19L19.5 5.99996M19.5 5.99996V18.48M19.5 5.99996H7.02005" stroke="#CAFF33" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                            </svg>
                        </div>
                        <div className="bottom">
                            <p>Rest assured knowing that your transactions are protected by industry-leading security measures. We employ encryption and multi-factor authentication to safeguard your financial information.</p>
                        </div>
                    </div>
                    <div className="element">
                        <div className="top">
                            <p>Bill Pay and Transfers</p>
                            <svg xmlns="http://www.w3.org/2000/svg" width="25" height="24" viewBox="0 0 25 24" fill="none">
                                <path d="M6.50005 19L19.5 5.99996M19.5 5.99996V18.48M19.5 5.99996H7.02005" stroke="#CAFF33" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                            </svg>
                        </div>
                        <div className="bottom">
                            <p>Save time and avoid late fees with our convenient bill pay service. Set up recurring payments or make one-time transfers between your accounts with just a few clicks.</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Features