import React from 'react'

function Questions() {
    return (
        <div className='Questions'>
            <div className="heading">
                <h1><span>Frequently</span> Asked Questions</h1>
                <p>Still you have any questions? Contact our Team via support@yourbank.com</p>
            </div>
            <div className="bottom">
                <div className="grid">
                    <div className="element">
                        <h4>How do I open an account with YourBank?</h4>
                        <div className="line"></div>
                        <p>Opening an account with YourBank is easy. Simply visit our website and click on the "Open an Account" button. Follow the prompts, provide the required information, and complete the application process. If you have any questions or need assistance, our customer support team is available to help.</p>
                    </div>
                    <div className="element">
                        <h4>What documents do I need to provide to apply for a loan?</h4>
                        <div className="line"></div>
                        <p>The documents required for a loan application may vary depending on the type of loan you are applying for. Generally, you will need to provide identification documents (such as a passport or driver's license), proof of income (such as pay stubs or tax returns), and information about the collateral (if applicable). Our loan officers will guide you through the specific requirements during the application process.</p>
                    </div>
                    <div className="element">
                        <h4>How can I access my accounts online?</h4>
                        <div className="line"></div>
                        <p>Accessing your accounts online is simple and secure. Visit our website and click on the "Login" button. Enter your username and password to access your accounts. If you haven't registered for online banking, click on the "Enroll Now" button and follow the registration process. If you need assistance, our customer support team is available to guide you.</p>
                    </div>
                    <div className="element">
                        <h4>Are my transactions and personal information secure?</h4>
                        <div className="line"></div>
                        <p>At YourBank, we prioritize the security of your transactions and personal information. We employ industry-leading encryption and multi-factor authentication to ensure that your data is protected. Additionally, we regularly update our security measures to stay ahead of emerging threats. You can bank with confidence knowing that we have robust security systems in place.</p>
                    </div>
                <div className="linear"></div>
                </div>
                <button>Load All FAQ’s
                    <span>
                        <svg xmlns="http://www.w3.org/2000/svg" width="18" height="19" viewBox="0 0 18 19" fill="none">
                            <path d="M13.5 7.25L9 11.75L4.5 7.25" stroke="white" stroke-width="1.5" />
                        </svg>
                    </span>
                </button>
            </div>
        </div>
    )
}

export default Questions