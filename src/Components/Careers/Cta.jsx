import React from 'react'
import img from '../../assets/Abstract Design (1).png'

function Cta() {
    return (
        <div className='Cta'>
            <img src={img} alt="" />
            <div className="text">
                <h1>Start your career with <span>YourBank today!</span></h1>
                <p>Lorem ipsum dolor sit amet consectetur. Blandit odio semper risus pellentesque elit. Pellentesque eget ut imperdiet nulla penatibus. Nascetur viverra arcu sed amet cursus purus.</p>
            </div>
            <button>Open Account</button>
        </div>
    )
}

export default Cta