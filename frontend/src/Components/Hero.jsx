import {React} from 'react';
import '../style/Hero.css'
import hand_icon from '../Assets/Frontend_Assets/hand_icon.png'
import arrow_icon from '../Assets/Admin_Assets/arrow_icon.svg'
import hero_image from '../Assets/Frontend_Assets/hero_image.png'

export const Hero = () => {
  return (
    <div className='hero'>
        <div className="hero-left">
            <h2>New Arrivals Only</h2>
            <div>
                <div className="hero-hand-icon">
                    <p>New</p>
                    <img src={hand_icon} alt=''/>
                </div>
                <p>Collections</p>
                <p>For Everyone</p>
            </div>
            <div className="hero-latest-btn">
                <div>Latest Collection</div>
            </div>

        </div>
        <div className="hero-right">
            <img src={hero_image} alt="" />
        </div>
    </div>
  )
}
