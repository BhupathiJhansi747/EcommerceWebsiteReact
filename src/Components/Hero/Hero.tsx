import React from 'react'
import './Hero.css'
// import hand_icon from '../Assets/hand_icon.png';
// import arrow_icom from '../Assets/arrow.jpg';
// import hero_image from '../Assets/Hero_logo.avif';
import hand_icon from '../Assets/hand_icon.png';
import arrow_icon from '../Assets/arrow.png';
import hero_image from '../Assets/hero_image.png'

const Hero = () => {
    return (
        <div className='hero'>
            <div className='hero-left'>
                <h2>NEW ARRIVALS ONLY</h2>
                <div className='hero-hand-icon'>
                    <p>new</p>
                    <img src={hand_icon} alt="" />
                </div>
                <p>collections</p>
                <p>for everyone</p>
                <div className='hero-latest-btn'>

                    <div>Latest collection</div>
                    <img src={arrow_icon} alt="" />
                </div>

            </div>

            <div className='hero-right'>
                {/* <div>Latest collection</div> */}
                <img src={hero_image} alt="" />
            </div>
        </div>
    )
}

export default Hero