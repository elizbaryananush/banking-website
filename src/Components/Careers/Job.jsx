import React, { useEffect, useRef, useState } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

function Job() {
    const text = useRef()
    const itemRefs = [useRef(null), useRef(null), useRef(null)]
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
                delay: 0.5,
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
        }

    }, [])
    return (
        <div className='Job'>
            <div ref={text} className="heading">
                <h1>Job Openings</h1>
                <p>Explore exciting job openings at YourBank, where we value talent, innovation, and a passion for customer service. Join our team and be part of shaping a brighter future in the banking industry</p>
            </div>
            <div className="grid">
                <div ref={itemRefs[0]} className="item">
                    <div className="head">
                        <h4>Relationship Manager</h4>
                        <div className="info">
                            <div className="el">Location: India</div>
                            <div className="el"> Department: Retail Banking</div>
                        </div>
                    </div>
                    <div className="middle">
                        <h4>About This Job</h4>
                        <p>As a Relationship Manager at YourBank, you will be responsible for developing and maintaining relationships with our valued customers. You will proactively identify their financial needs and offer tailored solutions to help them achieve their goals. We are seeking individuals with excellent communication skills, a strong sales acumen, and a passion for delivering exceptional customer service.</p>
                    </div>
                    <div className="bottom">
                        <h4>Requirements & Qualifications</h4>
                        <div className="el">
                            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="16" viewBox="0 0 20 16" fill="none">
                                <path d="M8.75214 10.4596C8.19059 10.4596 7.86166 10.1435 7.86166 9.57624V8.9198C5.50313 8.7577 3.15262 8.27146 0.713867 7.33943V6.00226C3.71417 7.33134 6.72251 7.8014 9.99558 7.8014C13.2767 7.8014 16.285 7.33134 19.2853 6.00226V7.33943C16.8465 8.27146 14.496 8.7577 12.1375 8.9198V9.57624C12.1375 10.1435 11.8086 10.4596 11.247 10.4596H8.75214ZM3.19273 15.849H16.8064C18.467 15.849 19.2853 15.0386 19.2853 13.3772V5.49168C19.2853 3.8303 18.467 3.01987 16.8064 3.01987H3.19273C1.54015 3.01987 0.713867 3.8303 0.713867 5.49168V13.3772C0.713867 15.0386 1.54015 15.849 3.19273 15.849ZM5.92831 3.72494H7.17175V2.29048C7.17175 1.67455 7.53275 1.32607 8.15848 1.32607H11.8407C12.4664 1.32607 12.8194 1.67455 12.8194 2.29048V3.70873H14.0628V2.37963C14.0628 0.856017 13.2686 0.142838 11.8166 0.142838H8.1745C6.80273 0.142838 5.92831 0.856017 5.92831 2.37963V3.72494Z" fill="#B3B3B3" />
                            </svg>
                            <p>Bachelor's degree in Business, Finance, or a related field</p>
                        </div>
                        <div className="el">
                            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="16" viewBox="0 0 20 16" fill="none">
                                <path d="M8.75214 10.4596C8.19059 10.4596 7.86166 10.1435 7.86166 9.57624V8.9198C5.50313 8.7577 3.15262 8.27146 0.713867 7.33943V6.00226C3.71417 7.33134 6.72251 7.8014 9.99558 7.8014C13.2767 7.8014 16.285 7.33134 19.2853 6.00226V7.33943C16.8465 8.27146 14.496 8.7577 12.1375 8.9198V9.57624C12.1375 10.1435 11.8086 10.4596 11.247 10.4596H8.75214ZM3.19273 15.849H16.8064C18.467 15.849 19.2853 15.0386 19.2853 13.3772V5.49168C19.2853 3.8303 18.467 3.01987 16.8064 3.01987H3.19273C1.54015 3.01987 0.713867 3.8303 0.713867 5.49168V13.3772C0.713867 15.0386 1.54015 15.849 3.19273 15.849ZM5.92831 3.72494H7.17175V2.29048C7.17175 1.67455 7.53275 1.32607 8.15848 1.32607H11.8407C12.4664 1.32607 12.8194 1.67455 12.8194 2.29048V3.70873H14.0628V2.37963C14.0628 0.856017 13.2686 0.142838 11.8166 0.142838H8.1745C6.80273 0.142838 5.92831 0.856017 5.92831 2.37963V3.72494Z" fill="#B3B3B3" />
                            </svg>
                            <p>Minimum of 3 years of experience in sales or relationship management in the banking industry</p>
                        </div>
                        <div className="el">
                            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="16" viewBox="0 0 20 16" fill="none">
                                <path d="M8.75214 10.4596C8.19059 10.4596 7.86166 10.1435 7.86166 9.57624V8.9198C5.50313 8.7577 3.15262 8.27146 0.713867 7.33943V6.00226C3.71417 7.33134 6.72251 7.8014 9.99558 7.8014C13.2767 7.8014 16.285 7.33134 19.2853 6.00226V7.33943C16.8465 8.27146 14.496 8.7577 12.1375 8.9198V9.57624C12.1375 10.1435 11.8086 10.4596 11.247 10.4596H8.75214ZM3.19273 15.849H16.8064C18.467 15.849 19.2853 15.0386 19.2853 13.3772V5.49168C19.2853 3.8303 18.467 3.01987 16.8064 3.01987H3.19273C1.54015 3.01987 0.713867 3.8303 0.713867 5.49168V13.3772C0.713867 15.0386 1.54015 15.849 3.19273 15.849ZM5.92831 3.72494H7.17175V2.29048C7.17175 1.67455 7.53275 1.32607 8.15848 1.32607H11.8407C12.4664 1.32607 12.8194 1.67455 12.8194 2.29048V3.70873H14.0628V2.37963C14.0628 0.856017 13.2686 0.142838 11.8166 0.142838H8.1745C6.80273 0.142838 5.92831 0.856017 5.92831 2.37963V3.72494Z" fill="#B3B3B3" />
                            </svg>
                            <p>Proven track record of meeting and exceeding sales targets</p>
                        </div>
                        <div className="el">
                            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="16" viewBox="0 0 20 16" fill="none">
                                <path d="M8.75214 10.4596C8.19059 10.4596 7.86166 10.1435 7.86166 9.57624V8.9198C5.50313 8.7577 3.15262 8.27146 0.713867 7.33943V6.00226C3.71417 7.33134 6.72251 7.8014 9.99558 7.8014C13.2767 7.8014 16.285 7.33134 19.2853 6.00226V7.33943C16.8465 8.27146 14.496 8.7577 12.1375 8.9198V9.57624C12.1375 10.1435 11.8086 10.4596 11.247 10.4596H8.75214ZM3.19273 15.849H16.8064C18.467 15.849 19.2853 15.0386 19.2853 13.3772V5.49168C19.2853 3.8303 18.467 3.01987 16.8064 3.01987H3.19273C1.54015 3.01987 0.713867 3.8303 0.713867 5.49168V13.3772C0.713867 15.0386 1.54015 15.849 3.19273 15.849ZM5.92831 3.72494H7.17175V2.29048C7.17175 1.67455 7.53275 1.32607 8.15848 1.32607H11.8407C12.4664 1.32607 12.8194 1.67455 12.8194 2.29048V3.70873H14.0628V2.37963C14.0628 0.856017 13.2686 0.142838 11.8166 0.142838H8.1745C6.80273 0.142838 5.92831 0.856017 5.92831 2.37963V3.72494Z" fill="#B3B3B3" />
                            </svg>
                            <p>Excellent interpersonal and negotiation skills</p>
                        </div>
                        <div className="el">
                            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="16" viewBox="0 0 20 16" fill="none">
                                <path d="M8.75214 10.4596C8.19059 10.4596 7.86166 10.1435 7.86166 9.57624V8.9198C5.50313 8.7577 3.15262 8.27146 0.713867 7.33943V6.00226C3.71417 7.33134 6.72251 7.8014 9.99558 7.8014C13.2767 7.8014 16.285 7.33134 19.2853 6.00226V7.33943C16.8465 8.27146 14.496 8.7577 12.1375 8.9198V9.57624C12.1375 10.1435 11.8086 10.4596 11.247 10.4596H8.75214ZM3.19273 15.849H16.8064C18.467 15.849 19.2853 15.0386 19.2853 13.3772V5.49168C19.2853 3.8303 18.467 3.01987 16.8064 3.01987H3.19273C1.54015 3.01987 0.713867 3.8303 0.713867 5.49168V13.3772C0.713867 15.0386 1.54015 15.849 3.19273 15.849ZM5.92831 3.72494H7.17175V2.29048C7.17175 1.67455 7.53275 1.32607 8.15848 1.32607H11.8407C12.4664 1.32607 12.8194 1.67455 12.8194 2.29048V3.70873H14.0628V2.37963C14.0628 0.856017 13.2686 0.142838 11.8166 0.142838H8.1745C6.80273 0.142838 5.92831 0.856017 5.92831 2.37963V3.72494Z" fill="#B3B3B3" />
                            </svg>
                            <p>Strong knowledge of banking products and services</p>
                        </div>
                    </div>
                    <button>Apply Now</button>
                </div>
                <div ref={itemRefs[1]} className="item">
                    <div className="head">
                        <h4>Risk Analyst</h4>
                        <div className="info">
                            <div className="el">Location: India</div>
                            <div className="el"> Department: Risk Management</div>
                        </div>
                    </div>
                    <div className="middle">
                        <h4>About This Job</h4>
                        <p>As a Risk Analyst at YourBank, you will play a vital role in identifying and assessing potential risks to our organization. You will analyze data, conduct risk assessments, and develop strategies to mitigate risks. We are looking for detail-oriented individuals with strong analytical skills and a solid understanding of risk management principles.</p>
                    </div>
                    <div className="bottom">
                        <h4>Requirements & Qualifications</h4>
                        <div className="el">
                            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="16" viewBox="0 0 20 16" fill="none">
                                <path d="M8.75214 10.4596C8.19059 10.4596 7.86166 10.1435 7.86166 9.57624V8.9198C5.50313 8.7577 3.15262 8.27146 0.713867 7.33943V6.00226C3.71417 7.33134 6.72251 7.8014 9.99558 7.8014C13.2767 7.8014 16.285 7.33134 19.2853 6.00226V7.33943C16.8465 8.27146 14.496 8.7577 12.1375 8.9198V9.57624C12.1375 10.1435 11.8086 10.4596 11.247 10.4596H8.75214ZM3.19273 15.849H16.8064C18.467 15.849 19.2853 15.0386 19.2853 13.3772V5.49168C19.2853 3.8303 18.467 3.01987 16.8064 3.01987H3.19273C1.54015 3.01987 0.713867 3.8303 0.713867 5.49168V13.3772C0.713867 15.0386 1.54015 15.849 3.19273 15.849ZM5.92831 3.72494H7.17175V2.29048C7.17175 1.67455 7.53275 1.32607 8.15848 1.32607H11.8407C12.4664 1.32607 12.8194 1.67455 12.8194 2.29048V3.70873H14.0628V2.37963C14.0628 0.856017 13.2686 0.142838 11.8166 0.142838H8.1745C6.80273 0.142838 5.92831 0.856017 5.92831 2.37963V3.72494Z" fill="#B3B3B3" />
                            </svg>
                            <p>Bachelor's degree in Finance, Economics, or a related field</p>
                        </div>
                        <div className="el">
                            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="16" viewBox="0 0 20 16" fill="none">
                                <path d="M8.75214 10.4596C8.19059 10.4596 7.86166 10.1435 7.86166 9.57624V8.9198C5.50313 8.7577 3.15262 8.27146 0.713867 7.33943V6.00226C3.71417 7.33134 6.72251 7.8014 9.99558 7.8014C13.2767 7.8014 16.285 7.33134 19.2853 6.00226V7.33943C16.8465 8.27146 14.496 8.7577 12.1375 8.9198V9.57624C12.1375 10.1435 11.8086 10.4596 11.247 10.4596H8.75214ZM3.19273 15.849H16.8064C18.467 15.849 19.2853 15.0386 19.2853 13.3772V5.49168C19.2853 3.8303 18.467 3.01987 16.8064 3.01987H3.19273C1.54015 3.01987 0.713867 3.8303 0.713867 5.49168V13.3772C0.713867 15.0386 1.54015 15.849 3.19273 15.849ZM5.92831 3.72494H7.17175V2.29048C7.17175 1.67455 7.53275 1.32607 8.15848 1.32607H11.8407C12.4664 1.32607 12.8194 1.67455 12.8194 2.29048V3.70873H14.0628V2.37963C14.0628 0.856017 13.2686 0.142838 11.8166 0.142838H8.1745C6.80273 0.142838 5.92831 0.856017 5.92831 2.37963V3.72494Z" fill="#B3B3B3" />
                            </svg>
                            <p>Minimum of 2 years of experience in risk management or a similar role</p>
                        </div>
                        <div className="el">
                            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="16" viewBox="0 0 20 16" fill="none">
                                <path d="M8.75214 10.4596C8.19059 10.4596 7.86166 10.1435 7.86166 9.57624V8.9198C5.50313 8.7577 3.15262 8.27146 0.713867 7.33943V6.00226C3.71417 7.33134 6.72251 7.8014 9.99558 7.8014C13.2767 7.8014 16.285 7.33134 19.2853 6.00226V7.33943C16.8465 8.27146 14.496 8.7577 12.1375 8.9198V9.57624C12.1375 10.1435 11.8086 10.4596 11.247 10.4596H8.75214ZM3.19273 15.849H16.8064C18.467 15.849 19.2853 15.0386 19.2853 13.3772V5.49168C19.2853 3.8303 18.467 3.01987 16.8064 3.01987H3.19273C1.54015 3.01987 0.713867 3.8303 0.713867 5.49168V13.3772C0.713867 15.0386 1.54015 15.849 3.19273 15.849ZM5.92831 3.72494H7.17175V2.29048C7.17175 1.67455 7.53275 1.32607 8.15848 1.32607H11.8407C12.4664 1.32607 12.8194 1.67455 12.8194 2.29048V3.70873H14.0628V2.37963C14.0628 0.856017 13.2686 0.142838 11.8166 0.142838H8.1745C6.80273 0.142838 5.92831 0.856017 5.92831 2.37963V3.72494Z" fill="#B3B3B3" />
                            </svg>
                            <p>Proficiency in risk analysis tools and techniques</p>
                        </div>
                        <div className="el">
                            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="16" viewBox="0 0 20 16" fill="none">
                                <path d="M8.75214 10.4596C8.19059 10.4596 7.86166 10.1435 7.86166 9.57624V8.9198C5.50313 8.7577 3.15262 8.27146 0.713867 7.33943V6.00226C3.71417 7.33134 6.72251 7.8014 9.99558 7.8014C13.2767 7.8014 16.285 7.33134 19.2853 6.00226V7.33943C16.8465 8.27146 14.496 8.7577 12.1375 8.9198V9.57624C12.1375 10.1435 11.8086 10.4596 11.247 10.4596H8.75214ZM3.19273 15.849H16.8064C18.467 15.849 19.2853 15.0386 19.2853 13.3772V5.49168C19.2853 3.8303 18.467 3.01987 16.8064 3.01987H3.19273C1.54015 3.01987 0.713867 3.8303 0.713867 5.49168V13.3772C0.713867 15.0386 1.54015 15.849 3.19273 15.849ZM5.92831 3.72494H7.17175V2.29048C7.17175 1.67455 7.53275 1.32607 8.15848 1.32607H11.8407C12.4664 1.32607 12.8194 1.67455 12.8194 2.29048V3.70873H14.0628V2.37963C14.0628 0.856017 13.2686 0.142838 11.8166 0.142838H8.1745C6.80273 0.142838 5.92831 0.856017 5.92831 2.37963V3.72494Z" fill="#B3B3B3" />
                            </svg>
                            <p>Strong analytical and problem-solving skills</p>
                        </div>
                        <div className="el">
                            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="16" viewBox="0 0 20 16" fill="none">
                                <path d="M8.75214 10.4596C8.19059 10.4596 7.86166 10.1435 7.86166 9.57624V8.9198C5.50313 8.7577 3.15262 8.27146 0.713867 7.33943V6.00226C3.71417 7.33134 6.72251 7.8014 9.99558 7.8014C13.2767 7.8014 16.285 7.33134 19.2853 6.00226V7.33943C16.8465 8.27146 14.496 8.7577 12.1375 8.9198V9.57624C12.1375 10.1435 11.8086 10.4596 11.247 10.4596H8.75214ZM3.19273 15.849H16.8064C18.467 15.849 19.2853 15.0386 19.2853 13.3772V5.49168C19.2853 3.8303 18.467 3.01987 16.8064 3.01987H3.19273C1.54015 3.01987 0.713867 3.8303 0.713867 5.49168V13.3772C0.713867 15.0386 1.54015 15.849 3.19273 15.849ZM5.92831 3.72494H7.17175V2.29048C7.17175 1.67455 7.53275 1.32607 8.15848 1.32607H11.8407C12.4664 1.32607 12.8194 1.67455 12.8194 2.29048V3.70873H14.0628V2.37963C14.0628 0.856017 13.2686 0.142838 11.8166 0.142838H8.1745C6.80273 0.142838 5.92831 0.856017 5.92831 2.37963V3.72494Z" fill="#B3B3B3" />
                            </svg>
                            <p>Knowledge of regulatory requirements and industry best practices</p>
                        </div>
                    </div>
                    <button>Apply Now</button>
                </div>
                <div ref={itemRefs[2]} className="item">
                    <div className="head">
                        <h4>IT Security Specialist</h4>
                        <div className="info">
                            <div className="el">Location: India</div>
                            <div className="el">Department: Information Technology</div>
                        </div>
                    </div>
                    <div className="middle">
                        <h4>About This Job</h4>
                        <p>As an IT Security Specialist at YourBank, you will be responsible for ensuring the security and integrity of our information systems. You will develop and implement security protocols, conduct vulnerability assessments, and respond to security incidents. We are seeking individuals with a strong technical background, knowledge of cybersecurity best practices, and a commitment to maintaining the confidentiality of customer data.</p>
                    </div>
                    <div className="bottom">
                        <h4>Requirements & Qualifications</h4>
                        <div className="el">
                            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="16" viewBox="0 0 20 16" fill="none">
                                <path d="M8.75214 10.4596C8.19059 10.4596 7.86166 10.1435 7.86166 9.57624V8.9198C5.50313 8.7577 3.15262 8.27146 0.713867 7.33943V6.00226C3.71417 7.33134 6.72251 7.8014 9.99558 7.8014C13.2767 7.8014 16.285 7.33134 19.2853 6.00226V7.33943C16.8465 8.27146 14.496 8.7577 12.1375 8.9198V9.57624C12.1375 10.1435 11.8086 10.4596 11.247 10.4596H8.75214ZM3.19273 15.849H16.8064C18.467 15.849 19.2853 15.0386 19.2853 13.3772V5.49168C19.2853 3.8303 18.467 3.01987 16.8064 3.01987H3.19273C1.54015 3.01987 0.713867 3.8303 0.713867 5.49168V13.3772C0.713867 15.0386 1.54015 15.849 3.19273 15.849ZM5.92831 3.72494H7.17175V2.29048C7.17175 1.67455 7.53275 1.32607 8.15848 1.32607H11.8407C12.4664 1.32607 12.8194 1.67455 12.8194 2.29048V3.70873H14.0628V2.37963C14.0628 0.856017 13.2686 0.142838 11.8166 0.142838H8.1745C6.80273 0.142838 5.92831 0.856017 5.92831 2.37963V3.72494Z" fill="#B3B3B3" />
                            </svg>
                            <p>Bachelor's degree in Computer Science, Information Security, or a related field</p>
                        </div>
                        <div className="el">
                            <svg xmlns="http
                                <p></p>://www.w3.org/2000/svg" width="20" height="16" viewBox="0 0 20 16" fill="none">
                                <path d="M8.75214 10.4596C8.19059 10.4596 7.86166 10.1435 7.86166 9.57624V8.9198C5.50313 8.7577 3.15262 8.27146 0.713867 7.33943V6.00226C3.71417 7.33134 6.72251 7.8014 9.99558 7.8014C13.2767 7.8014 16.285 7.33134 19.2853 6.00226V7.33943C16.8465 8.27146 14.496 8.7577 12.1375 8.9198V9.57624C12.1375 10.1435 11.8086 10.4596 11.247 10.4596H8.75214ZM3.19273 15.849H16.8064C18.467 15.849 19.2853 15.0386 19.2853 13.3772V5.49168C19.2853 3.8303 18.467 3.01987 16.8064 3.01987H3.19273C1.54015 3.01987 0.713867 3.8303 0.713867 5.49168V13.3772C0.713867 15.0386 1.54015 15.849 3.19273 15.849ZM5.92831 3.72494H7.17175V2.29048C7.17175 1.67455 7.53275 1.32607 8.15848 1.32607H11.8407C12.4664 1.32607 12.8194 1.67455 12.8194 2.29048V3.70873H14.0628V2.37963C14.0628 0.856017 13.2686 0.142838 11.8166 0.142838H8.1745C6.80273 0.142838 5.92831 0.856017 5.92831 2.37963V3.72494Z" fill="#B3B3B3" />
                            </svg>
                            <p>Minimum of 5 years of experience in IT security or a similar role</p>
                        </div>
                        <div className="el">
                            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="16" viewBox="0 0 20 16" fill="none">
                                <path d="M8.75214 10.4596C8.19059 10.4596 7.86166 10.1435 7.86166 9.57624V8.9198C5.50313 8.7577 3.15262 8.27146 0.713867 7.33943V6.00226C3.71417 7.33134 6.72251 7.8014 9.99558 7.8014C13.2767 7.8014 16.285 7.33134 19.2853 6.00226V7.33943C16.8465 8.27146 14.496 8.7577 12.1375 8.9198V9.57624C12.1375 10.1435 11.8086 10.4596 11.247 10.4596H8.75214ZM3.19273 15.849H16.8064C18.467 15.849 19.2853 15.0386 19.2853 13.3772V5.49168C19.2853 3.8303 18.467 3.01987 16.8064 3.01987H3.19273C1.54015 3.01987 0.713867 3.8303 0.713867 5.49168V13.3772C0.713867 15.0386 1.54015 15.849 3.19273 15.849ZM5.92831 3.72494H7.17175V2.29048C7.17175 1.67455 7.53275 1.32607 8.15848 1.32607H11.8407C12.4664 1.32607 12.8194 1.67455 12.8194 2.29048V3.70873H14.0628V2.37963C14.0628 0.856017 13.2686 0.142838 11.8166 0.142838H8.1745C6.80273 0.142838 5.92831 0.856017 5.92831 2.37963V3.72494Z" fill="#B3B3B3" />
                            </svg>
                            <p>In-depth knowledge of network security protocols and technologies</p>
                        </div>
                        <div className="el">
                            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="16" viewBox="0 0 20 16" fill="none">
                                <path d="M8.75214 10.4596C8.19059 10.4596 7.86166 10.1435 7.86166 9.57624V8.9198C5.50313 8.7577 3.15262 8.27146 0.713867 7.33943V6.00226C3.71417 7.33134 6.72251 7.8014 9.99558 7.8014C13.2767 7.8014 16.285 7.33134 19.2853 6.00226V7.33943C16.8465 8.27146 14.496 8.7577 12.1375 8.9198V9.57624C12.1375 10.1435 11.8086 10.4596 11.247 10.4596H8.75214ZM3.19273 15.849H16.8064C18.467 15.849 19.2853 15.0386 19.2853 13.3772V5.49168C19.2853 3.8303 18.467 3.01987 16.8064 3.01987H3.19273C1.54015 3.01987 0.713867 3.8303 0.713867 5.49168V13.3772C0.713867 15.0386 1.54015 15.849 3.19273 15.849ZM5.92831 3.72494H7.17175V2.29048C7.17175 1.67455 7.53275 1.32607 8.15848 1.32607H11.8407C12.4664 1.32607 12.8194 1.67455 12.8194 2.29048V3.70873H14.0628V2.37963C14.0628 0.856017 13.2686 0.142838 11.8166 0.142838H8.1745C6.80273 0.142838 5.92831 0.856017 5.92831 2.37963V3.72494Z" fill="#B3B3B3" />
                            </svg>
                            <p>Familiarity with regulatory frameworks such as PCI DSS and GDPR</p>
                        </div>
                        <div className="el">
                            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="16" viewBox="0 0 20 16" fill="none">
                                <path d="M8.75214 10.4596C8.19059 10.4596 7.86166 10.1435 7.86166 9.57624V8.9198C5.50313 8.7577 3.15262 8.27146 0.713867 7.33943V6.00226C3.71417 7.33134 6.72251 7.8014 9.99558 7.8014C13.2767 7.8014 16.285 7.33134 19.2853 6.00226V7.33943C16.8465 8.27146 14.496 8.7577 12.1375 8.9198V9.57624C12.1375 10.1435 11.8086 10.4596 11.247 10.4596H8.75214ZM3.19273 15.849H16.8064C18.467 15.849 19.2853 15.0386 19.2853 13.3772V5.49168C19.2853 3.8303 18.467 3.01987 16.8064 3.01987H3.19273C1.54015 3.01987 0.713867 3.8303 0.713867 5.49168V13.3772C0.713867 15.0386 1.54015 15.849 3.19273 15.849ZM5.92831 3.72494H7.17175V2.29048C7.17175 1.67455 7.53275 1.32607 8.15848 1.32607H11.8407C12.4664 1.32607 12.8194 1.67455 12.8194 2.29048V3.70873H14.0628V2.37963C14.0628 0.856017 13.2686 0.142838 11.8166 0.142838H8.1745C6.80273 0.142838 5.92831 0.856017 5.92831 2.37963V3.72494Z" fill="#B3B3B3" />
                            </svg>
                            <p>Professional certifications such as CISSP or CISM are preferred</p>
                        </div>
                    </div>
                    <button>Apply Now</button>
                </div>
            </div>
        </div>
    )
}

export default Job