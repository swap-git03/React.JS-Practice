import React from 'react'
import image1 from '../assets/img1.jpeg'
import image2 from '../assets/img2.jpeg'
import image3 from '../assets/img3.jpeg'





function Hero() {
  return (
    <div>
      <div className="hero">
        <img src={image1} alt="" width="300px"/>
        <img src={image2} alt="" width="300px"/>
        <img src={image3} alt="" width="300px"/>
      </div>
    </div>
  )
}

export default Hero
