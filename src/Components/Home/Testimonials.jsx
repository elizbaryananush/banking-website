import React, { useState } from 'react'

function Testimonials() {
    const [category, setCategory] = useState(1)
    const [currentIndex, setCurrentIndex] = useState(0);
    const items2 = document.querySelector('.items2')
    const thisx = document.querySelector('.this')

    const goToNext = () => {
        setCurrentIndex((prevIndex) =>
            prevIndex === 5 ? 0 : (prevIndex + 1)
        );
    };

    const goToPrev = () => {
        setCurrentIndex((prevIndex) =>
            prevIndex === 0 ? 6 - 1 : (prevIndex - 1)
        )
    };

    return (
        <div className='Testimonials'>
            <div className="heading">
                <div className="text">
                    <h1>Our <span>Testimonials</span></h1>
                    <p>Discover how YourBank has transformed lives with innovative digital solutions and personalized customer service. See why our clients trust us for a secure and prosperous financial journey</p>
                </div>
                <div className="buttons">
                    <ul className="inside">
                        <li
                            onClick={() => setCategory(1)}
                            className={category === 1 ? 'active' : ''}
                        >For Individuals</li>
                        <li
                            onClick={() => setCategory(2)}
                            className={category === 2 ? 'active' : ''}
                        >For Businesses</li>
                    </ul>
                </div>
            </div>

            <div className="slide">
                <button onClick={goToPrev} className='arrow arrowleft'>
                    <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 28 28" fill="none">
                        <path d="M21.5833 14H7M7 14L14 7M7 14L14 21" stroke="#CAFF33" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                    </svg>
                </button>
                <div className="itemsCont">
                    <div
                        style={items2 && thisx ?
                            window.innerWidth > 450 ?
                            { transform: `translateX(-${currentIndex * (items2.clientWidth / 6)}px)` }
                            : { transform: `translateX(-${currentIndex * items2.clientWidth}px)` }
                            : null} className="items2">
                        <div className="element this">
                            <div className="top">
                                <div className="line"></div>
                                <svg xmlns="http://www.w3.org/2000/svg" width="44" height="44" viewBox="0 0 44 44" fill="none">
                                    <path d="M4.84402 20.9212L4.84401 20.9212L4.84306 20.924C3.97266 23.4974 3.53369 25.9874 3.53369 28.3915V35.5374C3.53369 36.3658 4.20526 37.0374 5.03369 37.0374H14.2309C15.0593 37.0374 15.7309 36.3658 15.7309 35.5374L15.7309 28.3116L15.7308 28.3074C15.7054 25.2764 16.1886 22.5199 17.1727 20.0314C18.0778 17.7775 19.1728 15.6054 20.4579 13.5149C20.8813 12.8261 20.699 11.9128 20.0145 11.4567L14.9228 8.06382L14.9228 8.06382C14.3741 7.69814 13.6366 7.72756 13.1287 8.17732C11.4242 9.68636 9.87445 11.4881 8.4778 13.579L8.47711 13.58C6.95041 15.878 5.73918 18.3253 4.84402 20.9212ZM24.5557 20.9212L24.5547 20.924C23.6843 23.4974 23.2454 25.9874 23.2454 28.3915V35.5374C23.2454 36.3658 23.917 37.0374 24.7454 37.0374H33.9425C34.771 37.0374 35.4425 36.3658 35.4425 35.5374L35.4426 28.3116L35.4425 28.3074C35.4171 25.2765 35.9003 22.5201 36.8843 20.0317C37.7894 17.7777 38.8844 15.6055 40.1696 13.5149C40.593 12.8261 40.4107 11.9128 39.7261 11.4567L34.6345 8.06382L34.6345 8.06382C34.0858 7.69814 33.3483 7.72756 32.8403 8.17732L33.1718 8.55167L32.8403 8.17732C31.1359 9.68636 29.5861 11.4881 28.1895 13.579L28.1888 13.58C26.6621 15.878 25.4509 18.3253 24.5557 20.9212Z" fill="url(#paint0_linear_108_2662)" stroke="#CAFF33" />
                                    <defs>
                                        <linearGradient id="paint0_linear_108_2662" x1="22.1513" y1="8.06677" x2="22.1513" y2="36.5374" gradientUnits="userSpaceOnUse">
                                            <stop stop-color="#CAFF33" />
                                            <stop offset="1" stop-color="#191919" />
                                        </linearGradient>
                                    </defs>
                                </svg>
                                <div className="line"></div>
                            </div>
                            <p>YourBank has been my trusted financial partner for years. Their personalized service and innovative digital banking solutions have made managing my finances a breeze.</p>
                            <div className="name">
                                <p>Sara T</p>
                            </div>
                        </div>
                        <div className="element this">
                            <div className="top">
                                <div className="line"></div>
                                <svg xmlns="http://www.w3.org/2000/svg" width="44" height="44" viewBox="0 0 44 44" fill="none">
                                    <path d="M4.84402 20.9212L4.84401 20.9212L4.84306 20.924C3.97266 23.4974 3.53369 25.9874 3.53369 28.3915V35.5374C3.53369 36.3658 4.20526 37.0374 5.03369 37.0374H14.2309C15.0593 37.0374 15.7309 36.3658 15.7309 35.5374L15.7309 28.3116L15.7308 28.3074C15.7054 25.2764 16.1886 22.5199 17.1727 20.0314C18.0778 17.7775 19.1728 15.6054 20.4579 13.5149C20.8813 12.8261 20.699 11.9128 20.0145 11.4567L14.9228 8.06382L14.9228 8.06382C14.3741 7.69814 13.6366 7.72756 13.1287 8.17732C11.4242 9.68636 9.87445 11.4881 8.4778 13.579L8.47711 13.58C6.95041 15.878 5.73918 18.3253 4.84402 20.9212ZM24.5557 20.9212L24.5547 20.924C23.6843 23.4974 23.2454 25.9874 23.2454 28.3915V35.5374C23.2454 36.3658 23.917 37.0374 24.7454 37.0374H33.9425C34.771 37.0374 35.4425 36.3658 35.4425 35.5374L35.4426 28.3116L35.4425 28.3074C35.4171 25.2765 35.9003 22.5201 36.8843 20.0317C37.7894 17.7777 38.8844 15.6055 40.1696 13.5149C40.593 12.8261 40.4107 11.9128 39.7261 11.4567L34.6345 8.06382L34.6345 8.06382C34.0858 7.69814 33.3483 7.72756 32.8403 8.17732L33.1718 8.55167L32.8403 8.17732C31.1359 9.68636 29.5861 11.4881 28.1895 13.579L28.1888 13.58C26.6621 15.878 25.4509 18.3253 24.5557 20.9212Z" fill="url(#paint0_linear_108_2662)" stroke="#CAFF33" />
                                    <defs>
                                        <linearGradient id="paint0_linear_108_2662" x1="22.1513" y1="8.06677" x2="22.1513" y2="36.5374" gradientUnits="userSpaceOnUse">
                                            <stop stop-color="#CAFF33" />
                                            <stop offset="1" stop-color="#191919" />
                                        </linearGradient>
                                    </defs>
                                </svg>
                                <div className="line"></div>
                            </div>
                            <p>I recently started my own business, and YourBank has been instrumental in helping me set up my business accounts and secure the financing I needed. Their expert guidance and tailored solutions have been invaluable.</p>
                            <div className="name">
                                <p>John D</p>
                            </div>
                        </div>
                        <div className="element this">
                            <div className="top">
                                <div className="line"></div>
                                <svg xmlns="http://www.w3.org/2000/svg" width="44" height="44" viewBox="0 0 44 44" fill="none">
                                    <path d="M4.84402 20.9212L4.84401 20.9212L4.84306 20.924C3.97266 23.4974 3.53369 25.9874 3.53369 28.3915V35.5374C3.53369 36.3658 4.20526 37.0374 5.03369 37.0374H14.2309C15.0593 37.0374 15.7309 36.3658 15.7309 35.5374L15.7309 28.3116L15.7308 28.3074C15.7054 25.2764 16.1886 22.5199 17.1727 20.0314C18.0778 17.7775 19.1728 15.6054 20.4579 13.5149C20.8813 12.8261 20.699 11.9128 20.0145 11.4567L14.9228 8.06382L14.9228 8.06382C14.3741 7.69814 13.6366 7.72756 13.1287 8.17732C11.4242 9.68636 9.87445 11.4881 8.4778 13.579L8.47711 13.58C6.95041 15.878 5.73918 18.3253 4.84402 20.9212ZM24.5557 20.9212L24.5547 20.924C23.6843 23.4974 23.2454 25.9874 23.2454 28.3915V35.5374C23.2454 36.3658 23.917 37.0374 24.7454 37.0374H33.9425C34.771 37.0374 35.4425 36.3658 35.4425 35.5374L35.4426 28.3116L35.4425 28.3074C35.4171 25.2765 35.9003 22.5201 36.8843 20.0317C37.7894 17.7777 38.8844 15.6055 40.1696 13.5149C40.593 12.8261 40.4107 11.9128 39.7261 11.4567L34.6345 8.06382L34.6345 8.06382C34.0858 7.69814 33.3483 7.72756 32.8403 8.17732L33.1718 8.55167L32.8403 8.17732C31.1359 9.68636 29.5861 11.4881 28.1895 13.579L28.1888 13.58C26.6621 15.878 25.4509 18.3253 24.5557 20.9212Z" fill="url(#paint0_linear_108_2662)" stroke="#CAFF33" />
                                    <defs>
                                        <linearGradient id="paint0_linear_108_2662" x1="22.1513" y1="8.06677" x2="22.1513" y2="36.5374" gradientUnits="userSpaceOnUse">
                                            <stop stop-color="#CAFF33" />
                                            <stop offset="1" stop-color="#191919" />
                                        </linearGradient>
                                    </defs>
                                </svg>
                                <div className="line"></div>
                            </div>
                            <p>I love the convenience of YourBank's mobile banking app. It allows me to stay on top of my finances and make transactions on the go. The app is user-friendly and secure, giving me peace of mind.</p>
                            <div className="name">
                                <p>Emily G</p>
                            </div>
                        </div>
                        <div className="element this">
                            <div className="top">
                                <div className="line"></div>
                                <svg xmlns="http://www.w3.org/2000/svg" width="44" height="44" viewBox="0 0 44 44" fill="none">
                                    <path d="M4.84402 20.9212L4.84401 20.9212L4.84306 20.924C3.97266 23.4974 3.53369 25.9874 3.53369 28.3915V35.5374C3.53369 36.3658 4.20526 37.0374 5.03369 37.0374H14.2309C15.0593 37.0374 15.7309 36.3658 15.7309 35.5374L15.7309 28.3116L15.7308 28.3074C15.7054 25.2764 16.1886 22.5199 17.1727 20.0314C18.0778 17.7775 19.1728 15.6054 20.4579 13.5149C20.8813 12.8261 20.699 11.9128 20.0145 11.4567L14.9228 8.06382L14.9228 8.06382C14.3741 7.69814 13.6366 7.72756 13.1287 8.17732C11.4242 9.68636 9.87445 11.4881 8.4778 13.579L8.47711 13.58C6.95041 15.878 5.73918 18.3253 4.84402 20.9212ZM24.5557 20.9212L24.5547 20.924C23.6843 23.4974 23.2454 25.9874 23.2454 28.3915V35.5374C23.2454 36.3658 23.917 37.0374 24.7454 37.0374H33.9425C34.771 37.0374 35.4425 36.3658 35.4425 35.5374L35.4426 28.3116L35.4425 28.3074C35.4171 25.2765 35.9003 22.5201 36.8843 20.0317C37.7894 17.7777 38.8844 15.6055 40.1696 13.5149C40.593 12.8261 40.4107 11.9128 39.7261 11.4567L34.6345 8.06382L34.6345 8.06382C34.0858 7.69814 33.3483 7.72756 32.8403 8.17732L33.1718 8.55167L32.8403 8.17732C31.1359 9.68636 29.5861 11.4881 28.1895 13.579L28.1888 13.58C26.6621 15.878 25.4509 18.3253 24.5557 20.9212Z" fill="url(#paint0_linear_108_2662)" stroke="#CAFF33" />
                                    <defs>
                                        <linearGradient id="paint0_linear_108_2662" x1="22.1513" y1="8.06677" x2="22.1513" y2="36.5374" gradientUnits="userSpaceOnUse">
                                            <stop stop-color="#CAFF33" />
                                            <stop offset="1" stop-color="#191919" />
                                        </linearGradient>
                                    </defs>
                                </svg>
                                <div className="line"></div>
                            </div>
                            <p>YourBank has been my trusted financial partner for years. Their personalized service and innovative digital banking solutions have made managing my finances a breeze.</p>
                            <div className="name">
                                <p>Sara T</p>
                            </div>
                        </div>
                        <div className="element">
                            <div className="top">
                                <div className="line"></div>
                                <svg xmlns="http://www.w3.org/2000/svg" width="44" height="44" viewBox="0 0 44 44" fill="none">
                                    <path d="M4.84402 20.9212L4.84401 20.9212L4.84306 20.924C3.97266 23.4974 3.53369 25.9874 3.53369 28.3915V35.5374C3.53369 36.3658 4.20526 37.0374 5.03369 37.0374H14.2309C15.0593 37.0374 15.7309 36.3658 15.7309 35.5374L15.7309 28.3116L15.7308 28.3074C15.7054 25.2764 16.1886 22.5199 17.1727 20.0314C18.0778 17.7775 19.1728 15.6054 20.4579 13.5149C20.8813 12.8261 20.699 11.9128 20.0145 11.4567L14.9228 8.06382L14.9228 8.06382C14.3741 7.69814 13.6366 7.72756 13.1287 8.17732C11.4242 9.68636 9.87445 11.4881 8.4778 13.579L8.47711 13.58C6.95041 15.878 5.73918 18.3253 4.84402 20.9212ZM24.5557 20.9212L24.5547 20.924C23.6843 23.4974 23.2454 25.9874 23.2454 28.3915V35.5374C23.2454 36.3658 23.917 37.0374 24.7454 37.0374H33.9425C34.771 37.0374 35.4425 36.3658 35.4425 35.5374L35.4426 28.3116L35.4425 28.3074C35.4171 25.2765 35.9003 22.5201 36.8843 20.0317C37.7894 17.7777 38.8844 15.6055 40.1696 13.5149C40.593 12.8261 40.4107 11.9128 39.7261 11.4567L34.6345 8.06382L34.6345 8.06382C34.0858 7.69814 33.3483 7.72756 32.8403 8.17732L33.1718 8.55167L32.8403 8.17732C31.1359 9.68636 29.5861 11.4881 28.1895 13.579L28.1888 13.58C26.6621 15.878 25.4509 18.3253 24.5557 20.9212Z" fill="url(#paint0_linear_108_2662)" stroke="#CAFF33" />
                                    <defs>
                                        <linearGradient id="paint0_linear_108_2662" x1="22.1513" y1="8.06677" x2="22.1513" y2="36.5374" gradientUnits="userSpaceOnUse">
                                            <stop stop-color="#CAFF33" />
                                            <stop offset="1" stop-color="#191919" />
                                        </linearGradient>
                                    </defs>
                                </svg>
                                <div className="line"></div>
                            </div>
                            <p>YourBank has been my trusted financial partner for years. Their personalized service and innovative digital banking solutions have made managing my finances a breeze.</p>
                            <div className="name">
                                <p>Sara T</p>
                            </div>
                        </div>
                        <div className="element this">
                            <div className="top">
                                <div className="line"></div>
                                <svg xmlns="http://www.w3.org/2000/svg" width="44" height="44" viewBox="0 0 44 44" fill="none">
                                    <path d="M4.84402 20.9212L4.84401 20.9212L4.84306 20.924C3.97266 23.4974 3.53369 25.9874 3.53369 28.3915V35.5374C3.53369 36.3658 4.20526 37.0374 5.03369 37.0374H14.2309C15.0593 37.0374 15.7309 36.3658 15.7309 35.5374L15.7309 28.3116L15.7308 28.3074C15.7054 25.2764 16.1886 22.5199 17.1727 20.0314C18.0778 17.7775 19.1728 15.6054 20.4579 13.5149C20.8813 12.8261 20.699 11.9128 20.0145 11.4567L14.9228 8.06382L14.9228 8.06382C14.3741 7.69814 13.6366 7.72756 13.1287 8.17732C11.4242 9.68636 9.87445 11.4881 8.4778 13.579L8.47711 13.58C6.95041 15.878 5.73918 18.3253 4.84402 20.9212ZM24.5557 20.9212L24.5547 20.924C23.6843 23.4974 23.2454 25.9874 23.2454 28.3915V35.5374C23.2454 36.3658 23.917 37.0374 24.7454 37.0374H33.9425C34.771 37.0374 35.4425 36.3658 35.4425 35.5374L35.4426 28.3116L35.4425 28.3074C35.4171 25.2765 35.9003 22.5201 36.8843 20.0317C37.7894 17.7777 38.8844 15.6055 40.1696 13.5149C40.593 12.8261 40.4107 11.9128 39.7261 11.4567L34.6345 8.06382L34.6345 8.06382C34.0858 7.69814 33.3483 7.72756 32.8403 8.17732L33.1718 8.55167L32.8403 8.17732C31.1359 9.68636 29.5861 11.4881 28.1895 13.579L28.1888 13.58C26.6621 15.878 25.4509 18.3253 24.5557 20.9212Z" fill="url(#paint0_linear_108_2662)" stroke="#CAFF33" />
                                    <defs>
                                        <linearGradient id="paint0_linear_108_2662" x1="22.1513" y1="8.06677" x2="22.1513" y2="36.5374" gradientUnits="userSpaceOnUse">
                                            <stop stop-color="#CAFF33" />
                                            <stop offset="1" stop-color="#191919" />
                                        </linearGradient>
                                    </defs>
                                </svg>
                                <div className="line"></div>
                            </div>
                            <p>YourBank has been my trusted financial partner for years. Their personalized service and innovative digital banking solutions have made managing my finances a breeze.</p>
                            <div className="name">
                                <p>Sara T</p>
                            </div>
                        </div>
                    </div>
                    <div className="left"></div>
                    <div className="right"></div>
                </div>
                {/* <div className="leftS"></div>
                        <div className="rightS"></div> */}
                <div className="buttons">
                    <button onClick={goToPrev} className='arrow arrowleft2'>
                        <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 28 28" fill="none">
                            <path d="M21.5833 14H7M7 14L14 7M7 14L14 21" stroke="#CAFF33" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                        </svg>
                    </button>
                    <button onClick={goToNext} className='arrow'>
                        <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 28 28" fill="none">
                            <path d="M6.99968 14H21.583M21.583 14L14.583 7M21.583 14L14.583 21" stroke="#CAFF33" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                        </svg>
                    </button>
                </div>
            </div>
        </div>
    )
}

export default Testimonials