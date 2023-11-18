import React, { useState } from 'react'

function Products() {
    const [category, setCategory] = useState(1)
    return (
        <div className='Products'>
            <div className="top">
                <div className="text">
                    <h1 className="header">Our <span>Products</span></h1>
                    <p>Discover a range of comprehensive and customizable banking products at YourBank, designed to suit your unique financial needs and aspirations</p>
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
            <div className="bottom">
                <div className="item">
                    <div className="round">
                        <div className="round2">
                            <svg xmlns="http://www.w3.org/2000/svg" width="27" height="22" viewBox="0 0 27 22" fill="none">
                                <path d="M11.9196 14.4435C11.1334 14.4435 10.6729 14.001 10.6729 13.2068V12.2877C7.37098 12.0608 4.08027 11.3801 0.666016 10.0752V8.20319C4.86645 10.0639 9.07811 10.722 13.6604 10.722C18.254 10.722 22.4656 10.0639 26.666 8.20319V10.0752C23.2518 11.3801 19.961 12.0608 16.6591 12.2877V13.2068C16.6591 14.001 16.1986 14.4435 15.4124 14.4435H11.9196ZM4.13642 21.9886H23.1956C25.5205 21.9886 26.666 20.854 26.666 18.5281V7.48839C26.666 5.16244 25.5205 4.02785 23.1956 4.02785H4.13642C1.82282 4.02785 0.666016 5.16244 0.666016 7.48839V18.5281C0.666016 20.854 1.82282 21.9886 4.13642 21.9886ZM7.96624 5.01495H9.70705V3.0067C9.70705 2.1444 10.2125 1.65652 11.0885 1.65652H16.2436C17.1196 1.65652 17.6138 2.1444 17.6138 3.0067V4.99225H19.3546V3.13151C19.3546 0.998451 18.2427 0 16.2099 0H11.1109C9.19042 0 7.96624 0.998451 7.96624 3.13151V5.01495Z" fill="#CAFF33" />
                            </svg>
                        </div>
                    </div>
                    <h3 className="heading">Checking Accounts</h3>
                    <p>Enjoy easy and convenient access to your funds with our range of checking account options. Benefit from features such as online and mobile banking, debit cards, and free ATM access.</p>
                </div>
                <div className="line"></div>
                <div className="item">
                    <div className="round">
                        <div className="round2">
                            <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 28 28" fill="none">
                                <path d="M3.9375 3.5C2.72938 3.5 1.75 4.47938 1.75 5.6875V6.5625C1.75 7.77062 2.72938 8.75 3.9375 8.75H24.0625C25.2706 8.75 26.25 7.77062 26.25 6.5625V5.6875C26.25 4.47938 25.2706 3.5 24.0625 3.5H3.9375Z" fill="#CAFF33" />
                                <path fill-rule="evenodd" clip-rule="evenodd" d="M3.60126 10.5L4.23099 21.2055C4.33982 23.0555 5.87179 24.5 7.72495 24.5H20.2747C22.1279 24.5 23.6598 23.0555 23.7687 21.2055L24.3984 10.5H3.60126ZM14 12.25C14.4832 12.25 14.875 12.6418 14.875 13.125V18.8876L16.8813 16.8813C17.223 16.5396 17.777 16.5396 18.1187 16.8813C18.4604 17.223 18.4604 17.777 18.1187 18.1187L14.6187 21.6187C14.277 21.9604 13.723 21.9604 13.3813 21.6187L9.88128 18.1187C9.53957 17.777 9.53957 17.223 9.88128 16.8813C10.223 16.5396 10.777 16.5396 11.1187 16.8813L13.125 18.8876V13.125C13.125 12.6418 13.5168 12.25 14 12.25Z" fill="#CAFF33" />
                            </svg>
                        </div>
                    </div>
                    <h3 className="heading">Savings Accounts</h3>
                    <p>Build your savings with our competitive interest rates and flexible savings account options. Whether you're saving for a specific goal or want to grow your wealth over time, we have the right account for you.</p>
                </div>
                <div className="line"></div>
                <div className="item">
                    <div className="round">
                        <div className="round2">
                            <svg xmlns="http://www.w3.org/2000/svg" width="29" height="28" viewBox="0 0 29 28" fill="none">
                                <path d="M14.333 8.75C12.8833 8.75 11.708 9.92525 11.708 11.375C11.708 12.8247 12.8833 14 14.333 14C15.7828 14 16.958 12.8247 16.958 11.375C16.958 9.92525 15.7828 8.75 14.333 8.75Z" fill="#CAFF33" />
                                <path fill-rule="evenodd" clip-rule="evenodd" d="M2.08301 5.6875C2.08301 4.47938 3.06238 3.5 4.27051 3.5H24.3955C25.6036 3.5 26.583 4.47938 26.583 5.6875V17.0625C26.583 18.2706 25.6036 19.25 24.3955 19.25H4.27051C3.06238 19.25 2.08301 18.2706 2.08301 17.0625V5.6875ZM9.95801 11.375C9.95801 8.95875 11.9168 7 14.333 7C16.7493 7 18.708 8.95875 18.708 11.375C18.708 13.7912 16.7493 15.75 14.333 15.75C11.9168 15.75 9.95801 13.7912 9.95801 11.375ZM22.208 10.5C21.7248 10.5 21.333 10.8918 21.333 11.375V11.3837C21.333 11.867 21.7248 12.2587 22.208 12.2587H22.2168C22.7 12.2587 23.0918 11.867 23.0918 11.3837V11.375C23.0918 10.8918 22.7 10.5 22.2168 10.5H22.208ZM5.58301 11.375C5.58301 10.8918 5.97476 10.5 6.45801 10.5H6.46676C6.95001 10.5 7.34176 10.8918 7.34176 11.375V11.3837C7.34176 11.867 6.95001 12.2587 6.46676 12.2587H6.45801C5.97476 12.2587 5.58301 11.867 5.58301 11.3837V11.375Z" fill="#CAFF33" />
                                <path d="M2.95801 21C2.47476 21 2.08301 21.3918 2.08301 21.875C2.08301 22.3582 2.47476 22.75 2.95801 22.75C9.25806 22.75 15.3599 23.5926 21.1577 25.1707C22.5468 25.5488 23.958 24.5196 23.958 23.0476V21.875C23.958 21.3918 23.5663 21 23.083 21H2.95801Z" fill="#CAFF33" />
                            </svg>
                        </div>
                    </div>
                    <h3 className="heading">Loans and Mortgages</h3>
                    <p>Realize your dreams with our flexible loan and mortgage options. From personal loans to home mortgages, our experienced loan officers are here to guide you through the application process and help you secure the funds you need.</p>
                </div>
            </div>
        </div>
    )
}

export default Products