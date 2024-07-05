import React from 'react'
import '../style/NewsLetter.css'

const NewsLetter = () => {
  return (
    <div className="newsletter">
        <h1>Get Exclusive Offers On Your Email</h1>
        <p>Subscribe to our newsletter and stay updated</p>
        <div>
            <input type="email" placeholder='Your Email'/>
            
        </div>

    </div>
  )
}

export default NewsLetter