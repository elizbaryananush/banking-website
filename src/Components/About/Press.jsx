import React from 'react'
import img1 from '../../assets/about1.png'
import img2 from '../../assets/about2.png'
import img3 from '../../assets/about3.png'
import img4 from '../../assets/about4.png'

function Press() {
    return (
        <div className='Press'>
            <div className="heading">
                <h1>Press Releases</h1>
                <p>Stay updated with the latest happenings and exciting developments at YourBank through our press releases.</p>
            </div>
            <div className="bottom">
                <div className="item">
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
                <div className="item">
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
                <div className="item">
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
                <div className="item">
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